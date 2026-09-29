import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const CreatorCTA = () => {
  const checklist = [
    'Share Your Expertise',
    'Monetize Your Passion',
    'Flexibility and Autonomy',
    'Build a Community',
  ];

  return (
    <section className="relative w-full bg-white py-24 px-4 overflow-hidden flex justify-center">
      {/* Background Soft Glow on Bottom/Left */}
      <div className="absolute -left-20 bottom-0 w-[500px] h-[500px] bg-[#f4ffc7]/60 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-[1200px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center relative z-10">
        
        {/* ================= LEFT VISUAL COLLAGE ================= */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[500px] h-[520px] flex items-end justify-center">
            
            {/* 1. Total Revenue Card (Image-er PECHONE: z-0) */}
            <div className="absolute left-[-15px] top-6 z-0 w-[190px] bg-[#1456fd] text-white rounded-[20px] p-4 shadow-xl border border-blue-400/20">
              <span className="text-[12px] font-medium text-blue-100 block">Total Revenue</span>
              <span className="text-[10px] text-blue-200 block mt-0.5">July 1-28</span>
              <span className="text-[26px] font-bold text-white block mt-2 leading-none">
                $120.29
              </span>
              <div className="w-full bg-blue-700/60 h-1.5 rounded-full overflow-hidden mt-3">
                <div className="bg-[#CBFC01] h-full w-[65%] rounded-full" />
              </div>
            </div>

            {/* 2. Year to Date Card (Image-er PECHONE: z-0) */}
            <div className="absolute left-[-5px] top-[180px] z-0 w-[175px] bg-[#1456fd] text-white rounded-[18px] p-3.5 shadow-xl border border-blue-400/20">
              <span className="text-[11px] font-medium text-blue-100 block">Year to Date</span>
              <span className="text-[10px] text-blue-200 block">2023</span>
              <div className="flex items-center justify-between mt-2">
                <span className="text-[20px] font-bold text-white leading-none">
                  $1,200.38
                </span>
                <span className="bg-[#CBFC01] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                  +12%
                </span>
              </div>
            </div>

            {/* 3. Main Instructor Cutout Image (Cards-er OPORE: z-10) */}
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80"
              alt="Course Creator"
              className="w-[360px] md:w-[400px] h-[480px] object-cover rounded-3xl relative z-10 pointer-events-none drop-shadow-2xl"
              style={{
                maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
              }}
            />

            {/* 4. Right Lime 3D Spring (Image-er OPORE OVERLAP: z-20) */}
            <div className="absolute right-4 top-24 w-24 h-40 pointer-events-none z-20 opacity-95 rotate-12 drop-shadow-lg">
              <svg viewBox="0 0 100 160" fill="none" className="w-full h-full stroke-[#CBFC01]" strokeWidth="22" strokeLinecap="round">
                <path d="M 20 20 C 80 20, 80 60, 20 60 C 80 60, 80 100, 20 100 C 80 100, 80 140, 20 140" />
              </svg>
            </div>

            {/* 5. Floating Happy Students Card (Shobar shamne: z-30) */}
            <div className="absolute right-0 bottom-4 z-30 bg-white rounded-[18px] p-3 px-4 shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-gray-100 min-w-[210px]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] font-bold text-gray-900">Happy Students</span>
                <span className="text-[11px] font-semibold text-gray-600 flex items-center gap-0.5">
                  4.5 <span className="text-gray-400 font-normal">(240)</span>
                  <span className="text-yellow-400 text-xs ml-0.5">★</span>
                </span>
              </div>
              
              <div className="flex items-center -space-x-1.5">
                <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" alt="avatar" />
                <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80" alt="avatar" />
                <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80" alt="avatar" />
                <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=64&q=80" alt="avatar" />
                <div className="w-6 h-6 rounded-full bg-[#CBFC01] border-2 border-white flex items-center justify-center text-[9px] font-bold text-black shrink-0">
                  2K+
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT TEXT & BENEFIT LIST (580px x 388px) ================= */}
        <div className="lg:col-span-6 flex flex-col justify-center text-left pl-0 lg:pl-6">
          <div className="max-w-[580px]">
            {/* Title */}
            <h2 className="text-4xl md:text-[50px] font-bold text-[#141518] tracking-tight leading-[1.15] font-['Satoshi',sans-serif]">
              Create & Manage <br /> Courses Easily.
            </h2>

            {/* Description */}
            <p className="mt-5 text-[15px] md:text-[16px] text-gray-500 leading-relaxed font-normal">
              ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Checklist */}
            <div className="mt-8 flex flex-col gap-3.5">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1456fd] flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white fill-[#1456fd]" />
                  </div>
                  <span className="text-[15px] font-semibold text-[#141518]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CreatorCTA;