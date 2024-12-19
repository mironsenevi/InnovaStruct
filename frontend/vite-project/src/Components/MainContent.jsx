import React from "react";
import DashboardCard from "./DashboardCard";
import "./MainContent.css";

function MainContent() {
  return (
    <div className="main-content">
      <h1>Hello Chiran 👋</h1>
      <div className="dashboard-cards">
        <DashboardCard title="View Constructors" icon="👷" />
        <DashboardCard title="Call a tender" icon="📄" />
        <DashboardCard title="My Projects" icon="📦" />
        <DashboardCard title="View My Profile" icon="🧑" />
      </div>
    </div>
  );
}

export default MainContent;
