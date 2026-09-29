import React from 'react';
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

            {/* Back Left Course Card (Figma Specs: 373px x 384px) */}
            <div 
              className="absolute left-0 top-0 z-10 bg-white rounded-[24px] p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 hidden sm:flex flex-col justify-between"
              style={{ width: '373px', height: '384px' }}
            >
              {/* Image & Overlays */}
              <div className="relative w-full h-[220px] rounded-[18px] overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=600&q=80"
                  alt="Learn Figma from Basic"
                  className="w-full h-full object-cover"
                />
                
                {/* Meta Badges */}
                <div className="absolute bottom-3 left-3 flex items-center gap-2">
                  <span className="bg-white/80 backdrop-blur-md text-[11px] font-medium text-gray-800 px-3 py-1 rounded-full shadow-sm">
                    17 Lessons
                  </span>
                  <span className="bg-white/80 backdrop-blur-md text-[11px] font-medium text-gray-800 px-3 py-1 rounded-full shadow-sm">
                    2 hours 16 mins
                  </span>
                </div>
              </div>

              {/* Title, Author, Level, Avatars & Price */}
              <div className="pt-2 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-[17px] font-bold text-gray-900 leading-snug">
                    Learn Figma from Basic
                  </h4>
                  <p className="text-[12px] text-gray-400 mt-0.5">by purepearl studio</p>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-gray-50 mt-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-gray-500 font-medium">Beginner</span>
                    
                    {/* Avatars Stack */}
                    <div className="flex items-center -space-x-1.5 ml-1">
                      <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" alt="avatar" />
                      <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80" alt="avatar" />
                      <div className="w-5 h-5 rounded-full bg-[#CBFC01] border border-white flex items-center justify-center text-[8px] font-bold text-black">
                        +
                      </div>
                    </div>
                  </div>

                  <span className="text-[15px] font-bold text-[#1456fd]">
                    $25<span className="text-[11px] text-gray-400 font-normal">/lifetime</span>
                  </span>
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
              className="absolute right-2 top-[240px] z-30 bg-white rounded-[18px] shadow-2xl border border-gray-100/90 flex flex-col justify-between"
              style={{
                width: '210px',
                height: '125px',
                padding: '16px',
              }}
            >
              <span className="font-['Satoshi'] font-medium text-[13px] text-gray-500 block">
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