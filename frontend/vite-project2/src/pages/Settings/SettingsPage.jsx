// src/pages/Settings/SettingsPage.jsx
import { useState } from 'react';
import { Bell, User, Palette, Shield, Globe } from 'lucide-react';
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/react';
import ProfileSettings from '../../components/Setting/ProfileSettings';
import NotificationSettings from '../../components/Setting/NotificationSettings';
import ThemeSettings from '../../components/Setting/ThemeSettings';
import PrivacySettings from '../../components/Setting/PrivacySettings';
import RegionSettings from '../../components/Setting/RegionSettings';

const SettingsPage = () => {
  const tabs = [
    { name: 'Profile', icon: <User className="w-5 h-5" />, component: ProfileSettings },
    { name: 'Notifications', icon: <Bell className="w-5 h-5" />, component: NotificationSettings },
    { name: 'Theme', icon: <Palette className="w-5 h-5" />, component: ThemeSettings },
    { name: 'Privacy', icon: <Shield className="w-5 h-5" />, component: PrivacySettings },
    { name: 'Region', icon: <Globe className="w-5 h-5" />, component: RegionSettings }
  ];

  return (
    <div className="ml-0 sm:ml-64 p-4 sm:p-8 transition-all duration-300 min-h-screen">
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