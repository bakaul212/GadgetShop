// src/app/success/page.js
"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function SuccessPage() {
  return (
    <div className="max-w-md mx-auto my-20 p-8 bg-white rounded-2xl shadow-lg border border-gray-100 text-center">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="flex justify-center mb-6"
      >
        <CheckCircle className="w-16 h-16 text-green-500" />
      </motion.div>

      <h1 className="text-3xl font-extrabold text-gray-900">Order Placed! 🎉</h1>
      <p className="text-gray-500 mt-3 text-sm leading-relaxed">
        Thank you for your purchase. Your payment was processed successfully and your items are on the way!
      </p>

      <div className="mt-8 border-t border-gray-100 pt-6 space-y-3">
        <Link href="/">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-all shadow-md shadow-blue-100">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}