import React from "react";

function TextInput({ text, setText }) {
  return (
    <textarea
      rows="5"
      cols="50"
      placeholder="Enter news text..."
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default TextInput;