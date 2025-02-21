import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Building,
  Users,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import logo from "../assets/logo.png"; 

function ClientNavbar() {
  return (
    <nav className="fixed top-0 left-0 h-full w-0 sm:w-64 bg-yellow-400 text-white overflow-hidden transition-all duration-300 z-50">
      <div className="px-6 py-4 border-b border-yellow-300">
        <div className="flex items-center gap-4">
        <img src={logo} alt="InnovaStruct Logo" className="w-9 h-10.5 -translate-y-0.5 " /> 
        <h2 className="text-2xl font-bold text-black" >InnovaStruct</h2>
        </div>
      </div>
      <ul className="flex flex-col p-4 space-y-4">
        <li>
          <Link
            to="/client/home"
            className="flex items-center gap-3 p-2 hover:bg-white hover:text-black rounded-lg transition-colors"
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/client/companies"
            className="flex items-center gap-3 p-2 hover:bg-white hover:text-black rounded-lg transition-colors"
          >
            <Building className="w-5 h-5" />
            <span>Companies</span>
          </Link>
        </li>
        <li>
          <Link
            to="/client/contacts"
            className="flex items-center gap-3 p-2 hover:bg-white hover:text-black rounded-lg transition-colors"
          >
            <Users className="w-5 h-5" />
            <span>Contacts</span>
          </Link>
        </li>
        <li>
          <Link
            to="/client/tender"
            className="flex items-center gap-3 p-2 hover:bg-white hover:text-black rounded-lg transition-colors"
          >
            <FileText className="w-5 h-5" />
            <span>Tender</span>
          </Link>
        </li>
        <li>
          <Link
            to="/client/settings"
            className="flex items-center gap-3 p-2 hover:bg-white hover:text-black rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-4 w-full px-4">
        <Link
          to="/logout"
          className="flex items-center gap-3 p-2 bg-white text-red-600 hover:bg-gray-100 rounded-lg transition-colors w-full justify-center"
        >
          <LogOut className="w-5 h-5" />
          <span>Log out</span>
        </Link>
      </div>
    </nav>
  );
}

export default ClientNavbar;