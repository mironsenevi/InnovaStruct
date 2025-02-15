import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/client-dashboard/Home";
import Login from "./pages/Authentication/Login";
import Profile from "./pages/client-dashboard/Profile";
import Settings from "./pages/client-dashboard/Settings";
import ClientNavbar from "./components/ClientNavbar";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <ClientNavbar />
        <div className="flex-1">
          <Routes>
            <Route path="/client/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/client/profile" element={<Profile />} />
            <Route path="/client/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;