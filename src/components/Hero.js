// src/components/Hero.js
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-gray-950 to-gray-900 text-white overflow-hidden py-20 md:py-32 px-6">
      {/* ব্যাকগ্রাউন্ডের হালকা গ্লো ইফেক্ট */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        {/* টেক্সট কনটেন্ট */}
        <div className="space-y-6">
          <span className="inline-block bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
            Exclusive Tech Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Upgrade Your <br />
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Digital Lifestyle
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-md">
            Explore premium gadgets, accessories, and fitness gear crafted for modern performance. Get up to 20% off on your first order.
          </p>
          <div className="pt-2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-xl inline-flex items-center gap-2 transition-all shadow-lg shadow-blue-600/20 group">
              <span>Shop Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ডান পাশের থ্রিডি-লুক ইমেজ কন্টেইনার */}
        <div className="relative flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/50 shadow-2xl overflow-hidden flex items-center justify-center p-6 relative group">
            <img 
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80" 
              alt="Hero Premium Product" 
              className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}