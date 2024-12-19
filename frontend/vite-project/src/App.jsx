import React from "react";
import Sidebar from "./Components/SideBar";
import MainContent from "./Components/MainContent";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
