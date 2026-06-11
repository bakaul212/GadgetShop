// src/components/Footer.js
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-20">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* কলাম ১: লোগো ও বর্ণনা */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-gray-900">GadgetShop 🛍️</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Your ultimate destination for premium gadgets, minimal lifestyle gear, and smart accessories.
          </p>
        </div>

        {/* কলাম ২: কুইক লিংক */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Shop</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-600 transition-colors">All Products</Link></li>
            <li><Link href="/" className="hover:text-blue-600 transition-colors">Featured Items</Link></li>
            <li><Link href="/" className="hover:text-blue-600 transition-colors">New Arrivals</Link></li>
          </ul>
        </div>

        {/* কলাম ৩: সাপোর্ট */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Support</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link href="/" className="hover:text-blue-600 transition-colors">Contact Us</Link></li>
            <li><Link href="/" className="hover:text-blue-600 transition-colors">FAQs</Link></li>
            <li><Link href="/" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* কলাম ৪: সোশ্যাল মিডিয়া টেক্সট লিংক */}
        <div>
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Follow Us</h4>
          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <a href="#" className="hover:text-blue-600 transition-colors">Facebook</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-pink-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Github</a>
          </div>
        </div>
      </div>

      {/* নিচের কপিরাইট অংশ */}
      <div className="border-t border-gray-100 py-6 text-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} GadgetShop. All rights reserved. Built with Next.js & Zustand.</p>
      </div>
    </footer>
  );
}