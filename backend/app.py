from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences


from fastapi import FastAPI
from pydantic import BaseModel
import joblib

from utils.preprocessing import clean_text

app = FastAPI()

# Load models
lr = joblib.load("models/lr.pkl")
rf = joblib.load("models/rf.pkl")
xgb = joblib.load("models/xgb.pkl")
vectorizer = joblib.load("models/vectorizer.pkl")

lstm_model = load_model("models/lstm_model.h5")
tokenizer = joblib.load("models/tokenizer.pkl")

print(type(xgb))


class NewsRequest(BaseModel):
    text: str
    model: str


@app.post("/predict")
def predict(news: NewsRequest):

    text = news.text
    model_name = news.model.lower().strip()

    print("INPUT:", text)
    print("MODEL:", model_name)

    # 👉 ML models
    if model_name in ["lr", "rf", "xgb"]:
        cleaned = clean_text(text)
        vector = vectorizer.transform([cleaned])

        if model_name == "lr":
            pred = lr.predict(vector)[0]
        elif model_name == "rf":
            pred = rf.predict(vector)[0]
        else:
            pred = xgb.predict(vector)[0]

        print("ML PRED:", pred)

        result = "Real" if pred == 1 else "Fake"

    # 👉 LSTM model
    elif model_name == "lstm":
        seq = tokenizer.texts_to_sequences([text])
        padded = pad_sequences(seq, maxlen=200, padding='pre')

        prob = lstm_model.predict(padded)[0][0]

        print("SEQ:", seq)
        print("PADDED:", padded)
        print("PROB:", prob)

        pred = 1 if prob >= 0.4 else 0
        result = "Real" if pred == 1 else "Fake"

    else:
        return {"error": f"Invalid model: {news.model}"}

   

    print("FINAL RESULT:", result)

    return {"prediction": result}

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)