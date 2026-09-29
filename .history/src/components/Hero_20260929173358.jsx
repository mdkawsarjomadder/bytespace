import React from 'react';
import { Search } from 'lucide-react';
import One1 from '../assets/01.png';

const Hero = () => {
  return (
    <section className="relative w-full bg-[#1456fd] overflow-hidden pt-12 pb-24 text-white">
      {/* Background Grid Accent Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:120px_120px] pointer-events-none" />

      {/* Decorative 3D Elements (Left & Right) */}
      <div className="absolute left-6 top-16 w-32 h-44 bg-[#d2fb1b] rounded-3xl opacity-90 blur-[1px] transform -rotate-12 pointer-events-none hidden lg:block" />
      <div className="absolute right-8 top-20 w-36 h-48 bg-[#d2fb1b] rounded-2xl opacity-90 transform rotate-12 pointer-events-none hidden lg:block" />
      <div className="absolute left-1/4 bottom-1/3 w-16 h-16 bg-white/20 rounded-full blur-sm pointer-events-none" />

      {/* Main Content Container (Figma: Fixed 1200px, Gap 60px) */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 flex flex-col items-center gap-[60px]">
        
        {/* Title, Subtitle & Search Bar Frame */}
        <div className="w-full flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-[900px] leading-[1.15]">
            Get Access to Hundreds <br /> Courses Available
          </h1>
          <p className="mt-5 text-sm md:text-base text-blue-100 max-w-[650px] font-normal leading-relaxed">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          {/* Search Bar */}
          <div className="mt-8 w-full max-w-[580px] bg-white rounded-full p-2 pl-6 flex items-center shadow-lg justify-between gap-3">
            <div className="flex items-center gap-3 w-full">
              <Search className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-sm font-medium"
              />
            </div>
            <button className="bg-[#d2fb1b] hover:bg-[#bce414] text-black font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 shrink-0 cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Hero Image & Floating Overlay Cards */}
        <div className="relative w-full max-w-[700px] flex justify-center items-center mt-4">
          
          {/* Circular Green Backdrop Behind Person */}
          <div className="absolute w-[440px] h-[440px] bg-[#d2fb1b] rounded-full top-6 pointer-events-none" />

          {/* Person Image */}
          <img
            src="{One1}"
            alt="Student Learning"
            className="relative z-10 w-[380px] md:w-[440px] h-auto object-cover rounded-2xl drop-shadow-2xl"
          />

          {/* Floating Card 1: UI/UX Design (Top Left) */}
          <div className="absolute -left-6 md:-left-12 top-10 z-20 bg-white/95 backdrop-blur text-black p-3.5 px-5 rounded-2xl shadow-xl flex flex-col gap-1 border border-white/20">
            <span className="text-xs font-bold text-gray-900">UI/UX Design</span>
            <span className="text-[11px] text-gray-500 font-medium">200 Courses • 1000+ Students</span>
          </div>

          {/* Floating Card 2: Learning Progress (Top Right) */}
          <div className="absolute -right-6 md:-right-10 top-14 z-20 bg-white/95 backdrop-blur text-black p-4 rounded-2xl shadow-xl border border-white/20 min-w-[150px]">
            <span className="text-[11px] font-medium text-gray-400 block mb-1">Learning Progress</span>
            <span className="text-3xl font-extrabold text-gray-900 block leading-none">55%</span>
            <div className="w-full bg-gray-200 h-1.5 rounded-full mt-2.5 overflow-hidden">
              <div className="bg-[#d2fb1b] h-full w-[55%] rounded-full" />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (Bottom Left) */}
          <div className="absolute -left-4 md:-left-8 bottom-10 z-20 bg-white/95 backdrop-blur text-black p-3 px-4 rounded-2xl shadow-xl border border-white/20">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-xs font-bold text-gray-900">Happy Students</span>
              <span className="text-xs font-semibold text-yellow-500">★ 4.8</span>
            </div>
            <div className="flex items-center -space-x-2">
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" alt="avatar" />
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80" alt="avatar" />
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80" alt="avatar" />
              <div className="w-7 h-7 rounded-full bg-[#d2fb1b] border-2 border-white flex items-center justify-center text-[10px] font-bold text-black">
                2K+
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;