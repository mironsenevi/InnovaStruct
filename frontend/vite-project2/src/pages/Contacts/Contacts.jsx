import { Bell, User } from "lucide-react";

const notifications = [
  { user: "Lucas Kennedy", message: "added a note in Amica On The Avenue. Both of your reviews from this trip are now public.", date: "February 15, 2024" },
  { user: "Cleveland Brown", message: "has left you a review. Both of your reviews from this trip are now public.", date: "February 15, 2024" },
  { user: "Glenn", message: "accepted your invite to co-host Cheerful 2-bedroom home in the heart of Quahog.", date: "February 2, 2024" },
  { user: "Glenn", message: "accepted your invite to co-host Cozy 3BR home minutes from downtown Quahog.", date: "February 1, 2024" },
  { user: "System", message: "Please confirm your email address by clicking on the link we just emailed you.", date: "January 29, 2024" },
  { user: "Cleveland Brown", message: "has left you a review. Both of your reviews from this trip are now public.", date: "January 28, 2024" }
];

export default function Contact() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Notifications</h2>
          <button className="text-blue-500 text-sm">Mark all read</button>
        </div>
        <div className="space-y-4">
          {notifications.map((notif, index) => (
            <div key={index} className="flex items-center gap-4 p-4 border rounded-lg bg-gray-50">
              <User className="w-10 h-10 text-gray-500" />
              <div className="flex-1">
                <p className="text-gray-700 font-medium">{notif.user} {notif.message}</p>
                <p className="text-gray-500 text-sm">{notif.date}</p>
              </div>
              <Bell className="w-5 h-5 text-red-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
