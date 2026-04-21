import React from "react";

function ModelSelect({ model, setModel }) {
  return (
    <select value={model} onChange={(e) => setModel(e.target.value)}>
      <option value="lr">Logistic Regression</option>
      <option value="rf">Random Forest</option>
      <option value="xgb">XGBoost</option>
      <option value="lstm">LSTM</option>
    </select>
  );
}

export default ModelSelect;