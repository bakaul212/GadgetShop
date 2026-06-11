// src/app/page.js
"use client";

import { useState, useEffect } from "react";
import { products } from "@/data/products";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

export default function Home() {
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Navbar থেকে পাঠানো সার্চ ইনপুট ডাটা রিসিভ করা
  useEffect(() => {
    const handleSearch = (e) => setSearchQuery(e.detail);
    window.addEventListener("productSearch", handleSearch);
    return () => window.removeEventListener("productSearch", handleSearch);
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // ফিল্টার এবং সার্চ দুটোই একসাথে কাজ করার কম্বাইন্ড লজিক
  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-gray-50 min-h-screen flex flex-col justify-between overflow-x-hidden">
      <div>
        <Hero />
        <Features />

        <div className="max-w-6xl mx-auto p-6 md:p-12">
          
          {/* ক্যাটাগরি ফিল্টার */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12"
          >
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                Trending Products 🔥
              </h2>
              {searchQuery && (
                <p className="mt-1 text-sm text-blue-600 font-medium">
                  Showing results for "{searchQuery}"
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-md shadow-blue-100"
                      : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* প্রোডাক্ট গ্রিড */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your search. 🔍</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <AnimatePresence>
                {filteredProducts.map((product) => (
                  <motion.div 
                    key={product.id} 
                    layout // এটি ফিল্টারিংয়ের সময় কার্ডগুলোকে স্মুথলি রি-অ্যারেঞ্জ করবে
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6 }}
                    className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <Link href={`/products/${product.id}`} className="cursor-pointer block">
                      <div className="relative h-48 w-full bg-gray-200 overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-semibold">
                          {product.category}
                        </span>
                      </div>
                    </Link>

                    <div className="p-5 flex-grow">
                      <Link href={`/products/${product.id}`} className="hover:text-blue-600">
                        <h2 className="text-lg font-bold text-gray-800 line-clamp-1">{product.name}</h2>
                      </Link>
                      <p className="mt-2 text-sm text-gray-600 line-clamp-2">{product.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-xl font-extrabold text-gray-900">${product.price}</span>
                      </div>
                    </div>

                    <div className="p-5 pt-0">
                      <motion.button 
                        whileTap={{ scale: 0.95 }}
                        onClick={() => addToCart(product)}
                        className="w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}