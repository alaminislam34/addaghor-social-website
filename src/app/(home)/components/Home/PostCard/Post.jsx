"use client";

import { useState } from "react";
import {
  MoreHorizontal,
  X,
  ThumbsUp,
  MessageSquare,
  Share2,
  Globe,
  CheckCircle2,
} from "lucide-react";
import Image from "next/image";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="mb-4 rounded-xl shadow-md border border-gray-300 dark:border-white/10 bg-white dark:bg-[#130f0f79] overflow-hidden font-sans">
      {/* Header Section */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200">
            <Image
              src={post.author.avatar}
              height={100}
              width={100}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-bold text-[15px] dark:text-white hover:underline cursor-pointer leading-tight">
                {post.author.name}
              </span>
              {post.author.verified && (
                <CheckCircle2
                  size={14}
                  className="text-blue-500 fill-blue-500 bg-white rounded-full"
                />
              )}
            </div>
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs">
              <span>{post.time}</span>
              <span>•</span>
              <Globe size={12} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <MoreHorizontal
            size={20}
            className="cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 rounded-full"
          />
          <X
            size={20}
            className="cursor-pointer hover:bg-gray-100 dark:hover:bg-white/10 rounded-full"
          />
        </div>
      </div>

      {/* Logic based Content Section */}
      <div className="content-container">
        {post.content.map((item, index) => {
          if (item.type === "text") {
            return (
              <p
                key={index}
                className="px-4 pb-2 text-[15px] dark:text-gray-100 whitespace-pre-wrap"
              >
                {item.value}
              </p>
            );
          }
          if (item.type === "emoji") {
            return (
              <p key={index} className="px-4 pb-2 text-2xl">
                {item.value}
              </p>
            );
          }
          if (item.type === "image") {
            return (
              <div
                key={index}
                className="relative w-full bg-gray-100 dark:bg-gray-800 mt-2"
              >
                <Image
                  src={item.src}
                  height={600}
                  width={800}
                  alt="Post Content"
                  className="w-full h-auto object-contain max-h-125"
                />
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Engagement Stats */}
      <div className="px-3 py-2 mt-2 flex items-center justify-between text-gray-500 dark:text-gray-400 text-[13px] border-b border-gray-200 dark:border-white/10">
        <div className="flex items-center gap-1">
          <div className="flex -space-x-1">
            <div className="bg-blue-500 rounded-full p-1 border border-white dark:border-[#242526]">
              <ThumbsUp size={10} className="text-white fill-white" />
            </div>
            <div className="bg-red-500 rounded-full p-1 border border-white dark:border-[#242526]">
              <span className="text-[10px] leading-none">❤️</span>
            </div>
          </div>
          <span className="ml-1 hover:underline cursor-pointer">
            {liked ? post.likes + 1 : post.likes}
          </span>
        </div>
        <div className="flex gap-3">
          <span className="hover:underline cursor-pointer">
            {post.comments} comments
          </span>
          <span className="hover:underline cursor-pointer">
            {post.shares} shares
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-around p-1 mx-2">
        <button
          onClick={() => setLiked(!liked)}
          className={`flex items-center gap-2 flex-1 justify-center py-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md transition-colors ${
            liked ? "text-blue-500" : "text-gray-600 dark:text-gray-400"
          }`}
        >
          <ThumbsUp size={20} className={liked ? "fill-blue-500" : ""} />
          <span className="font-semibold text-sm">Like</span>
        </button>
        <button className="flex items-center gap-2 flex-1 justify-center py-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md transition-colors text-gray-600 dark:text-gray-400">
          <MessageSquare size={20} />
          <span className="font-semibold text-sm">Comment</span>
        </button>
        <button className="flex items-center gap-2 flex-1 justify-center py-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md transition-colors text-gray-600 dark:text-gray-400">
          <Share2 size={20} />
          <span className="font-semibold text-sm">Share</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
