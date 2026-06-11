// src/components/Navbar.js
"use client";

import Link from "next/link";
import { useCartStore } from "@/store/useCartStore";
import { Search } from "lucide-react";

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2 shrink-0">
          <span>GadgetShop 🛍️</span>
        </Link>

        {/* Global Search Bar */}
        <div className="flex-grow max-w-md mx-4 hidden sm:block">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search products..." 
              onChange={(e) => {
                // এটি হোম পেজের রিয়েল-টাইম সার্চ ট্রিপল এফেক্টের জন্য কাস্টম ইভেন্ট ফায়ার করবে
                const event = new CustomEvent("productSearch", { detail: e.target.value });
                window.dispatchEvent(event);
              }}
              className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
          </div>
        </div>

        {/* Navigation Links & Cart */}
        <div className="flex items-center gap-6 shrink-0">
          <Link href="/" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Home
          </Link>
          
          <Link 
            href="/cart" 
            className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium py-2 px-4 rounded-full flex items-center gap-2 transition-colors"
          >
            <span>Cart</span>
            {totalItems > 0 && (
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-pulse">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}