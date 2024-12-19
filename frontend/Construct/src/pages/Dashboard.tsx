import React from 'react';
import { Users, Building, Activity } from 'lucide-react';

const StatCard = ({ icon: Icon, label, value, change }: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  change?: { value: number; type: 'increase' | 'decrease' };
}) => (
  <div className="bg-white p-6 rounded-lg shadow-sm">
    <div className="flex items-center gap-4">
      <div className="bg-yellow-400 p-3 rounded-full">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-gray-600">{label}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
        {change && (
          <p className={`text-sm ${change.type === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
            {change.type === 'increase' ? '↑' : '↓'} {change.value}% this month
          </p>
        )}
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          icon={Building}
          label="Total Projects"
          value={65}
          change={{ value: 2, type: 'increase' }}
        />
        <StatCard
          icon={Activity}
          label="Active Projects"
          value={11}
        />
        <StatCard
          icon={Users}
          label="Customers"
          value={70}
          change={{ value: 1, type: 'decrease' }}
        />
      </div>
    </div>
  );
};

export default Dashboard;