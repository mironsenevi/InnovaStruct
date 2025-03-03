import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/client-dashboard/Home";
import Login from "./pages/Authentication/Login";
import CreateTender from "./pages/create-tender/CreateTender";
import TenderList from "./pages/tender-list/TenderList";
import ClientTender from "./pages/tender-client/ClientTender";

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

          
        </Routes>
      </Router>
    </div>
  );
};

export default App;