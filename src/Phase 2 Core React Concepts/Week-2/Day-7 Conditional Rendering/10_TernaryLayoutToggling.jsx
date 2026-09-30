import React, { useState } from "react";

function AuthButton({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <button>Log Out</button> : <button>Log In</button>}</div>
  );
}

const TernaryLayoutToggling = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h3>Method 1: Ternary Operator (`? :`)</h3>
      <p>Status: {isLoggedIn ? "Logged In" : "Logged Out"}</p>

      <AuthButton isLoggedIn={isLoggedIn} />

      <br />
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login State
      </button>
    </div>
  );
};

export default TernaryLayoutToggling;
