"use client";

import { ImagePlus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

function CreatePost() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const modalRef = useRef(null);
  const fileInputRef = useRef(null);

  // Close modal on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // event.target is required to check exactly where the user clicked
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
        setSelectedImage(null);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Handle Image Selection Logic
  const handleImageChange = (file) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Drag and Drop Handlers
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const file = e.dataTransfer.files[0];
    handleImageChange(file);
  };

  return (
    <div className="flex items-center gap-6 border-b border-b-gray-200 dark:border-b-gray-500/50 p-4 relative pt-8">
      {/* --- Trigger Area --- */}
      <div className="w-12 h-10 border rounded-full border-gray-300 dark:border-Primary">
        <Link href={"/profile"}>
          <Image
            src={"/logos/user.png"}
            width={40}
            height={40}
            alt="User image"
            className=" w-10 h-10 bg-cover bg-center object-cover rounded-full"
          />
        </Link>
      </div>
      <div className="w-full">
        <div className="w-full">
          <input
            readOnly
            onClick={() => setIsOpen(true)}
            type="text"
            placeholder="Create post"
            className="py-2 px-6 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600/50 duration-300 w-full bg-gray-100 dark:bg-gray-500/50 focus:bg-gray-300 placeholder:text-gray-400 cursor-pointer"
          />
        </div>
      </div>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 rounded-full bg-gray-100 dark:bg-gray-600/50 border border-gray-200 dark:border-gray-500/50  dark:hover:bg-gray-600/50 dark:text-white hover:bg-gray-200"
      >
        <ImagePlus />
      </button>

      {/* --- Functional Modal --- */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-full bg-color-overlay-dark backdrop-blur-sm flex items-center justify-center z-100 p-4 animate-in fade-in duration-200">
          <div
            ref={modalRef}
            className="max-w-xl w-full bg-light-surface dark:bg-gray-800 rounded-3xl shadow-light-lg dark:shadow-dark-lg border border-light-border dark:border-dark-border overflow-hidden animate-in zoom-in-95 duration-300"
          >
            {/* Header */}
            <div className="p-5 border-b border-light-border dark:border-dark-border flex justify-between items-center">
              <h2 className="text-xl font-bold text-light-text-primary dark:text-dark-text-primary">
                Create Post
              </h2>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSelectedImage(null);
                }}
                className="p-2 rounded-full hover:bg-light-surface-hover dark:hover:bg-dark-surface-hover text-light-text-secondary dark:text-dark-text-secondary transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto custom-scrollbar">
              <textarea
                autoFocus
                rows={selectedImage ? 3 : 5}
                placeholder="What's on your mind?"
                className="py-3 px-4 rounded-xl border border-light-border dark:border-dark-border w-full focus:ring-2 focus:ring-Primary focus:border-transparent outline-none bg-transparent text-light-text-primary dark:text-dark-text-primary resize-none transition-all placeholder:text-light-text-disabled dark:placeholder:text-dark-text-disabled"
              ></textarea>

              {/* Hidden File Input */}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={(e) =>
                  e.target.files && handleImageChange(e.target.files[0])
                }
                className="hidden"
              />

              {/* Upload Area / Preview Area */}
              <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => !selectedImage && fileInputRef.current.click()}
                className="group relative min-h-48 w-full border-2 border-dashed border-light-border dark:border-dark-border hover:border-Primary transition-colors text-center flex flex-col items-center justify-center rounded-2xl cursor-pointer bg-light-bg dark:bg-dark-bg overflow-hidden"
              >
                {selectedImage ? (
                  /* Image Preview */
                  <div className="relative w-full h-full min-h-64">
                    <img
                      src={selectedImage}
                      alt="Preview"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(null);
                      }}
                      className="absolute top-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors"
                    >
                      <X size={18} />
                    </button>
                  </div>
                ) : (
                  /* Upload Placeholder */
                  <>
                    <div className="p-3 rounded-full bg-light-surface dark:bg-dark-surface shadow-light-sm mb-2 group-hover:scale-110 transition-transform">
                      <ImagePlus className="text-Primary" size={28} />
                    </div>
                    <label className="font-semibold text-light-text-secondary dark:text-dark-text-secondary cursor-pointer">
                      Add Photos/Videos
                    </label>
                    <p className="text-xs text-light-text-disabled dark:text-dark-text-disabled">
                      or drag and drop
                    </p>
                  </>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-light-bg dark:bg-dark-surface-hover flex justify-end gap-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  setSelectedImage(null);
                }}
                className="px-6 py-2.5 rounded-xl text-light-text-secondary dark:text-dark-text-secondary font-semibold hover:bg-light-border-strong dark:hover:bg-dark-border-strong transition-all"
              >
                Cancel
              </button>
              <button className="px-8 py-2.5 rounded-xl bg-Primary hover:bg-primary-hover text-white font-bold shadow-light-md dark:shadow-dark-md active:scale-95 transition-all">
                Post Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreatePost;
