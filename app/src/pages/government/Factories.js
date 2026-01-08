import "./Factories.css";
import { useNavigate } from "react-router-dom";

export default function Factories() {
  const navigate = useNavigate();

  return (
    <div className="factories-page">

      <h1>Registered Factories</h1>
      <p className="sub">
        Monitor compliance and emissions across all registered factories.
      </p>

      {/* STATS */}
      <div className="factory-stats">
        <div className="stat-card">
          <h3>Total Factories</h3>
          <p>1285</p>
        </div>

        <div className="stat-card warning">
          <h3>Under Watch</h3>
          <p>45</p>
        </div>

        <div className="stat-card danger">
          <h3>Blacklisted</h3>
          <p>12</p>
        </div>

        <div className="stat-card info">
          <h3>Inspected Today</h3>
          <p>8</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="factory-table-box">
        <table className="factory-table">
          <thead>
            <tr>
              <th>Factory Name</th>
              <th>Industry Type</th>
              <th>City</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Green Tech Chemicals</td>
              <td>Chemical</td>
              <td>Hyderabad</td>
              <td className="danger">Exceeded</td>
              <td>
                <button onClick={() => navigate("/gov/factory-details")}>
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>Sharma Textiles</td>
              <td>Textile</td>
              <td>Mumbai</td>
              <td className="safe">Safe</td>
              <td>
                <button onClick={() => navigate("/gov/factory-details")}>
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>Royal Plastics</td>
              <td>Plastics</td>
              <td>Delhi</td>
              <td className="danger">Exceeded</td>
              <td>
                <button onClick={() => navigate("/gov/factory-details")}>
                  View
                </button>
              </td>
            </tr>

            <tr>
              <td>Agro Foods Ltd</td>
              <td>Food Processing</td>
              <td>Jaipur</td>
              <td className="safe">Safe</td>
              <td>
                <button onClick={() => navigate("/gov/factory-details")}>
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* RIGHT PANEL */}
        <div className="high-risk-box">
          <h3>High Risk Factories</h3>
          <ul>
            <li>Green Tech Chemicals</li>
            <li>Royal Plastics</li>
            <li>Navdeep Metal Works</li>
            <li>Sunrise Dyeing Unit</li>
            <li>Krishna Rubber Products</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
