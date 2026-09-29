import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full h-[120px] bg-[#1456fd] border-b border-blue-400/20 px-8 lg:px-16 flex items-center justify-between relative z-50">
      {/* 1. Brand Logo */}
      <div className="flex items-center gap-3 cursor-pointer">
        {/* Play-style lime logo */}
        <div className="w-8 h-8 rounded-full bg-[#d2fb1b] flex items-center justify-center">
          <svg
            className="w-4 h-4 text-black fill-current translate-x-0.5"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="text-2xl font-bold tracking-tight text-white">
          ByteSpace
        </span>
      </div>

      {/* 2. Navigation Links */}
      <nav className="hidden md:flex items-center gap-10">
        <a
          href="#home"
          className="text-white text-base font-medium hover:text-[#d2fb1b] transition-colors"
        >
          Home
        </a>
        <a
          href="#courses"
          className="text-white/80 text-base font-medium hover:text-white transition-colors"
        >
          Courses
        </a>
        <a
          href="#creators"
          className="text-white/80 text-base font-medium hover:text-white transition-colors"
        >
          Creators
        </a>
      </nav>

      {/* 3. Action Buttons & Cart */}
      <div className="flex items-center gap-7">
        <button className="text-white text-base font-medium hover:text-white/80 transition-colors">
          Sign In
        </button>
        <button className="text-white text-base font-medium hover:text-white/80 transition-colors">
          Join Us
        </button>
        <button className="text-white hover:text-[#d2fb1b] transition-colors flex items-center justify-center">
          <ShoppingBag size={22} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;