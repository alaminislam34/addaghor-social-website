"use client";
import CreatePost from "./components/Home/TopSection/CreatePost";
import LeftSidebar from "../(home)/components/Home/LeftSidebar/LeftSidebar";
import RightSide from "../(home)/components/Home/RightSide/RightSide";
import StorySection from "../(home)/components/Home/TopSection/StorySection";

export default function Home() {
  return (
    <section className="px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-9 max-w-360 mx-auto xl:w-11/12 dark:bg-dark min-h-[80vh] text-black">
        <div className=" hidden lg:col-span-2 lg:block border-r border-gray-500/50 sticky top-0 ">
          <LeftSidebar />
        </div>
        <div className="md:col-span-5 overflow-y-auto">
          <CreatePost />

          <StorySection />
        </div>
        <div className="hidden md:col-span-2 md:block bg-Primary/20">
          <RightSide />
        </div>
      </div>
    </section>
  );
}
