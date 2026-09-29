import React from 'react';
import { Search } from 'lucide-react';
import One1 from '../assets/01.png';

const Hero = () => {
  return (
    <section className="relative w-full bg-[#1456fd] overflow-hidden pt-8 pb-0 text-white flex flex-col items-center">
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />

      {/* 2. Ellipse 7 Background Ring (Figma Exact: 1149px, 320px border #CBFC01) */}
      <div
        className="absolute rounded-full pointer-events-none z-0"
        style={{
          width: '1149px',
          height: '1149px',
          bottom: '-540px',
          left: '50%',
          transform: 'translateX(-50%)',
          border: '320px solid #CBFC01',
          boxSizing: 'border-box',
        }}
      />

      {/* 3. Decorative Shapes */}
      <div className="absolute left-8 top-16 w-24 h-36 bg-[#CBFC01] rounded-3xl opacity-90 -rotate-12 pointer-events-none hidden lg:block" />
      <div className="absolute right-10 top-20 w-28 h-40 bg-[#CBFC01] rounded-2xl opacity-90 rotate-12 pointer-events-none hidden lg:block" />

      {/* 4. Top Text & Search Bar */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-[54px] font-bold tracking-tight text-white leading-[1.15] max-w-[900px]">
          Get Access to Hundreds <br /> Courses Available
        </h1>

        <p className="mt-3 text-sm md:text-base text-blue-100 max-w-[650px] font-normal leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <div className="mt-6 w-full max-w-[560px] bg-white rounded-full p-1.5 pl-6 flex items-center shadow-lg justify-between gap-3">
          <div className="flex items-center gap-3 w-full">
            <Search className="w-5 h-5 text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-sm font-medium"
            />
          </div>
          <button className="bg-[#CBFC01] hover:bg-[#b5e200] text-black font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 shrink-0 cursor-pointer">
            Search
          </button>
        </div>
      </div>

      {/* 5. Hero Visual Area (Sitting flat at the bottom) */}
      <div className="relative w-full max-w-[578px] h-[541px] flex justify-center items-end z-10 mt-8">
        
        {/* Main Student Image */}
        <img
          src={One1}
          alt="Student Learning"
          className="w-[578px] h-[541px] object-contain block align-bottom pointer-events-none drop-shadow-2xl"
        />

        {/* Floating Card 1: UI/UX Design (Top Left) */}
        <div className="absolute -left-12 top-[60px] z-20 bg-white text-black p-4 rounded-[16px] shadow-xl border border-white/40">
          <span className="text-xs font-bold text-gray-900 block">UI/UX Design</span>
          <span className="text-[11px] text-gray-500 font-medium">200 Courses • 1000+ Students</span>
        </div>

        {/* Floating Card 2: Learning Progress (Figma Exact: 232px x 131px, p-4, r-16px, gap-2) */}
        <div 
          className="absolute -right-16 top-[80px] z-20 bg-white text-black rounded-[16px] shadow-xl border border-white/40 flex flex-col justify-between"
          style={{
            width: '232px',
            height: '131px',
            padding: '16px',
            gap: '8px'
          }}
        >
          <span className="text-[13px] font-medium text-gray-500 block">Learning Progress</span>
          <span className="text-[38px] font-extrabold text-gray-900 block leading-none tracking-tight">55%</span>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-1">
            <div className="bg-[#CBFC01] h-full w-[55%] rounded-full" />
          </div>
        </div>

        {/* Floating Card 3: Happy Students (Bottom Left) */}
        <div className="absolute -left-14 bottom-[100px] z-20 bg-white text-black p-3.5 px-4 rounded-[16px] shadow-xl border border-white/40">
          <div className="flex items-center justify-between gap-3 mb-2">
            <span className="text-xs font-bold text-gray-900">Happy Students</span>
            <span className="text-xs font-semibold text-yellow-500">★ 4.8</span>
          </div>
          <div className="flex items-center -space-x-2">
            <div className="w-7 h-7 rounded-full bg-blue-400 border-2 border-white"></div>
            <div className="w-7 h-7 rounded-full bg-purple-400 border-2 border-white"></div>
            <div className="w-7 h-7 rounded-full bg-amber-400 border-2 border-white"></div>
            <div className="w-7 h-7 rounded-full bg-[#CBFC01] border-2 border-white flex items-center justify-center text-[10px] font-bold text-black">
              2K+
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;