import { useEffect, useState } from "react";
import "./Fines.css";

export default function Fines() {
  const [fine, setFine] = useState(0);
  const [status, setStatus] = useState("OK");

  useEffect(() => {
    fetch("http://127.0.0.1:5000/monthly-report")
      .then((res) => res.json())
      .then((result) => {
        // demo: first factory
        const factory = Object.values(result.factories)[0];

        setStatus(factory.status);

        if (factory.status === "EXCEEDED") {
          setFine(500);
        } else {
          setFine(0);
        }
      })
      .catch(() => {
        alert("Backend not reachable");
      });
  }, []);

  return (
    <>
      <h1>Fines Overview</h1>

      <div className="fine-cards">
        <div className="fine-card">
          Active Fines
          <b>₹{fine}</b>
        </div>

        <div className="fine-card">
          Compliance Status
          <b>{status}</b>
        </div>

        <div className="fine-card">
          Paid Fines
          <b>₹0</b>
        </div>
      </div>
    </>
  );
}
