import React from 'react';
import { Search } from 'lucide-react';
import One1 from '../assets/01.png';

const Hero = () => {
  return (
    <section className="relative w-full bg-[#1456fd] overflow-hidden pt-16 pb-0 text-white flex flex-col items-center">
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      {/* 2. Ellipse 7 Background Ring (Figma Exact: 1149x1149 with 320px lime border) */}
      <div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: '1149px',
          height: '1149px',
          top: '460px',
          left: '50%',
          transform: 'translateX(-50%)',
          border: '320px solid #CBFC01',
          boxSizing: 'border-box',
        }}
      />

      {/* 3. 3D Decorative Shapes (Left & Right) */}
      {/* Left White Spring Accent */}
      <div className="absolute left-6 md:left-14 top-72 w-16 h-28 opacity-90 pointer-events-none hidden md:block">
        <svg viewBox="0 0 100 160" fill="none" className="w-full h-full stroke-white/80" strokeWidth="18" strokeLinecap="round">
          <path d="M 20 20 C 80 20, 80 60, 20 60 C 80 60, 80 100, 20 100 C 80 100, 80 140, 20 140" />
        </svg>
      </div>

      {/* Right 3D Pyramid / Triangle Accent */}
      <div className="absolute right-6 md:right-16 top-64 w-28 h-28 pointer-events-none hidden md:block transform rotate-12">
        <div className="w-0 h-0 border-l-[45px] border-l-transparent border-r-[45px] border-r-transparent border-b-[85px] border-b-white/90 drop-shadow-xl" />
      </div>

      {/* 4. Top Text & Search Bar Frame */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center">
        
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-[64px] font-bold tracking-tight text-white leading-[1.12] max-w-[950px] font-['Satoshi',sans-serif]">
          Get Access to Hundreds <br /> Courses Available
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-sm md:text-[16px] text-white/80 max-w-[680px] font-normal leading-relaxed font-['Satoshi',sans-serif]">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar Group (Figma Exact Style) */}
        <div className="mt-9 flex items-center justify-center gap-3 w-full max-w-[580px]">
          <div className="flex-1 bg-white rounded-full h-[58px] px-6 flex items-center gap-3 shadow-lg">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-[15px] font-medium"
            />
          </div>
          <button className="h-[58px] px-9 bg-[#CBFC01] hover:bg-[#b8e500] text-black font-semibold text-[16px] rounded-full shadow-lg transition-transform active:scale-95 shrink-0 cursor-pointer">
            Search
          </button>
        </div>
      </div>

      {/* 5. Hero Visual Area (Image sitting flat at section bottom) */}
      <div className="relative w-full max-w-[578px] h-[541px] flex justify-center items-end z-10 mt-10">
        
        {/* Main Student Image */}
        <img
          src={One1}
          alt="Student Learning"
          className="w-[578px] h-[541px] object-contain block align-bottom select-none pointer-events-none drop-shadow-2xl"
        />

        {/* Floating Card: UI/UX Design (Top Left) */}
        <div className="absolute -left-10 md:-left-12 top-[135px] z-30 bg-white/95 backdrop-blur-[20px] text-black p-4 px-5 rounded-[16px] shadow-xl border border-white/40">
          <span className="text-xs font-bold text-gray-900 block leading-tight">UI/UX Design</span>
          <span className="text-[11px] text-gray-500 font-medium mt-1 block">200 Courses • 1000+ Students</span>
        </div>

        {/* Floating Card: Learning Progress (Top Right - Exact Figma Specs: 232x131px) */}
        <div 
          className="absolute -right-10 md:-right-16 top-[150px] z-20 bg-white/95 backdrop-blur-[20px] text-black rounded-[16px] shadow-xl border border-white/40 flex flex-col justify-between"
          style={{
            width: '232px',
            height: '131px',
            padding: '16px',
            gap: '8px',
          }}
        >
          <span className="font-['Satoshi'] font-medium text-[14px] leading-[120%] text-gray-600 block">
            Learning Progress
          </span>

          <span className="w-[96px] h-[52px] font-semibold text-[46px] leading-[120%] tracking-tight text-[#242528] flex items-center">
            55%
          </span>

          <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
            <div className="bg-[#CBFC01] h-full w-[55%] rounded-full" />
          </div>
        </div>

        {/* Floating Card: Happy Students (Bottom Left) */}
        <div className="absolute -left-12 md:-left-16 bottom-[100px] z-20 bg-white/95 backdrop-blur-[20px] text-black p-3.5 px-4 rounded-[16px] shadow-xl border border-white/40">
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-xs font-bold text-gray-900">Happy Students</span>
            <span className="text-xs font-semibold text-yellow-500">★ 4.8</span>
          </div>
          <div className="flex items-center -space-x-2">
            <div className="w-7 h-7 rounded-full bg-blue-400 border-2 border-white"></div>
            <div className="w-7 h-7 rounded-full bg-purple-400 border-2 border-white"></div>
            <div className="w-7 h-7 rounded-full bg-amber-400 border-2 border-white"></div>
            <div className="w-7 h-7 rounded-full bg-[#CBFC01] border-2 border-white flex items-center justify-center text-[10px] font-bold text-black font-semibold">
              2K+
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;