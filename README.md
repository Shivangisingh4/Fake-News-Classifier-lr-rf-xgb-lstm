# 📰 Fake News Detection System
A Machine Learning and Deep Learning based web application that classifies news articles as Real or Fake using multiple models including Logistic Regression, Random Forest, XGBoost, and LSTM.

🚀 Overview
This project aims to detect fake news using Natural Language Processing (NLP) techniques. It compares traditional machine learning models with a deep learning model to analyze performance differences.

# ✨ Features
- 🔍 Classifies news as Real or Fake

- 🤖 Multiple models supported:

1. Logistic Regression (LR)

2. Random Forest (RF)

3. XGBoost (XGB)

4. LSTM (Deep Learning)

- ⚡ FastAPI backend for real-time predictions

- 📊 Model comparison support

- 🧠 Handles both traditional ML and sequence-based DL approaches

# 🛠️ Tech Stack
- Backend: FastAPI

- Machine Learning: Scikit-learn, XGBoost

- Deep Learning: TensorFlow / Keras

- NLP: TF-IDF, Tokenization

- Other: Pandas, NumPy, NLTK, Joblib

# ⚙️ Installation & Setup
1️⃣ Clone Repository
```bash
git clone <[your-repo-link](https://github.com/Shivangisingh4/Fake-News-Classifier-lr-rf-xgb-lstm.git)>
cd fake-news-project
```
2️⃣ Create Virtual Environment
```bash
python -m venv venv
venv\Scripts\activate   # Windows
```
3️⃣ Install Dependencies
```bash
pip install -r requirements.txt
```
4️⃣ Run Backend Server
```bash
cd backend
uvicorn app:app --reload
```
5️⃣ Open API Docs
```bash
http://127.0.0.1:8000/docs
```
