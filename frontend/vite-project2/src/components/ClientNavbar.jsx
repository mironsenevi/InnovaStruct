import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  User
} from "lucide-react";
import logo from "../assets/logo.png";

// Helper component for nav items with PropTypes
const NavItem = ({ href, icon, text, isMinimized, isActive }) => (
  <li className="w-full">
    <Link
      to={href}
      className={`flex items-center px-3 py-3 rounded-xl transition-all duration-200 w-full
        ${isActive 
          ? 'bg-white/20 text-white font-medium shadow-sm' 
          : 'text-yellow-900 hover:bg-white/10'}`}
    >
      <div className={`flex items-center ${!isMinimized && 'w-full'}`}>
        <div className={`${isActive ? 'bg-white/20' : 'bg-transparent'} p-2 rounded-lg`}>
          {React.cloneElement(icon, { 
            className: `${isActive ? 'text-white' : 'text-yellow-800'} w-5 h-5`
          })}
        </div>
        
        {!isMinimized && (
          <span className="ml-3 transition-opacity duration-200">{text}</span>
        )}
        
        {!isMinimized && isActive && (
          <div className="ml-auto w-1.5 h-8 bg-white rounded-full"></div>
        )}
      </div>
    </Link>
  </li>
);

// PropTypes for NavItem
NavItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  isMinimized: PropTypes.bool.isRequired,
  isActive: PropTypes.bool.isRequired
};

function ClientNavbar() {
  const [isMinimized, setIsMinimized] = useState(window.innerWidth < 768);
  const location = useLocation();
  const [greeting, setGreeting] = useState('');
  
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
    
    // Handle responsive behavior
    const handleResize = () => {
      if (window.innerWidth < 768 && !isMinimized) {
        setIsMinimized(true);
        window.dispatchEvent(new CustomEvent('sidebarStateChange', { detail: true }));
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMinimized]);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
    window.dispatchEvent(new CustomEvent('sidebarStateChange', { detail: !isMinimized }));
  };

  const navItems = [
    { href: "/client/home", icon: <Home />, text: "Home" },
    { href: "/client/company/1", icon: <Building />, text: "Companies" },
    { href: "/client/contacts", icon: <Users />, text: "Contacts" }, // This is correct
    { href: "/client/tender", icon: <FileText />, text: "Tenders" },
    { href: "/client/settings", icon: <Settings />, text: "Settings" }
  ];

  return (
    <>
      {/* Mobile overlay when navbar is open */}
      {!isMinimized && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-0"
          onClick={toggleMinimize}
        ></div>
      )}
    
      <div 
        className={`fixed h-screen bg-gradient-to-b from-yellow-400 to-yellow-300 shadow-xl flex flex-col 
        transition-all duration-300 ${isMinimized ? 'w-20' : 'w-72'} z-20`}
      >
        {/* Logo and toggle button */}
        <div className="p-4 flex justify-between items-center border-b border-yellow-300/50">
          {!isMinimized && (
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <img src={logo} alt="InnovaStruct Logo" className="w-8 h-8" /> 
              </div>
              <h2 className="text-xl font-bold text-yellow-900">InnovaStruct</h2>
            </div>
          )}
          
          <button 
            onClick={toggleMinimize}
            className={`p-2 bg-white/20 hover:bg-white/30 text-yellow-800 rounded-lg transition-all
            ${isMinimized ? 'mx-auto' : ''}`}
            aria-label={isMinimized ? "Expand sidebar" : "Minimize sidebar"}
          >
            {isMinimized ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
        
        {/* User profile - visible when not minimized */}
        {!isMinimized && (
          <div className="mt-6 px-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <User className="w-6 h-6 text-yellow-600" />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-yellow-300 rounded-full"></div>
              </div>
              <div>
                <p className="text-sm font-medium text-yellow-900">Omindu Abewardane</p>
                <p className="text-xs text-yellow-800/70">{greeting}!</p>
              </div>
            </div>
          </div>
        )}
        
        {/* Navigation items */}
        <div className="mt-6 px-2 flex-1 overflow-y-auto">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <NavItem 
                key={item.href}
                href={item.href} 
                icon={item.icon} 
                text={item.text} 
                isMinimized={isMinimized}
                isActive={location.pathname === item.href || location.pathname.startsWith(`${item.href}/`)}
              />
            ))}
          </ul>
        </div>
        
        {/* Footer with logout */}
        <div className="p-4 border-t border-yellow-300/50">
          <Link 
            to="/logout" 
            className={`flex items-center justify-center gap-2 bg-gradient-to-r from-red-500 to-red-600 
            hover:from-red-600 hover:to-red-700 text-white rounded-xl py-2.5 px-4 shadow-sm 
            hover:shadow transition-all duration-300 w-full font-medium`}
          >
            <LogOut className="w-5 h-5" strokeWidth={2} />
            {!isMinimized && "Log out"}
          </Link>
        </div>
      </div>
    </>
  );
}

export default ClientNavbar;