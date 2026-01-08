import "./FactoryDetails.css";
import { FaCloud, FaTint, FaCheckCircle, FaMapMarkerAlt } from "react-icons/fa";

export default function FactoryDetails() {
  return (
    <div className="factory-details-page">

      {/* BREADCRUMB */}
      <div className="breadcrumb">
        Dashboard &gt; Factories &gt; <b>GreenTech Manufacturing</b>
      </div>

      {/* HEADER */}
      <div className="factory-header">
        <h1>GreenTech Manufacturing</h1>
        <span className="location-badge">
          <FaMapMarkerAlt /> Chicago, IL
        </span>
      </div>

      {/* FACTORY INFO */}
      <div className="factory-info-card">
        <h3>Factory Details</h3>
        <p><b>Factory Name:</b> GreenTech Manufacturing</p>
        <p><b>Industry:</b> Electronics</p>
        <p><b>Location:</b> Chicago, IL</p>
      </div>

      {/* LIMIT CARDS */}
      <div className="limit-cards">

        {/* AIR */}
        <div className="limit-card">
          <h3><FaCloud /> Air Limit</h3>
          <div className="limit-values">
            <div>
              <h2>100 <span>tons / month</span></h2>
              <p>Limit</p>
            </div>
            <div>
              <h2>85 <span>tons</span></h2>
              <p>Current Usage</p>
            </div>
          </div>
          <p className="status safe"><FaCheckCircle /> Status: Safe</p>
        </div>

        {/* WATER */}
        <div className="limit-card">
          <h3><FaTint /> Water Limit</h3>
          <div className="limit-values">
            <div>
              <h2>50,000 <span>gallons / month</span></h2>
              <p>Limit</p>
            </div>
            <div>
              <h2>42,000 <span>gallons</span></h2>
              <p>Current Usage</p>
            </div>
          </div>
          <p className="status safe"><FaCheckCircle /> Status: Safe</p>
        </div>

      </div>

      {/* EMISSION HISTORY */}
      <div className="emission-history">
        <h2>Emission History</h2>

        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Air Used</th>
              <th>Air Limit</th>
              <th>Water Used</th>
              <th>Water Limit</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>15/01/2022</td>
              <td>90 tons</td>
              <td>100 tons</td>
              <td>48,000 gal</td>
              <td>50,000 gal</td>
              <td className="danger">Exceeded</td>
            </tr>

            <tr>
              <td>05/01/2022</td>
              <td>80 tons</td>
              <td>100 tons</td>
              <td>40,000 gal</td>
              <td>50,000 gal</td>
              <td className="safe">Safe</td>
            </tr>

            <tr>
              <td>20/12/2021</td>
              <td>95 tons</td>
              <td>100 tons</td>
              <td>52,000 gal</td>
              <td>50,000 gal</td>
              <td className="danger">Exceeded</td>
            </tr>

            <tr>
              <td>10/12/2021</td>
              <td>70 tons</td>
              <td>100 tons</td>
              <td>38,000 gal</td>
              <td>50,000 gal</td>
              <td className="safe">Safe</td>
            </tr>

            <tr>
              <td>25/11/2021</td>
              <td>85 tons</td>
              <td>100 tons</td>
              <td>45,000 gal</td>
              <td>50,000 gal</td>
              <td className="safe">Safe</td>
            </tr>

            <tr>
              <td>10/11/2021</td>
              <td>78 tons</td>
              <td>100 tons</td>
              <td>42,500 gal</td>
              <td>50,000 gal</td>
              <td className="safe">Safe</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* BOTTOM CARDS */}
      <div className="bottom-cards">

        <div className="fines-card">
          <h3>Fines Summary</h3>
          <p>Total Fines: <b>$12,000</b></p>
          <p>Paid Fines: <b>$12,000</b></p>
        </div>

        <div className="compliance-card">
          <h3>Compliance Status</h3>
          <div className="compliant-badge">
            <FaCheckCircle /> Compliant
          </div>
        </div>

      </div>

    </div>
  );
}
