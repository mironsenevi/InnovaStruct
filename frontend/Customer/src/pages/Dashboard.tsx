import { Building2, FileText, Users, Package } from 'lucide-react';

export default function Dashboard() {
  const cards = [
    {
      title: 'View Constructors',
      icon: Users,
      color: 'bg-yellow-500',
      link: '/constructors'
    },
    {
      title: 'Call a tender',
      icon: FileText,
      color: 'bg-yellow-500',
      link: '/tenders'
    },
    {
      title: 'My Projects',
      icon: Building2,
      color: 'bg-yellow-500',
      link: '/projects'
    },
    {
      title: 'View My Profile',
      icon: Package,
      color: 'bg-yellow-500',
      link: '/profile'
    }
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Hello Chiran 👋</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          
          return (
            <a
              key={card.title}
              href={card.link}
              className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mb-4`}>
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold">{card.title}</h3>
            </a>
          );
        })}
      </div>
    </div>
  );
}