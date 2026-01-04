import { useNavigate } from "react-router-dom";
import "./peoplehome.css";

function PeopleHome() {
  const navigate = useNavigate();

  return (
    <div className="peoplehome-bg">
      <h1>Public Portal</h1>
      <p>View factory pollution data and raise official complaints.</p>

      <div className="buttons">
        <button onClick={() => navigate("/people/login")}>Login</button>
        <button onClick={() => navigate("/people/register")}>Register</button>
      </div>
    </div>
  );
}

export default PeopleHome;
