"use client";

import { LOGOUT } from "@/api/apiEndPoint";
import axios from "axios";
import {
  Home,
  Users,
  Tv,
  Group,
  LogOut,
  Settings,
  CreditCard,
  User,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

// --- 1. MESSAGE DROPDOWN (UPDATED) ---
export function MessageDropdown({ onSelectChat }) {
  const messages = [
    {
      id: 1,
      name: "Sarah Wilson",
      msg: "Hey! Are we still on for the meeting today?",
      time: "2m ago",
      img: "/logos/user.png",
      unread: true,
    },
    {
      id: 2,
      name: "Dev Team",
      msg: "Alex pushed new changes to the main branch.",
      time: "1h ago",
      img: "/logos/user.png",
      unread: true,
    },
    {
      id: 3,
      name: "Marketing Group",
      msg: "Can we review the campaign assets?",
      time: "3h ago",
      img: "/logos/user.png",
      unread: false,
    },
  ];

  return (
    <div className="absolute top-20 right-6 w-90 origin-top-right rounded-2xl border border-gray-100 bg-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 dark:border-gray-800 dark:bg-gray-900 z-50 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
        <h3 className="font-bold text-gray-900 dark:text-white">Messages</h3>
        <Link
          href="/messages"
          className="text-xs font-medium text-blue-600 hover:text-blue-700"
        >
          Open Chat
        </Link>
      </div>

      <div className="max-h-87.5 overflow-y-auto">
        {messages.map((m) => (
          <div
            key={m.id}
            onClick={() => onSelectChat(m)} // <--- Added this click handler
            className={`flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors border-b border-gray-50 dark:border-gray-800/50 ${
              m.unread ? "bg-blue-50/30 dark:bg-blue-900/10" : ""
            }`}
          >
            <div className="relative shrink-0">
              <Image
                src={m.img}
                width={40}
                height={40}
                alt={m.name}
                className="rounded-full object-cover w-10 h-10 border border-gray-200 dark:border-gray-700"
              />
              {m.unread && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h4
                  className={`text-sm truncate ${
                    m.unread
                      ? "font-bold text-gray-900 dark:text-white"
                      : "font-medium text-gray-700 dark:text-gray-300"
                  }`}
                >
                  {m.name}
                </h4>
                <span className="text-[10px] text-gray-400">{m.time}</span>
              </div>
              <p
                className={`text-xs truncate ${
                  m.unread
                    ? "text-gray-800 dark:text-gray-200 font-medium"
                    : "text-gray-500"
                }`}
              >
                {m.msg}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Link
        href="/messages"
        className="block w-full py-2.5 text-center text-xs font-semibold text-gray-500 border-t border-gray-100 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-800 transition-colors"
      >
        See all messages
      </Link>
    </div>
  );
}

// --- 2. NOTIFICATION DROPDOWN ---
export function NotificationDropdown() {
  return (
    <div className="absolute top-20 right-6 w-90 origin-top-right rounded-2xl border border-gray-100 bg-white shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 dark:border-gray-800 dark:bg-gray-900 z-50 overflow-hidden">
      <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
        <div>
          <h3 className="text-sm font-bold text-gray-900 dark:text-white">
            Notifications
          </h3>
          <p className="text-[11px] text-gray-500 mt-0.5">
            You have 3 unread messages
          </p>
        </div>
        <button className="text-[11px] font-medium text-blue-600 hover:bg-blue-50 px-2 py-1 rounded transition-colors">
          Mark read
        </button>
      </div>

      <div className="max-h-100 overflow-y-auto">
        {/* Notif Item */}
        <div className="p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors relative group">
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0 text-blue-600">
              📦
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm text-gray-800 dark:text-gray-200 leading-snug">
                <span className="font-semibold">Order #1234</span> has been
                shipped successfully.
              </p>
              <span className="text-[11px] text-gray-400">2 mins ago</span>
            </div>
            <div className="absolute right-4 top-5 w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
        </div>
      </div>
      <Link
        href="/notifications"
        className="block w-full py-3 text-center text-sm font-semibold text-gray-600 hover:text-blue-600 bg-gray-50/50 hover:bg-gray-100 dark:bg-gray-800/50 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors border-t border-gray-100 dark:border-gray-800"
      >
        View All Notifications
      </Link>
    </div>
  );
}

// --- 3. MENU DROPDOWN ---
export function MenuDropdown({ onClose }) {
  const menuItems = [
    { icon: Home, label: "Feed" },
    { icon: Users, label: "Friends" },
    { icon: Tv, label: "Watch" },
    { icon: Group, label: "Communities" },
  ];

  return (
    <div className="absolute top-20 right-6 w-75 origin-top-right rounded-2xl border border-gray-100 bg-white shadow-xl animate-in fade-in zoom-in-95 duration-200 dark:border-gray-800 dark:bg-gray-900 z-50 overflow-hidden">
      <div className="p-2">
        <ul className="flex flex-col gap-1">
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={onClose}
              className="group flex cursor-pointer items-center justify-between rounded-xl p-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-blue-400 transition-all"
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className="stroke-[1.5]" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              <ChevronRight
                size={16}
                className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// --- 4. USER DROPDOWN ---
export function UserDropdown({ user }) {
  const router = useRouter();
  const handleLogout = async () => {
    const res = await axios.post(LOGOUT);
    if (res.status === 200) {
      toast.success("Logout successful");
      setTimeout(() => {
        router.push("/login");
      }, 1000);
    } else {
      console.log("something went wrong");
    }
  };
  return (
    <div className="absolute top-20 right-6 w-64 origin-top-right rounded-2xl border border-gray-100 bg-white shadow-xl animate-in fade-in zoom-in-95 duration-200 dark:border-gray-800 dark:bg-gray-900 z-50 p-2">
      <div className="p-3 mb-1 flex items-center gap-3">
        <Image
          src={"/logos/user.png"}
          height={44}
          width={44}
          alt="User"
          className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-sm"
        />
        <div>
          <h1 className="text-sm font-semibold text-gray-900 dark:text-white">
            {user.full_name}
          </h1>
          <p className="text-xs text-gray-500 truncate w-32">{user.email}</p>
        </div>
      </div>
      <div className="h-px bg-gray-100 dark:bg-gray-800 my-1 mx-2"></div>
      <ul className="flex flex-col gap-0.5">
        {[
          { label: "My Profile", icon: User, href: "/profile" },
          { label: "Settings", icon: Settings, href: "/settings" },
          { label: "Billing", icon: CreditCard, href: "/billing" },
        ].map((link, i) => (
          <li key={i}>
            <Link
              href={link.href}
              className="flex items-center gap-3 py-2 px-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <link.icon size={18} className="text-gray-400" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="h-px bg-gray-100 dark:bg-gray-800 my-1 mx-2"></div>
      <button
        onClick={handleLogout}
        className="w-full mt-1 flex items-center gap-3 py-2 px-3 text-sm font-semibold text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
      >
        <LogOut size={18} />
        Log out
      </button>
    </div>
  );
}
