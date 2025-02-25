import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {
  Home,
  Building,
  Users,
  FileText,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Helper component for nav items with PropTypes
const NavItem = ({ href, icon, text, isMinimized }) => (
  <li>
    <Link
      to={href}
      className={`btn ${isMinimized ? 'btn-square' : 'btn-wide'} border-none justify-start shadow-none bg-transparent hover:bg-white group text-lg`}
    >
      <div className="flex items-center gap-3 text-white group-hover:text-black">
        {React.cloneElement(icon, { className: "w-5 h-5" })}
        {!isMinimized && text}
      </div>
    </Link>
  </li>
);

// PropTypes for NavItem
NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  isMinimized: PropTypes.bool.isRequired
};

function ClientNavbar() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    // Dispatch custom event when sidebar state changes
    window.dispatchEvent(new CustomEvent('sidebarStateChange', { detail: !isMinimized }));
  };

  return (
    <div className={`fixed h-screen bg-yellow-400 text-white shadow-lg flex flex-col transition-all duration-300 ${isMinimized ? 'w-20' : 'w-80'}`}>
      <div className="px-6 py-4 border-b flex justify-between items-center">
        {!isMinimized && <h2 className="text-2xl font-bold">InnovaStruct</h2>}
        <button 
          onClick={toggleMinimize}
          className="p-2 hover:bg-white hover:text-yellow-400 rounded-full transition-colors"
          aria-label={isMinimized ? "Expand sidebar" : "Minimize sidebar"}
        >
          {isMinimized ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>
      <ul className="flex flex-col p-4 space-y-4 flex-grow">
        <NavItem href="/client/home" icon={<Home />} text="Home" isMinimized={isMinimized} />
        <NavItem href="/companies" icon={<Building />} text="Companies" isMinimized={isMinimized} />
        <NavItem href="/contacts" icon={<Users />} text="Contacts" isMinimized={isMinimized} />
        <NavItem href="/tender" icon={<FileText />} text="Tender" isMinimized={isMinimized} />
        <NavItem href="/settings" icon={<Settings />} text="Settings" isMinimized={isMinimized} />
      </ul>
      <div className="p-4 mt-auto">
        <Link 
          to="/logout" 
          className={`btn ${isMinimized ? 'btn-square' : 'btn-wide'} bg-white text-red-600 hover:text-red-800 flex items-center justify-center gap-3`}
        >
          <LogOut className="w-5 h-5" />
          {!isMinimized && "Log out"}
        </Link>
        
      </div>
    </div>
  );
}

export default ClientNavbar;