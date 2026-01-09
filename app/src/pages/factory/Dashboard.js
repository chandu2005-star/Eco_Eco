import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:5000/monthly-report")
      .then(res => res.json())
      .then(result => {
        const firstFactory = Object.values(result.factories)[0];
        setData(firstFactory);
      });
  }, []);

  if (!data) return <h2>Loading...</h2>;

  const fine = data.status === "EXCEEDED" ? 500 : 0;

  return (
    <>
      <h1>Today’s Emission Status</h1>

      <div className="cards">
        <div className="card air">
          Air Emission
          <b>{data.emission}</b>
        </div>

        <div className="card water">
          Allowed Limit
          <b>{data.allowed_limit}</b>
        </div>

        <div className="card status">
          Status
          <b>{data.status}</b>
        </div>

        <div className="card fine">
          Today Fine
          <b>₹{fine}</b>

          <button
            style={{
              marginTop: "15px",
              padding: "10px",
              width: "100%",
              cursor: "pointer"
            }}
            onClick={() => navigate("/factory/submit")}
          >
            ➕ Submit Emission
          </button>
        </div>
      </div>
    </>
  );
}
