// App.js

import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const [results, setResults] = useState({
    lr: "",
    rf: "",
    xgb: "",
    lstm: "",
  });

  const models = {
    lr: "Logistic Regression",
    rf: "Random Forest",
    xgb: "XGBoost",
    lstm: "Long Short Term Memory",
  };

  /* CLICK CARD → GET RESULT FROM API */
  const handleModelClick = async (model) => {
    if (!text.trim()) return;
  
    // show loading first
    setResults((prev) => ({
      ...prev,
      [model]: "Checking..."
    }));
  
    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          text: text,
          model: model
        })
      });
  
      const data = await response.json();
  
      setResults((prev) => ({
        ...prev,
        [model]: data.prediction
      }));
  
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="outer">
      <div className="main-box">

        <h1 className="title">FAKE NEWS CLASSIFIER</h1>
        <p className="tagline">Detect fake news using ML models</p>

        <textarea
          className="input-box"
          placeholder="Enter news..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

{/* CARD CLICK ONLY */}

<div className="models-row">
  {Object.keys(models).map((key) => (
    <div
      className="model-card"
      key={key}
      onClick={() => handleModelClick(key)}   // click only
    >
      <div className="model-inner">

        {/* LEFT SIDE MODEL NAME */}
        <div className="inside-left">
          {models[key]}
        </div>

        {/* RIGHT SIDE RESULT */}
        <div className="inside-right">
          {results[key] || "Click to Predict"}
        </div>

        {/* FRONT DOOR */}
        <div className="door">
          {models[key]}
        </div>

      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default App;