import React from 'react';

// Clear object key assignment instead of using ambiguous arguments patterns
const EmployeeBadge = ({ employeeName, roleAssignment, departmentCode }) => {
  return (
    <div style={{ borderLeft: '4px solid #8e44ad', padding: '10px', margin: '8px 0', background: '#f9f6fc' }}>
      <h4>ID Card: {employeeName}</h4>
      <p>Assignment: {roleAssignment}</p>
      <small style={{ color: '#7f8c8d' }}>Dept Unit: {departmentCode}</small>
    </div>
  );
};

export default EmployeeBadge;