import "./Complaints.css";

export default function Complaints() {
  return (
    <div className="complaints-page">

      <h1>Citizen Complaints</h1>
      <p className="sub">
        Review and take action on environmental complaints reported by citizens.
      </p>

      {/* STATS */}
      <div className="complaint-stats">
        <div className="stat-card">
          <h3>Total Complaints</h3>
          <p>342</p>
        </div>

        <div className="stat-card warning">
          <h3>Pending</h3>
          <p>58</p>
        </div>

        <div className="stat-card danger">
          <h3>Critical</h3>
          <p>12</p>
        </div>

        <div className="stat-card info">
          <h3>Resolved</h3>
          <p>284</p>
        </div>
      </div>

      {/* TABLE */}
      <div className="complaints-table-box">
        <table className="complaints-table">
          <thead>
            <tr>
              <th>Citizen Name</th>
              <th>Factory</th>
              <th>Issue</th>
              <th>City</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Ravi Kumar</td>
              <td>Green Tech Chemicals</td>
              <td>Air Pollution</td>
              <td>Hyderabad</td>
              <td className="danger">Critical</td>
              <td><button>View</button></td>
            </tr>

            <tr>
              <td>Anita Sharma</td>
              <td>Royal Plastics</td>
              <td>Water Contamination</td>
              <td>Delhi</td>
              <td className="warning">Pending</td>
              <td><button>View</button></td>
            </tr>

            <tr>
              <td>Suresh Patil</td>
              <td>Sharma Textiles</td>
              <td>Smoke Emission</td>
              <td>Mumbai</td>
              <td className="safe">Resolved</td>
              <td><button>View</button></td>
            </tr>

            <tr>
              <td>Pooja Verma</td>
              <td>Agro Foods Ltd</td>
              <td>Waste Dumping</td>
              <td>Jaipur</td>
              <td className="warning">Pending</td>
              <td><button>View</button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}
