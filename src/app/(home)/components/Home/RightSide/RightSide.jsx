"use client";

import { Search, MoreHorizontal, Video, Edit, Plus } from "lucide-react";
import Image from "next/image";

const contacts = [
  {
    id: 1,
    name: "Sarah Wilson",
    img: "/logos/user.png",
    status: "online",
    msg: "Hey! Are we still on?",
  },
  {
    id: 2,
    name: "John Doe",
    img: "/logos/user.png",
    status: "online",
    msg: "The design looks great!",
  },
  {
    id: 3,
    name: "Alamin Islam",
    img: "/logos/user.png",
    status: "offline",
    msg: "See you tomorrow.",
  },
  {
    id: 4,
    name: "Alex Tech",
    img: "/logos/user.png",
    status: "online",
    msg: "Check the new repo.",
  },
];

function RightSide({ onSelectChat }) {
  return (
    <div className=" h-[calc(100vh-80px)] sticky top-20 p-4 overflow-y-auto no-scrollbar border-l border-gray-100 dark:border-dark-border bg-white dark:bg-dark-bg">
      {/* --- HEADER --- */}
      <div className="flex items-center justify-between text-gray-500 dark:text-gray-400 mb-4">
        <h2 className="font-semibold text-gray-900 dark:text-white">
          Contacts
        </h2>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <Video size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <Search size={18} />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      {/* --- CONTACT LIST --- */}
      <div className="space-y-1">
        {contacts.map((user) => (
          <div
            key={user.id}
            onClick={() => onSelectChat(user)}
            className="flex items-center gap-3 p-2 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-all group"
          >
            <div className="relative shrink-0">
              <Image
                src={user.img}
                width={36}
                height={36}
                alt={user.name}
                className="rounded-full object-cover border border-gray-200 dark:border-gray-700"
              />
              {user.status === "online" && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-dark-bg rounded-full"></span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate group-hover:text-Primary transition-colors">
                {user.name}
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100 dark:border-dark-border">
        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3 px-2">
          Group Conversations
        </h3>
        <button className="flex items-center gap-3 w-full p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all text-gray-600 dark:text-gray-300">
          <div className="w-9 h-9 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <Plus size={20} />
          </div>
          <span className="text-sm font-medium">Create New Group</span>
        </button>
      </div>
    </div>
  );
}

export default RightSide;
