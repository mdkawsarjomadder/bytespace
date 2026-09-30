import React from 'react';

import image3 from '../assets/03.png';
import image4 from '../assets/04.png';
import image5 from '../assets/05.png';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: image3,
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full bg-white py-28 px-4 overflow-hidden flex justify-center">
      {/* ================= EXACT BACKGROUND GLOWS ================= */}
      
      {/* 1. Niche Left Konare: Deep Blue (#003BE2) Glow */}
      <div
        className="absolute -left-36 -bottom-36 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none opacity-25"
        style={{ backgroundColor: '#003BE2' }}
      />

      {/* 2. Right Upore: Lime Green (#CBFC01) Glow */}
      <div
        className="absolute -right-24 -top-20 w-[550px] h-[550px] rounded-full blur-[150px] pointer-events-none opacity-45"
        style={{ backgroundColor: '#CBFC01' }}
      />

      {/* 3. Right Center: Lime Green (#CBFC01) Glow */}
      <div
        className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-40"
        style={{ backgroundColor: '#CBFC01' }}
      />

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center">
        
        {/* Header: Title & Subtitle */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-[46px] font-bold text-[#141518] tracking-tight leading-[1.18] font-['Satoshi',sans-serif]">
              Discover What Our <br /> Community Is Saying
            </h2>
          </div>

          <div className="lg:col-span-6 flex items-center">
            <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed font-normal">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* 3 Cards Grid (Figma Specs: 374 Hug x 436 Hug) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[374px] min-h-[436px] bg-white/90 backdrop-blur-md rounded-[24px] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-start text-left hover:shadow-lg transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 mb-6 shrink-0 border-2 border-white shadow-sm">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <div>
                <h4 className="text-[18px] font-bold text-gray-900 leading-tight">
                  {item.name}
                </h4>
                <p className="text-[13px] text-[#003BE2] font-semibold mt-1">
                  {item.role}
                </p>
              </div>

              {/* Quote */}
              <p className="mt-6 text-[14px] leading-[1.7] text-gray-600 font-normal">
                {item.quote}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;