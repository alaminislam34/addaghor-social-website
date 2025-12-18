"use client";

import {
  Bell,
  ChevronDown,
  Group,
  Home,
  LayoutGrid,
  Tv,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [showUserModal, setShowUserModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  return (
    <div className="bg-white dark:bg-dark shadow py-4 fixed top-0 left-0 w-full z-50">
      <nav className="max-w-360 mx-auto w-11/12 flex items-center justify-between relative">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-Primary">
            AddaGhor
          </h1>
        </div>
        <div className="lg:block hidden">
          <ul className="flex flex-row gap-6 items-center text-Primary *:py-2 *:px-4 *:rounded-lg *:bg-gray-100 *:cursor-pointer *:hover:bg-Primary/10 *:dark:bg-Primary/20">
            <li>
              <Home size={20} />
            </li>
            <li>
              <Users size={20} />
            </li>
            <li>
              <Tv size={20} />
            </li>
            <li>
              <Group size={20} />
            </li>
          </ul>
        </div>
        <div className="flex items-center flex-row gap-4 ">
          <button className="w-10 h-10 ring-2 ring-Primary rounded-full flex items-center justify-center text-Primary font-semibold">
            <LayoutGrid size={20} />
          </button>
          <button
            onClick={() => {
              setShowNotification(!showNotification);
              if (showUserModal) {
                setShowUserModal(false);
              }
            }}
            className="w-10 h-10 ring-2 ring-Primary rounded-full flex items-center justify-center text-Primary font-semibold"
          >
            <Bell size={20} />
          </button>
          <div className="relative cursor-pointer">
            <Image
              onClick={() => {
                setShowUserModal(!showUserModal);
                if (showNotification) {
                  setShowNotification(false);
                }
              }}
              src={"/logos/user.png"}
              height={400}
              width={400}
              alt="User image"
              className="w-11 h-11 border-2 border-Primary object-cover bg-cover bg-center rounded-full cursor-pointer"
            />
            <span className="absolute border rounded-full border-gray-100 dark:border-gray-700 bg-gray-50 text-gray-300 dark:text-gray-400 dark:bg-Primary/50 -bottom-1 -right-1">
              <ChevronDown size={18} />
            </span>
          </div>
          {/* User detail dropdown */}
          {showUserModal && (
            <div className="max-w-70 w-full z-50 border border-gray-100 shadow-2xl shadow-black/5 absolute top-14 right-0 p-2 rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200">
              {/* User Profile Header */}
              <div className="p-3 mb-1 flex items-center gap-3">
                <div className="relative">
                  <Image
                    src={"/logos/user.png"}
                    height={44}
                    width={44}
                    alt="User image"
                    className="w-11 h-11 border-2 border-Primary/20 object-cover rounded-full shadow-sm"
                  />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Al Amin Islam
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    alamin@example.com
                  </p>
                </div>
              </div>

              <div className="h-px bg-gray-100 dark:bg-zinc-800 my-1 mx-2"></div>

              {/* Navigation Links */}
              <div className="p-1">
                <ul className="space-y-0.5">
                  <li>
                    <Link
                      href={"/profile"}
                      className="flex items-center gap-3 py-2.5 px-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <span className="w-5 h-5 opacity-70">👤</span>
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/settings"}
                      className="flex items-center gap-3 py-2.5 px-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <span className="w-5 h-5 opacity-70">⚙️</span>
                      Account Settings
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/billing"}
                      className="flex items-center gap-3 py-2.5 px-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                    >
                      <span className="w-5 h-5 opacity-70">💳</span>
                      Billing & Plans
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="h-px bg-gray-100 dark:bg-zinc-800 my-1 mx-2"></div>

              {/* Footer / Logout */}
              <div className="p-1">
                <button className="w-full mt-1 flex items-center gap-3 py-2.5 px-3 text-sm font-semibold text-red-600 dark:text-red-400 rounded-lg hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors">
                  <span className="w-5 h-5">📤</span>
                  Log out
                </button>
              </div>
            </div>
          )}
          {/* Notification Dropdown */}
          {showNotification && (
            <div className="max-w-[320px] md:max-w-95 w-full z-50 border border-gray-100 shadow-2xl shadow-black/5 absolute top-14 right-0 overflow-hidden rounded-2xl bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
              {/* Header */}
              <div className="p-4 flex items-center justify-between border-b border-gray-100 dark:border-zinc-800">
                <div>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                    Notifications
                  </h3>
                  <p className="text-[11px] text-gray-500">
                    You have 3 unread messages
                  </p>
                </div>
                <button className="text-[11px] font-medium text-Primary hover:underline">
                  Mark all as read
                </button>
              </div>

              {/* Notification List */}
              <div className="max-h-87.5 overflow-y-auto custom-scrollbar">
                <ul className="divide-y divide-gray-50 dark:divide-zinc-800/50">
                  {/* Item 1 (Unread) */}
                  <li className="relative bg-Primary/5 dark:bg-Primary/10 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer p-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                        📦
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-gray-800 dark:text-gray-200 leading-tight">
                          <span className="font-semibold">Order #1234</span> has
                          been shipped successfully.
                        </p>
                        <span className="text-[11px] text-Primary font-medium">
                          2 mins ago
                        </span>
                      </div>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-Primary rounded-full"></div>
                    </div>
                  </li>

                  {/* Item 2 (Read) */}
                  <li className="hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer p-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600">
                        💰
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                          Payment received from{" "}
                          <span className="font-semibold text-gray-800 dark:text-gray-200">
                            Al Amin
                          </span>
                        </p>
                        <span className="text-[11px] text-gray-400">
                          1 hour ago
                        </span>
                      </div>
                    </div>
                  </li>

                  {/* Item 3 (Read) */}
                  <li className="hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors cursor-pointer p-4">
                    <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600">
                        🎉
                      </div>
                      <div className="flex flex-col gap-1">
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-tight">
                          Your premium subscription has been activated!
                        </p>
                        <span className="text-[11px] text-gray-400">
                          Yesterday
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Footer */}
              <Link
                href="/notifications"
                className="block w-full py-3 text-center text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-50/50 dark:bg-zinc-800/50 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors border-t border-gray-100 dark:border-zinc-800"
              >
                View All Notifications
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
