"use client";
import { Camera, Plus, Pencil } from "lucide-react";
import NextImage from "next/image"; // Alias use kora holo

export default function ProfileHeader() {
  return (
    <div className="bg-white dark:bg-[#242526] shadow">
      <div className="max-w-6xl mx-auto">
        {/* Cover Photo */}
        <div className="relative h-50 md:h-88 w-full bg-gray-200 rounded-b-lg overflow-hidden group">
          <NextImage
            src="/cover-placeholder.jpg" // Public folder-e ei image-ti thakte hobe
            fill
            priority // Header image-er jonno priority deya valo practice
            className="object-cover"
            alt="Cover"
          />
          <button className="absolute bottom-4 right-4 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg flex items-center gap-2 font-semibold text-sm shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            <Camera size={18} />
            <span className="hidden md:inline">Edit cover photo</span>
          </button>
        </div>

        {/* Profile Info Section */}
        <div className="px-4 pb-4">
          <div className="relative flex flex-col md:flex-row items-center md:items-end md:gap-4 -mt-12 md:-mt-16 mb-4">
            {/* Profile Pic */}
            <div className="relative group">
              <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-white dark:border-[#242526] overflow-hidden bg-gray-300">
                <NextImage
                  src="/user-placeholder.png"
                  fill
                  className="object-cover"
                  alt="Profile"
                />
              </div>
              <button className="absolute bottom-2 right-2 bg-gray-200 dark:bg-gray-700 p-2 rounded-full border border-white dark:border-gray-600 hover:bg-gray-300 transition">
                <Camera size={20} />
              </button>
            </div>

            {/* Name & Stats */}
            <div className="flex-1 text-center md:text-left pb-2">
              <h1 className="text-2xl md:text-3xl font-bold dark:text-white">
                Al Amin Islam
              </h1>
              <p className="text-gray-500 dark:text-gray-400 font-semibold">
                53 friends
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mt-4 md:mb-2">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-blue-700">
                <Plus size={18} /> Add to story
              </button>
              <button className="bg-gray-200 dark:bg-gray-700 dark:text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2 hover:bg-gray-300">
                <Pencil size={18} /> Edit profile
              </button>
            </div>
          </div>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* Tabs Section */}
          <div className="flex items-center gap-1 mt-1 text-gray-600 dark:text-gray-300 font-semibold overflow-x-auto no-scrollbar">
            {["Posts", "About", "Friends", "Photos", "Reels", "More"].map(
              (tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-4 whitespace-nowrap hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition ${
                    i === 0
                      ? "text-blue-600 border-b-4 border-blue-600 rounded-none"
                      : ""
                  }`}
                >
                  {tab}
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
