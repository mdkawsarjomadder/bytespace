import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images20 from '../assets/20.jpg';
import images19 from '../assets/19.jpg';

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

const CourseLessons = () => {
  const [activeTab, setActiveTab] = useState('Lesson');

  const lessonModules = [
    {
      module: 'Module 1: Introduction to Digital Assets',
      desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
    },
    {
      module: 'Module 2: Design Principles for Impact',
      desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
    },
    {
      module: 'Module 4: User-Centric Design Strategies',
      desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
    },
    {
      module: 'Module 5: Interactive Media and Engagement',
      desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
    },
    {
      module: 'Module 6: Project Showcase and Critique',
      desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
    },
    {
      module: 'Module 7: Optimizing Digital Assets for Various Platforms',
      desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
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
            
            {/* Left: Video Box */}
            <div className="lg:col-span-8 flex justify-center lg:justify-start">
              <div className="w-full max-w-[720px] h-[479px] bg-[#E3E4E8] rounded-[24px] overflow-hidden relative flex items-end justify-center shadow-xl border border-white/20 shrink-0">
                <img
                  src={images20}
                  alt="Course Instructor"
                  className="w-full h-full object-cover object-bottom pointer-events-none"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-18 h-18 rounded-full bg-white/75 backdrop-blur-md flex items-center justify-center shadow-2xl hover:scale-105 transition-transform border border-white/60 cursor-pointer">
                    <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[17px] border-l-gray-700 ml-1.5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Sidebar */}
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

                {/* 2. Price & Enroll Button */}
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

      {/* ================= 3. WHITE LOWER SECTION (LESSON CONTENT) ================= */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Lesson Modules & Tracking */}
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

            {/* Explore the Modules */}
            <div>
              <h3 className="text-[20px] font-bold text-gray-900 mb-2 font-['Satoshi',sans-serif]">
                Explore the Modules
              </h3>
              <p className="text-[14px] text-gray-600 leading-relaxed max-w-[680px]">
                Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.
              </p>
            </div>

            {/* Lesson List */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[17px] font-bold text-gray-900 mb-1 font-['Satoshi',sans-serif]">
                Lesson List
              </h4>

              <div className="flex flex-col gap-4">
                {lessonModules.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    {/* Lime Video Box */}
                    <div className="w-12 h-12 rounded-[14px] bg-[#CBFC01] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                      <Video className="w-5 h-5 text-black" />
                    </div>
                    <div className="flex flex-col">
                      <h5 className="text-[15px] font-bold text-gray-900 leading-snug font-['Satoshi',sans-serif]">
                        {item.module}
                      </h5>
                      <p className="text-[13px] text-gray-600 leading-relaxed mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Lesson Content Section */}
            <div className="pt-2">
              <h4 className="text-[17px] font-bold text-gray-900 mb-2 font-['Satoshi',sans-serif]">
                Lesson Content
              </h4>
              <p className="text-[13px] text-gray-600 leading-relaxed max-w-[680px]">
                Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
              </p>
            </div>

            {/* Lesson Progress Tracking */}
            <div className="pt-2">
              <h4 className="text-[17px] font-bold text-gray-900 mb-2 font-['Satoshi',sans-serif]">
                Lesson Progress Tracking
              </h4>
              <p className="text-[13px] text-gray-600 leading-relaxed max-w-[680px] mb-4">
                Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
              </p>

              {/* Progress Card (55%) */}
              <div className="w-full max-w-[640px] bg-white rounded-[24px] p-6 border border-gray-150 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col gap-2">
                <span className="text-[12px] font-semibold text-gray-600">
                  Learning Progress
                </span>
                <span className="text-[32px] font-bold text-gray-900 tracking-tight leading-none mb-2">
                  55%
                </span>
                
                {/* Lime Progress Bar */}
                <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#CBFC01] rounded-full transition-all duration-500"
                    style={{ width: '55%' }}
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Empty Space for alignment under sidebar */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>
      </section>

      {/* ================= 4. FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default CourseLessons;