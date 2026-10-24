import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import curriculumData from "../../../data/curriculum.json";


const HomePage = () => {
  const [overallProgress, setOverallProgress] = useState(0);

  useEffect(() => {
    let totalItems = 0;
    let completedItems = 0;

    curriculumData?.weeks?.forEach((weekItem) => {
      const saved = localStorage.getItem(`progress_${weekItem.id}`);
      const progressMap = saved ? JSON.parse(saved) : {};

      weekItem.days?.forEach((day) => {
        day.sections?.forEach((sec) => {
          sec.items?.forEach((item) => {
            totalItems++;
            if (progressMap[`${day.dayNum}_${item.label}`]) {
              completedItems++;
            }
          });
        });
      });
    });

    if (totalItems > 0) {
      setOverallProgress(Math.round((completedItems / totalItems) * 100));
    } else {
      setOverallProgress(0);
    }
  }, []);

  return (
    <div className="home-wrapper">
      <section className="curriculum-hero">
        <h1>{curriculumData?.title}</h1>
        <p>{curriculumData?.subtitle}</p>
      </section>

      <section className="overall-progress-section">
        <div className="overall-progress-card">
          <div className="overall-bar-title">Overall Course Completion</div>
          <div className="overall-bar-track">
            <div
              className="overall-bar-fill"
              style={{ width: `${overallProgress}%` }}
            ></div>
          </div>
          <div className="overall-bar-subtitle">
            Tracked dynamically across all {curriculumData?.weeks?.length || 0}{" "}
            specialized modules ({overallProgress}% complete)
          </div>
        </div>
      </section>

      <main className="modules-grid">
        {curriculumData?.weeks?.map((week) => {
          const saved = localStorage.getItem(`progress_${week.id}`);
          const progressMap = saved ? JSON.parse(saved) : {};

          let weekTotal = 0;
          let weekCompleted = 0;

          week.days?.forEach((day) => {
            day.sections?.forEach((sec) => {
              sec.items?.forEach((item) => {
                weekTotal++;
                if (progressMap[`${day.dayNum}_${item.label}`]) {
                  weekCompleted++;
                }
              });
            });
          });

          const weekPercent =
            weekTotal > 0 ? Math.round((weekCompleted / weekTotal) * 100) : 0;

          const defaultColors = {
            "week-1-js": "#3b82f6",
            "week-2-core-concepts": "#6b7280",
            "week-3-hooks": "#10b981",
            "week-4-side-effects": "#06b6d4",
            "week-5-advanced-routing": "#f59e0b",
            "week-6-state-management": "#ef4444",
            "week-7-performance": "#111827",
            "week-8-testing": "#2563eb"
          };
          
          const themeColor = week.badgeColor || defaultColors[week.id] || "#3b82f6";
          const matchResult = week.id?.match(/\d+/);
          const fallbackBadgeText = `Week ${matchResult ? matchResult : "1"}`;

          return (
            <Link key={week.id} to={`/${week.id}/Day-1`} className="module-card">
              <div className="card-top">
                <span
                  className="week-badge"
                  style={{ backgroundColor: themeColor }}
                >
                  {week.badgeText || fallbackBadgeText}
                </span>
                <h2 className="module-card-title">{week.title}</h2>
              </div>
              
              <div className="card-middle-progress">
                <div className="module-bar-track">
                  <div 
                    className="module-bar-fill" 
                    style={{ 
                      width: `${weekPercent}%`,
                      backgroundColor: themeColor 
                    }}
                  ></div>
                </div>
              </div>

              <div className="card-bottom-row">
                <span className="ready-text">{weekPercent}% ready</span>
                <span
                  className="explore-link"
                  style={{ color: themeColor }}
                >
                  Explore Module →
                </span>
              </div>
            </Link>
          );
        })}
      </main>
    </div>
  );
};

export default HomePage;
