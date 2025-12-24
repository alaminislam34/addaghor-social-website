"use client";
import NextImage from "next/image"; // Conflict avoid korar jonno NextImage use kora hoyeche
import { Briefcase, Home, MapPin, Heart } from "lucide-react";

export default function ProfileSidebar() {
  return (
    <div className="flex flex-col gap-4">
      {/* Intro Card */}
      <div className="bg-white dark:bg-[#242526] p-4 rounded-xl shadow">
        <h2 className="text-xl font-bold mb-3 dark:text-white">Intro</h2>

        <div className="space-y-4">
          <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 py-2 rounded-lg font-semibold dark:text-white transition">
            Add Bio
          </button>

          <ul className="space-y-4 text-[15px] dark:text-gray-300">
            <li className="flex items-center gap-3">
              <Briefcase className="text-gray-500" size={20} />
              <span>
                Front-End Developer at{" "}
                <b className="hover:underline cursor-pointer">SparkTech</b>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Home className="text-gray-500" size={20} />
              <span>
                Lives in{" "}
                <b className="hover:underline cursor-pointer">
                  Dhaka, Bangladesh
                </b>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="text-gray-500" size={20} />
              <span>
                From{" "}
                <b className="hover:underline cursor-pointer">
                  Dhaka, Bangladesh
                </b>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Heart className="text-gray-500" size={20} />
              <span>Single</span>
            </li>
          </ul>

          <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 py-2 rounded-lg font-semibold dark:text-white transition">
            Edit details
          </button>

          <button className="w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 py-2 rounded-lg font-semibold dark:text-white transition">
            Add Featured
          </button>
        </div>
      </div>

      {/* Photos Preview Card */}
      <div className="bg-white dark:bg-[#242526] p-4 rounded-xl shadow">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-bold dark:text-white">Photos</h2>
          <button className="text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 p-1 px-2 rounded transition">
            See all photos
          </button>
        </div>

        <div className="grid grid-cols-3 gap-1.5 rounded-xl overflow-hidden">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
              key={i}
              className="aspect-square bg-gray-200 dark:bg-gray-700 relative group cursor-pointer"
            >
              <NextImage
                src={`/photos/gallery-${i}.jpg`} // Apnar images folder onujayi path change korun
                fill
                className="object-cover group-hover:brightness-110 transition"
                alt={`gallery-${i}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Friends Preview Card (Bonus) */}
      <div className="bg-white dark:bg-[#242526] p-4 rounded-xl shadow">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-xl font-bold dark:text-white">Friends</h2>
          <button className="text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 p-1 px-2 rounded transition">
            See all friends
          </button>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mb-4">53 friends</p>

        <div className="grid grid-cols-3 gap-x-2 gap-y-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex flex-col gap-1 cursor-pointer">
              <div className="aspect-square relative rounded-lg overflow-hidden bg-gray-200">
                <NextImage
                  src={`/friends/user-${i}.jpg`}
                  fill
                  className="object-cover"
                  alt="friend"
                />
              </div>
              <span className="text-[12px] font-semibold dark:text-white truncate">
                Friend Name
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
