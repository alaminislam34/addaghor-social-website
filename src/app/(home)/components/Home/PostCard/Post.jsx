"use client";

import { useState, useRef, useEffect } from "react";
import {
  MoreHorizontal,
  X,
  ThumbsUp,
  MessageSquare,
  Share2,
  Globe,
  CheckCircle2,
  Send,
} from "lucide-react";
import NextImage from "next/image"; // Image conflict fix
import { FaHeart } from "react-icons/fa";

const PostCard = ({ post, isCommentOpen, onCommentToggle }) => {
  const [liked, setLiked] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const commentInputRef = useRef(null);

  // Safety Check: Post ba Author undefined hole error handle korbe
  if (!post || !post.author) {
    return (
      <div className="mb-4 rounded-xl h-40 bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  // Auto-focus when this specific comment box is opened
  useEffect(() => {
    if (isCommentOpen && commentInputRef.current) {
      commentInputRef.current.focus();
    }
  }, [isCommentOpen]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      console.log("Commented on Post:", post.id, "Value:", commentText);
      setCommentText("");
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mb-4 rounded-xl shadow-md border border-gray-300 dark:border-white/10 bg-white dark:bg-[#1D232A] overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-gray-200 shrink-0 bg-gray-100">
            <NextImage
              src={post.author.avatar || "/user-placeholder.png"} // Fallback image
              fill
              alt="Profile"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <span className="font-bold text-[15px] dark:text-white hover:underline cursor-pointer leading-tight">
                {post?.author?.name || "Unknown User"}
              </span>
              {post.author.verified && (
                <CheckCircle2
                  size={14}
                  className="text-blue-500 fill-blue-500 bg-white rounded-full"
                />
              )}
            </div>
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400 text-xs">
              <span>{post.time || "Just now"}</span>
              <span>•</span>
              <Globe size={12} />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition">
            <MoreHorizontal size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition">
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="content-container">
        {post.content?.map((item, index) => {
          if (item.type === "text")
            return (
              <p
                key={index}
                className="px-4 pb-2 text-[15px] dark:text-gray-100 whitespace-pre-wrap"
              >
                {item.value}
              </p>
            );
          if (item.type === "image")
            return (
              <div
                key={index}
                className="relative w-full bg-gray-100 dark:bg-gray-800 mt-2"
              >
                <NextImage
                  src={item.src}
                  height={600}
                  width={800}
                  alt="Post Content"
                  className="w-full h-auto object-contain max-h-125"
                />
              </div>
            );
          return null;
        })}
      </div>

      {/* Engagement Stats */}
      <div className="px-3 py-2 mt-2 flex items-center justify-between text-gray-500 dark:text-gray-400 text-[13px] border-b border-gray-200 dark:border-white/10">
        <div className="flex items-center gap-1">
          <div className="flex -space-x-1">
            <div className="bg-blue-500 rounded-full p-1 border-2 border-white dark:border-[#1c1c1d]">
              <ThumbsUp size={10} className="text-white fill-white" />
            </div>
            <div className="bg-red-500 rounded-full p-1 border-2 border-white dark:border-[#1c1c1d]">
              <FaHeart size={10} className="text-white" />
            </div>
          </div>
          <span className="ml-1 hover:underline cursor-pointer">
            {liked ? (post.likes || 0) + 1 : post.likes || 0}
          </span>
        </div>
        <div className="flex gap-3">
          <span className="hover:underline cursor-pointer">
            {post.comments || 0} comments
          </span>
          <span className="hover:underline cursor-pointer">
            {post.shares || 0} shares
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-around p-1 mx-2">
        <button
          onClick={() => setLiked(!liked)}
          className={`flex items-center gap-2 flex-1 justify-center py-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md transition-colors ${
            liked
              ? "text-blue-500 font-bold"
              : "text-gray-600 dark:text-gray-400"
          }`}
        >
          <ThumbsUp size={20} className={liked ? "fill-blue-500" : ""} />
          <span className="text-sm">Like</span>
        </button>

        <button
          onClick={onCommentToggle}
          className={`flex items-center gap-2 flex-1 justify-center py-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md transition-colors ${
            isCommentOpen
              ? "text-blue-500 font-bold"
              : "text-gray-600 dark:text-gray-400"
          }`}
        >
          <MessageSquare size={20} />
          <span className="text-sm">Comment</span>
        </button>

        <button className="flex items-center gap-2 flex-1 justify-center py-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-md transition-colors text-gray-600 dark:text-gray-400">
          <Share2 size={20} />
          <span className="text-sm">Share</span>
        </button>
      </div>

      {/* Comment Section */}
      {isCommentOpen && (
        <div className="px-4 pb-4 animate-in fade-in slide-in-from-top-2">
          <div className="border-t border-gray-200 dark:border-white/10 mb-3" />
          <form
            onSubmit={handleCommentSubmit}
            className="flex items-start gap-2"
          >
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gray-200 shrink-0">
              <NextImage
                src={post.author.avatar}
                fill
                alt="User"
                className="object-cover"
              />
            </div>
            <div className="flex-1 flex flex-row gap-2">
              <textarea
                ref={commentInputRef}
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="Write a comment..."
                rows={1}
                className="w-full bg-gray-100 dark:bg-white/10 rounded-2xl py-2 px-4 outline-none focus:ring-1 focus:ring-blue-500 text-[15px] dark:text-white resize-none"
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleCommentSubmit(e);
                  }
                }}
              />
              {commentText.trim() && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-blue-600 p-2 self-end"
                >
                  <Send size={20} />
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default PostCard;
