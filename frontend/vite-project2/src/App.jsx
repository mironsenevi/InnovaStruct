
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
          <Route path="/company/home" element={<CompanyHome/>}/>
          {/* Redirect root path to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/client/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/companies" element={<RegisteredCompaniesPage />} />
          <Route path="/companies/:id" element={<CompanyProfilePage />} />
          <Route path="/client/settings" element={<SettingsPageClient />} />
          <Route path="/company/settings" element={<SettingsPageCompany />} />
          <Route path="/client/tender" element={<ConstructionBiddingInterface />} />
          <Route path="/company/portfolio" element={<CompanyPortfolio />} />
          <Route path="/company/contacts" element={<ContactsCompany />} />
          <Route path="/client/contacts" element={<ContactsClient />} />
          {/* Add a catch-all route for 404 pages */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;