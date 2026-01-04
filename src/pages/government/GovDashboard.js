import { useState } from "react";
import "./GovDashboard.css";

function GovDashboard() {
  const [data, setData] = useState({
    Hyderabad: {
      "ABC Chemicals": {
        airLimit: 100,
        airUsed: 120,
        waterLimit: 80,
        waterUsed: 90,
        fine: 500,
        blacklisted: false,
      },
      "Green Cement": {
        airLimit: 100,
        airUsed: 70,
        waterLimit: 80,
        waterUsed: 60,
        fine: 0,
        blacklisted: false,
      },
    },
    Delhi: {
      "Metro Steel": {
        airLimit: 100,
        airUsed: 140,
        waterLimit: 80,
        waterUsed: 85,
        fine: 1000,
        blacklisted: false,
      },
    },
  });

  const [city, setCity] = useState("");
  const [factory, setFactory] = useState("");

  const factoryData =
    city && factory ? data[city][factory] : null;

  const toggleBlacklist = () => {
    const updated = { ...data };
    updated[city][factory].blacklisted =
      !updated[city][factory].blacklisted;
    setData(updated);
  };

  const getStatus = () => {
    if (!factoryData) return "";
    if (factoryData.blacklisted) return "BLACKLISTED";
    if (
      factoryData.airUsed > factoryData.airLimit ||
      factoryData.waterUsed > factoryData.waterLimit
    )
      return "LIMIT EXCEEDED";
    return "SAFE";
  };

  return (
    <div className="gov-bg">
      <h1 className="gov-title">Government Control Dashboard</h1>

      {/* SELECTORS */}
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

      {/* DATA */}
      {factoryData && (
        <>
          <div className="cards">
            <div className="card purple">
              Air Used<b>{factoryData.airUsed}</b>
            </div>

            <div className="card violet">
              Water Used<b>{factoryData.waterUsed}</b>
            </div>

            <div className="card lavender">
              Fine<b>₹{factoryData.fine}</b>
            </div>

            <div className={`card status ${getStatus().toLowerCase().replace(" ", "-")}`}>
              Status<b>{getStatus()}</b>
            </div>
          </div>

          <button
            className={
              factoryData.blacklisted
                ? "unblock-btn"
                : "blacklist-btn"
            }
            onClick={toggleBlacklist}
          >
            {factoryData.blacklisted
              ? "Unblock Factory"
              : "Blacklist Factory"}
          </button>
        </>
      )}
    </div>
  );
}

export default GovDashboard;
