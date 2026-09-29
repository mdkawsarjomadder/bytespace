import React from 'react';
import { Search } from 'lucide-react';
import One1 from '../assets/01.png';

const Hero = () => {
  // 5টি Logoipsum পার্টনার লোগো
  const partners = [
    {
      id: 1,
      name: 'Logoipsum',
      icon: (
        <svg className="w-8 h-8 fill-slate-500" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="4" />
          <path d="M10 20c5-6 15-6 20 0s-15 6-20 0z" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 2,
      name: 'Logoipsum',
      icon: (
        <svg className="w-8 h-8 fill-slate-500" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="6" fill="currentColor" />
          <path d="M20 2v6M20 32v6M2 20h6M32 20h6M7 7l5 5M28 28l5 5M7 33l5-5M28 12l5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: 3,
      name: 'Logoipsum',
      icon: (
        <svg className="w-8 h-8 fill-slate-500" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="currentColor" />
          <path d="M17 10l-4 12h7l-3 8 11-14h-8l3-6z" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      id: 4,
      name: 'Logoipsum',
      icon: (
        <svg className="w-8 h-8 fill-slate-500" viewBox="0 0 40 40">
          <circle cx="20" cy="12" r="4" fill="currentColor" />
          <circle cx="20" cy="28" r="4" fill="currentColor" />
          <circle cx="12" cy="20" r="4" fill="currentColor" />
          <circle cx="28" cy="20" r="4" fill="currentColor" />
          <circle cx="20" cy="20" r="4" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: 5,
      name: 'Logoipsum',
      icon: (
        <svg className="w-8 h-8 fill-slate-500" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="3" />
          <circle cx="16" cy="16" r="4" fill="currentColor" />
          <path d="M8 28c4-4 12-4 16 0" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col items-center">
      {/* ================= HERO BLUE SECTION ================= */}
      <section className="relative w-full bg-[#1456fd] overflow-hidden pt-12 pb-0 text-white flex flex-col items-center">
        {/* 1. Background Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:105px_105px] pointer-events-none" />

        {/* 2. Ellipse 7 Background Ring */}
        <div
          className="absolute rounded-full pointer-events-none z-0"
          style={{
            width: '1149px',
            height: '1149px',
            top: '450px',
            left: '50%',
            transform: 'translateX(-50%)',
            border: '320px solid #CBFC01',
            boxSizing: 'border-box',
          }}
        />

        {/* 3. 3D Abstract Elements */}
        {/* Left Lime Spring */}
        <div className="absolute left-[-15px] top-64 w-32 h-64 pointer-events-none hidden xl:block -rotate-12 opacity-95">
          <svg viewBox="0 0 120 240" fill="none" className="w-full h-full stroke-[#CBFC01]" strokeWidth="24" strokeLinecap="round">
            <path d="M 30 30 C 110 30, 110 90, 30 90 C 110 90, 110 150, 30 150 C 110 150, 110 210, 30 210" />
          </svg>
        </div>

        {/* Left Small White Spring */}
        <div className="absolute left-44 top-[500px] w-14 h-24 pointer-events-none hidden xl:block -rotate-45 opacity-90">
          <svg viewBox="0 0 100 160" fill="none" className="w-full h-full stroke-white" strokeWidth="18" strokeLinecap="round">
            <path d="M 20 20 C 80 20, 80 60, 20 60 C 80 60, 80 100, 20 100" />
          </svg>
        </div>

        {/* Left 3D Donut */}
        <div className="absolute left-20 bottom-8 w-44 h-44 rounded-full border-[32px] border-white/95 shadow-2xl pointer-events-none hidden xl:block -rotate-12" />

        {/* Right Lime Cylinder */}
        <div className="absolute right-4 top-56 w-28 h-56 bg-[#CBFC01] rounded-[48px] shadow-2xl pointer-events-none hidden xl:block rotate-12" />

        {/* Right White Pyramid */}
        <div className="absolute right-44 top-96 w-28 h-28 pointer-events-none hidden xl:block rotate-12 drop-shadow-2xl">
          <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[90px] border-b-white" />
        </div>

        {/* Right White Spring */}
        <div className="absolute right-28 bottom-12 w-20 h-40 pointer-events-none hidden xl:block rotate-12 opacity-95">
          <svg viewBox="0 0 100 180" fill="none" className="w-full h-full stroke-white" strokeWidth="20" strokeLinecap="round">
            <path d="M 20 20 C 85 20, 85 70, 20 70 C 85 70, 85 120, 20 120 C 85 120, 85 170, 20 170" />
          </svg>
        </div>

        {/* 4. Top Header & Search Area */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-[68px] font-bold tracking-tight text-white leading-[1.1] max-w-[980px] font-['Satoshi',sans-serif]">
            Get Access to Hundreds <br /> Courses Available
          </h1>

          <p className="mt-5 text-sm md:text-[16px] text-white/85 max-w-[700px] font-normal leading-relaxed font-['Satoshi',sans-serif]">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 w-full max-w-[580px]">
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

        {/* 5. Hero Visual Area (Sitting flat at bottom edge) */}
        <div className="relative w-full max-w-[578px] h-[541px] flex justify-center items-end z-10 mt-10">
          <img
            src={One1}
            alt="Student Learning"
            className="w-[578px] h-[541px] object-contain block align-bottom select-none pointer-events-none drop-shadow-2xl"
          />

          {/* Floating Card: UI/UX Design */}
          <div className="absolute -left-5 top-[150px] z-30 bg-white text-black p-4 px-5 rounded-[16px] shadow-xl border border-white/45">
            <span className="text-[13px] font-bold text-gray-900 block leading-tight">UI/UX Design</span>
            <span className="text-[11px] text-gray-500 font-medium mt-1 block">200 Courses • 1000+ Students</span>
          </div>

          {/* Floating Card: Learning Progress (232x131px) */}
          <div 
            className="absolute -right-12 top-[100px] z-20 bg-white text-black rounded-[16px] shadow-xl border border-white/40 flex flex-col justify-between"
            style={{
              width: '232px',
              height: '131px',
              padding: '16px',
              gap: '8px',
            }}
          >
            <span className="font-['Satoshi'] font-medium text-[13px] text-gray-600 block">
              Learning Progress
            </span>
            <span className="font-semibold text-[46px] leading-none tracking-tight text-[#242528] flex items-center">
              55%
            </span>
            <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-1">
              <div className="bg-[#CBFC01] h-full w-[55%] rounded-full" />
            </div>
          </div>

          {/* Floating Card: Happy Students */}
          <div className="absolute -left-16 bottom-[70px] z-20 bg-white text-black p-4 rounded-[16px] shadow-xl border border-white/40 min-w-[210px]">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-[12px] font-bold text-gray-900">Happy Students</span>
              <span className="text-[12px] font-semibold text-gray-600 flex items-center gap-0.5">
                4.5 <span className="text-gray-400 font-normal">(240)</span>
                <span className="text-yellow-400 text-xs ml-0.5">★</span>
              </span>
            </div>
            <div className="flex items-center -space-x-1.5">
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" alt="avatar" />
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80" alt="avatar" />
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80" alt="avatar" />
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80" alt="avatar" />
              <img className="w-7 h-7 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=64&q=80" alt="avatar" />
              <div className="w-7 h-7 rounded-full bg-[#CBFC01] border-2 border-white flex items-center justify-center text-[10px] font-bold text-black shrink-0">
                2K+
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARTNER LOGOS SECTION ================= */}
      <section className="relative z-20 w-full bg-white py-12 border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between gap-8 md:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            {partners.map((partner) => (
              <div key={partner.id} className="flex items-center gap-3 text-slate-700 select-none">
                <span className="text-slate-500 shrink-0">{partner.icon}</span>
                <span className="text-[20px] font-bold tracking-tight text-slate-700">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;