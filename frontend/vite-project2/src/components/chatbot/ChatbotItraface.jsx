import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

const ChatbotInterface = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    // Add user message
    setMessages(prev => [...prev, { text: message, sender: 'user' }]);
    
    // TODO: Implement API call to backend
    // Simulate bot response for now
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for your message. How can I help you?", 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[600px] w-[400px] border rounded-lg shadow-lg">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">InnovaStruct Assistant</h2>
      </div>
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatbotInterface;git
import React, { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

const ChatbotInterface = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    // Add user message
    setMessages(prev => [...prev, { text: message, sender: 'user' }]);
    
    // TODO: Implement API call to backend
    // Simulate bot response for now
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thanks for your message. How can I help you?", 
        sender: 'bot' 
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[600px] w-[400px] border rounded-lg shadow-lg">
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold">InnovaStruct Assistant</h2>
      </div>
      <ChatMessages messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatbotInterface;git