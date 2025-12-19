"use client";
import CreatePost from "./components/Home/TopSection/CreatePost";
import LeftSidebar from "../(home)/components/Home/LeftSidebar/LeftSidebar";
import StorySection from "../(home)/components/Home/TopSection/StorySection";

export default function Home() {
  return (
    <section className="px-4 md:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-9 max-w-360 mx-auto xl:w-11/12 dark:bg-black min-h-[80vh] text-black">
        <div className=" hidden lg:col-span-2 lg:block bg-Primary/20 sticky top-0 ">
          <LeftSidebar />
        </div>
        <div className="lg:col-span-5 overflow-y-auto">
          <CreatePost />
          <StorySection />
        </div>
        <div className="hidden lg:col-span-2 lg:block bg-Primary/20">
          <h1>Right Side</h1>
        </div>
      </div>
    </section>
  );
}
