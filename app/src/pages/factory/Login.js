import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: "factory",
          username,
          password
        })
      });

      if (res.ok) {
        navigate("/factory/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (err) {
      alert("Backend not reachable");
    }
  };

  return (
    <div className="page-bg">
      <div className="factory-login-card">
        <h2>Factory Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Factory ID / Email"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>

        <button className="back" onClick={() => navigate("/")}>
          ← Back
        </button>
      </div>
    </div>
  );
}

export default Login;
