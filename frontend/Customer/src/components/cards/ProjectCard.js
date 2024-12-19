export default function ProjectCard({ title, icon: Icon, color, link }) {
  return (
    <a
      href={link}
      className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="text-white" size={24} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </a>
  );
}