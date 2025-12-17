import type { Metadata } from "next";
import "../globals.css";

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
      <body>{children}</body>
    </html>
  );
}
