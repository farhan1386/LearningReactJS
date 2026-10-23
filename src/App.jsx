import { Link } from "react-router-dom";
import AppRoutes from "./App\\routes/AppRoutes.jsx";
import "./App.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-logo">
          React Learning Portal
        </Link>
        <nav className="nav-links">
          <Link to="/">Home Dashboard</Link>
        </nav>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="portal-app">
      <Navbar />
      <div className="dashboard-container">
        <AppRoutes />
      </div>
    </div>
  );
}
