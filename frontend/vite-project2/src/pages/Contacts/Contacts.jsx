import { useState } from "react";
import { Bell, Mail, User, X } from "lucide-react";

const notifications = [
  { id: 1, user: "Construction Team", message: "has started excavation work at the new site.", date: "March 1, 2024" },
  { id: 2, user: "Site Manager", message: "reported a delay due to unexpected weather conditions.", date: "March 2, 2024" },
  { id: 3, user: "Safety Officer", message: "reminded all workers to wear safety gear at all times.", date: "March 3, 2024" },
  { id: 4, user: "Logistics Team", message: "confirmed the delivery of concrete materials for foundation work.", date: "March 4, 2024" },
];

export default function Contact() {
  const [selectedNotification, setSelectedNotification] = useState(null);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white text-black p-6">
      <div className="bg-yellow-500 shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Notifications</h2>
          <button className="text-black text-sm">Mark all read</button>
        </div>
        <div className="space-y-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex items-center gap-4 p-4 border rounded-lg bg-white text-black cursor-pointer"
              onClick={() => setSelectedNotification(notification)}
            >
              <User className="w-10 h-10 text-gray-700" />
              <div className="flex-1">
                <p className="font-medium">{notification.user} {notification.message}</p>
                <p className="text-gray-500 text-sm">{notification.date}</p>
              </div>
              <Bell className="w-5 h-5 text-red-500" />
            </div>
          ))}
        </div>
      </div>
      {selectedNotification && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black rounded-lg p-6 w-96 shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setSelectedNotification(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-xl font-semibold mb-2">Message from {selectedNotification.user}</h3>
            <p className="text-gray-700">{selectedNotification.message}</p>
            <p className="text-gray-500 text-sm mt-2">{selectedNotification.date}</p>
          </div>
        </div>
      )}
    </div>
  );
}
