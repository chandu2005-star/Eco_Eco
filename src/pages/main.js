import { useNavigate } from "react-router-dom";
import "./main.css";

function Main() {
  const navigate = useNavigate();

  return (
    <div className="main-bg">
      <div className="main-container">
        <h1 className="main-title">Eco-Eco</h1>

        <p className="main-subtitle">
          A unified platform to monitor, control, and protect our environment by
          connecting the public, industries, and government.
        </p>

        <div className="role-cards">
          {/* PUBLIC */}
          <div className="role-card public">
            <h2>Public</h2>
            <p>
              View factory pollution data and raise official complaints to
              environmental authorities.
            </p>
            <button onClick={() => navigate("/people")}>
              Public
            </button>
          </div>

          {/* FACTORY */}
          <div className="role-card factory">
            <h2>Factory</h2>
            <p>
              Register your factory, submit emission data, and track compliance
              with environmental regulations.
            </p>
            <button onClick={() => navigate("/factory")}>
              Factory
            </button>
          </div>

          {/* GOVERNMENT */}
          <div className="role-card government">
            <h2>Government</h2>
            <p>
              Monitor factory emissions, enforce limits, issue fines, and ensure
              environmental safety.
            </p>
            <button onClick={() => navigate("/gov/login")}>
              Government Login
            </button>
          </div>
        </div>

        <footer className="main-footer">
          <p>
            An initiative for sustainable development and environmental
            accountability.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Main;
