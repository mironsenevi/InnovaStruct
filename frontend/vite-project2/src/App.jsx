import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/client-dashboard/Home";
import Login from "./pages/Authentication/Login";
import CompanyHome from  "e:/InnovaStruct/frontend/vite-project2/src/pages/company-dashboard/companyHome"
import Portfolio from "e:/InnovaStruct/frontend/vite-project2/src/pages/Portfolio/Portfolio";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/company/home" element={<CompanyHome/>}/>
          <Route path="/client/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
