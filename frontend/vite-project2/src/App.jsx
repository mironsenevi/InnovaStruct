import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/client-dashboard/Home";
import Login from "./pages/Authentication/Login";
import LandingPage from "./pages/LandingPage";

const App = () => {
  return (
    <div>
      <LandingPage/>
      
    </div>
  );
};

export default App;
