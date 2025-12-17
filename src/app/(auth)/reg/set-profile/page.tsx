"use client";

import React, { useState } from "react";
import {
  Camera,
  MapPin,
  Briefcase,
  GraduationCap,
  Link as LinkIcon,
} from "lucide-react";

function SetProfile() {
  const [profileData, setProfileData] = useState({
    bio: "",
    hometown: "",
    work: "",
    education: "",
    avatar: null as string | null,
    cover: null as string | null,
  });

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "avatar" | "cover"
  ) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfileData({
          ...profileData,
          [field]: event.target?.result as string,
        });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Social Media Profile Data:", profileData);
  };

  return (
    <section className="min-h-screen w-full bg-base-200 p-4 py-12 relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-Primary/10 rounded-full blur-[120px] -z-10 top-1/4 left-1/4" />

      <div className="max-w-3xl mx-auto bg-base-100 border border-base-300 rounded-3xl shadow-2xl overflow-hidden">
        {/* Row 1: Cover Photo Setup */}
        <div className="relative h-48 md:h-60 bg-base-300 group">
          {profileData.cover ? (
            <img
              src={profileData.cover}
              className="w-full h-full object-cover"
              alt="Cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-base-content/20">
              Add Cover Photo
            </div>
          )}
          <label className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 p-2.5 rounded-full cursor-pointer text-white transition-all shadow-lg">
            <Camera size={20} />
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => handleImageChange(e, "cover")}
            />
          </label>

          {/* Overlapping Profile Picture */}
          <div className="absolute -bottom-16 left-8 md:left-12">
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full border-4 border-base-100 bg-base-300 overflow-hidden ring-2 ring-Primary/20">
                {profileData.avatar ? (
                  <img
                    src={profileData.avatar}
                    className="w-full h-full object-cover"
                    alt="Avatar"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-base-content/20 italic">
                    Profile Picture
                  </div>
                )}
              </div>
              <label className="absolute bottom-1 right-1 bg-Primary p-2 rounded-full cursor-pointer hover:bg-Primary/90 transition-all shadow-md text-white">
                <Camera size={16} />
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

        {/* Form Body */}
        <div className="pt-20 px-6 pb-10 md:px-12">
          <header className="mb-8">
            <h1 className="text-2xl font-bold text-base-content">
              Customize your social identity
            </h1>
            <p className="text-sm text-base-content/60">
              This info will help friends find and connect with you.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Bio - Full Width */}
            <div className="flex flex-col gap-2">
              <label className="label pt-0">
                <span className="label-text">Short Bio</span>
              </label>
              <textarea
              rows={4}
                className="py-2 px-4 rounded-lg border border-gray-600 focus:border-Primary focus:ring-1 focus:ring-Primary focus:outline-none bg-base-200 w-full duration-300"
                placeholder="What's on your mind? e.g., 'Web Developer & Traveler'"
                value={profileData.bio}
                onChange={(e) =>
                  setProfileData({ ...profileData, bio: e.target.value })
                }
              />
            </div>

            {/* Two Column Layout for Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 relative">
                <label className="label pt-0">
                  <span className="label-text font-semibold">Works at</span>
                </label>
                <Briefcase
                  className="absolute left-3 top-11 text-base-content/40"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Company name"
                  className="py-2 pl-10 px-4 rounded-lg border border-gray-600 focus:border-Primary focus:ring-1 focus:ring-Primary focus:outline-none bg-base-200 w-full duration-300"
                  onChange={(e) =>
                    setProfileData({ ...profileData, work: e.target.value })
                  }
                />
              </div>

              <div className="flex flex-col gap-2 ">
                <label className="label pt-0">
                  <span className="label-text font-semibold">Education</span>
                </label>
                <div className="relative">
                  <GraduationCap
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40 z-10"
                    size={21}
                  />
                  <input
                    type="text"
                    placeholder="University/School"
                    className="py-2 pl-10 px-4 rounded-lg border border-gray-600 focus:border-Primary focus:ring-1 focus:ring-Primary focus:outline-none bg-base-200 w-full duration-300"
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        education: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 relative md:col-span-2">
                <label className="label pt-0">
                  <span className="label-text font-semibold">
                    Current City / Hometown
                  </span>
                </label>
                <div className="relative">
                  <MapPin
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/40 z-10"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="e.g. Dhaka, Bangladesh"
                    className="py-2 pl-10 px-4 rounded-lg border border-gray-600 focus:border-Primary focus:ring-1 focus:ring-Primary focus:outline-none bg-base-200 w-full duration-300"
                    onChange={(e) =>
                      setProfileData({
                        ...profileData,
                        hometown: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="btn btn-primary flex-1 text-white bg-Primary border-none hover:bg-Primary/90 shadow-lg shadow-Primary/20"
              >
                Save Profile
              </button>
              <button
                type="button"
                className="btn btn-ghost text-base-content/60"
                onClick={() => (window.location.href = "/feed")} // Direct to main app
              >
                Skip for now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SetProfile;
