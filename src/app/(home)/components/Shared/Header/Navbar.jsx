"use client";

import {
  Bell,
  ChevronDown,
  Group,
  Home,
  LayoutGrid,
  MessageCircle,
  Tv,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useClickOutside } from "../../../../hooks/useClickOutside";
import {
  UserDropdown,
  MenuDropdown,
  MessageDropdown,
  NotificationDropdown,
} from "../NavbarDropDowns";
import ChatBox from "../ChatBox";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeChat, setActiveChat] = useState(null);
  const navRef = useRef(null);

  useClickOutside(navRef, () => setActiveDropdown(null));

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-dark-bg border-b border-gray-100 dark:border-dark-border transition-colors">
      <nav
        ref={navRef}
        className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-20 relative"
      >
        <Link href="/" className="shrink-0">
          <h1 className="text-xl md:text-2xl font-bold text-Primary">
            AddaGhor
          </h1>
        </Link>

        {/* Center Links */}
        <div className="hidden lg:block">
          <ul className="flex flex-row gap-6 items-center">
            {[Home, Users, Tv, Group].map((Icon, i) => (
              <li
                key={i}
                className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-500 hover:bg-orange-50 hover:text-Primary dark:hover:bg-orange-900/20 dark:hover:text-orange-400 cursor-pointer transition-all"
              >
                <Icon size={22} strokeWidth={2} />
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <div className="relative">
            <NavButton
              icon={<LayoutGrid size={20} />}
              isActive={activeDropdown === "menu"}
              onClick={() => toggleDropdown("menu")}
            />
          </div>
          {activeDropdown === "menu" && (
            <MenuDropdown onClose={() => setActiveDropdown(null)} />
          )}

          <div className="relative">
            <NavButton
              icon={<MessageCircle size={20} />}
              isActive={activeDropdown === "message"}
              onClick={() => toggleDropdown("message")}
              badge={5}
            />
          </div>
          {activeDropdown === "message" && (
            <MessageDropdown
              onSelectChat={(user) => {
                setActiveChat(user); // Set the chat user
                setActiveDropdown(null); // Close the dropdown
              }}
            />
          )}

          <div className="relative">
            <NavButton
              icon={<Bell size={20} />}
              isActive={activeDropdown === "notification"}
              onClick={() => toggleDropdown("notification")}
              badge={3}
            />
          </div>
          {activeDropdown === "notification" && <NotificationDropdown />}

          <div className="relative ml-1">
            <div
              onClick={() => toggleDropdown("user")}
              className="flex items-center gap-1 cursor-pointer p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 border border-transparent hover:border-gray-200 transition-all"
            >
              <Image
                src="/logos/user.png"
                height={38}
                width={38}
                alt="User"
                className="w-9.5 h-9.5 rounded-full object-cover border border-gray-200"
              />
              <ChevronDown
                size={14}
                className={`text-gray-400 transition-transform duration-200 ${
                  activeDropdown === "user" ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
          {activeDropdown === "user" && <UserDropdown />}
        </div>

        {/* The Floating Chat Box */}
        {activeChat && (
          <ChatBox user={activeChat} onClose={() => setActiveChat(null)} />
        )}
      </nav>
    </div>
  );
}

function NavButton({ icon, isActive, onClick, badge }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-10 h-10 rounded-full flex items-center justify-center transition-all relative
        ${
          isActive
            ? "bg-orange-100 text-Primary dark:bg-orange-900/30 dark:text-orange-400"
            : "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
        }
      `}
    >
      {badge > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white dark:border-dark-bg min-w-5 text-center">
          {badge}
        </span>
      )}
      {icon}
    </button>
  );
}
