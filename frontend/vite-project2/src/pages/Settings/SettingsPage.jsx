// src/pages/Settings/SettingsPage.jsx
import { useState, useEffect } from 'react'; // Add useEffect import
import { Bell, User, Palette, Shield, Globe } from 'lucide-react';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/react';
import ProfileSettings from '../../components/Setting/ProfileSettings';
import NotificationSettings from '../../components/Setting/NotificationSettings';
import ThemeSettings from '../../components/Setting/ThemeSettings';
import PrivacySettings from '../../components/Setting/PrivacySettings';
import RegionSettings from '../../components/Setting/RegionSettings';

const SettingsPage = () => {
  // Add state for sidebar minimization
  const [isSidebarMinimized, setIsSidebarMinimized] = useState(false);
  
  // Add effect to listen for sidebar state changes
  useEffect(() => {
    const handleSidebarStateChange = (event) => {
      setIsSidebarMinimized(event.detail);
    };
    
    window.addEventListener('sidebarStateChange', handleSidebarStateChange);
    return () => {
      window.removeEventListener('sidebarStateChange', handleSidebarStateChange);
    };
  }, []);

  const tabs = [
    { name: 'Profile', icon: <User className="w-5 h-5" />, component: ProfileSettings },
    { name: 'Notifications', icon: <Bell className="w-5 h-5" />, component: NotificationSettings },
    { name: 'Theme', icon: <Palette className="w-5 h-5" />, component: ThemeSettings },
    { name: 'Privacy', icon: <Shield className="w-5 h-5" />, component: PrivacySettings },
    { name: 'Region', icon: <Globe className="w-5 h-5" />, component: RegionSettings }
  ];

  return (
    // Update the div to use dynamic margin based on sidebar state
    <div className={`p-5 sm:p-8 transition-all duration-300 ${
      isSidebarMinimized ? 'ml-20' : 'ml-0 sm:ml-72'
    }`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Settings</h1>
        
        <div className="bg-white rounded-lg shadow">
          <TabGroup>
            <div className="sm:flex">
              <TabList className="sm:w-64 border-r border-gray-200">
                {tabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    className={({ selected }) =>
                      `w-full flex items-center px-4 py-3 text-sm font-medium
                      ${selected 
                        ? 'bg-yellow-50 text-yellow-600 border-r-2 border-yellow-500' 
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`
                    }
                  >
                    {tab.icon}
                    <span className="ml-3">{tab.name}</span>
                  </Tab>
                ))}
              </TabList>

              <TabPanels className="flex-1 p-6">
                {tabs.map((tab) => (
                  <TabPanel key={tab.name}>
                    <tab.component />
                  </TabPanel>
                ))}
              </TabPanels>
            </div>
          </TabGroup>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;