import "./Dashboard.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
import { useNavigate } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const navigate = useNavigate();

  const airData = {
    labels: ["8", "7", "6", "8", "8", "8", "10"],
    datasets: [
      {
        label: "Air Emission",
        data: [102, 98, 94, 96, 93, 92, 95],
        borderColor: "#4caf50",
        backgroundColor: "#4caf50",
        tension: 0.4
      }
    ]
  };

  const waterData = {
    labels: ["8", "7", "6", "8", "8", "9", "10"],
    datasets: [
      {
        label: "Water Emission",
        data: [85, 80, 75, 78, 77, 78, 70],
        borderColor: "#2196f3",
        backgroundColor: "#2196f3",
        tension: 0.4
      }
    ]
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-content">
        <h1>Today's Emission Status</h1>

        <div className="cards">
          <div className="card blue">
            <p>Air Emission</p>
            <h2>95 / 100</h2>
          </div>

          <div className="card cyan">
            <p>Water Emission</p>
            <h2>70 / 80</h2>
          </div>

          <div className="card green">
            <p>Status</p>
            <h2>SAFE</h2>
          </div>

          <div className="card pink">
            <p>Today Fine</p>
            <h2>₹0</h2>
          </div>
        </div>

        <div className="grid">
          <div className="box">
            <h3>Air Emission Trends</h3>
            <Line data={airData} />
          </div>

          <div className="box center">
            <h3>Compliance Status</h3>
            <div className="gauge">
              <div className="circle">95%</div>
              <p>Air and water emissions are within safe limits.</p>
            </div>
          </div>

          <div className="box">
            <h3>Recent Submissions</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Date / Time</th>
                  <th>Air</th>
                  <th>Fine</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>FA847</td>
                  <td>April 24, 2024, 11:00 AM</td>
                  <td>95</td>
                  <td>₹0</td>
                </tr>
                <tr>
                  <td>FA847</td>
                  <td>April 23, 2024, 11:00 AM</td>
                  <td>94</td>
                  <td>₹0</td>
                </tr>
                <tr>
                  <td>FA847</td>
                  <td>April 22, 2024, 11:00 AM</td>
                  <td>96</td>
                  <td>₹0</td>
                </tr>
              </tbody>
            </table>
            <div className="view">View All →</div>
          </div>

          <div className="box full-width">
            <h3>Water Emission Trends</h3>
            <Line data={waterData} />
          </div>
        </div>

        <div className="bottom-submit-container">
          <button
            className="bottom-submit-btn"
            onClick={() => navigate("/factory/submit")}
          >
            + Submit Emission
          </button>
        </div>
      </div>
    </div>
  );
}
