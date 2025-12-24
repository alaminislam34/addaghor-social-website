"use client";

export default function NavbarSkeleton() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#1D232A] border-b border-gray-100 dark:border-gray-500/50 animate-pulse">
      <nav className="px-4 md:px-6 flex items-center justify-between py-2">
        {/* Logo Skeleton */}
        <div className="h-8 w-24 md:w-32 bg-gray-200 dark:bg-gray-700 rounded-md shrink-0"></div>

        {/* Center Icons Skeleton (Hidden on Mobile) */}
        <div className="hidden lg:block">
          <ul className="flex flex-row gap-12 items-center">
            {[1, 2, 3, 4].map((i) => (
              <li key={i} className="py-3 px-6">
                <div className="h-6 w-6 bg-gray-200 dark:bg-gray-700 rounded-md"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Buttons Skeleton */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* Action Buttons (Menu, Message, Bell) */}
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700"
            ></div>
          ))}

          {/* Profile Picture Skeleton */}
          <div className="flex items-center gap-1 p-1 ml-1">
            <div className="w-9.5 h-9.5 rounded-full bg-gray-200 dark:bg-gray-700 border border-gray-100 dark:border-gray-600"></div>
            <div className="h-4 w-4 bg-gray-200 dark:bg-gray-700 rounded ml-1"></div>
          </div>
        </div>
      </nav>
    </div>
  );
}
