import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    content:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    id: 2,
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    content:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    id: 3,
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    content:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

const Testimonials = () => {
  return (
    <section className="relative w-full bg-white py-24 px-4 overflow-hidden flex justify-center">
      {/* Background Soft Glow on Top/Right & Bottom/Left */}
      <div className="absolute right-0 top-0 w-[450px] h-[450px] bg-[#f4ffc7]/60 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-blue-50/70 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-[1200px] relative z-10 flex flex-col">
        {/* ================= TOP HEADER (Split Left / Right) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Title */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl md:text-[48px] font-bold text-[#141518] tracking-tight leading-[1.15] font-['Satoshi',sans-serif]">
              Discover What Our <br /> Community Is Saying
            </h2>
          </div>

          {/* Right Subtitle */}
          <div className="lg:col-span-6 flex justify-end">
            <p className="text-[15px] md:text-[16px] text-gray-500 leading-relaxed font-normal max-w-[540px]">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* ================= 3 TESTIMONIAL CARDS (374px x 436px) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-[24px] p-8 shadow-[0_10px_35px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col justify-start hover:shadow-lg transition-all duration-300"
              style={{ minHeight: '436px' }}
            >
              {/* Avatar Image */}
              <div className="w-16 h-16 rounded-full overflow-hidden mb-6 shadow-sm border-2 border-white">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name & Role */}
              <div className="mb-6">
                <h4 className="text-[20px] font-bold text-[#141518] leading-tight font-['Satoshi',sans-serif]">
                  {item.name}
                </h4>
                <p className="text-[14px] font-semibold text-[#1456fd] mt-1">
                  {item.role}
                </p>
              </div>

              {/* Testimonial Quote */}
              <p className="text-[15px] text-gray-500 leading-[1.65] font-normal">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;