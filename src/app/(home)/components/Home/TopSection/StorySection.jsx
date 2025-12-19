"use client";

import { Plus, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

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
    name: "VintagePainter",
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
  {
    id: 5,
    name: "ArtisticSoul",
    userImg: "/logos/user1.png",
    storyImg: "/stories/s2.jpg",
    active: true,
  },
];

function StorySection() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const handleScroll = () => {
    if (scrollRef.current) {
      setShowLeftArrow(scrollRef.current.scrollLeft > 10);
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative group mb-6 p-4">
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-xl hidden md:flex items-center justify-center text-gray-600 dark:text-gray-300 z-20 hover:scale-110 transition-all"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar scroll-smooth"
      >
        <div className="relative shrink-0 w-28 h-44 md:w-32 md:h-52 rounded-xl overflow-hidden cursor-pointer bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 group/card shadow-sm">
          <div className="h-[70%] relative overflow-hidden">
            <Image
              src="/logos/user.png"
              fill
              className="object-cover group-hover/card:scale-110 transition-transform duration-700"
              alt="Your Profile"
            />
          </div>
          <div className="absolute bottom-0 w-full h-[30%] bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
            <div className="absolute -top-5 p-1 bg-white dark:bg-gray-900 rounded-full">
              <div className="bg-Primary p-1.5 rounded-full border-2 border-white dark:border-gray-900 text-white shadow-md">
                <Plus size={20} strokeWidth={3} />
              </div>
            </div>
            <span className="text-[11px] md:text-[12px] font-bold text-gray-800 dark:text-gray-100 mt-2">
              Add Story
            </span>
          </div>
        </div>

        {stories.map((story) => (
          <div
            key={story.id}
            className="relative shrink-0 w-28 h-44 md:w-32 md:h-52 rounded-xl overflow-hidden cursor-pointer group/item shadow-sm border border-gray-100 dark:border-gray-800"
          >
            {/* Background Story Image */}
            <Image
              src={story.storyImg}
              fill
              className="object-cover group-hover/item:scale-110 transition-transform duration-700"
              alt={story.name}
              sizes="(max-width: 768px) 112px, 128px"
            />

            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60 group-hover/item:from-black/40 transition-all" />

            {/* Avatar Badge */}
            <div className="absolute top-3 left-3">
              <div
                className={`p-0.5 rounded-full ${
                  story.active ? "bg-Primary" : "bg-gray-400"
                } border-2 border-white/20 shadow-lg`}
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden border border-black/10">
                  <Image
                    src={story.userImg}
                    fill
                    className="object-cover"
                    alt="avatar"
                  />
                </div>
              </div>
            </div>

            {/* Username */}
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-white text-[11px] md:text-[12px] font-semibold drop-shadow-lg truncate block">
                {story.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full shadow-xl hidden md:flex items-center justify-center text-gray-600 dark:text-gray-300 opacity-0 group-hover:opacity-100 transition-all z-20 hover:scale-110"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default StorySection;
