const ExpressionJSX = () => {
  const accountHandle = "alpha_architect";
  const serverCredits = 730;
  return (
    <div className="telemetry-panel">
      <h3>Node: {accountHandle.toUpperCase()}</h3>
      <p>Remaining Allocation: {serverCredits} Core-Hours</p>
      <p>Status: {serverCredits < 200 ? " Critical Low" : "Operational"}</p>
    </div>
  );
};

export default ExpressionJSX;
