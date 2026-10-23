import { Routes, Route, Link } from 'react-router-dom'
import curriculumData from './data/curriculum.json'
import WeekPage from './components/WeekPage.jsx'
import './App.css'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-logo">React Learning</Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  )
}

function HomePage() {
  return (
    <div className="home-wrapper">
      <section className="curriculum-hero">
        <h1>{curriculumData.title}</h1>
        <p>{curriculumData.subtitle}</p>
      </section>

      <main className="modules-grid">
        {curriculumData.weeks.map((week) => (
          <Link 
            key={week.id} 
            to={`/js-prereq/${week.id}/day-1`}
            className="module-card"
          >
            <div className="card-top">
              <span className="week-badge" style={{ backgroundColor: week.badgeColor }}>
                {week.badgeText}
              </span>
              <h2 className="module-card-title">{week.title}</h2>
            </div>
            <div className="card-bottom">
              <span className="explore-link" style={{ color: week.badgeColor }}>
                Explore Module →
              </span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  )
}

function App() {
  return (
    <div className="portal-app">
      <Navbar />
      <div className="dashboard-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/js-prereq/:weekId" element={<WeekPage />} />
          <Route path="/js-prereq/:weekId/:dayId" element={<WeekPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
