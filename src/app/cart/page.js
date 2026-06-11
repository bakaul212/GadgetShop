// src/app/cart/page.js
"use client";

import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { motion } from "framer-motion"; // অ্যানিমেশনের জন্য ইম্পোর্ট করা হলো

export default function CartPage() {
  // Zustand স্টোর থেকে কার্টের ডেটা এবং রিমুভ করার ফাংশন নিয়ে আসলাম
  const { cart, removeFromCart, clearCart } = useCartStore();

  // কার্টের সব প্রোডাক্টের মোট মূল্য (Total Price) হিসাব করা
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // যদি কার্ট খালি থাকে, তবে এই মেসেজটি দেখাবে
  if (cart.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Your Cart is Empty 🛒</h2>
        <p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/">
          <button className="mt-6 bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Continue Shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* বাম পাশে: কার্ট আইটেমের লিস্ট */}
      <div className="lg:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Shopping Cart ({cart.length})</h1>
          <button 
            onClick={clearCart}
            className="text-sm text-red-600 hover:text-red-800 font-medium transition-colors"
          >
            Clear All
          </button>
        </div>

        <div className="space-y-4">
          {cart.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4"
            >
              {/* প্রোডাক্টের ছবি */}
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-20 h-20 object-cover rounded-lg bg-gray-100"
              />
              
              {/* প্রোডাক্টের নাম ও ডিটেইলস */}
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-1">Price: ${item.price}</p>
                <p className="text-sm text-gray-600 mt-1 font-medium">Quantity: {item.quantity}</p>
              </div>

              {/* রিমুভ বাটন এবং টোটাল */}
              <div className="text-right">
                <p className="font-bold text-gray-900">${item.price * item.quantity}</p>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-xs text-gray-400 hover:text-red-600 mt-2 block ml-auto transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ডান পাশে: অর্ডার সামারি বা বিল (Order Summary) */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h2>
        
        <div className="space-y-3 border-b border-gray-100 pb-4">
          <div className="flex justify-between text-gray-600">
            <span>Subtotal</span>
            <span>${totalPrice}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Shipping</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>
        </div>

        <div className="flex justify-between font-bold text-lg text-gray-900 my-4">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>

        {/* 🔗 বাটনটিকে Link দিয়ে র‍্যাপ করা হলো এবং motion.button দিয়ে অ্যানিমেশন দেওয়া হলো */}
        <Link href="/success" className="w-full block">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 shadow-md shadow-blue-100"
          >
            Proceed to Checkout
          </motion.button>
        </Link>
      </div>
    </div>
  );
}