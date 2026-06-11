// src/app/layout.js
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Navbar ইম্পোর্ট করা হলো

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mini E-commerce",
  description: "Built with Next.js and Zustand",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <Navbar /> {/* এখানে Navbar যুক্ত করা হলো, যা সব পেজে দেখাবে */}
        {children}
      </body>
    </html>
  );
}