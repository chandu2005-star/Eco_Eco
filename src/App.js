import { Routes, Route } from "react-router-dom";
import "./App.css";

// Main
import Main from "./pages/main";

// People (Public)
import PeopleHome from "./pages/people/peoplehome";
import PeopleLogin from "./pages/people/peoplelogin";
import PeopleRegister from "./pages/people/peopleregister";
import PeopleDashboard from "./pages/people/peopledashboard";

// Factory
import Home from "./pages/factory/Home";
import Login from "./pages/factory/Login";
import Register from "./pages/factory/Register";
import Dashboard from "./pages/factory/Dashboard";
import SubmitEmission from "./pages/factory/SubmitEmission";

// Government
import GovLogin from "./pages/government/GovLogin";
import GovDashboard from "./pages/government/GovDashboard";

function App() {
  return (
    <Routes>
      {/* Main */}
      <Route path="/" element={<Main />} />

      {/* People */}
      <Route path="/people" element={<PeopleHome />} />
      <Route path="/people/login" element={<PeopleLogin />} />
      <Route path="/people/register" element={<PeopleRegister />} />
      <Route path="/people/dashboard" element={<PeopleDashboard />} />

      {/* Factory */}
      <Route path="/factory" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/submit" element={<SubmitEmission />} />

      {/* Government */}
      <Route path="/gov/login" element={<GovLogin />} />
      <Route path="/gov/dashboard" element={<GovDashboard />} />
    </Routes>
  );
}

export default App;
