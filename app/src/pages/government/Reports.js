import "./Reports.css";
import { FaIndustry, FaBell, FaRupeeSign, FaEye } from "react-icons/fa";

export default function Reports() {
  return (
    <div className="reports-dashboard">

      {/* TITLE */}
      <div className="reports-title">
        <h1>Government Emissions Monitoring Dashboard</h1>
        <p>
          Real-time emission tracking, compliance checks, and legal enforcement for registered factories.
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="kpi-cards">
        <div className="kpi-card">
          <FaIndustry />
          <div>
            <h2>1,248</h2>
            <p>Total Registered Factories</p>
          </div>
        </div>

        <div className="kpi-card">
          <FaBell />
          <div>
            <h2>23</h2>
            <p>Active Pollution Alerts</p>
          </div>
        </div>

        <div className="kpi-card">
          <FaRupeeSign />
          <div>
            <h2>₹18,75,000</h2>
            <p>Fines Issued This Month</p>
          </div>
        </div>

        <div className="kpi-card">
          <FaEye />
          <div>
            <h2>12</h2>
            <p>Factories Under Watch</p>
          </div>
        </div>
      </div>

      {/* REAL TIME OVERVIEW (SMALLER) */}
      <div className="panel small">
        <h3>Real-Time Emissions Overview</h3>
        <p className="sub">ABC Chemicals – Chemical Factory</p>

        <div className="pollutant-section">
          <h4>Air Pollutants</h4>

          <div className="pollutant-row">
            <span>CO₂</span>
            <div className="bar-track"><div className="bar red" style={{ width: "85%" }}></div></div>
          </div>

          <div className="pollutant-row">
            <span>NOx</span>
            <div className="bar-track"><div className="bar orange" style={{ width: "70%" }}></div></div>
          </div>

          <div className="pollutant-row">
            <span>PM2.5</span>
            <div className="bar-track"><div className="bar yellow" style={{ width: "60%" }}></div></div>
          </div>
        </div>

        <div className="pollutant-section">
          <h4>Water Pollutants</h4>

          <div className="pollutant-row">
            <span>Lead</span>
            <div className="bar-track"><div className="bar green" style={{ width: "75%" }}></div></div>
          </div>

          <div className="pollutant-row">
            <span>Mercury</span>
            <div className="bar-track"><div className="bar teal" style={{ width: "55%" }}></div></div>
          </div>

          <div className="pollutant-row">
            <span>Waste</span>
            <div className="bar-track"><div className="bar blue" style={{ width: "65%" }}></div></div>
          </div>
        </div>
      </div>

      {/* GRID */}
      <div className="reports-grid">

        {/* FACTORY COMPLIANCE */}
        <div className="panel">
          <h3>Factory Compliance</h3>

          <table className="compliance-table">
            <thead>
              <tr>
                <th>Factory</th>
                <th>Type</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>ABC Chemicals</td>
                <td>Chemical</td>
                <td>05 Jan 2026</td>
                <td className="danger">Exceeded</td>
              </tr>

              <tr>
                <td>GreenText Pvt</td>
                <td>Textile</td>
                <td>04 Jan 2026</td>
                <td className="safe">Safe</td>
              </tr>

              <tr>
                <td>PowerGen Ltd</td>
                <td>Power</td>
                <td>03 Jan 2026</td>
                <td className="danger">Exceeded</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* MANIPULATION */}
        <div className="panel">
          <h3>Manipulation & Violation Detection</h3>

          <div className="stars">
            <div className="star-card">
              <h4>1 Star</h4>
              <p>Suspicious data patterns</p>
            </div>

            <div className="star-card">
              <h4>2 Stars</h4>
              <p>Repeated mismatch</p>
            </div>

            <div className="star-card">
              <h4>3 Stars</h4>
              <p>Likely manipulation</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}



