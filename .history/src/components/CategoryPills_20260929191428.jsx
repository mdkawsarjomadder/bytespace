import React, { useState } from 'react';

const CategoryPills = () => {
  const [activeCategory, setActiveCategory] = useState('Featured');

  // ফিগমার হুবহু ৩টি সারি
  const row1 = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
  ];

  const row2 = [
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
  ];

  const row3 = [
    'Productivity',
    'Web Development',
    'Data Science',
    'Cooking',
  ];

  return (
    <section className="w-full bg-white pt-24 pb-20 px-4 flex flex-col items-center text-center">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-[44px] font-bold text-[#141518] tracking-tight leading-[1.2] font-['Satoshi',sans-serif]">
          Discover Your Passion, <br /> Build Your Skills
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-[15px] text-gray-500 max-w-[650px] leading-relaxed font-normal">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>

        {/* Category Filter Pills (Strict 3 Rows) */}
        <div className="mt-12 flex flex-col items-center gap-3.5 w-full">
          
          {/* Row 1: 8 Items (No wrap on large screens) */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2.5">
            {row1.map((item) => (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === item
                    ? 'bg-[#CBFC01] text-black font-semibold'
                    : 'bg-[#F4F5F7] text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Row 2: 6 Items */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-2.5">
            {row2.map((item) => (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === item
                    ? 'bg-[#CBFC01] text-black font-semibold'
                    : 'bg-[#F4F5F7] text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Row 3: 4 Items + More Button */}
          <div className="flex flex-wrap justify-center items-center gap-2.5">
            {row3.map((item) => (
              <button
                key={item}
                onClick={() => setActiveCategory(item)}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === item
                    ? 'bg-[#CBFC01] text-black font-semibold'
                    : 'bg-[#F4F5F7] text-gray-700 hover:bg-gray-200'
                }`}
              >
                {item}
              </button>
            ))}
            
            {/* + More Button */}
            <button className="px-3 py-2 text-[13px] font-semibold text-[#1456fd] hover:underline cursor-pointer flex items-center gap-1">
              + More
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CategoryPills;