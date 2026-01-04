import { useNavigate } from "react-router-dom";
import "./peoplelogin.css";

function PeopleLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/people/dashboard");
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2>Public Login</h2>

        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default PeopleLogin;
