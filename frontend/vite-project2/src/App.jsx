import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/client-dashboard/Home";
import Login from "./pages/Authentication/Login";
import CompanyHome from "./pages/company-dashboard/CompanyHome";
import Portfolio from "./pages/Portfolio/Portfolio";
import RegisteredCompaniesPage from './pages/companies/RegisteredCompaniesPage';
import CompanyProfilePage from './pages/companies/CompanyProfilePage';
import SettingsPageClient from './pages/Settings/SettingsPageClient';
import SettingsPageCompany from './pages/Settings/SettingsPageCompany';
import ConstructionBiddingInterface from "./pages/client-dashboard/ConstructionBiddingInterface";
import CompanyPortfolio from "./pages/company-dashboard/CompanyPortfolio";
import ContactsCompany from "./pages/Contacts/ContactsCompany";
import ContactsClient from "./pages/Contacts/ContactsClient";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />

          <Route path="/client">
            <Route path="home" element={<Home />} />
            <Route path="companies" element={<RegisteredCompaniesPage />} />
            <Route path="companies/:id" element={<CompanyProfilePage />} />
            <Route path="settings" element={<SettingsPageClient />} />
            <Route path="tender" element={<ConstructionBiddingInterface />} />
            <Route path="contacts" element={<ContactsClient />} />
          </Route>

          <Route path="/company">
            <Route path="home" element={<CompanyHome />} />
            <Route path="portfolio" element={<CompanyPortfolio />} />
            <Route path="settings" element={<SettingsPageCompany />} />
            
            <Route path="contacts" element={<ContactsCompany />} />
          </Route>

          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;