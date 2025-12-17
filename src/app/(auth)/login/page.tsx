"use client";
import {
  Camera,
  Image as ImageIcon,
  Send,
  MessageCircle,
  Heart,
  Share2,
} from "lucide-react";

const AddaGhorDemo = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* 1. Create Post Section */}
      <div className="adda-card">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <textarea
            placeholder="কি খবর? নতুন কিছু শেয়ার করুন..."
            className="w-full bg-background border-none rounded-xl p-3 focus:ring-2 focus:ring-brand-primary outline-none resize-none text-main"
            rows={2}
          ></textarea>
        </div>

        <hr className="my-4 border-border" />

        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <button className="flex items-center gap-2 text-muted hover:text-brand-primary transition-colors cursor-pointer">
              <ImageIcon size={20} />{" "}
              <span className="hidden sm:inline">Photo</span>
            </button>
            <button className="flex items-center gap-2 text-muted hover:text-brand-primary transition-colors cursor-pointer">
              <Camera size={20} />{" "}
              <span className="hidden sm:inline">Video</span>
            </button>
          </div>
          <button className="bg-brand-primary text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
            Post <Send size={16} />
          </button>
        </div>
      </div>

      {/* 2. Feed Post Section */}
      <div className="adda-card">
        {/* User Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-secondary border-2 border-brand-primary"></div>
            <div>
              <h4 className="font-bold text-main">রাকিব হাসান</h4>
              <p className="text-xs text-muted">১০ মিনিট আগে • ঢাকা</p>
            </div>
          </div>
        </div>

        {/* Post Content */}
        <div className="space-y-4">
          <p className="text-main">
            আজকে থেকে **AddaGhor** প্রজেক্টটা শুরু করলাম! সবাই দোয়া করবেন।
            ইনশাল্লাহ নতুন কিছু আসতেছে। 🚀🔥
          </p>
          {/* Mock Post Image */}
          <div className="w-full h-64 bg-background rounded-xl flex items-center justify-center border border-border">
            <span className="text-muted italic text-sm">
              Post Image / Media Placeholder
            </span>
          </div>
        </div>

        {/* Interaction Buttons */}
        <div className="flex justify-between mt-6 pt-4 border-t border-border">
          <button className="flex items-center gap-2 text-muted hover:text-brand-primary font-medium transition-colors">
            <Heart size={20} /> ৫২
          </button>
          <button className="flex items-center gap-2 text-muted hover:text-brand-primary font-medium transition-colors">
            <MessageCircle size={20} /> ১২ আড্ডা
          </button>
          <button className="flex items-center gap-2 text-muted hover:text-brand-primary font-medium transition-colors">
            <Share2 size={20} /> শেয়ার
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddaGhorDemo;
