"use client";

import { Plus, ChevronRight, ChevronLeft, X, Loader2 } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";

const stories = [
  {
    id: 1,
    name: "ColorfulSpace",
    userImg: "/logos/user.png",
    storyImg: "/images/story.jpg",
    active: true,
  },
  {
    id: 2,
    name: "VintagePainter",
    userImg: "/logos/user.png",
    storyImg: "/images/story.jpg",
    active: true,
  },
  {
    id: 3,
    name: "PencilArtist",
    userImg: "/logos/user.png",
    storyImg: "/images/story.jpg",
    active: false,
  },
  {
    id: 4,
    name: "DesignDaily",
    userImg: "/logos/user.png",
    storyImg: "/images/story.jpg",
    active: true,
  },
];

function StoryViewer({ initialIndex, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const STORY_DURATION = 5000;

  // 1. IMPROVED NAVIGATION LOGIC
  // We use the functional update pattern (prevIndex => ...)
  // to always get the most current state without stale closures.
  const nextStory = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < stories.length - 1) {
        setProgress(0);
        setIsLoading(true);
        return prevIndex + 1;
      } else {
        onClose();
        return prevIndex;
      }
    });
  }, [onClose]);

  const prevStory = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        setProgress(0);
        setIsLoading(true);
        return prevIndex - 1;
      } else {
        setProgress(0);
        return 0;
      }
    });
  }, []);

  // 2. KEYBOARD CONTROLS
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextStory();
      if (e.key === "ArrowLeft") prevStory();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextStory, prevStory, onClose]);

  // 3. AUTO-ADVANCE TIMER
  useEffect(() => {
    if (isLoading || isPaused) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextStory();
          return 0;
        }
        return prev + 1;
      });
    }, STORY_DURATION / 100);

    return () => clearInterval(interval);
  }, [isLoading, isPaused, nextStory]); // Removed currentIndex to prevent interval flickering

  const currentStory = stories[currentIndex];
  if (!currentStory) return null;

  return (
    <div className="fixed inset-0 z-999 bg-black/95 flex items-center justify-center backdrop-blur-md">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white z-1000 p-2 bg-white/10 rounded-full transition-all"
      >
        <X size={28} />
      </button>

      {/* Main Container */}
      <div className="relative w-full max-w-112.5 h-full md:h-[90vh] overflow-hidden md:rounded-2xl bg-black flex flex-col items-center justify-center">
        {/* Progress Bars */}
        <div className="absolute top-4 left-0 right-0 z-50 flex gap-1.5 px-4">
          {stories.map((_, idx) => (
            <div
              key={idx}
              className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden"
            >
              <div
                className="h-full bg-white transition-all ease-linear"
                style={{
                  width:
                    idx === currentIndex
                      ? `${progress}%`
                      : idx < currentIndex
                      ? "100%"
                      : "0%",
                }}
              />
            </div>
          ))}
        </div>

        {/* User Info Header */}
        <div className="absolute top-8 left-4 z-50 flex items-center gap-3 w-full px-4">
          <div className="w-9 h-9 rounded-full border-2 border-orange-500 p-0.5">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src={currentStory.userImg}
                fill
                alt="user"
                className="object-cover"
              />
            </div>
          </div>
          <span className="text-white font-bold text-sm drop-shadow-md">
            {currentStory.name}
          </span>
        </div>

        {/* Visible Desktop Arrows */}
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 z-100 hidden md:flex justify-between items-center w-[calc(100%-2rem)] pointer-events-none">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevStory();
            }}
            className={`p-3 bg-white/10 hover:bg-white/20 rounded-full text-white pointer-events-auto transition-all ${
              currentIndex === 0 ? "opacity-0 invisible" : "opacity-100"
            }`}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextStory();
            }}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white pointer-events-auto transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Loading Spinner */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center z-40">
            <Loader2 className="text-white animate-spin" size={40} />
          </div>
        )}

        {/* Hitboxes for Mobile / Tapping */}
        <div className="absolute inset-0 z-80 flex">
          <div
            className="w-1/3 h-full cursor-pointer"
            onClick={prevStory}
            onMouseDown={() => setIsPaused(true)}
            onMouseUp={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          />
          <div
            className="w-2/3 h-full cursor-pointer"
            onClick={nextStory}
            onMouseDown={() => setIsPaused(true)}
            onMouseUp={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          />
        </div>

        {/* Content Image */}
        <Image
          src={currentStory.storyImg}
          fill
          className={`object-contain transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
          alt="Story content"
          onLoadingComplete={() => setIsLoading(false)}
          priority
        />
      </div>
    </div>
  );
}

export default function StorySection() {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [selectedStoryIndex, setSelectedStoryIndex] = useState(null);

  const handleScroll = () => {
    if (scrollRef.current) setShowLeftArrow(scrollRef.current.scrollLeft > 10);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const offset = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative group p-4">
      {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-xl hidden md:flex items-center justify-center z-20 border border-gray-100"
        >
          <ChevronLeft size={24} />
        </button>
      )}

      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-center gap-3 overflow-x-auto pb-4 no-scrollbar scroll-smooth mx-auto"
      >
        <div className="relative shrink-0 min-w-37.5 h-44 md:w-32 md:h-52 rounded-xl overflow-hidden cursor-pointer bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="h-[70%] relative overflow-hidden">
            <Image
              src="/logos/user.png"
              fill
              className="object-cover"
              alt="Profile"
            />
          </div>
          <div className="absolute bottom-0 w-full h-[30%] bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
            <div className="absolute -top-5 p-1 bg-white dark:bg-gray-900 rounded-full">
              <div className="bg-blue-600 p-1.5 rounded-full text-white shadow-md">
                <Plus size={20} strokeWidth={3} />
              </div>
            </div>
            <span className="text-[11px] font-bold mt-2">Add Story</span>
          </div>
        </div>

        {stories.map((story, index) => (
          <div
            key={story.id}
            onClick={() => setSelectedStoryIndex(index)}
            className="relative shrink-0 min-w-37.5 h-44 md:w-32 md:h-52 rounded-xl overflow-hidden cursor-pointer group/item shadow-sm border border-gray-100 dark:border-gray-800"
          >
            <Image
              src={story.storyImg}
              fill
              className="object-cover group-hover/item:scale-110 transition-transform duration-700"
              alt={story.name}
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/60" />
            <div className="absolute top-3 left-3">
              <div
                className={`p-0.5 rounded-full ${
                  story.active ? "bg-blue-500" : "bg-gray-400"
                } border-2 border-white/20 shadow-lg`}
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src={story.userImg} fill alt="avatar" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-white text-[11px] md:text-[12px] font-semibold truncate block">
                {story.name}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-xl hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all z-20 border border-gray-100"
      >
        <ChevronRight size={24} />
      </button>

      {selectedStoryIndex !== null && (
        <StoryViewer
          initialIndex={selectedStoryIndex}
          onClose={() => setSelectedStoryIndex(null)}
        />
      )}
    </div>
  );
}
