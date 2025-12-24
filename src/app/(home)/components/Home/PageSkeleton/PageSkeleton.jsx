export const PostSkeleton = () => (
  <div className="mb-4 rounded-xl border border-gray-300 dark:border-white/10 bg-white dark:bg-[#242526] p-4 animate-pulse">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
      <div className="flex-1 space-y-2">
        <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4"></div>
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/6"></div>
      </div>
    </div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div>
      <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded w-full mt-4"></div>
    </div>
  </div>
);
