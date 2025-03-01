import CompanyNavbar from 'e:/InnovaStruct/frontend/vite-project2/src/components/companyNavbar';
import { Building2, FileText, Users, Settings, Plus } from "lucide-react";

const CompanyHome = () => {
  return (
    <div>
      <CompanyNavbar />
      <div className="space-y-6 p-6">
        {/* Welcome Banner */}
        <div className="bg-yellow-500 text-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold">Welcome to Company Dashboard</h1>
        </div>

        {/* Featured Project */}
        <div className="bg-white rounded-lg overflow-hidden shadow">
          <img
            src="path/to/your/image.jpg"
            alt="Building Renovation"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold">Building Renovation</h2>
            <p className="text-gray-600">Historic building renovation project in Kandy</p>
            <div className="mt-2 text-sm text-gray-500">
              <span>Posted by: Heritage Constructors</span>
            </div>
            <div className="flex mt-2">
              <div className="flex space-x-1">
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full"></span>
                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DashboardCard icon={<Building2 size={32} />} title="Companies" description="Manage your company profiles and details" />
          <DashboardCard icon={<FileText size={32} />} title="Tenders" description="Access and manage tender documents" />
          <DashboardCard icon={<Users size={32} />} title="Contacts" description="View and manage your business contacts" />
          <DashboardCard icon={<Settings size={32} />} title="Settings" description="Customize your account options" />
        </div>

        {/* Test Company Profile Button */}
        <div className="flex justify-center mt-8">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-md">
            Test Company Profile
          </button>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ icon, title, description }) {
  return (
    <div className="bg-yellow-500 text-white p-6 rounded-lg shadow flex items-center space-x-4">
      {icon}
      <div>
        <h4 className="text-xl font-bold">{title}</h4>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}

export default CompanyHome;
