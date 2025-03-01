// src/App.jsx
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/client-dashboard/Home";
import Login from "./pages/Authentication/Login";
import Profile from "./pages/client-dashboard/Profile";
import SettingsPage from "./pages/Settings/SettingsPage";
import ClientNavbar from "./components/ClientNavbar";
import CompanyNavbar from "./components/CompanyNavbar";
import CompanyProfilePage from "./pages/client-dashboard/CompanyProfilePage";
import ConstructionBiddingInterface from "./pages/client-dashboard/ConstructionBiddingInterface";
import BackgroundWrapper from "./components/BackgroundWrapper";
import CompanyHome from "./pages/company-dashboard/Home";




const App = () => {
  return (
    <Router>
      <BackgroundWrapper>
        <Routes>
          <Route path="/" element={<Navigate to="/client/home" replace />} />
          <Route path="/login" element={<Login />} />
          
          {/* Client Routes */}
          <Route path="/client/*" element={
            <div className="flex min-h-screen">
              <ClientNavbar />
              <div className="flex-1 transition-all duration-300" id="main-content">
              <Routes>
                <Route path="home" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<SettingsPage />} />
                <Route path="company/:id" element={<CompanyProfilePage />} />
                <Route path="tender" element={<ConstructionBiddingInterface />} />
                <Route path="tender/create" element={<ConstructionBiddingInterface />} />
                </Routes>
              </div>
            </div>
          } />
          
          {/* Company Routes */}
          <Route path="/company/*" element={
            <div className="flex min-h-screen">
              <CompanyNavbar />
              <div className="flex-1 transition-all duration-300" id="main-content">
                <Routes>
                  <Route path="home" element={<CompanyHome />} />
                  {/* Add more company routes as needed */}
                  <Route path="*" element={<Navigate to="/company/home" replace />} />
                </Routes>
              </div>
            </div>
          } />
        </Routes>
      </BackgroundWrapper>
    </Router>
  );
};

export default App;