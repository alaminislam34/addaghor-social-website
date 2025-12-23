"use client";

import {
  Bookmark,
  ChevronDown,
  Clock,
  Flag,
  MonitorPlay,
  Store,
  Users,
} from "lucide-react";
import Image from "next/image";

function LeftSidebar() {
  return (
    <aside className="flex flex-col xl:w-[320px] h-[calc(100vh-76px)] lg:h-[calc(100vh-80px)] sticky top-20 no-scrollbar p-4 overflow-y-auto custom-scrollbar bg-transparent">
      {/* User Profile Section */}
      <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-light-surface-hover dark:hover:bg-dark-surface-hover cursor-pointer transition-all group">
        <div className="relative w-9 h-9 rounded-full overflow-hidden border border-light-border dark:border-dark-border">
          <Image
            src="/logos/user.png"
            alt="User"
            fill
            className="object-cover"
          />
        </div>
        <span className="font-bold text-sm text-light-text-primary dark:text-dark-text-primary">
          Al Amin Islam
        </span>
      </div>

      <nav className="mt-2 space-y-1">
        <SidebarItem
          icon={<Users className="text-blue-500" />}
          label="Friends"
        />
        <SidebarItem
          icon={<Bookmark className="text-purple-500" />}
          label="Saved"
        />
        <SidebarItem
          icon={<Clock className="text-blue-400" />}
          label="Memories"
        />
        <SidebarItem
          icon={<Flag className="text-orange-500" />}
          label="Pages"
        />
        <SidebarItem
          icon={<MonitorPlay className="text-Primary" />}
          label="Video"
        />
        <SidebarItem
          icon={<Store className="text-blue-600" />}
          label="Marketplace"
        />

        <button className="w-full flex items-center gap-3 p-2.5 rounded-xl hover:bg-light-surface-hover dark:hover:bg-dark-surface-hover transition-all">
          <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-dark-border flex items-center justify-center">
            <ChevronDown
              size={20}
              className="text-light-text-primary dark:text-dark-text-primary"
            />
          </div>
          <span className="text-sm font-semibold text-light-text-primary dark:text-dark-text-primary">
            See more
          </span>
        </button>
      </nav>

      <div className="h-px bg-light-border dark:bg-dark-border my-4 mx-2" />

      {/* Shortcuts Section */}
      <div className="px-2 mb-2 flex justify-between items-center group/title">
        <h3 className="text-[15px] font-bold text-light-text-secondary dark:text-dark-text-secondary">
          Your Shortcuts
        </h3>
        <button className="text-xs text-Primary opacity-0 group-hover/title:opacity-100 transition-opacity">
          Edit
        </button>
      </div>

      <div className="space-y-1">
        <ShortcutItem
          img="/logos/group1.png"
          label="React Developers Bangladesh"
        />
        <ShortcutItem img="/logos/group2.png" label="Next.js Community" />
        <ShortcutItem img="/logos/group3.png" label="UI/UX Designers" />
      </div>

      {/* Footer Links */}
      <div className="mt-auto pt-8 px-2 pb-4 text-[12px] text-light-text-disabled dark:text-dark-text-disabled leading-relaxed">
        <p className="hover:underline cursor-pointer inline">Privacy</p> ·
        <p className="hover:underline cursor-pointer inline"> Terms</p> ·
        <p className="hover:underline cursor-pointer inline"> Advertising</p> ·
        <p className="hover:underline cursor-pointer inline"> Cookies</p> ·
        <span>AddaGhor © 2024</span>
      </div>
    </aside>
  );
}

// Sub-component for Menu Items
function SidebarItem({ icon, label }) {
  return (
    <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-light-surface-hover dark:hover:bg-dark-surface-hover cursor-pointer transition-all group">
      <div className="w-9 h-9 flex items-center justify-center scale-110 group-hover:scale-125 transition-transform duration-200">
        {icon}
      </div>
      <span className="text-sm font-semibold text-light-text-primary dark:text-dark-text-primary">
        {label}
      </span>
    </div>
  );
}

// Sub-component for Shortcut Items
function ShortcutItem({ img, label }) {
  return (
    <div className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-light-surface-hover dark:hover:bg-dark-surface-hover cursor-pointer transition-all">
      <div className="w-9 h-9 relative rounded-lg overflow-hidden border border-light-border dark:border-dark-border">
        <div className="absolute inset-0 bg-Primary/10 flex items-center justify-center text-[10px] font-bold text-Primary">
          {label.substring(0, 1)}
        </div>
      </div>
      <span className="text-sm font-medium text-light-text-secondary dark:text-dark-text-secondary truncate">
        {label}
      </span>
    </div>
  );
}

export default LeftSidebar;
