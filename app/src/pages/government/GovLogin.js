import { useNavigate } from "react-router-dom";
import "./GovLogin.css";

function GovLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // dummy login for now
    navigate("/gov/dashboard");
  };

  return (
    <div className="gov-login-bg">
      <div className="gov-login-card">
        <h1>Government Login</h1>

        <form onSubmit={handleLogin}>
          <input type="text" placeholder="Government ID" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default GovLogin;
