import { useNavigate } from "react-router-dom";
import "./peopleregister.css";

function PeopleRegister() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/people/login");
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Public Registration</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default PeopleRegister;
