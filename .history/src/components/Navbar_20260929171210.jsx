import React from 'react';
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full h-[120px] bg-[#1456fd] border-b border-blue-400/20 pl-[122px] pr-16 flex items-center justify-between relative z-50">
      {/* 1. Brand Logo (Exact Figma Specs: 171px x 37px) */}
      <div 
        className="w-[171px] h-[37px] flex items-center gap-3 cursor-pointer select-none"
        style={{ opacity: 1 }}
      >
        {/* Play Icon Logo */}
        <div className="w-[37px] h-[37px] rounded-full bg-[#d2fb1b] flex items-center justify-center shrink-0">
          <svg
            className="w-4 h-4 text-black fill-current translate-x-0.5"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        {/* Logo Text */}
        <span className="text-[28px] font-bold tracking-tight text-white leading-none">
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