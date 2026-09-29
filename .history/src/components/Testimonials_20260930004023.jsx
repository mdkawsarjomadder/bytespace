import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
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
      {/* 1. Exact Ambient Background Glows */}
      {/* Bottom-Left Soft Blue Glow */}
      <div className="absolute -left-20 bottom-0 w-[550px] h-[550px] bg-[#dbeafe]/70 rounded-full blur-[140px] pointer-events-none" />
      
      {/* Top-Right Soft Lime Glow */}
      <div className="absolute -right-20 -top-10 w-[550px] h-[550px] bg-[#f2ffc2]/60 rounded-full blur-[150px] pointer-events-none" />

      {/* Bottom-Right Soft Lime Glow Accent */}
      <div className="absolute right-0 bottom-[-80px] w-[450px] h-[450px] bg-[#f7fee7]/80 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1200px] flex flex-col items-center">
        
        {/* ================= HEADER: TITLE & PARAGRAPH ================= */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Title */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-[46px] font-bold text-[#141518] tracking-tight leading-[1.18] font-['Satoshi',sans-serif]">
              Discover What Our <br /> Community Is Saying
            </h2>
          </div>

          {/* Right Subtitle */}
          <div className="lg:col-span-6 flex items-center">
            <p className="text-[14px] md:text-[15px] text-gray-500 leading-relaxed font-normal">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* ================= 3 TESTIMONIAL CARDS (374px x 436px) ================= */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="w-full max-w-[374px] min-h-[436px] bg-white rounded-[24px] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-start text-left hover:shadow-lg transition-all duration-300"
            >
              {/* Avatar Circle */}
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 mb-6 shrink-0">
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
                <p className="text-[13px] text-[#1456fd] font-medium mt-1">
                  {item.role}
                </p>
              </div>

              {/* Quote Content */}
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