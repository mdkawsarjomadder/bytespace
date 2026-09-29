import React, { useState } from 'react';

const CategoryPills = () => {
  const [activeCategory, setActiveCategory] = useState('Featured');

  // ৩টি সারির ক্যাটেগরি তালিকা (ফিগমা অনুযায়ী হুবহু সাজানো)
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

  // পিল বাটন রেন্ডার করার ফাংশন
  const renderPill = (category) => {
    const isActive = activeCategory === category;
    return (
      <button
        key={category}
        onClick={() => setActiveCategory(category)}
        className={`px-5 py-2.5 rounded-full text-[14px] font-medium transition-all duration-200 cursor-pointer ${
          isActive
            ? 'bg-[#CBFC01] text-black font-semibold shadow-sm'
            : 'bg-[#F4F5F7] text-gray-700 hover:bg-gray-200'
        }`}
      >
        {category}
      </button>
    );
  };

  return (
    <section className="w-full bg-white py-20 px-4 flex flex-col items-center text-center">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Main Title */}
        <h2 className="text-3xl md:text-[46px] font-bold text-[#141518] tracking-tight leading-[1.2] font-['Satoshi',sans-serif]">
          Discover Your Passion, <br /> Build Your Skills
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm md:text-[15px] text-gray-500 max-w-[700px] leading-relaxed font-normal">
          At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
        </p>

        {/* Category Filter Pills Container */}
        <div className="mt-10 flex flex-col items-center gap-3 w-full max-w-[1000px]">
          
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center items-center gap-2.5">
            {row1.map((item) => renderPill(item))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center items-center gap-2.5">
            {row2.map((item) => renderPill(item))}
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap justify-center items-center gap-2.5">
            {row3.map((item) => renderPill(item))}
            
            {/* + More Button */}
            <button className="px-4 py-2 text-[14px] font-semibold text-[#1456fd] hover:underline cursor-pointer flex items-center gap-1">
              + More
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CategoryPills;