import { useState } from "react";
import {
  Type,
  Image as ImageIcon,
  Users,
  Lock,
  Globe,
  X,
  Upload,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";

const StoryModal = ({ isOpen, setAddStory }) => {
  const [storyType, setStoryType] = useState(null);
  const [audience, setAudience] = useState("Public");
  const [textStory, setTextStory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [bgColor, setBgColor] = useState(
    "bg-linear-to-br from-purple-500 to-pink-500"
  );

  if (!isOpen) return null;

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const resetSelection = () => {
    setStoryType(null);
    setSelectedImage(null);
    setTextStory("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white w-full max-w-6xl h-[95vh] md:h-[85vh] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Sidebar - Settings */}
        <aside className="w-full md:w-80 bg-gray-50 border-b md:border-b-0 md:border-r border-gray-200 p-4 md:p-6 flex flex-col shrink-0">
          <div className="flex items-center justify-between mb-4 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
              Create Story
            </h2>
            <button
              onClick={() => setAddStory(false)}
              className="md:hidden p-2 hover:bg-gray-200 rounded-full"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar">
            <label className="text-[10px] md:text-xs font-bold uppercase text-gray-400 mb-3 block tracking-widest">
              Select Audience
            </label>

            {/* Audience Buttons - Scrollable row on mobile */}
            <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0">
              {[
                { id: "Public", icon: <Globe size={18} />, desc: "Anyone" },
                {
                  id: "Friends",
                  icon: <Users size={18} />,
                  desc: "Connections",
                },
                { id: "Only Me", icon: <Lock size={18} />, desc: "Private" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setAudience(item.id)}
                  className={`shrink-0 md:w-full flex items-center md:items-start gap-3 p-2 md:p-3 rounded-xl border transition-all ${
                    audience === item.id
                      ? "border-blue-500 bg-white shadow-sm ring-1 ring-blue-500"
                      : "border-transparent hover:bg-gray-100"
                  }`}
                >
                  <div
                    className={`${
                      audience === item.id ? "text-blue-600" : "text-gray-500"
                    }`}
                  >
                    {item.icon}
                  </div>
                  <div className="text-left hidden md:block">
                    <p
                      className={`text-sm font-semibold ${
                        audience === item.id ? "text-blue-600" : "text-gray-700"
                      }`}
                    >
                      {item.id}
                    </p>
                    <p className="text-[10px] text-gray-400 leading-none mt-1">
                      {item.desc}
                    </p>
                  </div>
                  <span className="md:hidden text-xs font-medium">
                    {item.id}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
            <button
              onClick={() => setAddStory(false)}
              className="flex-1 px-3 py-2.5 text-sm font-semibold text-gray-600 bg-gray-200 hover:bg-gray-300 rounded-xl transition-all"
            >
              Discard
            </button>
            <button
              disabled={
                !storyType ||
                (storyType === "text" && !textStory) ||
                (storyType === "image" && !selectedImage)
              }
              className="flex-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-bold py-2.5 rounded-xl shadow-lg transition-all"
              onClick={() => alert("API trigger...")}
            >
              Share Now
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 relative flex flex-col overflow-y-auto">
          {/* Close for Desktop */}
          <div className="hidden md:flex justify-end p-4 absolute top-0 right-0 z-20">
            <button
              onClick={() => setAddStory(false)}
              className="p-2 hover:bg-gray-200 rounded-full text-gray-400 hover:text-gray-800 bg-white shadow-sm transition-all"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8">
            {!storyType ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg">
                <button
                  onClick={() => setStoryType("image")}
                  className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-200 hover:border-blue-500 flex flex-col items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ImageIcon size={28} />
                  </div>
                  <span className="font-bold text-gray-700 text-sm md:text-base">
                    Photo Story
                  </span>
                </button>
                <button
                  onClick={() => setStoryType("text")}
                  className="bg-white p-6 md:p-10 rounded-2xl shadow-sm border border-gray-200 hover:border-purple-500 flex flex-col items-center gap-4 transition-all group"
                >
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-purple-50 text-purple-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Type size={28} />
                  </div>
                  <span className="font-bold text-gray-700 text-sm md:text-base">
                    Text Story
                  </span>
                </button>
              </div>
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center max-w-xs md:max-w-sm">
                <div className="w-full flex items-center mb-3">
                  <button
                    onClick={resetSelection}
                    className="flex items-center text-xs md:text-sm font-semibold text-blue-600 hover:underline"
                  >
                    <ArrowLeft size={14} className="mr-1" /> Back
                  </button>
                </div>

                {/* The Preview Card */}
                <div
                  className={`relative aspect-9/16 w-full rounded-2xl shadow-2xl overflow-hidden flex flex-col items-center justify-center transition-all duration-500 ${
                    storyType === "text" ? bgColor : "bg-black"
                  }`}
                >
                  {storyType === "text" ? (
                    <div className="w-full h-full flex flex-col p-6 md:p-10">
                      <textarea
                        autoFocus
                        placeholder="Start typing..."
                        className="w-full h-full bg-transparent text-white text-xl md:text-3xl font-bold text-center placeholder:text-white/40 focus:outline-none resize-none no-scrollbar flex items-center"
                        value={textStory}
                        onChange={(e) => setTextStory(e.target.value)}
                      />
                      <div className="mt-auto flex justify-center gap-2 pb-4">
                        {[
                          "from-purple-500 to-pink-500",
                          "from-blue-500 to-cyan-500",
                          "from-green-400 to-blue-500",
                          "from-orange-500 to-red-500",
                          "from-gray-700 to-black",
                        ].map((grad) => (
                          <button
                            key={grad}
                            onClick={() =>
                              setBgColor(`bg-linear-to-br ${grad}`)
                            }
                            className={`w-6 h-6 rounded-full border border-white/50 ${
                              bgColor.includes(grad)
                                ? "scale-125 ring-2 ring-white"
                                : ""
                            } bg-linear-to-br ${grad}`}
                          />
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center relative">
                      {selectedImage ? (
                        <>
                          <Image
                            src={selectedImage}
                            fill
                            alt="Preview"
                            className="object-cover"
                          />
                          <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 p-1.5 bg-black/50 text-white rounded-full hover:bg-black"
                          >
                            <X size={16} />
                          </button>
                        </>
                      ) : (
                        <label className="cursor-pointer flex flex-col items-center text-white/80 hover:text-white transition-colors">
                          <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-3 ring-1 ring-white/20">
                            <Upload size={24} />
                          </div>
                          <span className="text-sm font-medium">
                            Select a Photo
                          </span>
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </label>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoryModal;
