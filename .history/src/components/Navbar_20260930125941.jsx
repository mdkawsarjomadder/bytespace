import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full h-[120px] bg-[#1456fd] border-b border-blue-400/20 pl-[122px] pr-16 flex items-center justify-between relative z-50">
      {/* 1. Brand Logo (Figma Specs: 171px x 37px) */}
      <Link 
        to="/"
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
        <span className="text-[28px] font-bold tracking-tight text-white leading-none font-['Satoshi']">
          ByteSpace
        </span>
      </Link>

      {/* 2. Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 font-['Satoshi']">
        <Link
          to="/"
          className="text-[#F5F5F6] text-[16px] leading-[160%] font-normal hover:text-[#d2fb1b] transition-colors"
        >
          Home
        </Link>
        <Link
          to="/courses"
          className="w-[58px] h-[26px] flex items-center text-[#F5F5F6] text-[16px] leading-[160%] font-normal hover:text-[#d2fb1b] transition-colors"
          style={{ opacity: 1 }}
        >
          Courses
        </Link>
        <Link
          to="/creators"
          className="text-[#F5F5F6] text-[16px] leading-[160%] font-normal hover:text-[#d2fb1b] transition-colors"
        >
          Creators
        </Link>
      </nav>

      {/* 3. Action Buttons & Cart */}
      <div className="flex items-center gap-6 font-['Satoshi']">
        <Link 
          to="/login"
          className="w-[49px] h-[24px] flex items-center justify-center text-[#F5F5F6] text-[16px] leading-[24px] font-normal hover:text-white/80 transition-colors"
          style={{ opacity: 1 }}
        >
          Sign In
        </Link>
        <Link 
          to="/register"
          className="h-[24px] px-2 flex items-center justify-center text-[#F5F5F6] text-[16px] leading-[24px] font-normal hover:text-white/80 transition-colors"
          style={{ opacity: 1 }}
        >
          Join us
        </Link>
        <button className="text-[#F5F5F6] hover:text-[#d2fb1b] transition-colors flex items-center justify-center ml-2 cursor-pointer">
          <ShoppingBag size={22} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;