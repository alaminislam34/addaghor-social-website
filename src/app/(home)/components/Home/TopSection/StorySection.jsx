"use client";

import { Plus, ChevronRight } from "lucide-react";
import Image from "next/image";

const stories = [
  {
    id: 1,
    name: "ColorfulSpace",
    userImg: "/logos/user1.png",
    storyImg: "/stories/s1.jpg",
    active: true,
  },
  {
    id: 2,
    name: "VintagePain...",
    userImg: "/logos/user2.png",
    storyImg: "/stories/s2.jpg",
    active: true,
  },
  {
    id: 3,
    name: "PencilArtist",
    userImg: "/logos/user3.png",
    storyImg: "/stories/s3.jpg",
    active: false,
  },
  {
    id: 4,
    name: "DesignDaily",
    userImg: "/logos/user4.png",
    storyImg: "/stories/s4.jpg",
    active: true,
  },
];

function StorySection() {
  return (
    <div className="relative group mb-6">
      {/* Scroll Container */}
      <div className="flex gap-3 overflow-x-auto border pb-2 custom-scrollbar no-scrollbar">
        <div className="relative min-w-30 h-50 md:h-57.5 rounded-2xl overflow-hidden cursor-pointer bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border group/card shadow-sm">
          <div className="h-[70%] relative overflow-hidden">
            <Image
              src="/logos/user.png"
              fill
              className="object-cover group-hover/card:scale-105 transition-transform duration-500"
              alt="Your Profile"
            />
          </div>
          <div className="absolute bottom-0 w-full h-[30%] bg-light-surface dark:bg-dark-surface flex flex-col items-center justify-center pt-5">
            <div className="absolute -top-5 p-1 bg-light-surface dark:bg-dark-surface rounded-full">
              <div className="bg-Primary p-1.5 rounded-full border-2 border-white dark:border-dark-surface text-white">
                <Plus size={20} strokeWidth={3} />
              </div>
            </div>
            <span className="text-[12px] font-bold text-light-text-primary dark:text-dark-text-primary mt-1">
              Add your story
            </span>
          </div>
        </div>

        {stories.map((story) => (
          <div
            key={story.id}
            className="relative min-w-30 h-50 md:min-w-35 md:h-57.5 rounded-2xl overflow-hidden cursor-pointer group/item shadow-sm border border-light-border dark:border-dark-border"
          >
            {/* Background Story Image */}
            <Image
              src={
                story.storyImg ||
                "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=600&fit=crop"
              }
              fill
              className="object-cover group-hover/item:scale-105 transition-transform duration-500"
              alt={story.name}
            />

            {/* Dark Overlay for Text Visibility */}
            <div className="absolute inset-0 bg-black/20 group-hover/item:bg-black/30 transition-colors" />

            {/* User Avatar Badge */}
            <div className="absolute top-3 left-3">
              <div
                className={`p-0.75 rounded-full ${
                  story.active ? "bg-Primary" : "bg-gray-400"
                } border-2 border-white dark:border-dark-border shadow-lg`}
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20">
                  <Image
                    src={story.userImg || "/logos/user.png"}
                    fill
                    className="object-cover"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>

            {/* User Name */}
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-white text-[12px] font-bold drop-shadow-md truncate block">
                {story.name}
              </span>
            </div>
          </div>
        ))}
      </div>
      <button className="absolute -right-3.75 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-dark-surface border border-light-border dark:border-dark-border rounded-full shadow-xl flex items-center justify-center text-light-text-secondary dark:text-dark-text-secondary opacity-0 group-hover:opacity-100 transition-opacity z-10 hover:bg-light-surface-hover dark:hover:bg-dark-surface-hover">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default StorySection;
