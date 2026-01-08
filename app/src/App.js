import { Routes, Route } from "react-router-dom";

/* ===== MAIN ===== */
import Main from "./pages/main";

/* ===== FACTORY ===== */
import Login from "./pages/factory/Login";
import Register from "./pages/factory/Register";
import FactoryLayout from "./pages/factory/FactoryLayout";
import Dashboard from "./pages/factory/Dashboard";
import History from "./pages/factory/History";
import Fines from "./pages/factory/Fines";
import Profile from "./pages/factory/Profile";
import SubmitEmission from "./pages/factory/SubmitEmission";

/* ===== GOVERNMENT ===== */
import GovLogin from "./pages/government/GovLogin";
import GovDashboard from "./pages/government/GovDashboard";
import Reports from "./pages/government/Reports";
import Factories from "./pages/government/Factories";
import FactoryDetails from "./pages/government/FactoryDetails";
import Complaints from "./pages/government/Complaints";

/* ===== PEOPLE ===== */
import PeopleHome from "./pages/people/peoplehome";
import PeopleLogin from "./pages/people/peoplelogin";
import PeopleRegister from "./pages/people/peopleregister";
import PeopleDashboard from "./pages/people/peopledashboard";

function App() {
  return (
    <Routes>
      {/* MAIN */}
      <Route path="/" element={<Main />} />

      {/* PEOPLE */}
      <Route path="/people" element={<PeopleHome />} />
      <Route path="/people/login" element={<PeopleLogin />} />
      <Route path="/people/register" element={<PeopleRegister />} />
      <Route path="/people/dashboard" element={<PeopleDashboard />} />

      {/* FACTORY AUTH */}
      <Route path="/factory/login" element={<Login />} />
      <Route path="/factory/register" element={<Register />} />

      {/* FACTORY DASHBOARD */}
      <Route path="/factory" element={<FactoryLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="history" element={<History />} />
        <Route path="fines" element={<Fines />} />
        <Route path="profile" element={<Profile />} />
        <Route path="submit" element={<SubmitEmission />} />
      </Route>

      {/* GOVERNMENT */}
      <Route path="/gov/login" element={<GovLogin />} />
      <Route path="/gov/dashboard" element={<GovDashboard />} />
      <Route path="/gov/factories" element={<Factories />} />
      <Route path="/gov/factory-details" element={<FactoryDetails />} />
      <Route path="/gov/reports" element={<Reports />} />
      <Route path="/gov/complaints" element={<Complaints />} />
    </Routes>
  );
}

export default App;
