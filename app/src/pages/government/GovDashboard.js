import "./GovDashboard.css";
import {
  FaIndustry,
  FaFileAlt,
  FaExclamationTriangle,
  FaChartLine
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function GovDashboard() {
  const navigate = useNavigate();

  return (
    <div className="gov-page">

      {/* ================= NAVBAR ================= */}
      <nav className="gov-navbar">
        <div className="logo">Eco‑Eco</div>

        <ul>
          <li onClick={() => navigate("/gov/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/gov/factories")}>Factories</li>
          <li onClick={() => navigate("/gov/reports")}>Reports</li>
          <li onClick={() => navigate("/gov/complaints")}>Complaints</li>
          <li onClick={() => navigate("/gov/settings")}>Settings</li>
        </ul>

        <button
          className="logout-btn"
          onClick={() => navigate("/gov/login")}
        >
          Logout
        </button>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="gov-hero">
        <div className="hero-text">
          <h1>Government Portal for Monitoring and Controlling Factory Emissions</h1>

          <p>
            Enforce regulations, track pollution data, issue fines, and ensure
            environmental safety with Eco‑Eco’s unified platform.
          </p>

          <div className="hero-buttons">
            <button
              className="primary-btn"
              onClick={() => navigate("/gov/dashboard")}
            >
              Access Dashboard
            </button>

            <button
              className="secondary-btn"
              onClick={() => navigate("/gov/factories")}
            >
              Manage Factories
            </button>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="features">

        <div className="feature-card">
          <FaChartLine className="feature-icon" />
          <h3>Monitor Emissions</h3>
          <p>Track real‑time pollution levels from registered factories.</p>
          <button onClick={() => navigate("/gov/dashboard")}>
            Learn More
          </button>
        </div>

        <div className="feature-card">
          <FaExclamationTriangle className="feature-icon" />
          <h3>Issue Fines & Warnings</h3>
          <p>Enforce regulations by issuing fines to non‑compliant factories.</p>
          <button onClick={() => navigate("/gov/factories")}>
            Learn More
          </button>
        </div>

        <div className="feature-card">
          <FaFileAlt className="feature-icon" />
          <h3>Generate Reports</h3>
          <p>Analyze and download detailed compliance reports.</p>
          <button onClick={() => navigate("/gov/reports")}>
            Learn More
          </button>
        </div>

      </section>

      {/* ================= OVERVIEW ================= */}
      <section className="overview">
        <h2>Factory Emissions Overview</h2>
        <p>Explore reports and monitor factory emissions at a glance.</p>

        <div className="overview-card">
          <FaIndustry className="overview-icon" />
          <div>
            <h3>Registered Factories</h3>
            <p>128 Active Factories</p>
          </div>
        </div>
      </section>

    </div>
  );
}
