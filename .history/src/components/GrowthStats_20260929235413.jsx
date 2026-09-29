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

        {/* ================= RIGHT VISUAL COLLAGE (621px x 552px) ================= */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[621px] h-[552px] flex items-end justify-center">
            
            {/* Top Right Lime Spring */}
            <div className="absolute right-2 top-10 w-24 h-36 pointer-events-none hidden sm:block z-0 opacity-95 rotate-6">
              <svg viewBox="0 0 100 160" fill="none" className="w-full h-full stroke-[#CBFC01]" strokeWidth="22" strokeLinecap="round">
                <path d="M 20 20 C 80 20, 80 60, 20 60 C 80 60, 80 100, 20 100 C 80 100, 80 140, 20 140" />
              </svg>
            </div>

            {/* Back Left Miniature Course Card (Figma Exact) */}
            <div className="absolute left-0 top-6 z-10 w-[240px] bg-white rounded-[18px] p-3 shadow-xl border border-gray-100 hidden sm:block">
              <div className="w-full h-[105px] rounded-[12px] overflow-hidden bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=400&q=80"
                  alt="Course Thumbnail"
                  className="w-full h-full object-cover "
                />
              </div>
              <div className="mt-2.5">
                <h4 className="text-[12px] font-bold text-gray-900 leading-tight">
                  Learn Figma from Basic
                </h4>
                <p className="text-[10px] text-gray-400 mt-0.5">by purepearl studio</p>
                <div className="mt-2 flex items-center justify-between ">
                  <span className="text-[11px] text-gray-500 font-medium">Beginner</span>
                  <span className="text-[13px] font-bold text-[#1456fd]">$25<span className="text-[10px] text-gray-400 font-normal">/lifetime</span></span>
                </div>
              </div>
            </div>

            {/* Main Student Center Image */}
            <img
              src={One1}
              alt="Student Working"
              className="w-[430px] md:w-[480px] h-auto object-contain relative z-20 pointer-events-none drop-shadow-2xl"
            />

            {/* Floating Learning Progress Card on Right (232x131px) */}
            <div 
              className="absolute right-0 top-[210px] z-30 bg-white rounded-[16px] shadow-2xl border border-gray-100/80 flex flex-col justify-between"
              style={{
                width: '210px',
                height: '120px',
                padding: '16px',
              }}
            >
              <span className="font-['Satoshi'] font-medium text-[13px] text-gray-500 block">
                Learning Progress
              </span>

              <span className="font-semibold text-[40px] leading-none tracking-tight text-[#242528] flex items-center">
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