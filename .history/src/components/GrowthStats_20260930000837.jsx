import React from 'react';
import { BarChart2 } from 'lucide-react';
import One1 from '../assets/01.png';

const GrowthStats = () => {
  return (
    <section className="relative w-full bg-white py-24 px-4 overflow-hidden flex justify-center">
      {/* Background Soft Glow on Left */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#f2ffc2]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* ================= LEFT CONTENT AREA ================= */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left">
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-[52px] font-bold text-[#141518] tracking-tight leading-[1.15] font-['Satoshi',sans-serif]">
            Your Path to Professional <br /> Growth Starts Here!
          </h2>

          {/* Subtitle Description */}
          <p className="mt-6 text-[15px] md:text-[16px] text-gray-500 leading-relaxed max-w-[500px]">
            Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>

          {/* 3 Counter Statistics */}
          <div className="mt-12 flex items-center gap-10 md:gap-14 pt-4 border-t border-gray-100">
            <div>
              <span className="text-3xl md:text-[36px] font-extrabold text-[#1456fd] block leading-none tracking-tight">
                12K
              </span>
              <span className="text-[13px] text-gray-500 font-medium mt-2 block">
                Students
              </span>
            </div>

            <div className="w-[1px] h-10 bg-gray-200" />

            <div>
              <span className="text-3xl md:text-[36px] font-extrabold text-[#1456fd] block leading-none tracking-tight">
                70+
              </span>
              <span className="text-[13px] text-gray-500 font-medium mt-2 block">
                Courses
              </span>
            </div>

            <div className="w-[1px] h-10 bg-gray-200" />

            <div>
              <span className="text-3xl md:text-[36px] font-extrabold text-[#1456fd] block leading-none tracking-tight">
                16
              </span>
              <span className="text-[13px] text-gray-500 font-medium mt-2 block">
                Creators
              </span>
            </div>
          </div>

        </div>

        {/* ================= RIGHT VISUAL COLLAGE ================= */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[620px] h-[580px] flex items-end justify-center">
            
            {/* Top Right Lime Spring */}
            <div className="absolute right-4 top-14 w-24 h-36 pointer-events-none hidden sm:block z-0 opacity-95 rotate-6">
              <svg viewBox="0 0 100 160" fill="none" className="w-full h-full stroke-[#CBFC01]" strokeWidth="22" strokeLinecap="round">
                <path d="M 20 20 C 80 20, 80 60, 20 60 C 80 60, 80 100, 20 100 C 80 100, 80 140, 20 140" />
              </svg>
            </div>

            {/* Back Left Miniature Course Card (Figma Exact: 373px x 384px) */}
            <div 
              className="absolute left-0 top-0 z-10 bg-white rounded-[24px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 hidden sm:flex flex-col justify-between"
              style={{ width: '373px', height: '384px' }}
            >
              {/* Image & Overlays */}
              <div className="relative w-full h-[215px] rounded-[18px] overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80"
                  alt="Learn Figma from Basic"
                  className="w-full h-full object-cover"
                />
                
                {/* 3 Meta Badges */}
                <div className="absolute bottom-2.5 left-2.5 right-2 flex items-center gap-1.5 overflow-hidden">
                  <span className="bg-white/80 backdrop-blur-md text-[11px] font-medium text-gray-800 px-3 py-1 rounded-full shadow-sm shrink-0">
                    17 Lessons
                  </span>
                  <span className="bg-white/80 backdrop-blur-md text-[11px] font-medium text-gray-800 px-3 py-1 rounded-full shadow-sm shrink-0">
                    2 hours 16 mins
                  </span>
                  <span className="bg-white/80 backdrop-blur-md text-[11px] font-medium text-gray-800 px-3 py-1 rounded-full shadow-sm shrink-0">
                    59 Comments
                  </span>
                </div>
              </div>

              {/* Title & Author */}
              <div className="pt-2">
                <h4 className="text-[19px] font-bold text-gray-900 leading-snug font-['Satoshi',sans-serif]">
                  Learn Figma from Basic
                </h4>
                <p className="text-[13px] text-[#1456fd] font-medium mt-0.5">by purepearl studio</p>
              </div>

              {/* Level, Avatars Stack & Price */}
              <div className="pt-1 flex flex-col gap-2">
                <div className="flex items-center">
                  {/* Beginner Badge */}
                  <div className="flex items-center gap-1.5 bg-[#F4F5F7] px-3.5 py-1.5 rounded-full text-gray-700 text-[13px] font-medium shrink-0">
                    <BarChart2 className="w-4 h-4 text-gray-500 stroke-[2.2]" />
                    <span>Beginner</span>
                  </div>

                  {/* 4 Avatars + 26+ Black Badge */}
                  <div className="flex items-center -space-x-2 shrink-0">
                    {/* 1. Man with glasses */}
                    <img
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=80&q=80"
                      alt="Student 1"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                    {/* 2. Curly blonde hair */}
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                      alt="Student 2"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                    {/* 3. Dark hair woman */}
                    <img
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80"
                      alt="Student 3"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                    {/* 4. Man in blue shirt */}
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                      alt="Student 4"
                      className="w-7 h-7 rounded-full border-2 border-white object-cover"
                    />
                    {/* 5. Black Circle Badge 26+ */}
                    <div className="w-7 h-7 rounded-full bg-black border-2 border-white flex items-center justify-center text-[10px] font-bold text-white shadow-xs">
                      26+
                    </div>
                  </div>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-[22px] font-bold text-[#1456fd]">$25</span>
                  <span className="text-[12px] text-gray-500 font-normal">/lifetime</span>
                </div>
              </div>
            </div>

            {/* Main Student Center Image */}
            <img
              src={One1}
              alt="Student Working"
              className="w-[450px] md:w-[490px] h-auto object-contain relative z-20 pointer-events-none drop-shadow-2xl"
            />

            {/* Floating Learning Progress Card on Right */}
            <div 
              className="absolute right-0 top-[240px] z-30 bg-white rounded-[18px] shadow-2xl border border-gray-100/90 flex flex-col justify-between"
              style={{
                width: '210px',
                height: '125px',
                padding: '16px',
              }}
            >
              <span className="font-['Satoshi'] font-medium text-[13px]  block">
                Learning Progress
              </span>

              <span className="font-semibold text-[42px] leading-none tracking-tight text-[#242528] flex items-center">
                55%
              </span>

              <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-1">
                <div className="bg-[#CBFC01] h-full w-[55%] rounded-full" />
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default GrowthStats;