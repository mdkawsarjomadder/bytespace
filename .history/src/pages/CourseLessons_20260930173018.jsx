import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images20 from '../assets/20.jpg';
import images19 from '../assets/19.jpg';
import images23 from '../assets/23.png';
import images21 from '../assets/21.png';
import images04 from '../assets/04.png';
import images22 from '../assets/22.png';

import { 
  ShoppingBag, 
  Share2, 
  BarChart2, 
  Star, 
  Users, 
  FileText, 
  Video, 
  Award, 
  MessageSquare
} from 'lucide-react';
import Footer from '../components/Footer';

const CourseReviews = () => {
  const [activeTab, setActiveTab] = useState('Reviews');
  const [selectedRating, setSelectedRating] = useState('All rating');

  // Rating breakdown stats based on Figma screenshot
  const ratingBreakdown = [
    { stars: 5, count: 720, percentage: '90%' },
    { stars: 4, count: 120, percentage: '32%' },
    { stars: 3, count: 21, percentage: '7%' },
    { stars: 2, count: 12, percentage: '4%' },
    { stars: 1, count: 16, percentage: '5%' },
  ];

  // Individual reviews data from screenshot
  const reviewsData = [
    {
      id: 1,
      name: 'PurePearl Studio',
      role: 'UI/UX Designer',
      time: 'a year ago',
      avatar: images23,
      comment:
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      id: 2,
      name: 'Albert Flores',
      role: 'UI/UX Designer',
      time: 'a year ago',
      avatar: images21,
      comment:
        'This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!',
    },
    {
      id: 3,
      name: 'Cody Fisher',
      role: 'UI/UX Designer',
      time: 'a year ago',
      avatar: images04,
      comment:
        'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
    },
    {
      id: 4,
      name: 'Brooklyn Simmons',
      role: 'UI/UX Designer',
      time: 'a year ago',
      avatar: images22,
      comment:
        'The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.',
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#CBFC01] selection:text-black">
      
      {/* ================= 1. BLUE HERO SECTION ================= */}
      <section className="relative w-full bg-[#1456fd] text-white pt-6 pb-8 px-4 sm:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:90px_90px] pointer-events-none" />

        <div className="relative z-10 max-w-[1240px] mx-auto">
          {/* Top Navbar */}
          <nav className="flex items-center justify-between py-2">
            <Link to="/" className="flex items-center gap-3 cursor-pointer select-none group">
              <div className="w-[26px] h-[28px] shrink-0">
                <svg viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M0 7.8C0 3.5 3.5 0 7.8 0C12.1 0 15.6 3.5 15.6 7.8V19.2C15.6 26.2 9.9 31.9 2.9 31.9C1.3 31.9 0 30.6 0 29V7.8Z" fill="#CBFC01" />
                  <path d="M14.2 11.5C21.8 11.5 28 17.7 28 25.3C28 28.9 25.1 31.9 21.4 31.9C15.2 31.9 10.2 26.9 10.2 20.7C10.2 15.6 14.2 11.5 14.2 11.5Z" fill="#CBFC01" />
                </svg>
              </div>
              <span className="text-[24px] font-black tracking-tight text-white leading-none font-['Satoshi',sans-serif]">
                ByteSpace
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-8 text-[14px] text-white/90">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/courses" className="text-white font-semibold">Courses</Link>
              <Link to="/creators" className="hover:text-white transition-colors">Creators</Link>
            </div>

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

          {/* Hero Content Header */}
          <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-[720px]">
              <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-white tracking-tight leading-[1.15] font-['Satoshi',sans-serif]">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="mt-2 text-base md:text-[16px] text-white/90 font-normal">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="mt-2.5 text-[14px] text-white/80">
                by <span className="text-white font-medium hover:underline cursor-pointer">purepearl studio</span>
              </p>

              {/* 3 Badges */}
              <div className="mt-4 flex flex-wrap items-center gap-2.5">
                <span className="bg-white text-gray-800 text-[13px] font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <BarChart2 className="w-4 h-4 text-gray-500" />
                  Intermediate
                </span>
                <span className="bg-white text-gray-800 text-[13px] font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Star className="w-4 h-4 fill-[#1456fd] text-[#1456fd]" />
                  4.8 (172 reviews)
                </span>
                <span className="bg-white text-gray-800 text-[13px] font-medium px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Users className="w-4 h-4 text-gray-500" />
                  199 Students
                </span>
              </div>
            </div>

            {/* Lime Share Button */}
            <div className="pb-1">
              <button className="bg-[#CBFC01] hover:bg-[#b8e500] text-black text-[13px] font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* ================= 2. CARDS ROW ================= */}
         <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
                     
                     {/* Left: 720 x 479 Video Box with Boro Play Button */}
                     <div className="lg:col-span-8 flex justify-center lg:justify-start">
                       <div className="w-full max-w-[720px] h-[479px] bg-[#E3E4E8] rounded-[24px] overflow-hidden relative flex items-end justify-center shadow-xl border border-white/20 shrink-0">
                         <img
                           src={images20}
                           alt="Course Instructor"
                           className="w-full h-full object-cover object-bottom pointer-events-none"
                         />
         
                         {/* Boro Frosted Glass Play Button */}
                         <div className="absolute inset-0 flex items-center justify-center">
                           <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 border border-white/70 cursor-pointer group">
                             <div className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[24px] border-l-gray-800 ml-2 group-hover:border-l-black transition-colors" />
                           </div>
                         </div>
                       </div>
                     </div>
         
                     {/* Right: EXACT FIGMA SIDEBAR */}
                     <div className="lg:col-span-4 relative z-30 -mb-96 py-12 top-14 flex justify-center lg:justify-end">
                       <div className="w-full max-w-[412px] bg-white rounded-[32px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col gap-6 text-left shrink-0">
                         
                         {/* 1. Lessons Syllabus */}
                         <div className="flex flex-col">
                           <h4 className="text-[18px] font-bold text-gray-900 mb-3 tracking-tight font-['Satoshi',sans-serif]">
                             112 Lessons (24 hours)
                           </h4>
                           <div className="flex flex-col gap-3 text-[13px]">
                             <div className="flex items-center justify-between text-gray-800">
                               <span className="truncate pr-2 font-medium">01 Introduction to Digital Assets</span>
                               <span className="text-[#1456fd] text-xs font-semibold shrink-0">12 mins</span>
                             </div>
                             <div className="flex items-center justify-between text-gray-800">
                               <span className="truncate pr-2 font-medium">02 Design Principles for Impacts</span>
                               <span className="text-[#1456fd] text-xs font-semibold shrink-0">21 mins</span>
                             </div>
                             <div className="flex items-center justify-between text-gray-800">
                               <span className="truncate pr-2 font-medium">03 Advanced Techniques in Digital Creation</span>
                               <span className="text-[#1456fd] text-xs font-semibold shrink-0">16 mins</span>
                             </div>
                             <span className="text-[12px] text-gray-400 font-medium pt-1">
                               99 more videos
                             </span>
                           </div>
                         </div>
         
                         {/* 2. Ready to Dive In, Price & Enroll Button */}
                         <div className="flex flex-col gap-3">
                           <p className="text-[13px] text-gray-600 leading-snug">
                             Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                           </p>
                           <div className="flex items-baseline gap-1">
                             <span className="text-[32px] font-bold text-[#1456fd] leading-none">$25</span>
                             <span className="text-[13px] text-gray-500 font-normal">/lifetime</span>
                           </div>
                           
                           <button 
                             type="button"
                             className="w-full mt-1 bg-[#CBFC01] hover:bg-[#b8e500] text-black font-semibold text-[15px] py-3.5 rounded-full shadow-xs transition-transform active:scale-95 cursor-pointer"
                           >
                             Enroll Now
                           </button>
                         </div>
         
                         {/* 3. This Course Include */}
                         <div className="flex flex-col gap-3">
                           <h5 className="text-[15px] font-bold text-gray-900 tracking-tight">
                             This course include
                           </h5>
                           <hr className="border-t border-gray-100" />          
                           <div className="flex flex-col gap-3 text-[13px] text-gray-600">
                             <div className="flex items-center gap-3">
                               <FileText className="w-4 h-4 text-[#1456fd] shrink-0" />
                               <span>Learning Resources</span>
                             </div>
                             <div className="flex items-center gap-3">
                               <Video className="w-4 h-4 text-[#1456fd] shrink-0" />
                               <span>Quality Lesson Videos</span>
                             </div>
                             <div className="flex items-center gap-3">
                               <Award className="w-4 h-4 text-[#1456fd] shrink-0" />
                               <span>Certificate of Completion</span>
                             </div>
                             <div className="flex items-center gap-3">
                               <MessageSquare className="w-4 h-4 text-[#1456fd] shrink-0" />
                               <span>Private Consultation</span>
                             </div>
                           </div>
                         </div>
         
                         {/* 4. Creator Profile */}
                         <div className="pt-6 border-t border-gray-100 flex flex-col gap-4">
                           <div className="flex items-center gap-3">
                             <img
                               src={images19}
                               alt="Creator"
                               className="w-11 h-11 rounded-full object-cover border border-gray-200"
                             />
                             <div>
                               <h5 className="text-[14px] font-bold text-gray-900 leading-tight">PurePearl Studio</h5>
                               <p className="text-[12px] text-gray-400 mt-0.5">Professional Creator</p>
                             </div>
                           </div>
         
                           <p className="text-[12px] text-gray-500 leading-relaxed">
                             Ready to Dive In? Enroll Now and Start Building Your Digital Future!
                           </p>
         
                           <Link 
                             to="/creators"
                             className="w-fit px-5 py-2 border border-gray-200 hover:bg-gray-50 text-gray-700 text-[12px] font-semibold rounded-full transition-colors cursor-pointer"
                           >
                             See Full Profile
                           </Link>
                         </div>
         
                       </div>
                     </div>
         
                   </div>

        </div>
      </section>

      {/* ================= 3. WHITE LOWER SECTION (REVIEWS CONTENT) ================= */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Reviews Section */}
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            
            {/* Tabs (About, Lesson, Reviews) */}
            <div className="flex items-center gap-2.5">
              {['About', 'Lesson', 'Reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-full text-[13px] font-medium transition-all cursor-pointer ${
                    activeTab === tab
                      ? 'bg-[#CBFC01] text-black font-semibold shadow-xs'
                      : 'bg-transparent text-gray-500 hover:text-black'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Header: What Learners Are Saying */}
            <div>
              <h3 className="text-[20px] font-bold text-gray-900 mb-2 font-['Satoshi',sans-serif]">
                What Learners Are Saying
              </h3>
              <p className="text-[13px] text-gray-600 leading-relaxed max-w-[680px]">
                Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
              </p>
            </div>

            {/* Ratings Overview Card (Lime 4.7 + Progress Bars) */}
            <div className="w-full max-w-[640px] bg-white rounded-[24px] p-6 border border-gray-150 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center gap-6">
              
              {/* Left: Lime 4.7 Box */}
              <div className="w-28 h-28 bg-[#CBFC01] rounded-[20px] flex flex-col items-center justify-center shrink-0">
                <span className="text-[12px] font-semibold text-gray-800">Ratings</span>
                <span className="text-[38px] font-black text-gray-900 leading-none tracking-tight">4.7</span>
              </div>

              {/* Right: Star Rows */}
              <div className="flex-1 w-full flex flex-col gap-2">
                {ratingBreakdown.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3">
                    {/* Progress Bar */}
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#CBFC01] rounded-full"
                        style={{ width: row.percentage }}
                      />
                    </div>
                    {/* 5 Stars Icons */}
                    <div className="flex items-center gap-0.5 shrink-0">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-gray-900 text-gray-900" />
                      ))}
                    </div>
                    {/* Count */}
                    <span className="w-8 text-right text-[12px] text-gray-600 font-medium shrink-0">
                      {row.count}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Individual Reviews Filter Pills */}
            <div className="pt-2">
              <h4 className="text-[16px] font-bold text-gray-900 mb-3 font-['Satoshi',sans-serif]">
                Individual Reviews:
              </h4>

              <div className="flex items-center gap-2 flex-wrap">
                {['All rating', '★ 5', '★ 4', '★ 3', '★ 2', '★ 1'].map((pill) => (
                  <button
                    key={pill}
                    onClick={() => setSelectedRating(pill)}
                    className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition-all cursor-pointer ${
                      selectedRating === pill
                        ? 'bg-[#CBFC01] text-black font-semibold shadow-xs'
                        : 'bg-[#F4F5F7] text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {pill}
                  </button>
                ))}
              </div>
            </div>

            {/* Review Cards List */}
            <div className="flex flex-col gap-4 max-w-[640px]">
              {reviewsData.map((review) => (
                <div
                  key={review.id}
                  className="bg-white rounded-[24px] p-6 border border-gray-150 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col gap-3 text-left"
                >
                  {/* Top user row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                      />
                      <div>
                        <h5 className="text-[14px] font-bold text-gray-900 leading-tight">
                          {review.name}
                        </h5>
                        <p className="text-[11px] text-gray-400 mt-0.5">
                          {review.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-[11px] text-gray-400 font-normal">
                      {review.time}
                    </span>
                  </div>

                  {/* 5 Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gray-900 text-gray-900" />
                    ))}
                  </div>

                  {/* Comment text */}
                  <p className="text-[13px] text-gray-600 leading-relaxed font-normal">
                    {review.comment}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Empty Space for sidebar alignment */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>
      </section>

      {/* ================= 4. FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default CourseReviews;