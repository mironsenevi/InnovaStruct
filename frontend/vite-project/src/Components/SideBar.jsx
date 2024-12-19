import React from "react";
import "./Sidebar.css";
import { FaHome, FaUser, FaClipboardList, FaCogs, FaQuestionCircle } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>InnovaStruct</h2>
      </div>
      <nav>
        <ul>
          <li><FaHome /> Dashboard</li>
          <li><FaClipboardList /> View Constructors</li>
          <li><FaUser /> Profile</li>
          <li><FaQuestionCircle /> Help</li>
          <li><FaCogs /> Settings</li>
        </ul>
      </nav>
      <div className="user-profile">
        <img src="https://via.placeholder.com/50" alt="User" />
        <p>Chiran Kariyapperuma</p>
        <span>Project Manager</span>
      </div>
    </div>
  );
}

export default Sidebar;
