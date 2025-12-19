"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Camera,
  MapPin,
  Briefcase,
  GraduationCap,
  Loader2,
} from "lucide-react";
import { UPDATE_PROFILE } from "@/api/apiEndPoint";
import { toast } from "react-toastify";

function SetProfile() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // প্রোফাইল ডাটা স্টেট
  const [profileData, setProfileData] = useState({
    bio: "",
    hometown: "",
    work: "",
    education: "",
    avatar: null as string | null,
    cover: null as string | null,
  });

  // পেজ লোড হওয়ার সময় টোকেন চেক করা
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      toast.warn("Please log in first");
      router.push("/login");
    }
  }, [router]);

  // ইমেজ হ্যান্ডলিং (Base64 conversion)
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "avatar" | "cover"
  ) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      // ফাইল সাইজ চেক (৫ এমবির বেশি হলে ওয়ার্নিং দিবে)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size is too large (Max 5MB)");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileData((prev) => ({
          ...prev,
          [field]: event.target?.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("accessToken");

    const payload = {
      bio: profileData.bio,
      hometown: profileData.hometown,
      work: profileData.work,
      education: profileData.education,
      profile_pic: profileData.avatar,
      cover_pic: profileData.cover,
    };

    try {
      const response = await fetch(UPDATE_PROFILE, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Profile updated successfully!");
        router.push("/");
        router.refresh();
      } else {
        toast.error(result.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Failed to save profile. Check server limits.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen p-4 py-12 relative overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-3xl mx-auto border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl overflow-hidden bg-white dark:bg-white/5 backdrop-blur-md">
        {/* Cover Photo Section */}
        <div className="relative h-48 md:h-60 bg-gray-200 dark:bg-white/5 group">
          {profileData.cover ? (
            <img
              src={profileData.cover}
              className="w-full h-full object-cover"
              alt="Cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
              Click the camera to add cover photo
            </div>
          )}
          <label className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 p-2.5 rounded-full cursor-pointer text-white transition-all shadow-lg">
            <Camera size={20} />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "cover")}
            />
          </label>

          {/* Avatar Section */}
          <div className="absolute -bottom-16 left-8 md:left-12">
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-gray-900 bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-2xl">
                {profileData.avatar ? (
                  <img
                    src={profileData.avatar}
                    className="w-full h-full object-cover"
                    alt="Avatar"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    No Avatar
                  </div>
                )}
              </div>
              <label className="absolute bottom-2 right-2 bg-orange-500 p-2.5 rounded-full cursor-pointer hover:bg-orange-600 transition-all text-white border-2 border-white dark:border-gray-900 shadow-lg">
                <Camera size={18} />
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, "avatar")}
                />
              </label>
            </div>
          </div>
        </div>

        {/* Form Fields Section */}
        <div className="pt-20 px-6 pb-10 md:px-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Bio Field */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
                Short Bio
              </label>
              <textarea
                rows={3}
                value={profileData.bio}
                onChange={(e) =>
                  setProfileData({ ...profileData, bio: e.target.value })
                }
                className="py-3 px-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
                placeholder="Write a few words about yourself..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Work Field */}
              <div className="relative">
                <label className="text-sm font-bold block mb-2 text-gray-700 dark:text-gray-300">
                  Work
                </label>
                <div className="relative">
                  <Briefcase
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    value={profileData.work}
                    onChange={(e) =>
                      setProfileData({ ...profileData, work: e.target.value })
                    }
                    placeholder="E.g. Full Stack Developer"
                    className="w-full py-3 pl-12 pr-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>

              {/* Education Field */}
              <div className="relative">
                <label className="text-sm font-bold block mb-2 text-gray-700 dark:text-gray-300">
                  Education
                </label>
                <div className="relative">
                  <GraduationCap
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    value={profileData.education}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        education: e.target.value,
                      })
                    }
                    placeholder="E.g. University of Dhaka"
                    className="w-full py-3 pl-12 pr-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>

              {/* Hometown Field */}
              <div className="relative md:col-span-2">
                <label className="text-sm font-bold block mb-2 text-gray-700 dark:text-gray-300">
                  Current City
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                  <input
                    type="text"
                    value={profileData.hometown}
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        hometown: e.target.value,
                      })
                    }
                    placeholder="E.g. Dhaka, Bangladesh"
                    className="w-full py-3 pl-12 pr-4 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 focus:ring-2 focus:ring-orange-500 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="pt-8 flex gap-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 py-4 px-6 bg-orange-500 hover:bg-orange-600 text-white font-extrabold rounded-2xl shadow-lg shadow-orange-500/30 transition-all disabled:opacity-50 active:scale-95 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> Saving...
                  </>
                ) : (
                  "Complete Setup"
                )}
              </button>
              <button
                type="button"
                className="px-8 py-4 bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-white rounded-2xl font-bold hover:bg-gray-200 dark:hover:bg-white/10 transition-all"
                onClick={() => router.push("/feed")}
              >
                Skip
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SetProfile;
