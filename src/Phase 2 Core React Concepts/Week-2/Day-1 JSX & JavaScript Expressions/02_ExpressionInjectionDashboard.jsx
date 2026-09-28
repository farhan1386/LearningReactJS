export default function ExpressionEmbedding() {
  const accountHandle = "alpha_architect";
  const serverCredits = 730;

  return (
    <div className="telemetry-panel">
      <h3>Node: {accountHandle.toUpperCase()}</h3>
      <p>Remaining Allocation: {serverCredits} Core-Hours</p>

      {/* Executing logic operations inline within the visual layout */}
      <p>
        Status: {serverCredits < 200 ? " Critical Low" : "Operational"}
      </p>
    </div>
  );
}
