import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import curriculumData from '../data/curriculum.json'

export default function WeekPage() {
  const { weekId, dayId } = useParams()
  const navigate = useNavigate()

  const weekKey = weekId ? weekId.replace('-', '') : 'week1'
  const week = curriculumData[weekKey]

  const [expandedDays, setExpandedDays] = useState({})
  const [activePopupData, setActivePopupData] = useState(null)
  const [completedItems, setCompletedItems] = useState(() => {
    const saved = localStorage.getItem(`progress_${weekId}`)
    return saved ? JSON.parse(saved) : {}
  })

  useEffect(() => {
    if (dayId) {
      const activeDayNum = dayId.replace('day-', 'Day ')
      setExpandedDays(prev => ({ ...prev, [activeDayNum]: true }))
    } else {
      setExpandedDays({ 'Day 1': true })
    }
  }, [dayId])

  useEffect(() => {
    if (weekId) {
      localStorage.setItem(`progress_${weekId}`, JSON.stringify(completedItems))
    }
  }, [completedItems, weekId])

  if (!week) {
    return (
      <div className="empty-state">
        <p>Module folder not found.</p>
        <button onClick={() => navigate('/')}>Return Home</button>
      </div>
    )
  }

  const allChecklistItems = week.days.flatMap(day => 
    day.sections.flatMap(sec => 
      sec.items.map(item => ({ ...item, dayNum: day.dayNum }))
    )
  )
  const totalItemsCount = allChecklistItems.length
  const completedItemsCount = allChecklistItems.filter(item => completedItems[`${item.dayNum}_${item.label}`]).length
  const progressPercentage = totalItemsCount > 0 ? Math.round((completedItemsCount / totalItemsCount) * 100) : 0

  const toggleDayAccordion = (targetDayNum) => {
    const nextState = !expandedDays[targetDayNum]
    setExpandedDays(prev => ({ ...prev, [targetDayNum]: nextState }))
    
    if (nextState) {
      const targetDayId = targetDayNum.toLowerCase().replace(' ', '-')
      navigate(`/js-prereq/${weekId}/${targetDayId}`)
    } else {
      navigate(`/js-prereq/${weekId}`)
    }
  }

  const handleLabelClick = (e, item, dayNum) => {
    if (e.target.type === 'checkbox') return
    if (item.answer) {
      setActivePopupData({
        title: item.label,
        content: item.answer
      })
    }
  }

  const handleCheckboxChange = (itemKey) => {
    setCompletedItems(prev => ({ ...prev, [itemKey]: !prev[itemKey] }))
  }

  const resetProgress = () => {
    setCompletedItems({})
  }

  return (
    <main className="checklist-layout-container">
      <div className="checklist-top-nav">
        <button className="back-to-curriculum-btn" onClick={() => navigate('/')}>
          ← Back to Curriculum
        </button>
        <div className="module-banner-header">
          <div className="module-badge-tag">{week.badgeText || 'Module 01'}</div>
          <h1 className="week-checklist-heading">{week.title} Checklist</h1>
        </div>
      </div>

      <div className="checklist-workspace-grid">
        <div className="left-tracking-panel">
          <div className="panel-bar-title">Progress Tracking Checklist</div>
          
          <div className="accordion-group">
            {week.days.map((day) => {
              const isExpanded = !!expandedDays[day.dayNum]
              const currentUrlDayNum = dayId ? dayId.replace('day-', 'Day ') : 'Day 1'
              const isActiveRoute = currentUrlDayNum === day.dayNum

              return (
                <div key={day.dayNum} className={`day-accordion-card ${isActiveRoute ? 'active-day-card' : ''}`}>
                  <div className="accordion-trigger-row" onClick={() => toggleDayAccordion(day.dayNum)}>
                    <div className="trigger-left-label">
                      <span className="day-badge-pill">{day.dayNum}</span>
                      <span className="day-title-text">{day.dayTitle}</span>
                    </div>
                    <span className="chevron-icon">{isExpanded ? '▲' : '▼'}</span>
                  </div>

                  {isExpanded && (
                    <div className="accordion-content-panel">
                      {day.sections.map((section) => (
                        <div key={section.title} className="checklist-section-block">
                          <h4 className="section-label-header">
                            {section.icon} {section.title}
                          </h4>
                          
                          <div className="checklist-items-stack">
                            {section.items.map((item) => {
                              const itemKey = `${day.dayNum}_${item.label}`
                              const isChecked = !!completedItems[itemKey]
                              const canPopup = !!item.answer

                              return (
                                <label 
                                  key={item.label} 
                                  className={`checklist-item-row ${isChecked ? 'checked-label' : ''} ${canPopup ? 'has-popup-link' : ''}`}
                                  onClick={(e) => handleLabelClick(e, item, day.dayNum)}
                                >
                                  <input 
                                    type="checkbox" 
                                    checked={isChecked} 
                                    onChange={() => handleCheckboxChange(itemKey)} 
                                  />
                                  <span className="custom-check-text">{item.label}</span>
                                </label>
                              )
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
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
                  backgroundColor: progressPercentage === 100 ? '#10b981' : '#007bff'
                }}
              ></div>
            </div>
            <div className="progress-meta-text">{progressPercentage}% Complete</div>

            <p className="helper-info-text">
              Check off items as you complete them. Your progress saves automatically to local browser history storage.
            </p>
            
            <button className="reset-progress-btn" onClick={resetProgress}>
              Reset Module Progress
            </button>
          </div>
        </div>
      </div>

      {activePopupData && (
        <div className="modal-center-overlay" onClick={() => setActivePopupData(null)}>
          <div className="modal-center-window" onClick={(e) => e.stopPropagation()}>
            <div className="modal-center-header">
              <h2>{activePopupData.title}</h2>
              <button className="modal-center-close-x" onClick={() => setActivePopupData(null)}>×</button>
            </div>
            
            <div className="modal-center-body">
              <div 
                className="modal-primary-text"
                dangerouslySetInnerHTML={{ __html: activePopupData.content }}
              />
            </div>

            <div className="modal-center-footer">
              <button className="modal-close-action-btn" onClick={() => setActivePopupData(null)}>Close</button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
