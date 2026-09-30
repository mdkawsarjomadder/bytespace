import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronDown, 
  SlidersHorizontal, 
  BarChart2, 
  Folder, 
  ArrowUpDown, 
  Star, 
  ShoppingBag,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import Footer from '../components/Footer';

const coursesData = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    creator: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    creator: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 3,
    title: 'the Power of Big Data',
    creator: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 4,
    title: 'Balancing Productivity an...',
    creator: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 5,
    title: 'Mastering Money Manage...',
    creator: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 6,
    title: 'From Idea to Startup Succ...',
    creator: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 7,
    title: 'Learn Figma from Basic',
    creator: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 8,
    title: 'Build Digital Asset',
    creator: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 9,
    title: 'the Power of Big Data',
    creator: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 10,
    title: 'Balancing Productivity an...',
    creator: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 11,
    title: 'Mastering Money Manage...',
    creator: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 12,
    title: 'From Idea to Startup Succ...',
    creator: 'purepearl studio',
    rating: 4.5,
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80',
  },
];

const categoryPills = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Cooking',
];

const SearchPage = () => {
  const [activeCategory, setActiveCategory] = useState('Featured');
  const [currentPage, setCurrentPage] = useState(2); // Figma-e '2' active ache

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#CBFC01] selection:text-black">
      
      {/* ================= 1. BLUE HEADER / HERO SECTION ================= */}
      <section className="relative w-full bg-[#1456fd] text-white pt-6 pb-20 px-4 sm:px-8 overflow-hidden">
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:90px_90px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
  {/* Top Navbar */}
  <nav className="flex items-center justify-between py-2">
    
    {/* Logo (Custom 'b' Vector Mark + ByteSpace Text) */}
    <Link to="/" className="flex items-center gap-3 cursor-pointer select-none group">
      <div className="w-[26px] h-[28px] shrink-0">
        <svg 
          viewBox="0 0 29 32" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Left Stem Leaf Shape */}
          <path 
            d="M0 7.8C0 3.5 3.5 0 7.8 0C12.1 0 15.6 3.5 15.6 7.8V19.2C15.6 26.2 9.9 31.9 2.9 31.9C1.3 31.9 0 30.6 0 29V7.8Z" 
            fill="#CBFC01"
          />
          {/* Right Bowl Petal Shape */}
          <path 
            d="M14.2 11.5C21.8 11.5 28 17.7 28 25.3C28 28.9 25.1 31.9 21.4 31.9C15.2 31.9 10.2 26.9 10.2 20.7C10.2 15.6 14.2 11.5 14.2 11.5Z" 
            fill="#CBFC01"
          />
        </svg>
      </div>
      <span className="text-[24px] font-black tracking-tight text-white leading-none font-['Satoshi',sans-serif]">
        ByteSpace
      </span>
    </Link>

    {/* Nav Links */}
    <div className="hidden md:flex items-center gap-8 text-[14px] text-white/90">
      <Link to="/" className="hover:text-white transition-colors">Home</Link>
      <Link to="/courses" className="text-white font-semibold">Courses</Link>
      <Link to="/creators" className="hover:text-white transition-colors">Creators</Link>
    </div>

    {/* Right Buttons */}
    <div className="flex items-center gap-4 text-[14px]">
      <Link to="/login" className="hover:text-white transition-colors text-white/90 font-medium">
        Sign In
      </Link>
      <Link to="/register" className="hover:text-white transition-colors text-white/90 font-medium">
        Join Us
      </Link>
      <button className="text-white hover:text-white/80 transition-colors p-1 cursor-pointer">
        <ShoppingBag className="w-4 h-4" />
      </button>
    </div>
  </nav>

  {/* Hero Content */}
  <div className="mt-14 text-center flex flex-col items-center">
    <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white tracking-tight font-['Satoshi',sans-serif]">
      Find Your Next Course
    </h1>

    {/* Search Bar with Dropdown Pill */}
    <div className="mt-8 w-full max-w-[540px] flex items-center bg-white rounded-full p-1.5 shadow-lg">
      <div className="flex items-center gap-2.5 flex-1 pl-4">
        <Search className="w-4 h-4 text-gray-400 shrink-0" />
        <input
          type="text"
          placeholder="Search"
          className="w-full text-gray-800 text-[14px] placeholder-gray-400 focus:outline-none bg-transparent"
        />
      </div>

      {/* Courses Dropdown Button */}
      <button className="flex items-center gap-1.5 bg-[#CBFC01] hover:bg-[#b8e500] text-black text-[13px] font-semibold px-4 py-2 rounded-full transition-colors cursor-pointer">
        <span>Courses</span>
        <ChevronDown className="w-3.5 h-3.5" />
      </button>
    </div>
  </div>
