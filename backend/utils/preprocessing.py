import re
import nltk
from nltk.corpus import stopwords

stop_words = set(stopwords.words('english'))

nltk.download('stopwords')
def clean_text(text):
    text = text.lower()  # convert to lowercase

    text = re.sub(r'[^a-zA-Z\s]', '', text)
    # remove punctuation & numbers

    words = text.split()

    words = [word for word in words if word not in stop_words]
    # remove stopwords

    return " ".join(words)