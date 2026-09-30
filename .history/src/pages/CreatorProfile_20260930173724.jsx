import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import images14 from '../assets/14.png';
import images06 from '../assets/06.jpg';
import images07 from '../assets/07.jpg';
import images08 from '../assets/08.jpg';
import images09 from '../assets/09.jpg';
import images10 from '../assets/10.jpg';
import images11 from '../assets/11.jpg';
import { 
  ShoppingBag, 
  SlidersHorizontal, 
  BarChart2, 
  Folder, 
  ArrowUpDown, 
  Star 
} from 'lucide-react';
import Footer from '../components/Footer';

const CreatorProfile = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  // Creator's courses (6 cards: 2 rows × 3 columns as shown in Figma)
  const creatorCourses = [
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
      image: images14,
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
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#CBFC01] selection:text-black">
      
      {/* ================= 1. BLUE HERO SECTION ================= */}
      <section className="relative w-full bg-[#1456fd] text-white pt-6 pb-12 px-4 sm:px-8 overflow-hidden">
        {/* Figma Blueprint Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:90px_90px] pointer-events-none" />

        <div className="relative z-10 max-w-[1200px] mx-auto">
          {/* Top Navbar */}
          <nav className="flex items-center justify-between py-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#CBFC01] rounded-sm flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-[#1456fd] border-y-[4px] border-y-transparent ml-0.5" />
              </div>
              <span className="text-[20px] font-bold tracking-tight text-white">
                ByteSpace
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-[14px] text-white/90">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
              <Link to="/creators" className="text-white font-semibold">Creators</Link>
            </div>

            <div className="flex items-center gap-4 text-[14px]">
              <Link to="/login" className="hover:text-white transition-colors text-white/90 font-medium">
                Sign In
              </Link>
              <Link to="/register" className="hover:text-white transition-colors text-white/90 font-medium">
                Join Us
              </Link>
              <button className="text-white hover:text-white/80 transition-colors p-1">
                <ShoppingBag className="w-4 h-4" />
              </button>
            </div>
          </nav>

          {/* Creator Profile Header */}
          <div className="mt-12 flex flex-col gap-5 text-left max-w-[760px]">
            {/* Creator Image + Name + Tag */}
            <div className="flex items-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="PurePearl Studio"
                className="w-16 h-16 rounded-2xl object-cover border-2 border-white/30 shadow-md"
              />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2.5">
                  <h1 className="text-2xl sm:text-[28px] font-bold text-white tracking-tight font-['Satoshi',sans-serif]">
                    PurePearl Studio
                  </h1>
                  <span className="bg-[#CBFC01] text-black text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Creator
                  </span>
                </div>
                <p className="text-[13px] text-white/80 font-normal">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>

            {/* Bio Paragraphs */}
            <div className="text-[13px] text-white/90 leading-relaxed flex flex-col gap-2 font-normal">
              <p>
                Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!
              </p>
              <p className="text-white/75 text-[12px]">
                Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
              </p>
            </div>

            {/* Stats Pills & Follow Button */}
            <div className="mt-2 flex items-center justify-between flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-3">
                <span className="bg-white text-gray-800 text-[13px] font-medium px-4 py-1.5 rounded-full shadow-sm">
                  3 Products
                </span>
                <span className="bg-white text-gray-800 text-[13px] font-medium px-4 py-1.5 rounded-full shadow-sm">
                  12 Followers
                </span>
              </div>

              {/* Lime Follow Button */}
              <button
                type="button"
                onClick={() => setIsFollowing(!isFollowing)}
                className="bg-[#CBFC01] hover:bg-[#b8e500] text-black text-[13px] font-bold px-6 py-2 rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
              >
                {isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. FILTER & SORT CONTROLS BAR ================= */}
      <section className="w-full max-w-[1200px] mx-auto px-4 pt-10 pb-6">
        <div className="flex items-center justify-between flex-wrap gap-4">
          
          {/* Left: Filter Buttons */}
          <div className="flex items-center gap-3 flex-wrap">
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-[13px] font-medium hover:bg-gray-50 transition-colors cursor-pointer">
              <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500" />
              <span>Filter</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-[13px] font-medium hover:bg-gray-50 transition-colors cursor-pointer">
              <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
              <span>Level</span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-[13px] font-medium hover:bg-gray-50 transition-colors cursor-pointer">
              <Folder className="w-3.5 h-3.5 text-gray-500" />
              <span>Category</span>
            </button>
          </div>

          {/* Right: Sort Button */}
          <button className="flex items-center gap-2 text-gray-600 text-[13px] font-medium hover:text-black transition-colors cursor-pointer">
            <ArrowUpDown className="w-3.5 h-3.5 text-gray-400" />
            <span>Most relevant</span>
          </button>
        </div>
      </section>

      {/* ================= 3. 6 COURSES GRID ================= */}
      <section className="w-full max-w-[1200px] mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creatorCourses.map((course) => (
            <Link
              to="/courses"
              key={course.id}
              className="bg-white rounded-[24px] p-4 shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-all duration-300 text-left block group"
            >
              {/* Image & 3 Meta Badges */}
              <div className="relative w-full h-[200px] rounded-[18px] overflow-hidden bg-gray-100">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute bottom-2.5 left-2.5 right-2 flex items-center justify-between text-[10px] font-medium text-gray-800">
                  <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs">
                    {course.lessons}
                  </span>
                  <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs">
                    {course.duration}
                  </span>
                  <span className="bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full shadow-xs">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Title & Rating */}
              <div className="pt-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[17px] font-bold text-gray-900 leading-snug truncate group-hover:text-[#1456fd] transition-colors">
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
                <div className="flex items-center gap-1.5 bg-[#F4F5F7] px-3 py-1.5 rounded-full text-gray-700 text-[12px] font-medium">
                  <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
                  <span>{course.level}</span>
                </div>

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
            </Link>
          ))}
        </div>
      </section>

      {/* ================= 4. FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default CreatorProfile;