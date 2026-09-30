import React from "react";
import "./CSSStylesheet.css";

const CSSStylesheet = () => {
  const isPremiumUser = true;
  const hasError = false;

  return (
    <>
      <div className="card-wrapper">
        <h2 className="card-title">External CSS Stylesheet</h2>
        <p className="card-description">
          This component is styled using an external file imported at the top.
        </p>
        <button className="btn btn-primary">Standard Button</button>
        <div
          className={`status-box ${hasError ? "alert-danger" : "alert-success"}`}
        >
          Status Check: {hasError ? "Action Required" : "System Clear"}
        </div>
        <div className={`user-badge ${isPremiumUser ? "gold-tier" : ""}`}>
          {isPremiumUser ? "Premium Member" : "Standard Member"}
        </div>
      </div>
    </>
  );
};

export default CSSStylesheet;
