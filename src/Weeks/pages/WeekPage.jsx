import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import curriculumData from "../../data/curriculum.json";
import ProgressPanel from "../components/ProgressPanel";
import SandboxModal from "../components/SandboxModal";
import { useWeekProgress } from "../hooks/useWeekProgress";

const codeModules = import.meta.glob(
  "/src/Phase 1 JavaScript Prerequisites/**/*.js",
  {
    query: "?raw",
    import: "default",
  },
);

// Inner sub-component to handle independent scrollHeight DOM calculations per day panel
function AccordionItem({
  day,
  dayId,
  isExpanded,
  onToggle,
  completedItems,
  handleLabelClick,
}) {
  const panelRef = useRef(null);
  const isActiveRoute =
    (dayId ? dayId.replace("day-", "Day ") : "Day 1") === day.dayNum;

  return (
    <div
      className={`day-accordion-card ${isActiveRoute ? "active-day-card" : ""}`}
    >
      <div
        className="accordion-trigger-row"
        onClick={() => onToggle(day.dayNum)}
      >
        <div className="trigger-left-label">
          <span className="day-badge-pill">{day.dayNum}</span>
          <span className="day-title-text">{day.dayTitle}</span>
        </div>
        <span className="chevron-icon">{isExpanded ? "▲" : "▼"}</span>
      </div>

      <div
        ref={panelRef}
        className="accordion-content-panel-wrapper"
        style={{
          height: isExpanded
            ? `${panelRef.current?.scrollHeight || 0}px`
            : "0px",
          overflow: "hidden",
          transition: "height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="accordion-content-panel">
          {day.sections.map((section) => {
            const isCodeSection = section.title === "Coding";
            return (
              <div key={section.title} className="checklist-section-block">
                <h4 className="section-label-header">
                  {section.icon} {section.title}
                </h4>

                <div className="checklist-items-stack">
                  {section.items.map((item) => {
                    const itemWithDay = { ...item, dayNum: day.dayNum };
                    const itemKey = `${day.dayNum}_${item.label}`;
                    const isChecked = !!completedItems[itemKey];
                    const canPopup = isCodeSection || !!item.answer;

                    return (
                      <label
                        key={item.label}
                        className={`checklist-item-row ${isChecked ? "checked-label" : ""} ${canPopup ? "has-popup-link" : ""} ${isCodeSection ? "code-item-row" : ""}`}
                        onClick={(e) =>
                          handleLabelClick(e, itemWithDay, isCodeSection)
                        }
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          disabled
                          onChange={() => {}}
                        />
                        <span className="custom-check-text">{item.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function WeekPage() {
  const { weekId, dayId } = useParams();
  const navigate = useNavigate();

  const week = curriculumData?.weeks?.find((w) => w.id === weekId);

  const { completedItems, progressPercentage, markComplete, resetProgress } =
    useWeekProgress(weekId, week);

  const [expandedDays, setExpandedDays] = useState({});
  const [activePopupData, setActivePopupData] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    if (dayId) {
      const activeDayNum = dayId.replace("day-", "Day ");
      setExpandedDays((prev) => ({ ...prev, [activeDayNum]: true }));
    } else {
      setExpandedDays({ "Day 1": true });
    }
  }, [dayId]);

  if (!week) {
    return (
      <div className="empty-state">
        <p>Module folder not found.</p>
        <button onClick={() => navigate("/")}>Return Home</button>
      </div>
    );
  }

  const toggleDayAccordion = (targetDayNum) => {
    const nextState = !expandedDays[targetDayNum];
    setExpandedDays((prev) => ({ ...prev, [targetDayNum]: nextState }));

    const targetDayId = targetDayNum.toLowerCase().replace(" ", "-");
    if (nextState) {
      navigate(`/${weekId}/${targetDayId}`);
    } else {
      navigate(`/${weekId}`);
    }
  };

  const handleLabelClick = async (e, item, isCodeSection) => {
    if (e.target.type === "checkbox") return;

    setCopySuccess(false);
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
      markComplete(itemKey);
    }
  };

  const handleCloseModal = () => {
    if (activePopupData?.itemKey) {
      markComplete(activePopupData.itemKey);
    }
    setActivePopupData(null);
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
            {week.days.map((day) => (
              <AccordionItem
                key={day.dayNum}
                day={day}
                dayId={dayId}
                isExpanded={!!expandedDays[day.dayNum]}
                onToggle={toggleDayAccordion}
                completedItems={completedItems}
                handleLabelClick={handleLabelClick}
              />
            ))}
          </div>
        </div>

        <ProgressPanel
          progressPercentage={progressPercentage}
          onReset={resetProgress}
        />
      </div>

      {activePopupData && (
        <SandboxModal
          activePopupData={activePopupData}
          onClose={handleCloseModal}
          onCopy={copyToClipboard}
          copySuccess={copySuccess}
        />
      )}
    </main>
  );
}
