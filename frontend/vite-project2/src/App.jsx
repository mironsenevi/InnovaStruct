import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
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
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/client/home" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/client/*" element={
              <>
                <ClientNavbar />
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/settings" element={<Settings />} />
                </Routes>
              </>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;