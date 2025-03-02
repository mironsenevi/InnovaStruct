import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/client-dashboard/Home";
import Login from "./pages/Authentication/Login";
import TenderPortal from "./pages/tender-portal/TenderPortal";
import TenderPage from "./pages/tender-page/TenderPage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/client/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/company/tenderportal" element={<TenderPortal />} />
          <Route path="tenderportal/tenderpage" element={<TenderPage/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
