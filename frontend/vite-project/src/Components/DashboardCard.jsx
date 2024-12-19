import React from "react";
import "./DashboardCard.css";

function DashboardCard({ title, icon }) {
  return (
    <div className="dashboard-card">
      <span className="icon">{icon}</span>
      <p>{title}</p>
    </div>
  );
}

export default DashboardCard;
