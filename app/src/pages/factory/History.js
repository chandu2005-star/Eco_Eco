import { useEffect, useState } from "react";
import "./History.css";

export default function History() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/monthly-report")
      .then(res => res.json())
      .then(result => {
        const factory = Object.values(result.factories)[0];
        setRows([
          {
            date: factory.month,
            air: factory.emission,
            limit: factory.allowed_limit,
            status: factory.status
          }
        ]);
      });
  }, []);

  return (
    <>
      <h1>Emission History</h1>

      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Emission</th>
            <th>Allowed</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((d, i) => (
            <tr key={i}>
              <td>{d.date}</td>
              <td>{d.air}</td>
              <td>{d.limit}</td>
              <td className={d.status === "OK" ? "safe" : "danger"}>
                {d.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
