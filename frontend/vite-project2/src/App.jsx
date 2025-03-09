import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/client-dashboard/Home";
import Login from "./pages/Authentication/Login";
import CreateTender from "./pages/create-tender/CreateTender";
import TenderList from "./pages/tender-list/TenderList";
import ClientTender from "./pages/tender-client/ClientTender";
import './index.css'


import CompanyTenderDashboard from "./pages/CompanyTender/CompanyTenderDashboard.jsx";
import TenderHeatmap from "./pages/CompanyTender/TenderHeatmap.jsx";
import ActiveBids from "./pages/CompanyTender/ActiveBids.jsx";
import TenderAnalytics from "./pages/CompanyTender/TenderAnalytics.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/client/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tender" element={<ClientTender />} />
          <Route path="/tender/create" element={<CreateTender />} />
          <Route path="/tender/tenderlist" element={<TenderList />} />

          <Route path="/company/tender" element={<CompanyTenderDashboard />} />
          <Route path="/company/tender/heatmap" element={<TenderHeatmap />} />
          <Route path="/company/tender/bids" element={<ActiveBids />} />
          <Route path="/company/tender/analytics" element={<TenderAnalytics />} />
          
          
        </Routes>
      </Router>
    </div>
  );
};

export default App;