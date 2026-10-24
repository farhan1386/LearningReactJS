import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppRoutes from "./App/routes/AppRoutes.jsx";
import "./App.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-logo">
          React Learning
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
        </nav>
      </div>
    </header>
  );
};

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const validRoutes = ["/", "/week-1-js", "/week-2-core-concepts", "/week-3-hooks", "/week-4-side-effects", "/week-5-advanced-routing", "/week-6-state-management", "/week-7-performance", "/week-8-testing"];
    const isBaseWeekRoute = validRoutes.includes(location.pathname);
    const isNestedDayRoute = location.pathname.split("/").length === 3 && validRoutes.includes("/" + location.pathname.split("/")[1]);

    if (!isBaseWeekRoute && !isNestedDayRoute) {
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="portal-app">
      <Navbar />
      <div className="dashboard-container">
        <AppRoutes />
      </div>
    </div>
  );
};

export default App;
