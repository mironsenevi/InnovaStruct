import { Bell, Mail, User } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Notifications</h2>
          <button className="text-blue-500 text-sm">Mark all read</button>
        </div>
        <div className="space-y-4">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50">
              <User className="w-10 h-10 text-gray-500" />
              <div className="flex-1">
                <p className="text-gray-700 font-medium">
                  {index === 0 && "The foundation work is complete."}
                  {index === 1 && "The framework for the building has been erected."}
                  {index === 2 && "Electrical wiring installation is finished."}
                  {index === 3 && "Plumbing work is now completed."}
                  {index === 4 && "The roof installation has been completed."}
                  {index === 5 && "Final inspection of the construction site is done."}
                </p>
                <p className="text-gray-500 text-sm">February {15 - index}, 2024</p>
              </div>
              <Bell className="w-5 h-5 text-red-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
