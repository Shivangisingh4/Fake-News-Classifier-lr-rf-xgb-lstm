function ResultDisplay({ result }) {
    if (!result) return null;
  
    const isReal = typeof result === "string" && result.includes("Real");
  
    return (
      <h3
        className="result"
        style={{ color: isReal ? "green" : "red" }}
      >
        {result}
      </h3>
    );
  }
  
  export default ResultDisplay;