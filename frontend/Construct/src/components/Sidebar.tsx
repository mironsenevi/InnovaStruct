import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Building2, Briefcase, Star, HelpCircle, Settings } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { icon: <LayoutDashboard className="w-5 h-5" />, label: 'Dashboard', path: '/' },
    { icon: <Building2 className="w-5 h-5" />, label: 'Projects', path: '/projects' },
    { icon: <Briefcase className="w-5 h-5" />, label: 'Portfolio', path: '/portfolio' },
    { icon: <Star className="w-5 h-5" />, label: 'Reviews', path: '/reviews' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'Help', path: '/help' },
    { icon: <Settings className="w-5 h-5" />, label: 'Settings', path: '/settings' },
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <Building2 className="w-6 h-6" />
          InnovaStruct
        </h1>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-yellow-400 text-gray-900'
                  : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            {item.icon}
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;