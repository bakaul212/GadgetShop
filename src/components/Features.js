// src/components/Features.js
import { Truck, ShieldCheck, Headphones, RotateCcw } from "lucide-react";

export default function Features() {
  const featureList = [
    {
      icon: <Truck className="w-6 h-6 text-blue-600" />,
      title: "Free Shipping",
      desc: "On all orders over $100"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Secure Payment",
      desc: "100% protected payments"
    },
    {
      icon: <Headphones className="w-6 h-6 text-blue-600" />,
      title: "24/7 Support",
      desc: "Dedicated live assistance"
    },
    {
      icon: <RotateCcw className="w-6 h-6 text-blue-600" />,
      title: "7-Day Return",
      desc: "Easy hassle-free returns"
    }
  ];

  return (
    <div className="bg-white border-b border-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featureList.map((item, index) => (
          <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="p-3 bg-blue-50 rounded-xl">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 text-base">{item.title}</h3>
              <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}