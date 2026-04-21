import React from "react";

function PredictButton({ handleSubmit }) {
  return (
    <button onClick={handleSubmit}>
      Predict
    </button>
  );
}

export default PredictButton;