import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../(home)/components/Shared/Header/Navbar";
import { AuthProvider } from "@/app/providers/authProvider";
export const demoPosts = [
  {
    id: 1,
    author: {
      name: "Somoy News TV",
      avatar: "https://i.pravatar.cc/150?img=11",
      verified: true,
    },
    time: "2h",
    content: [
      { type: "text", value: "*আমি আমার দাদাকে কখনো দেখিনি*" },
      {
        type: "text",
        value: "কিন্তু তাঁর সততা আর দেশপ্রেমের কথা দাদু আসে শুনে সেই চলেছি।",
      },
      { type: "image", src: "https://picsum.photos/id/1011/800/450" },
    ],
    likes: 3700,
    comments: 289,
    shares: 30,
  },
  {
    id: 2,
    author: {
      name: "Daily Update",
      avatar: "https://i.pravatar.cc/150?img=12",
      verified: false,
    },
    time: "4h",
    content: [
      { type: "text", value: "**পরিশ্রম কখনো বৃথা যায় না**" },
      {
        type: "text",
        value:
          "সময় নেয়, কিন্তু ফল অবশ্যই আসে। নিজেকে বিশ্বাস করাই সবচেয়ে গুরুত্বপূর্ণ।",
      },
    ],
    likes: 2100,
    comments: 145,
    shares: 18,
  },
  {
    id: 3,
    author: {
      name: "Travel Bangladesh",
      avatar: "https://i.pravatar.cc/150?img=15",
      verified: true,
    },
    time: "6h",
    content: [{ type: "image", src: "https://picsum.photos/id/1043/800/500" }],
    likes: 5200,
    comments: 430,
    shares: 96,
  },
  {
    id: 4,
    author: {
      name: "Mood Today",
      avatar: "https://i.pravatar.cc/150?img=18",
      verified: false,
    },
    time: "8h",
    content: [{ type: "emoji", value: "😌✨💙" }],
    likes: 1800,
    comments: 76,
    shares: 14,
  },
  {
    id: 5,
    author: {
      name: "Tech Bangla",
      avatar: "https://i.pravatar.cc/150?img=20",
      verified: true,
    },
    time: "1d",
    content: [
      { type: "text", value: "*Future is AI*" },
      { type: "text", value: "**But AI is nothing without human values**" },
      { type: "image", src: "https://picsum.photos/id/1050/800/450" },
    ],
    likes: 6400,
    comments: 512,
    shares: 140,
  },
  {
    id: 6,
    author: {
      name: "Cricket Fever",
      avatar: "https://i.pravatar.cc/150?img=31",
      verified: true,
    },
    time: "1h",
    content: [
      { type: "text", value: "টাইগারদের দুর্দান্ত জয়! 🇧🇩" },
      { type: "image", src: "https://picsum.photos/id/1051/800/450" },
    ],
    likes: 12000,
    comments: 850,
    shares: 1200,
  },
  {
    id: 7,
    author: {
      name: "Nature Photography",
      avatar: "https://i.pravatar.cc/150?img=32",
      verified: false,
    },
    time: "3h",
    content: [{ type: "image", src: "https://picsum.photos/id/1052/800/450" }],
    likes: 900,
    comments: 45,
    shares: 12,
  },
  {
    id: 8,
    author: {
      name: "Food Vlogger BD",
      avatar: "https://i.pravatar.cc/150?img=33",
      verified: true,
    },
    time: "5h",
    content: [
      { type: "text", value: "পুরান ঢাকার কাচ্চি মানেই অন্যরকম ভালোবাসা! 😍" },
      { type: "image", src: "https://picsum.photos/id/1053/800/450" },
    ],
    likes: 4500,
    comments: 320,
    shares: 89,
  },
  {
    id: 9,
    author: {
      name: "Motivational Quotes",
      avatar: "https://i.pravatar.cc/150?img=34",
      verified: false,
    },
    time: "7h",
    content: [
      {
        type: "text",
        value: "Don't stop when you're tired. Stop when you're done.",
      },
    ],
    likes: 1100,
    comments: 20,
    shares: 400,
  },
  {
    id: 10,
    author: {
      name: "Historical BD",
      avatar: "https://i.pravatar.cc/150?img=35",
      verified: true,
    },
    time: "9h",
    content: [
      { type: "text", value: "১৯৫২ এর সেই স্মৃতি..." },
      { type: "image", src: "https://picsum.photos/id/1054/800/450" },
    ],
    likes: 8000,
    comments: 150,
    shares: 600,
  },
  {
    id: 11,
    author: {
      name: "Funny Memes",
      avatar: "https://i.pravatar.cc/150?img=36",
      verified: false,
    },
    time: "10h",
    content: [
      { type: "text", value: "যখন আম্মু বলে 'তোর ফোনটাই সব নষ্টের মূল' 💀" },
    ],
    likes: 2500,
    comments: 900,
    shares: 150,
  },
  {
    id: 12,
    author: {
      name: "Sky Watchers",
      avatar: "https://i.pravatar.cc/150?img=37",
      verified: true,
    },
    time: "11h",
    content: [
      { type: "text", value: "আজকের গোধূলি আকাশটা অসাধারণ ছিল।" },
      { type: "image", src: "https://picsum.photos/id/1055/800/450" },
    ],
    likes: 3100,
    comments: 88,
    shares: 45,
  },
  {
    id: 13,
    author: {
      name: "Programming Hero",
      avatar: "https://i.pravatar.cc/150?img=38",
      verified: true,
    },
    time: "12h",
    content: [
      {
        type: "text",
        value: "Coding is not just about typing, it's about thinking.",
      },
    ],
    likes: 5600,
    comments: 120,
    shares: 340,
  },
  {
    id: 14,
    author: {
      name: "Street Style",
      avatar: "https://i.pravatar.cc/150?img=39",
      verified: false,
    },
    time: "13h",
    content: [{ type: "image", src: "https://picsum.photos/id/1056/800/450" }],
    likes: 1200,
    comments: 34,
    shares: 5,
  },
  {
    id: 15,
    author: {
      name: "Music Vibes",
      avatar: "https://i.pravatar.cc/150?img=40",
      verified: false,
    },
    time: "14h",
    content: [{ type: "emoji", value: "🎸🎤🎼🎧" }],
    likes: 700,
    comments: 15,
    shares: 2,
  },
  {
    id: 16,
    author: {
      name: "BBC News Bangla",
      avatar: "https://i.pravatar.cc/150?img=41",
      verified: true,
    },
    time: "15h",
    content: [
      {
        type: "text",
        value: "বিশ্বজুড়ে বাড়ছে প্লাস্টিক দূষণ, সতর্কবার্তা বিজ্ঞানীদের।",
      },
    ],
    likes: 9200,
    comments: 450,
    shares: 800,
  },
  {
    id: 17,
    author: {
      name: "Village Life",
      avatar: "https://i.pravatar.cc/150?img=42",
      verified: false,
    },
    time: "16h",
    content: [
      { type: "text", value: "গ্রামের সকাল মানেই প্রশান্তি।" },
      { type: "image", src: "https://picsum.photos/id/1057/800/450" },
    ],
    likes: 1800,
    comments: 60,
    shares: 22,
  },
  {
    id: 18,
    author: {
      name: "Gadget Freak",
      avatar: "https://i.pravatar.cc/150?img=43",
      verified: true,
    },
    time: "17h",
    content: [
      { type: "text", value: "Check out this new mechanical keyboard! ⌨️" },
      { type: "image", src: "https://picsum.photos/id/1058/800/450" },
    ],
    likes: 2900,
    comments: 140,
    shares: 35,
  },
  {
    id: 19,
    author: {
      name: "Poetry BD",
      avatar: "https://i.pravatar.cc/150?img=44",
      verified: false,
    },
    time: "18h",
    content: [
      { type: "text", value: "তুমি আসবে বলেই আকাশ মেঘলা, বৃষ্টি হয়নি আজও।" },
    ],
    likes: 1400,
    comments: 210,
    shares: 55,
  },
  {
    id: 20,
    author: {
      name: "Startup Mindset",
      avatar: "https://i.pravatar.cc/150?img=45",
      verified: true,
    },
    time: "19h",
    content: [{ type: "text", value: "Build something people actually want." }],
    likes: 4100,
    comments: 75,
    shares: 120,
  },
  {
    id: 21,
    author: {
      name: "Wildlife Explorer",
      avatar: "https://i.pravatar.cc/150?img=46",
      verified: true,
    },
    time: "20h",
    content: [{ type: "image", src: "https://picsum.photos/id/1059/800/450" }],
    likes: 6700,
    comments: 190,
    shares: 88,
  },
  {
    id: 22,
    author: {
      name: "Coffee Lovers",
      avatar: "https://i.pravatar.cc/150?img=47",
      verified: false,
    },
    time: "21h",
    content: [{ type: "text", value: "Rainy days and a cup of coffee. ☕🌧️" }],
    likes: 2200,
    comments: 45,
    shares: 14,
  },
  {
    id: 23,
    author: {
      name: "Architecture Hub",
      avatar: "https://i.pravatar.cc/150?img=48",
      verified: true,
    },
    time: "22h",
    content: [{ type: "image", src: "https://picsum.photos/id/1060/800/450" }],
    likes: 3800,
    comments: 55,
    shares: 40,
  },
  {
    id: 24,
    author: {
      name: "Movie Buff",
      avatar: "https://i.pravatar.cc/150?img=49",
      verified: false,
    },
    time: "23h",
    content: [{ type: "text", value: "Suggest me a thriller movie! 👇" }],
    likes: 800,
    comments: 600,
    shares: 10,
  },
  {
    id: 25,
    author: {
      name: "Space Journey",
      avatar: "https://i.pravatar.cc/150?img=50",
      verified: true,
    },
    time: "1d",
    content: [
      {
        type: "text",
        value:
          "The James Webb telescope is revealing secrets of the early universe.",
      },
      { type: "image", src: "https://picsum.photos/id/1061/800/450" },
    ],
    likes: 15000,
    comments: 1200,
    shares: 3400,
  },
  // Adding more unique IDs up to 50...
  {
    id: 26,
    author: {
      name: "Daily Wisdom",
      avatar: "https://i.pravatar.cc/150?img=51",
      verified: false,
    },
    time: "1d",
    content: [
      {
        type: "text",
        value: "Character is how you treat those who can do nothing for you.",
      },
    ],
    likes: 1200,
    comments: 30,
    shares: 80,
  },
  {
    id: 27,
    author: {
      name: "Ocean Life",
      avatar: "https://i.pravatar.cc/150?img=52",
      verified: true,
    },
    time: "1d",
    content: [{ type: "image", src: "https://picsum.photos/id/1062/800/450" }],
    likes: 5400,
    comments: 110,
    shares: 95,
  },
  {
    id: 28,
    author: {
      name: "Fitness BD",
      avatar: "https://i.pravatar.cc/150?img=53",
      verified: false,
    },
    time: "1d",
    content: [{ type: "text", value: "নো এক্সকিউজ! আজ জিমে গিয়েছেন তো? 💪" }],
    likes: 1900,
    comments: 85,
    shares: 12,
  },
  {
    id: 29,
    author: {
      name: "Global Travel",
      avatar: "https://i.pravatar.cc/150?img=54",
      verified: true,
    },
    time: "2d",
    content: [
      { type: "image", src: "https://picsum.photos/id/1063/800/450" },
      { type: "text", value: "Paris is always a good idea." },
    ],
    likes: 8800,
    comments: 340,
    shares: 150,
  },
  {
    id: 30,
    author: {
      name: "Book Worm",
      avatar: "https://i.pravatar.cc/150?img=55",
      verified: false,
    },
    time: "2d",
    content: [{ type: "text", value: "বই পড়ার অভ্যেস মানুষের শ্রেষ্ঠ সম্পদ।" }],
    likes: 3200,
    comments: 150,
    shares: 90,
  },
  {
    id: 31,
    author: {
      name: "Pet Paradise",
      avatar: "https://i.pravatar.cc/150?img=56",
      verified: true,
    },
    time: "2d",
    content: [
      { type: "image", src: "https://picsum.photos/id/1064/800/450" },
      { type: "emoji", value: "🐱🐶❤️" },
    ],
    likes: 12000,
    comments: 500,
    shares: 300,
  },
  {
    id: 32,
    author: {
      name: "Science Today",
      avatar: "https://i.pravatar.cc/150?img=57",
      verified: true,
    },
    time: "2d",
    content: [
      {
        type: "text",
        value: "Quantum computing might be closer than we think.",
      },
    ],
    likes: 4500,
    comments: 90,
    shares: 200,
  },
  {
    id: 33,
    author: {
      name: "Night Owl",
      avatar: "https://i.pravatar.cc/150?img=58",
      verified: false,
    },
    time: "3d",
    content: [{ type: "text", value: "শান্ত রাত, আর এক কাপ লাল চা।" }],
    likes: 900,
    comments: 40,
    shares: 5,
  },
  {
    id: 34,
    author: {
      name: "Car Enthusiast",
      avatar: "https://i.pravatar.cc/150?img=59",
      verified: true,
    },
    time: "3d",
    content: [{ type: "image", src: "https://picsum.photos/id/1065/800/450" }],
    likes: 2700,
    comments: 130,
    shares: 20,
  },
  {
    id: 35,
    author: {
      name: "Health Tips",
      avatar: "https://i.pravatar.cc/150?img=60",
      verified: true,
    },
    time: "3d",
    content: [{ type: "text", value: "চিনি বর্জন করুন, সুস্থ থাকুন।" }],
    likes: 6000,
    comments: 200,
    shares: 450,
  },
  {
    id: 36,
    author: {
      name: "Interior Design",
      avatar: "https://i.pravatar.cc/150?img=61",
      verified: false,
    },
    time: "4d",
    content: [{ type: "image", src: "https://picsum.photos/id/1066/800/450" }],
    likes: 3300,
    comments: 45,
    shares: 18,
  },
  {
    id: 37,
    author: {
      name: "Art Gallery",
      avatar: "https://i.pravatar.cc/150?img=62",
      verified: false,
    },
    time: "4d",
    content: [
      { type: "text", value: "The beauty of oil painting." },
      { type: "image", src: "https://picsum.photos/id/1067/800/450" },
    ],
    likes: 1500,
    comments: 25,
    shares: 10,
  },
  {
    id: 38,
    author: {
      name: "E-Commerce Expert",
      avatar: "https://i.pravatar.cc/150?img=63",
      verified: true,
    },
    time: "4d",
    content: [
      {
        type: "text",
        value: "Focus on customer retention, not just acquisition.",
      },
    ],
    likes: 1100,
    comments: 40,
    shares: 60,
  },
  {
    id: 39,
    author: {
      name: "Sunset Lover",
      avatar: "https://i.pravatar.cc/150?img=64",
      verified: false,
    },
    time: "5d",
    content: [{ type: "emoji", value: "🌅🌊🧡" }],
    likes: 4200,
    comments: 80,
    shares: 100,
  },
  {
    id: 40,
    author: {
      name: "Career Coach",
      avatar: "https://i.pravatar.cc/150?img=65",
      verified: true,
    },
    time: "5d",
    content: [
      {
        type: "text",
        value: "Learn to say 'No' to things that don't help you grow.",
      },
    ],
    likes: 7000,
    comments: 310,
    shares: 500,
  },
  {
    id: 41,
    author: {
      name: "Gardeners BD",
      avatar: "https://i.pravatar.cc/150?img=66",
      verified: false,
    },
    time: "5d",
    content: [
      { type: "text", value: "ছাদ বাগানের টাটকা সবজি!" },
      { type: "image", src: "https://picsum.photos/id/1068/800/450" },
    ],
    likes: 2100,
    comments: 95,
    shares: 30,
  },
  {
    id: 42,
    author: {
      name: "Tech Trends",
      avatar: "https://i.pravatar.cc/150?img=67",
      verified: true,
    },
    time: "6d",
    content: [
      {
        type: "text",
        value: "Web3 is changing how we interact with the internet.",
      },
    ],
    likes: 3900,
    comments: 120,
    shares: 85,
  },
  {
    id: 43,
    author: {
      name: "Daily Workout",
      avatar: "https://i.pravatar.cc/150?img=68",
      verified: false,
    },
    time: "6d",
    content: [{ type: "emoji", value: "🏃‍♂️💨🔥" }],
    likes: 1300,
    comments: 25,
    shares: 8,
  },
  {
    id: 44,
    author: {
      name: "Photography Life",
      avatar: "https://i.pravatar.cc/150?img=69",
      verified: true,
    },
    time: "1w",
    content: [{ type: "image", src: "https://picsum.photos/id/1069/800/450" }],
    likes: 5600,
    comments: 200,
    shares: 70,
  },
  {
    id: 45,
    author: {
      name: "Peaceful Mind",
      avatar: "https://i.pravatar.cc/150?img=70",
      verified: false,
    },
    time: "1w",
    content: [{ type: "text", value: "শান্তি ভেতর থেকে আসে, বাইরে খুঁজো না।" }],
    likes: 1800,
    comments: 110,
    shares: 45,
  },
  {
    id: 46,
    author: {
      name: "Marketing Guru",
      avatar: "https://i.pravatar.cc/150?img=71",
      verified: true,
    },
    time: "1w",
    content: [
      { type: "text", value: "Content is King, but distribution is Queen." },
    ],
    likes: 2500,
    comments: 60,
    shares: 140,
  },
  {
    id: 47,
    author: {
      name: "Winter Vibes",
      avatar: "https://i.pravatar.cc/150?img=72",
      verified: false,
    },
    time: "1w",
    content: [
      { type: "text", value: "শীতের পিঠা উৎসব শুরু হোক!" },
      { type: "emoji", value: "🥞❄️" },
    ],
    likes: 4900,
    comments: 300,
    shares: 110,
  },
  {
    id: 48,
    author: {
      name: "Solo Traveler",
      avatar: "https://i.pravatar.cc/150?img=73",
      verified: true,
    },
    time: "2w",
    content: [{ type: "image", src: "https://picsum.photos/id/1070/800/450" }],
    likes: 7200,
    comments: 210,
    shares: 90,
  },
  {
    id: 49,
    author: {
      name: "Deep Quotes",
      avatar: "https://i.pravatar.cc/150?img=74",
      verified: false,
    },
    time: "2w",
    content: [{ type: "text", value: "Some memories never fade." }],
    likes: 1100,
    comments: 88,
    shares: 15,
  },
  {
    id: 50,
    author: {
      name: "Happy Endings",
      avatar: "https://i.pravatar.cc/150?img=75",
      verified: true,
    },
    time: "3w",
    content: [
      { type: "text", value: "Every end is a new beginning." },
      { type: "emoji", value: "🌈✨" },
    ],
    likes: 9500,
    comments: 400,
    shares: 250,
  },
];
export const metadata: Metadata = {
  title: "AddaGhor",
  description: "Powered by Md Al Amin Islam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body
          className="bg-light transition-colors duration-300"
          cz-shortcut-listen="true"
        >
          <header className="h-16.5">
            <Navbar />
          </header>
          <main className="pt-6">{children}</main>
        </body>
      </AuthProvider>
    </html>
  );
}
