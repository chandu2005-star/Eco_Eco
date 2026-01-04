import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-bg">
      <div className="home">
        <h1>Eco-Eco Factory Module</h1>
        <p>Monitor and control industrial pollution responsibly.</p>

        <div>
          <Link to="/register">Register Factory</Link>
          <Link to="/login" className="login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
