import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeSettings = () => {
  const [theme, setTheme] = useState('light');
  const [fontSize, setFontSize] = useState('medium');

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Theme Settings</h2>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Theme Mode</h3>
          <div className="flex space-x-4">
            <button
              className={`flex items-center px-4 py-2 rounded-md ${
                theme === 'light' 
                  ? 'bg-yellow-100 text-yellow-700' 
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setTheme('light')}
            >
              <Sun className="w-5 h-5 mr-2" />
              Light
            </button>
            <button
              className={`flex items-center px-4 py-2 rounded-md ${
                theme === 'dark' 
                  ? 'bg-yellow-100 text-yellow-700' 
                  : 'bg-gray-100 text-gray-700'
              }`}
              onClick={() => setTheme('dark')}
            >
              <Moon className="w-5 h-5 mr-2" />
              Dark
            </button>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Font Size</h3>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;