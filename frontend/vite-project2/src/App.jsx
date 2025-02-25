
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/client-dashboard/Home";
import Login from "./pages/Authentication/Login";
import RegisteredCompaniesPage from './pages/companies/RegisteredCompaniesPage';
import CompanyProfilePage from './pages/companies/CompanyProfilePage';
import SettingsPage from './pages/Settings/SettingsPage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          {/* Redirect root path to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/client/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/companies" element={<RegisteredCompaniesPage />} />
          <Route path="/companies/:id" element={<CompanyProfilePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          {/* Add a catch-all route for 404 pages */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;