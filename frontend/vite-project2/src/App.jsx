import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/client-dashboard/Home";
import Login from "./pages/Authentication/Login";
import CompanyHome from "e:/InnovaStruct/frontend/vite-project2/src/pages/company-dashboard/companyHome"
import Portfolio from "./pages/Portfolio/Portfolio";
import Contacts from "./pages/Contacts/Contacts";
import Tender from "./pages/Tenders/Tender";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/company/home" element={<CompanyHome />} />
        <Route path="/client/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path ="/tenders" element={<Tender/>}/>
      </Routes>
    </Router>
  );
};

export default App;
