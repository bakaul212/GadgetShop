// src/store/useCartStore.js
import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  // কার্টে প্রোডাক্ট যোগ করার ফাংশন
  addToCart: (product) =>
    set((state) => {
      // প্রথমে চেক করছি প্রোডাক্টটি অলরেডি কার্টে আছে কি না
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        // যদি থাকে, তবে তার পরিমাণ (quantity) ১ বাড়িয়ে দেবো
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      // যদি একদম নতুন প্রোডাক্ট হয়, তবে quantity: 1 দিয়ে কার্টে যোগ করব
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  // কার্ট থেকে প্রোডাক্ট সম্পূর্ণ মুছে ফেলার ফাংশন
  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  // কার্ট একদম খালি বা ক্লিয়ার করার ফাংশন
  clearCart: () => set({ cart: [] }),
}));