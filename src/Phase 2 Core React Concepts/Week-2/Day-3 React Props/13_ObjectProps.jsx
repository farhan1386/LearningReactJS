import React from 'react';

// Receives a single unified 'details' configuration object asset
const VehicleSpecs = ({ details }) => {
  return (
    <div style={{ padding: '12px', background: '#eef2f3', borderRadius: '4px' }}>
      <h3>Machine Specifications</h3>
      <p>Brand: {details.brand}</p>
      <p>Model Class: {details.modelClass}</p>
      <p>Production Year: {details.buildYear}</p>
    </div>
  );
};

export default VehicleSpecs;