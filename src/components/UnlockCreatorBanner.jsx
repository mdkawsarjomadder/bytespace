import React from 'react';

const UnlockCreatorBanner = () => {
  return (
    <section className="relative w-full bg-[#1456fd] overflow-hidden py-24 px-4 text-white flex flex-col items-center justify-center">
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:105px_105px] pointer-events-none" />

      {/* 2. Left 3D Elements */}
      {/* Top Left Lime Spring */}
      <div className="absolute -left-6 top-6 w-32 h-64 pointer-events-none hidden lg:block -rotate-12 opacity-95">
        <svg viewBox="0 0 120 240" fill="none" className="w-full h-full stroke-[#CBFC01]" strokeWidth="24" strokeLinecap="round">
          <path d="M 30 30 C 110 30, 110 90, 30 90 C 110 90, 110 150, 30 150 C 110 150, 110 210, 30 210" />
        </svg>
      </div>

      {/* Top Left White Zigzag */}
      <div className="absolute left-32 top-10 w-20 h-28 pointer-events-none hidden lg:block -rotate-12 opacity-95">
        <svg viewBox="0 0 100 160" fill="none" className="w-full h-full stroke-white" strokeWidth="20" strokeLinecap="round">
          <path d="M 20 20 C 80 20, 80 60, 20 60 C 80 60, 80 100, 20 100 C 80 100, 80 140, 20 140" />
        </svg>
      </div>

      {/* Bottom Left White Cone / Pyramid */}
      <div className="absolute left-8 bottom-12 w-24 h-24 pointer-events-none hidden lg:block rotate-12 drop-shadow-xl">
        <div className="w-0 h-0 border-l-[45px] border-l-transparent border-r-[45px] border-r-transparent border-b-[80px] border-b-white" />
      </div>

      {/* Bottom Left Lime Torus / Donut */}
      <div className="absolute left-28 -bottom-10 w-44 h-44 rounded-full border-[30px] border-[#CBFC01] shadow-2xl pointer-events-none hidden lg:block -rotate-12" />

      {/* 3. Right 3D Elements */}
      {/* Top Right Lime Pyramid */}
      <div className="absolute right-48 top-8 w-24 h-24 pointer-events-none hidden lg:block rotate-12 drop-shadow-xl">
        <div className="w-0 h-0 border-l-[45px] border-l-transparent border-r-[45px] border-r-transparent border-b-[80px] border-b-[#CBFC01]" />
      </div>

      {/* Top Right White Cylinder */}
      <div className="absolute right-12 top-10 w-28 h-56 bg-white/95 rounded-[44px] shadow-2xl pointer-events-none hidden lg:block rotate-12" />

      {/* Bottom Right Lime Spring */}
      <div className="absolute right-20 -bottom-6 w-28 h-56 pointer-events-none hidden lg:block rotate-12 opacity-95">
        <svg viewBox="0 0 120 240" fill="none" className="w-full h-full stroke-[#CBFC01]" strokeWidth="24" strokeLinecap="round">
          <path d="M 30 30 C 110 30, 110 90, 30 90 C 110 90, 110 150, 30 150 C 110 150, 110 210, 30 210" />
        </svg>
      </div>

      {/* 4. Center Content Area (Figma: 710 x 106 Hug title area) */}
      <div className="relative z-10 w-full max-w-[760px] mx-auto text-center flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-[50px] font-bold text-white tracking-tight leading-[1.12] font-['Satoshi',sans-serif] max-w-[710px]">
          Unlock Your Potential as a <br /> Creator with ByteSpace
        </h2>

        {/* Subtitle / Paragraph */}
        <p className="mt-5 text-sm md:text-[14px] text-white/80 leading-relaxed font-normal max-w-[700px]">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        {/* Action Button */}
        <button className="mt-8 bg-[#CBFC01] hover:bg-[#b8e500] text-black font-semibold text-[15px] px-8 py-3.5 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer">
          Join as Creator
        </button>

      </div>
    </section>
  );
};

export default UnlockCreatorBanner;