import { Home, Users, FileText, FolderKanban, HelpCircle, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
  const location = useLocation();
  
  const menuItems = [
    { icon: Home, text: 'Dashboard', path: '/' },
    { icon: Users, text: 'View Constructors', path: '/constructors' },
    { icon: FileText, text: 'Tenders', path: '/tenders' },
    { icon: FolderKanban, text: 'My Projects', path: '/projects' },
    { icon: HelpCircle, text: 'Help', path: '/help' },
    { icon: Settings, text: 'Settings', path: '/settings' }
  ];

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-4">
      <div className="mb-8">
        <h1 className="text-xl font-bold">InnovaStruct</h1>
      </div>
      
      <nav>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 p-3 rounded-lg mb-2 transition-colors ${
                isActive 
                  ? 'bg-yellow-500 text-white' 
                  : 'hover:bg-gray-100'
              }`}
            >
              <Icon size={20} />
              <span>{item.text}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}