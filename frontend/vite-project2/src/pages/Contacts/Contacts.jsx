import { useState } from "react";
import { Search, MoreVertical, CheckCheck, Send } from "lucide-react";

const chats = [
  { name: "Client - John Doe", message: "Looking for a contractor to build my new house.", time: "02:01", unread: true },
  { name: "Company - BuildIt Inc.", message: "We have an offer on premium construction materials.", time: "Yesterday" },
  { name: "Client - Sarah Lee", message: "Need renovation advice for my kitchen.", time: "Yesterday" },
  { name: "Company - ConstructPro", message: "Special discounts available this month.", time: "Monday" },
  { name: "Client - Mark Spencer", message: "Requesting a quote for office remodeling.", time: "Monday" },
  { name: "Company - Urban Builders", message: "Project updates for your commercial building.", time: "Monday" },
  { name: "Client - Emma Watson", message: "Consultation request for interior design.", time: "Friday" },
];

export default function WhatsAppWebUI() {
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const [message, setMessage] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-[700px] h-[700px] bg-white shadow-lg flex">
        {/* Sidebar */}
        <div className="w-1/3 border-r flex flex-col bg-yellow-500">
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-xl font-semibold text-black">Chats</h2>
            <Search className="w-5 h-5 text-black" />
          </div>
          <div className="flex-1 overflow-y-auto">
            {chats.map((chat, index) => (
              <div
                key={index}
                className={`p-3 border-b flex justify-between cursor-pointer hover:bg-yellow-400 bg-white ${
                  selectedChat.name === chat.name ? "bg-yellow-300" : ""
                }`}
                onClick={() => setSelectedChat(chat)}
              >
                <div>
                  <h3 className="font-semibold text-black">{chat.name}</h3>
                  <p className="text-sm text-gray-600">{chat.message}</p>
                </div>
                <span className="text-sm text-gray-500">{chat.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="w-2/3 flex flex-col">
          <div className="flex items-center justify-between p-4 bg-yellow-500 border-b">
            <h2 className="text-xl font-semibold text-black">{selectedChat.name}</h2>
            <MoreVertical className="w-5 h-5 text-black" />
          </div>
          <div className="flex-1 flex flex-col justify-end p-4 bg-white">
            <div className="flex flex-col">
              <div className="bg-white p-2 rounded-lg self-end mb-2 max-w-xs shadow-md">
                <p>{selectedChat.message}</p>
                <span className="text-xs text-gray-600 flex justify-end">02:00 <CheckCheck className="w-4 h-4 text-gray-500 inline" /></span>
              </div>
              <div className="bg-gray-200 p-2 rounded-lg self-start mb-2 max-w-xs shadow-md">
                <p>We would love to assist you with that!</p>
                <span className="text-xs text-gray-600 flex justify-end">02:01</span>
              </div>
            </div>
          </div>
          {/* Typing Input */}
          <div className="p-4 border-t flex items-center bg-white">
            <input
              type="text"
              className="flex-1 p-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-500"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="ml-2 p-2 bg-yellow-500 rounded-lg text-white hover:bg-yellow-600">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
