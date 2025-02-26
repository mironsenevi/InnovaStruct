import React from "react";
import {
  Home,
  Folder,
  Users,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";

function CompanyNavbar() {
  return (
    <div className="flex">
      {/* Company Sidebar */}
      <div className="w-80 h-screen bg-yellow-400 text-white shadow-lg flex flex-col">
        <div className="px-6 py-4 border-b">
          <h2 className="text-2xl font-bold">Company Dashboard</h2>
        </div>
        <ul className="flex flex-col p-4 space-y-4 flex-grow">
          <li>
            <button className="btn btn-wide border-none justify-start shadow-none bg-transparent hover:bg-white group text-lg">
              <a
                href="#"
                className="flex items-center gap-3 text-white group-hover:text-black"
              >
                <Home className="w-5 h-5" />
                Home
              </a>
            </button>
          </li>
          <li>
            <button className="btn btn-wide border-none justify-start shadow-none bg-transparent hover:bg-white group text-lg">
              <a
                href="#"
                className="flex items-center gap-3 text-white group-hover:text-black"
              >
                <Folder className="w-5 h-5" />
                Portfolio
              </a>
            </button>
          </li>
          <li>
            <button className="btn btn-wide border-none justify-start shadow-none bg-transparent hover:bg-white group text-lg">
              <a
                href="#"
                className="flex items-center gap-3 text-white group-hover:text-black"
              >
                <Users className="w-5 h-5" />
                Contacts
              </a>
            </button>
          </li>
          <li>
            <button className="btn btn-wide border-none justify-start shadow-none bg-transparent hover:bg-white group text-lg">
              <a
                href="#"
                className="flex items-center gap-3 text-white group-hover:text-black"
              >
                <FileText className="w-5 h-5" />
                Tenders
              </a>
            </button>
          </li>
          <li>
            <button className="btn btn-wide border-none justify-start shadow-none bg-transparent hover:bg-white group text-lg">
              <a
                href="#"
                className="flex items-center gap-3 text-white group-hover:text-black"
              >
                <Settings className="w-5 h-5" />
                Settings
              </a>
            </button>
          </li>
        </ul>
        {/* Logout Button at Bottom */}
        <div className="p-4 mt-auto">
          <button className="btn btn-wide bg-white text-red-600 hover:text-red-800">
            <a href="#" className="flex items-center gap-3">
              <LogOut className="w-5 h-5" />
              Log out
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompanyNavbar;
