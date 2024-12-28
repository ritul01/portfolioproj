import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([{ text: "Hi! How can I help you?", sender: "bot" }]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user's message
    setMessages((prev) => [...prev, { text: input, sender: "user" }]);

    // Simulate bot response (replace with an API call)
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "I'm still learning, but feel free to explore!", sender: "bot" }]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 bg-white shadow-lg rounded-lg w-80">
      <div className="bg-blue-500 text-white text-lg font-bold p-3 rounded-t-lg">
        Chat with Me
      </div>
      <div className="p-3 h-64 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <span
              className={`px-4 py-2 rounded-lg ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center p-3 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
