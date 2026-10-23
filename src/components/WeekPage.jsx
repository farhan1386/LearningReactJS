import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import curriculumData from "../data/curriculum.json";

const codeModules = import.meta.glob(
  "/src/Phase 1 JavaScript Prerequisites/**/*.js",
  {
    query: "?raw",
    import: "default",
  },
);

export default function WeekPage() {
  const { weekId, dayId } = useParams();
  const navigate = useNavigate();

  const week = curriculumData?.weeks?.find((w) => w.id === weekId);

  const [expandedDays, setExpandedDays] = useState({});
  const [activePopupData, setActivePopupData] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState([]);
  const [completedItems, setCompletedItems] = useState(() => {
    const saved = localStorage.getItem(`progress_${weekId}`);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    if (dayId) {
      const activeDayNum = dayId.replace("day-", "Day ");
      setExpandedDays((prev) => ({ ...prev, [activeDayNum]: true }));
    } else {
      setExpandedDays({ "Day 1": true });
    }
  }, [dayId]);

  useEffect(() => {
    if (weekId) {
      localStorage.setItem(
        `progress_${weekId}`,
        JSON.stringify(completedItems),
      );
    }
  }, [completedItems, weekId]);

  if (!week) {
    return (
      <div className="empty-state">
        <p>Module folder not found.</p>
        <button onClick={() => navigate("/")}>Return Home</button>
      </div>
    );
  }

  const allChecklistItems = week.days.flatMap((day) =>
    day.sections.flatMap((sec) =>
      sec.items.map((item) => ({ ...item, dayNum: day.dayNum })),
    ),
  );
  const totalItemsCount = allChecklistItems.length;
  const completedItemsCount = allChecklistItems.filter(
    (item) => completedItems[`${item.dayNum}_${item.label}`],
  ).length;
  const progressPercentage =
    totalItemsCount > 0
      ? Math.round((completedItemsCount / totalItemsCount) * 100)
      : 0;

  const toggleDayAccordion = (targetDayNum) => {
    const nextState = !expandedDays[targetDayNum];
    setExpandedDays((prev) => ({ ...prev, [targetDayNum]: nextState }));

    if (nextState) {
      const targetDayId = targetDayNum.toLowerCase().replace(" ", "-");
      navigate(`/js-prereq/${weekId}/${targetDayId}`);
    } else {
      navigate(`/js-prereq/${weekId}`);
    }
  };

  const handleLabelClick = async (e, item, isCodeSection) => {
    if (e.target.type === "checkbox") return;

    setCopySuccess(false);
    setConsoleLogs([]);
    const itemKey = `${item.dayNum}_${item.label}`;

    if (isCodeSection && item.path) {
      try {
        const resolverFunc = codeModules[item.path];
        if (!resolverFunc) throw new Error("Path not resolved");
        const fileContent = await resolverFunc();

        setActivePopupData({
          title: item.label,
          content: fileContent,
          isCode: true,
          itemKey: itemKey,
        });
      } catch (err) {
        setActivePopupData({
          title: item.label,
          content: `// Error: Could not load local script file.\n// Path: ${item.path}`,
          isCode: true,
          itemKey: itemKey,
        });
      }
    } else if (item.answer) {
      setActivePopupData({
        title: item.label,
        content: item.answer,
        isCode: false,
        itemKey: itemKey,
      });
    } else {
      setCompletedItems((prev) => ({ ...prev, [itemKey]: true }));
    }
  };

  const handleCloseModal = () => {
    if (activePopupData && activePopupData.itemKey) {
      setCompletedItems((prev) => ({
        ...prev,
        [activePopupData.itemKey]: true,
      }));
    }
    setActivePopupData(null);
  };

  const resetProgress = () => {
    setCompletedItems({});
  };

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const runCodeSandbox = (codeString) => {
    const interceptedLogs = [];
    const originalLog = console.log;
    const originalError = console.error;

    console.log = (...args) => {
      interceptedLogs.push(
        args
          .map((arg) =>
            typeof arg === "object" ? JSON.stringify(arg) : String(arg),
          )
          .join(" "),
      );
    };
    console.error = (...args) => {
      interceptedLogs.push(`❌ Error: ${args.join(" ")}`);
    };

    try {
      const cleanCode = codeString.replace(
        /console\.log\(`([^`]+)`\);/g,
        (match, p1) => {
          return `console.log(\`${p1.replace(/\\/g, "")}\`);`;
        },
      );

      const executeTemplate = new Function(cleanCode);
      executeTemplate();
    } catch (err) {
      interceptedLogs.push(`⚠️ Runtime Exception: ${err.message}`);
    }

    console.log = originalLog;
    console.error = originalError;
    setConsoleLogs(
      interceptedLogs.length > 0
        ? interceptedLogs
        : ["// Script executed successfully with no active console prints."],
    );
  };
  return (
    <main className="checklist-layout-container">
      <div className="checklist-top-nav">
        <button
          className="back-to-curriculum-btn"
          onClick={() => navigate("/")}
        >
          ← Back to Curriculum
        </button>
        <div className="module-banner-header">
          <div className="module-badge-tag">
            {week.badgeText || "Module 01"}
          </div>
          <h1 className="week-checklist-heading">{week.title} Checklist</h1>
        </div>
      </div>

      <div className="checklist-workspace-grid">
        <div className="left-tracking-panel">
          <div className="panel-bar-title">Progress Tracking Checklist</div>

          <div className="accordion-group">
            {week.days.map((day) => {
              const isExpanded = !!expandedDays[day.dayNum];
              const currentUrlDayNum = dayId
                ? dayId.replace("day-", "Day ")
                : "Day 1";
              const isActiveRoute = currentUrlDayNum === day.dayNum;

              return (
                <div
                  key={day.dayNum}
                  className={`day-accordion-card ${isActiveRoute ? "active-day-card" : ""}`}
                >
                  <div
                    className="accordion-trigger-row"
                    onClick={() => toggleDayAccordion(day.dayNum)}
                  >
                    <div className="trigger-left-label">
                      <span className="day-badge-pill">{day.dayNum}</span>
                      <span className="day-title-text">{day.dayTitle}</span>
                    </div>
                    <span className="chevron-icon">
                      {isExpanded ? "▲" : "▼"}
                    </span>
                  </div>

                  {isExpanded && (
                    <div className="accordion-content-panel">
                      {day.sections.map((section) => {
                        const isCodeSection = section.title === "Coding";
                        return (
                          <div
                            key={section.title}
                            className="checklist-section-block"
                          >
                            <h4 className="section-label-header">
                              {section.icon} {section.title}
                            </h4>

                            <div className="checklist-items-stack">
                              {section.items.map((item) => {
                                const itemWithDay = {
                                  ...item,
                                  dayNum: day.dayNum,
                                };
                                const itemKey = `${day.dayNum}_${item.label}`;
                                const isChecked = !!completedItems[itemKey];
                                const canPopup = isCodeSection || !!item.answer;

                                return (
                                  <label
                                    key={item.label}
                                    className={`checklist-item-row ${isChecked ? "checked-label" : ""} ${canPopup ? "has-popup-link" : ""} ${isCodeSection ? "code-item-row" : ""}`}
                                    onClick={(e) =>
                                      handleLabelClick(
                                        e,
                                        itemWithDay,
                                        isCodeSection,
                                      )
                                    }
                                  >
                                    <input
                                      type="checkbox"
                                      checked={isChecked}
                                      disabled
                                      onChange={() => {}}
                                    />
                                    <span className="custom-check-text">
                                      {item.label}
                                    </span>
                                  </label>
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="right-progress-panel">
          <div className="progress-sticky-card">
            <h3>Module Progress</h3>

            <div className="progress-bar-track">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${progressPercentage}%`,
                  backgroundColor:
                    progressPercentage === 100 ? "#10b981" : "#007bff",
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

            <button className="reset-progress-btn" onClick={resetProgress}>
              Reset Module Progress
            </button>
          </div>
        </div>
      </div>

      {activePopupData && (
        <div className="modal-center-overlay" onClick={handleCloseModal}>
          <div
            className="modal-center-window"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-center-header">
              <div className="modal-title-left-group">
                <h2>{activePopupData.title}</h2>
                {activePopupData.isCode && (
                  <span className="modal-lang-badge">JS</span>
                )}
              </div>
              <div className="modal-action-right-group">
                {activePopupData.isCode && (
                  <>
                    <button
                      className="modal-run-code-btn"
                      onClick={() => runCodeSandbox(activePopupData.content)}
                    >
                      ▶ Run Code
                    </button>
                    <button
                      className="modal-copy-header-btn"
                      onClick={() => copyToClipboard(activePopupData.content)}
                    >
                      {copySuccess ? "Copied!" : "Copy Code"}
                    </button>
                  </>
                )}
                <button
                  className="modal-center-close-x"
                  onClick={handleCloseModal}
                >
                  ×
                </button>
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
                        <button
                          className="terminal-clear-btn"
                          onClick={() => setConsoleLogs([])}
                        >
                          Clear Console
                        </button>
                      )}
                    </div>
                    <div className="terminal-logs-screen">
                      {consoleLogs.length === 0 ? (
                        <span className="terminal-placeholder">
                          // Click "Run Code" button to test local script
                          variables output logs...
                        </span>
                      ) : (
                        consoleLogs.map((log, idx) => {
                          const isError =
                            log.startsWith("❌") || log.startsWith("⚠️");
                          return (
                            <div
                              key={idx}
                              className={`terminal-log-row ${isError ? "error-log" : ""}`}
                            >
                              <span className="terminal-timestamp">
                                [
                                {new Date().toLocaleTimeString([], {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                })}
                                ]
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
                <div
                  className="modal-primary-text"
                  dangerouslySetInnerHTML={{ __html: activePopupData.content }}
                />
              )}
            </div>

            <div className="modal-center-footer">
              <button
                className="modal-close-action-btn"
                onClick={handleCloseModal}
              >
                Close & Mark Complete
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
