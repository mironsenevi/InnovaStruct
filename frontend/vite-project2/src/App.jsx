import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/client-dashboard/Home";
import Login from "./pages/Authentication/Login";
import UserType from "./pages/UserType/UserType";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/client/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/usertype" element={<UserType />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
