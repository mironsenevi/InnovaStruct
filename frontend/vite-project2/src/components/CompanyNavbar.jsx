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
  Briefcase,
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

function CompanyNavbar() {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    // Dispatch custom event when sidebar state changes
    window.dispatchEvent(new CustomEvent('sidebarStateChange', { detail: !isMinimized }));
  };

  return (
    <div className={`fixed h-screen bg-yellow-400 text-white shadow-lg flex flex-col transition-all duration-300 ${isMinimized ? 'w-20' : 'w-80'}`}>
      <div className="px-6 py-4 border-b flex justify-between items-center">
      <div className="flex items-center gap-4">
      <img src="/assets/Logo.png" alt="InnovaStruct Logo" className="w-9 h-10.5 -translate-y-0.5 " /> 
        {!isMinimized && <h2 className="text-2xl font-bold">InnovaStruct</h2>}
        <button 
          onClick={toggleMinimize}
          className="p-2 hover:bg-white hover:text-yellow-400 rounded-full transition-colors"
          aria-label={isMinimized ? "Expand sidebar" : "Minimize sidebar"}
        >
          {isMinimized ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>
      </div>
      </div>
      {!isMinimized && (
          <div className="mt-6 px-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-blue-300 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-blue-900">Lanka Constructions</p>
                <p className="text-xs text-blue-800/70">Company Account</p>
              </div>
            </div>
          </div>
        )}
        
      <ul className="flex flex-col p-4 space-y-4 flex-grow">
        <NavItem href="/company/home" icon={<Home />} text="Home" isMinimized={isMinimized} />
        <NavItem href="/company/portfolio" icon={<Building />} text="Portfolio" isMinimized={isMinimized} />
        <NavItem href="/company/contacts" icon={<Users />} text="Contacts" isMinimized={isMinimized} />
        <NavItem href="/" icon={<FileText />} text="Tender" isMinimized={isMinimized} />
        <NavItem href="/company/settings" icon={<Settings />} text="Settings" isMinimized={isMinimized} />
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


export default CompanyNavbar;
