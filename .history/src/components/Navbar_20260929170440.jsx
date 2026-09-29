import React from 'react';
import { ShoppingBag } from 'lucide-react'; // নিশ্চিত করুন lucide-react ইন্সটল করা আছে

const Navbar = () => {
  return (
    <nav className="w-full bg-[#1852fe] text-white px-8 py-5 flex items-center justify-between">
      {/* 1. Logo Section */}
      <div className="flex items-center gap-2 cursor-pointer">
        {/* Placeholder for Logo Icon */}
        <div className="w-6 h-6 bg-[#cbfb2a] rounded-sm transform rotate-45 flex items-center justify-center">
          <div className="w-3 h-3 bg-[#1852fe] rounded-sm"></div>
        </div>
        <span className="text-xl font-bold tracking-wide">ByteSpace</span>
      </div>

      {/* 2. Middle Navigation Links (Outlined Box) */}
      <div className="hidden md:flex items-center gap-6 px-4 py-2 border border-green-500 rounded-md bg-transparent">
        <a href="#" className="hover:text-green-300 transition-colors text-sm">Home</a>
        <a href="#" className="hover:text-green-300 transition-colors text-sm">Courses</a>
        <a href="#" className="hover:text-green-300 transition-colors text-sm">Creator</a>
      </div>

      {/* 3. Right Action Buttons */}
      <div className="flex items-center gap-6">
        <button className="text-sm hover:text-gray-200 transition-colors">Sign In</button>
        <button className="text-sm hover:text-gray-200 transition-colors">Join Us</button>
        <button className="relative hover:text-gray-200 transition-colors">
          <ShoppingBag size={20} />
          {/* Optional cart badge indicator */}
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;