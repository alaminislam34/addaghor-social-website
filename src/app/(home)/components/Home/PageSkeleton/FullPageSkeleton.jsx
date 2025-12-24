"use client";
export default function FullPageSkeleton() {
  return (
    <div className=" bg-gray-100 dark:bg-[#18191a] px-4 animate-pulse">
      <div className="max-w-380 mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 pt-6">
        {/* LEFT SIDEBAR SKELETON */}
        <div className="hidden md:block col-span-1 space-y-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex items-center gap-3 p-2">
              <div className="w-9 h-9 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            </div>
          ))}
          <hr className="border-gray-200 dark:border-gray-700 my-4" />
          <div className="h-5 w-24 bg-gray-200 dark:bg-gray-700 rounded-md ml-2 mb-4"></div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3 p-2">
              <div className="w-9 h-9 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
              <div className="h-4 w-40 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            </div>
          ))}
        </div>

        {/* MIDDLE FEED SKELETON */}
        <div className="col-span-1 md:col-span-2 space-y-6">
          {/* Create Post Skeleton */}
          <div className="bg-white dark:bg-[#242526] p-4 rounded-xl shadow-sm">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="h-10 flex-1 bg-gray-100 dark:bg-gray-700/50 rounded-full"></div>
            </div>
          </div>

          {/* Stories Skeleton */}
          <div className="flex gap-2 overflow-hidden">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="min-w-27.5 h-47.5 bg-gray-200 dark:bg-gray-700 rounded-xl"
              ></div>
            ))}
          </div>

          {/* Post Card Skeleton */}
          <div className="bg-white dark:bg-[#242526] rounded-xl shadow-sm overflow-hidden">
            <div className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
                <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              </div>
            </div>
            <div className="h-4 w-[90%] bg-gray-200 dark:bg-gray-700 rounded-md mx-4 mb-2"></div>
            <div className="h-4 w-[70%] bg-gray-200 dark:bg-gray-700 rounded-md mx-4 mb-4"></div>
            <div className="h-64 md:h-96 bg-gray-200 dark:bg-gray-700 w-full"></div>
          </div>
        </div>

        {/* RIGHT SIDEBAR SKELETON */}
        <div className="hidden md:block col-span-1 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <div className="h-5 w-20 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            <div className="flex gap-2">
              <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            </div>
          </div>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center gap-3 p-2">
              <div className="relative">
                <div className="w-9 h-9 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white dark:border-[#18191a] rounded-full"></div>
              </div>
              <div className="h-4 w-28 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
            </div>
          ))}
          <hr className="border-gray-200 dark:border-gray-700 my-4" />
          <div className="h-5 w-32 bg-gray-200 dark:bg-gray-700 rounded-md mb-4"></div>
          <div className="flex items-center gap-3 p-2">
            <div className="w-9 h-9 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
