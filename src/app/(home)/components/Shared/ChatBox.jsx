"use client";

import { X, Phone, Video, Info, Smile, Send, PlusCircle } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function ChatBox({ user, onClose }) {
  const [message, setMessage] = useState("");
  // 1. ADD STATE FOR MESSAGE HISTORY
  const [chatHistory, setChatHistory] = useState([
    { id: 1, text: "Hey! How is the project going?", sender: "them" },
  ]);

  const scrollRef = useRef(null);

  // 2. AUTO-SCROLL TO BOTTOM WHEN NEW MESSAGE ARRIVES
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    // 3. PUSH NEW MESSAGE TO ARRAY
    const newMessage = {
      id: Date.now(),
      text: message,
      sender: "me", // Mark as sent by user
    };

    setChatHistory([...chatHistory, newMessage]);
    setMessage(""); // Clear input
  };

  return (
    <div className="fixed bottom-6 right-6 w-82.5 bg-white dark:bg-gray-900 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-800 z-60 animate-in slide-in-from-bottom-5 overflow-hidden">
      {/* HEADER SECTION (Keep your existing header code here) */}
      <div className="flex items-center justify-between p-3 border-b border-gray-100 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <Image
            src={user.img || "/logos/user.png"}
            width={34}
            height={34}
            className="rounded-full"
            alt=""
          />
          <h4 className="text-sm font-bold dark:text-white">{user.name}</h4>
        </div>
        <div className="flex items-center gap-1 text-Primary">
          <Phone size={18} className="cursor-pointer" />
          <Video size={18} className="cursor-pointer" />
          <X
            size={20}
            onClick={onClose}
            className="cursor-pointer text-gray-400 ml-2"
          />
        </div>
      </div>

      {/* --- UPDATED CHAT AREA --- */}
      <div
        ref={scrollRef}
        className="h-72 overflow-y-auto p-4 flex flex-col gap-3 bg-gray-50/50 dark:bg-dark-bg/30 scroll-smooth"
      >
        {chatHistory.map((chat) => (
          <div
            key={chat.id}
            className={`max-w-[80%] p-2.5 rounded-2xl text-sm ${
              chat.sender === "me"
                ? "self-end bg-Primary text-white rounded-br-none" // Style for your messages
                : "self-start bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none" // Style for friend messages
            }`}
          >
            {chat.text}
          </div>
        ))}
      </div>

      {/* FOOTER SECTION */}
      <div className="p-3 border-t border-gray-100 dark:border-gray-800">
        <form onSubmit={handleSend} className="flex items-center gap-2">
          <PlusCircle size={20} className="text-Primary cursor-pointer" />
          <div className="relative flex-1">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Aa"
              className="w-full bg-gray-100 dark:bg-gray-800 py-1.5 px-4 rounded-full text-sm outline-none focus:ring-1 focus:ring-Primary dark:text-white"
            />
            <Smile
              size={18}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
          <button type="submit" disabled={!message.trim()}>
            <Send
              size={20}
              className={message.trim() ? "text-Primary" : "text-gray-300"}
            />
          </button>
        </form>
      </div>
    </div>
  );
}
