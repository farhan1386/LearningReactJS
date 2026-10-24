import React from "react";

export default function ProgressPanel({ progressPercentage, onReset }) {
  const isComplete = progressPercentage === 100;
  
  return (
    <div className="right-progress-panel">
      <div className="progress-sticky-card">
        <h3>Module Progress</h3>

        <div className="progress-bar-track">
          <div
            className="progress-bar-fill"
            style={{
              width: `${progressPercentage}%`,
              backgroundColor: isComplete ? "#10b981" : "#007bff",
            }}
          ></div>
        </div>
        
        <div className="progress-meta-text">
          {progressPercentage}% Complete
        </div>

        <p className="helper-info-text">
          Items mark complete automatically when opened and reviewed.
          Progress saves to local storage window history.
        </p>

        <button 
          className="reset-progress-btn" 
          onClick={onReset}
          type="button"
        >
          Reset Module Progress
        </button>
      </div>
    </div>
  );
}
