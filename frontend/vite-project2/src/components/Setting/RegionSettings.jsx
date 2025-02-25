import { useState } from 'react';


const RegionSettings = () => {
  const [region, setRegion] = useState({
    country: 'LK',
    timezone: 'Asia/Colombo',
    language: 'en'
  });

  const countries = [
    { code: 'LK', name: 'Sri Lanka' },
    { code: 'IN', name: 'India' },
    { code: 'US', name: 'United States' }
  ];

  const timezones = [
    'Asia/Colombo',
    'Asia/Kolkata',
    'America/New_York'
  ];

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'si', name: 'Sinhala' },
    { code: 'ta', name: 'Tamil' }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Region Settings</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select
            value={region.country}
            onChange={(e) => setRegion({ ...region, country: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          >
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Time Zone</label>
          <select
            value={region.timezone}
            onChange={(e) => setRegion({ ...region, timezone: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          >
            {timezones.map((timezone) => (
              <option key={timezone} value={timezone}>
                {timezone}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Language</label>
          <select
            value={region.language}
            onChange={(e) => setRegion({ ...region, language: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
          >
            {languages.map((language) => (
              <option key={language.code} value={language.code}>
                {language.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default RegionSettings;