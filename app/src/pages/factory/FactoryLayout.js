import { NavLink, Outlet, useNavigate } from "react-router-dom";
import "./FactoryLayout.css";

export default function FactoryLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="factory-layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <h2 className="logo">Eco-Eco</h2>

        <NavLink to="dashboard">Dashboard</NavLink>
        <NavLink to="history">History</NavLink>
        <NavLink to="fines">Fines</NavLink>
        <NavLink to="profile">Profile</NavLink>
      </aside>

      {/* MAIN */}
      <div className="main">
        <header className="topbar">
          <span>Factory Control Center</span>
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </header>

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
