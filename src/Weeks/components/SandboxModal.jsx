import { useState } from "react";

export default function SandboxModal({ activePopupData, onClose, onCopy, copySuccess }) {
  const [consoleLogs, setConsoleLogs] = useState([]);

  const runCodeSandbox = (codeString) => {
    const interceptedLogs = [];
    const originalLog = console.log;
    const originalError = console.error;

    console.log = (...args) => {
      interceptedLogs.push(
        args.map((arg) => (typeof arg === "object" ? JSON.stringify(arg) : String(arg))).join(" ")
      );
    };
    console.error = (...args) => {
      interceptedLogs.push(`❌ Error: ${args.join(" ")}`);
    };

    try {
      const cleanCode = codeString.replace(/console\.log\(`([^`]+)`\);/g, (match, p1) => {
        return `console.log(\`${p1.replace(/\\/g, "")}\`);`;
      });
      new Function(cleanCode)();
    } catch (err) {
      interceptedLogs.push(`⚠️ Runtime Exception: ${err.message}`);
    }

    console.log = originalLog;
    console.error = originalError;
    setConsoleLogs(
      interceptedLogs.length > 0
        ? interceptedLogs
        : ["// Script executed successfully with no active console prints."]
    );
  };

  return (
    <div className="modal-center-overlay" onClick={onClose}>
      <div className="modal-center-window" onClick={(e) => e.stopPropagation()}>
        <div className="modal-center-header">
          <div className="modal-title-left-group">
            <h2>{activePopupData.title}</h2>
            {activePopupData.isCode && <span className="modal-lang-badge">JS</span>}
          </div>
          <div className="modal-action-right-group">
            {activePopupData.isCode && (
              <>
                <button className="modal-run-code-btn" onClick={() => runCodeSandbox(activePopupData.content)}>
                  ▶ Run Code
                </button>
                <button className="modal-copy-header-btn" onClick={() => onCopy(activePopupData.content)}>
                  {copySuccess ? "Copied!" : "Copy Code"}
                </button>
              </>
            )}
            <button className="modal-center-close-x" onClick={onClose}>×</button>
          </div>
        </div>

        <div className="modal-center-body">
          {activePopupData.isCode ? (
            <div className="sandbox-panel-split-layout">
              <pre className="modal-code-block">
                <code>{activePopupData.content}</code>
              </pre>
              <div className="sandbox-terminal-output-container">
                <div className="terminal-bar-header">
                  <span>Console Output Terminal</span>
                  {consoleLogs.length > 0 && (
                    <button className="terminal-clear-btn" onClick={() => setConsoleLogs([])}>
                      Clear Console
                    </button>
                  )}
                </div>
                <div className="terminal-logs-screen">
                  {consoleLogs.length === 0 ? (
                    <span className="terminal-placeholder">
                      // Click "Run Code" button to test local script variables output logs...
                    </span>
                  ) : (
                    consoleLogs.map((log, idx) => {
                      const isError = log.startsWith("❌") || log.startsWith("⚠️");
                      return (
                        <div key={idx} className={`terminal-log-row ${isError ? "error-log" : ""}`}>
                          <span className="terminal-timestamp">
                            [{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}]
                          </span>
                          <span className="terminal-log-text">{log}</span>
                        </div>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="modal-primary-text" dangerouslySetInnerHTML={{ __html: activePopupData.content }} />
          )}
        </div>

        <div className="modal-center-footer">
          <button className="modal-close-action-btn" onClick={onClose}>
            Close & Mark Complete
          </button>
        </div>
      </div>
    </div>
  );
}
