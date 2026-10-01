import React from 'react';

const WorkflowStatus = ({ currentStep }) => {
  const renderStepContent = () => {
    switch (currentStep) {
      case 'processing':
        return <p>Compiling workspace configuration files...</p>;
      case 'complete':
        return <p> System core build pipeline succeeded.</p>;
      case 'failed':
        return <p> Build target terminated with error codes.</p>;
      default:
        return <p>System Idle Matrix</p>;
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px', border: '1px solid #ddd' }}>
      <h2>Build Progress Monitor</h2>
      {renderStepContent()}
    </div>
  );
};

export default WorkflowStatus;
