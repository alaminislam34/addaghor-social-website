import type { Metadata } from "next";
import "../globals.css";
import Navbar from "../(home)/components/Shared/Header/Navbar";

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
      <body className="bg-light dark:bg-dark transition-colors duration-300">
        <header className="h-19 lg:h-19.25">
          <Navbar />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
