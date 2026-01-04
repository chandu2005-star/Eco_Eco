import { useNavigate } from "react-router-dom";
import "./SubmitEmission.css";

function SubmitEmission() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // later we’ll add real logic
    alert("Emission data submitted successfully");
    navigate("/dashboard");
  };

  return (
    <div className="submit">
      <h2>Submit Emission Data</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Chemical Name" required />

        <select required>
          <option value="">Select Emission Type</option>
          <option>Air</option>
          <option>Water</option>
        </select>

        <input
          type="number"
          placeholder="Quantity Released (units)"
          required
        />

        <button type="submit">Submit</button>
      </form>

      <button className="back-btn" onClick={() => navigate("/dashboard")}>
        ← Back to Dashboard
      </button>
    </div>
  );
}

export default SubmitEmission;
