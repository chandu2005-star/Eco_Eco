import { useState } from "react";
import "./peopledashboard.css";

function PeopleDashboard() {
  const data = {
    Hyderabad: {
      "ABC Chemicals": {
        airLimit: 100,
        airUsed: 120,
        waterLimit: 80,
        waterUsed: 90,
      },
      "Green Cement": {
        airLimit: 100,
        airUsed: 70,
        waterLimit: 80,
        waterUsed: 60,
      },
    },
    Delhi: {
      "Metro Steel": {
        airLimit: 100,
        airUsed: 140,
        waterLimit: 80,
        waterUsed: 85,
      },
    },
  };

  const [city, setCity] = useState("");
  const [factory, setFactory] = useState("");
  const [complaint, setComplaint] = useState("");

  const submitComplaint = () => {
    alert("Complaint sent to Government");
    setComplaint("");
  };

  const getStatus = (f) => {
    if (f.airUsed > f.airLimit || f.waterUsed > f.waterLimit)
      return "LIMIT EXCEEDED";
    return "SAFE";
  };

  return (
    <div className="people-bg">
      <h1>Public Pollution Dashboard</h1>

      <div className="selectors">
        <select
          onChange={(e) => {
            setCity(e.target.value);
            setFactory("");
          }}
        >
          <option value="">Select City</option>
          {Object.keys(data).map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select
          disabled={!city}
          onChange={(e) => setFactory(e.target.value)}
        >
          <option value="">Select Factory</option>
          {city &&
            Object.keys(data[city]).map((f) => (
              <option key={f}>{f}</option>
            ))}
        </select>
      </div>

      {city && factory && (
        <>
          <div className="cards">
            <div className="card red">
              Air Limit<b>{data[city][factory].airLimit}</b>
            </div>

            <div className="card pink">
              Air Emitted<b>{data[city][factory].airUsed}</b>
            </div>

            <div className="card red">
              Water Limit<b>{data[city][factory].waterLimit}</b>
            </div>

            <div className="card pink">
              Water Used<b>{data[city][factory].waterUsed}</b>
            </div>

            <div
              className={`card status ${getStatus(
                data[city][factory]
              )
                .toLowerCase()
                .replace(" ", "-")}`}
            >
              Status<b>{getStatus(data[city][factory])}</b>
            </div>
          </div>

          <div className="complaint-box">
            <textarea
              placeholder="Write your official complaint (only Government can see this)..."
              value={complaint}
              onChange={(e) => setComplaint(e.target.value)}
            />
            <button onClick={submitComplaint}>Submit Complaint</button>
          </div>
        </>
      )}
    </div>
  );
}

export default PeopleDashboard;
