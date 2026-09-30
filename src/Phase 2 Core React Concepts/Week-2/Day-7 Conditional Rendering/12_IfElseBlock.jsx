import React, { useState } from "react";

const IfElseBlock = () => {
  const [status, setStatus] = useState("loading");

  if (status === "loading") {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
        <h3>Method 3: If / Else Block</h3>
        <p>Loading data streams...</p>
        <button onClick={() => setStatus("success")}>Simulate Success</button>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div style={{ padding: "20px", fontFamily: "sans-serif", color: "red" }}>
        <h3>Method 3: If / Else Block</h3>
        <p>Network connection failure.</p>
        <button onClick={() => setStatus("loading")}>Retry Connection</button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", color: "green" }}>
      <h3>Method 3: If / Else Block</h3>
      <p>App Data synchronised flawlessly!</p>
      <button onClick={() => setStatus("error")}>Trigger Error</button>
    </div>
  );
};

export default IfElseBlock;
