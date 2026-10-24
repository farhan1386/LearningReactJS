import React from 'react';

const withLoadGuard = (WrappedComponent) => {
  const GuardedComponent = ({ isProcessing, ...restProps }) => {
    if (isProcessing) {
      return <p>Executing framework operations...</p>;
    }
    return <WrappedComponent {...restProps} />;
  };
  
  GuardedComponent.displayName = `WithLoadGuard(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;
  return GuardedComponent;
};

const MetricsDisplay = ({ metricData }) => <p>System Matrix Constant: <strong>{metricData}</strong></p>;
const GuardedMetricsDisplay = withLoadGuard(MetricsDisplay);

const HigherOrderComponentFallback = () => (
  <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
    <h2>HOC Layout Fallback Pipeline</h2>
    <GuardedMetricsDisplay isProcessing={true} metricData="TX-9901" />
  </div>
);

export default HigherOrderComponentFallback;