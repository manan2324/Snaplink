import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SnapLink - your trusted URL shortener",
  description: "SnapLink helps you shorten long URLs into manageable links.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-50`}
      >
        <Suspense fallback={<div className="bg-purple-700 text-white min-h-16"></div>}>
          <Navbar/>
        </Suspense>
        {children}
      </body>
    </html>
  );
}
