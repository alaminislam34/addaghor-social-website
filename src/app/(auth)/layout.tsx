import type { Metadata } from "next";
import "../globals.css";
import { ToastContainer } from "react-toastify";

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
      <body className="min-h-screen w-full flex justify-center items-center bg-light dark:bg-dark transition-colors duration-300 p-4 py-12 relative">
        {children}
        <ToastContainer position="bottom-center" />
      </body>
    </html>
  );
}
