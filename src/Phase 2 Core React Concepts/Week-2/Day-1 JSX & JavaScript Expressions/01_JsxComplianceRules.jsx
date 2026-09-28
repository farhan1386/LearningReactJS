export default function JSXRules() {
  return (
    // Rule 1: Everything must match down into a singular parent Fragment (<></>)
    <>
      <div className="card-container">
        {/* Rule 2: Multi-word parameters use camelCase formatting instead of HTML */}
        <h2 className="main-title">JSX Structural Integrity</h2>

        {/* Rule 3: Single-line elements must explicitly terminate with a trailing slash */}
        <input type="text" placeholder="Enter system key..." />
        <br />
      </div>
    </>
  );
}