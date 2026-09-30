import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="w-full h-[120px] bg-[#1456fd] border-b border-blue-400/20 pl-8 lg:pl-[122px] pr-8 lg:pr-16 flex items-center justify-between relative z-50">
      
      {/* 1. Brand Logo (Figma Specs: 28.88px x 31.5px Vector Icon + ByteSpace Text) */}
      <Link 
        to="/"
        className="flex items-center gap-3.5 cursor-pointer select-none group"
      >
        {/* Custom 'b' Logo Vector */}
        <div className="w-[29px] h-[32px] shrink-0">
          <svg 
            viewBox="0 0 29 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Left Stem Leaf Shape */}
            <path 
              d="M0 7.8C0 3.5 3.5 0 7.8 0C12.1 0 15.6 3.5 15.6 7.8V19.2C15.6 26.2 9.9 31.9 2.9 31.9C1.3 31.9 0 30.6 0 29V7.8Z" 
              fill="#CBFC01"
            />
            {/* Right Bowl Petal Shape */}
            <path 
              d="M14.2 11.5C21.8 11.5 28 17.7 28 25.3C28 28.9 25.1 31.9 21.4 31.9C15.2 31.9 10.2 26.9 10.2 20.7C10.2 15.6 14.2 11.5 14.2 11.5Z" 
              fill="#CBFC01"
            />
          </svg>
        </div>

        {/* Logo Text */}
        <span className="text-[28px] md:text-[32px] font-black tracking-tight text-white leading-none font-['Satoshi',sans-serif]">
          ByteSpace
        </span>
      </Link>

      {/* 2. Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 font-['Satoshi',sans-serif]">
        <Link
          to="/"
          className="text-[#F5F5F6] text-[16px] leading-[160%] font-medium hover:text-[#CBFC01] transition-colors"
        >
          Home
        </Link>
        <Link
          to="/courses"
          className="text-[#F5F5F6] text-[16px] leading-[160%] font-medium hover:text-[#CBFC01] transition-colors"
        >
          Courses
        </Link>
        <Link
          to="/creators"
          className="text-[#F5F5F6] text-[16px] leading-[160%] font-medium hover:text-[#CBFC01] transition-colors"
        >
          Creators
        </Link>
      </nav>

      {/* 3. Action Buttons & Cart */}
      <div className="flex items-center gap-6 font-['Satoshi',sans-serif]">
        <Link 
          to="/login"
          className="text-[#F5F5F6] text-[16px] leading-[24px] font-medium hover:text-white/80 transition-colors"
        >
          Sign In
        </Link>
        <Link 
          to="/register"
          className="text-[#F5F5F6] text-[16px] leading-[24px] font-medium hover:text-white/80 transition-colors"
        >
          Join us
        </Link>
        <button 
          type="button"
          className="text-[#F5F5F6] hover:text-[#CBFC01] transition-colors flex items-center justify-center cursor-pointer"
        >
          <ShoppingBag size={22} strokeWidth={2} />
        </button>
      </div>

    </header>
  );
};

export default Navbar;