</div>
      </section>

      {/* ================= 2. FILTER & CONTROLS BAR ================= */}
      <section className="w-full max-w-[1200px] mx-auto px-4 pt-10">
        
        {/* Top Filter Buttons Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Filter */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-[13px] font-medium hover:bg-gray-50 transition-colors cursor-pointer">
              <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" />
              <span>Filter</span>
            </button>

            {/* Level */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-[13px] font-medium hover:bg-gray-50 transition-colors cursor-pointer">
              <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
              <span>Level</span>
            </button>

            {/* Category */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-[13px] font-medium hover:bg-gray-50 transition-colors cursor-pointer">
              <Folder className="w-3.5 h-3.5 text-gray-500" />
              <span>Category</span>
            </button>
          </div>

          {/* Right Sort Dropdown */}
          <button className="flex items-center gap-2 text-gray-600 text-[13px] font-medium hover:text-black transition-colors cursor-pointer">
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
            <span>Most relevant</span>
          </button>
        </div>

        {/* Category Pills Row */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-8 pt-2">
          {categoryPills.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#CBFC01] text-black shadow-xs font-semibold'
                  : 'bg-[#F4F5F7] text-gray-600 hover:bg-gray-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </section>

      {/* ================= 3. COURSES GRID (3 Columns × 4 Rows = 12 Cards) ================= */}
      <section className="w-full max-w-[1200px] mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-[24px] p-4 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              {/* Image & Overlays */}
              <div className="relative w-full h-[200px] rounded-[18px] overflow-hidden bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                
                {/* 3 Meta Badges */}
                <div className="absolute bottom-2.5 left-2.5 right-2 flex items-center justify-between text-[10px] font-medium text-gray-800">
                  <span className="bg-white/85 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs">
                    {course.lessons}
                  </span>
                  <span className="bg-white/85 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs">
                    {course.duration}
                  </span>
                  <span className="bg-white/85 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Title & Rating */}
              <div className="pt-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[17px] font-bold text-gray-900 leading-snug truncate">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-0.5 text-[12px] font-semibold text-gray-500 shrink-0">
                    <span>{course.rating}</span>
                    <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                <p className="text-[12px] text-gray-400 mt-0.5 font-medium">
                  by {course.creator}
                </p>
              </div>

              {/* Level + Avatars Stack */}
              <div className="pt-3 flex items-center justify-between gap-3 border-t border-gray-100 mt-3">
                {/* Level Badge */}
                <div className="flex items-center gap-1.5 bg-[#F4F5F7] px-3 py-1.5 rounded-full text-gray-700 text-[12px] font-medium">
                  <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
                  <span>{course.level}</span>
                </div>

                {/* Avatars Stack (with Yellow/Lime 26+ Badge) */}
                <div className="flex items-center -space-x-2">
                  <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=64&q=80" alt="avatar" />
                  <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" alt="avatar" />
                  <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80" alt="avatar" />
                  <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80" alt="avatar" />
                  <div className="w-6 h-6 rounded-full bg-[#CBFC01] border-2 border-white flex items-center justify-center text-[9px] font-bold text-black">
                    26+
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="mt-2.5 flex items-baseline gap-1">
                <span className="text-[20px] font-bold text-[#1456fd]">{course.price}</span>
                <span className="text-[11px] text-gray-400 font-normal">/lifetime</span>
              </div>
            </div>
          ))}
        </div>

        {/* ================= 4. PAGINATION CONTROLS ================= */}
        <div className="mt-14 flex items-center justify-center gap-2">
          {/* Prev Arrow */}
          <button 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-40 cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Numbers 1, 2, 3, 4, 5 */}
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`w-9 h-9 rounded-full text-[14px] font-medium transition-colors cursor-pointer ${
                currentPage === num
                  ? 'font-bold text-black'
                  : 'text-gray-500 hover:text-black'
              }`}
            >
              {num}
            </button>
          ))}

          {/* Next Arrow */}
          <button 
            disabled={currentPage === 5}
            onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-40 cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </section>

      {/* ================= 5. FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default SearchPage;