import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import images20 from '../assets/20.jpg';
import images15 from '../assets/15.jpg';
import images16 from '../assets/16.jpg';
import images17 from '../assets/17.jpg';
import images18 from '../assets/18.jpg';
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
  MessageSquare,
  CheckCircle2
} from 'lucide-react';
import Footer from '../components/Footer';

const CourseDetails = () => {
  // Tab State: 'About' | 'Lesson' | 'Reviews'
  const [activeTab, setActiveTab] = useState('About');
  const [selectedRating, setSelectedRating] = useState('All rating');

  // 1. About Data
  const keyPoints = [
    'Foundational Concepts',
    'Design Principles Mastery',
    'Advanced Techniques in Digital Creation',
    'Project Showcase and Critique',
    'Optimizing for Various Platforms',
    'Digital Asset Management Best Practices',
    'Monetization Strategies',
    'Capstone Project: Building Your Portfolio',
  ];

  const sneakPeakImages = [images15, images16, images17, images18];

  // 2. Lesson Data
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

  // 3. Reviews Data
  const ratingBreakdown = [
    { stars: 5, count: 720, percentage: '90%' },
    { stars: 4, count: 120, percentage: '32%' },
    { stars: 3, count: 21, percentage: '7%' },
    { stars: 2, count: 12, percentage: '4%' },
    { stars: 1, count: 16, percentage: '5%' },
  ];

  const reviewsData = [
    {
      id: 1,
      name: 'PurePearl Studio',
      role: 'UI/UX Designer',
      time: 'a year ago',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
      comment:
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      id: 2,
      name: 'Albert Flores',
      role: 'UI/UX Designer',
      time: 'a year ago',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
      comment:
        'This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!',
    },
    {
      id: 3,
      name: 'Cody Fisher',
      role: 'UI/UX Designer',
      time: 'a year ago',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
      comment:
        'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
    },
    {
      id: 4,
      name: 'Brooklyn Simmons',
      role: 'UI/UX Designer',
      time: 'a year ago',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
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
              <Link to="/login" className="hover:text-white transition-colors text-white/90 font-medium">Sign In</Link>
              <Link to="/register" className="hover:text-white transition-colors text-white/90 font-medium">Join Us</Link>
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

              {/* Badges */}
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

            {/* Share Button */}
            <div className="pb-1">
              <button className="bg-[#CBFC01] hover:bg-[#b8e500] text-black text-[13px] font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 shadow-lg transition-transform active:scale-95 cursor-pointer">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>

          {/* Video Box + Sidebar Row */}
          <div className="mt-7 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            {/* Video Box with Big Play Button */}
            <div className="lg:col-span-8 flex justify-center lg:justify-start">
              <div className="w-full max-w-[720px] h-[479px] bg-[#E3E4E8] rounded-[24px] overflow-hidden relative flex items-end justify-center shadow-xl border border-white/20 shrink-0">
                <img
                  src={images20}
                  alt="Course Instructor"
                  className="w-full h-full object-cover object-bottom pointer-events-none"
                />

                {/* Big Frosted Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/85 backdrop-blur-md flex items-center justify-center shadow-[0_10px_40px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-95 transition-all duration-300 border border-white/70 cursor-pointer group">
                    <div className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[24px] border-l-gray-800 ml-2 group-hover:border-l-black transition-colors" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
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
                    <span className="text-[12px] text-gray-400 font-medium pt-1">99 more videos</span>
                  </div>
                </div>

                {/* 2. Pricing */}
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

                {/* 3. Include */}
                <div className="flex flex-col gap-3">
                  <h5 className="text-[15px] font-bold text-gray-900 tracking-tight">This course include</h5>
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

      {/* ================= 2. LOWER SECTION WITH DYNAMIC TABS ================= */}
      <section className="w-full max-w-[1240px] mx-auto px-4 sm:px-8 pt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            
            {/* TABS BUTTONS */}
            <div className="flex items-center gap-2.5">
              {['About', 'Lesson', 'Reviews'].map((tab) => (
                <button
                  key={tab}
                  type="button"
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

            {/* ================= A. ABOUT TAB CONTENT ================= */}
            {activeTab === 'About' && (
              <div className="flex flex-col gap-8">
                {/* Description */}
                <div>
                  <h3 className="text-[20px] font-bold text-gray-900 mb-4 font-['Satoshi',sans-serif]">
                    Description
                  </h3>
                  <div className="text-[14px] text-gray-600 leading-[1.8] flex flex-col gap-4 font-normal">
                    <p>
                      Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p>
                      In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.
                    </p>
                    <p>
                      As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.
                    </p>
                  </div>
                </div>

                {/* Sneak Peak */}
                <div className="pt-2">
                  <h3 className="text-[20px] font-bold text-gray-900 mb-4 font-['Satoshi',sans-serif]">
                    Sneak Peak
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                    {sneakPeakImages.map((src, index) => (
                      <div key={index} className="h-28 rounded-2xl overflow-hidden shadow-xs border border-gray-100 bg-gray-50">
                        <img src={src} alt={`Sneak Peak ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Points */}
                <div className="pt-2">
                  <h3 className="text-[20px] font-bold text-gray-900 mb-4 font-['Satoshi',sans-serif]">
                    Key Points
                  </h3>
                  <div className="flex flex-col gap-3.5">
                    {keyPoints.map((point, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#1456fd] flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-white fill-[#1456fd]" />
                        </div>
                        <span className="text-[14px] font-medium text-gray-800">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ================= B. LESSON TAB CONTENT ================= */}
            {activeTab === 'Lesson' && (
              <div className="flex flex-col gap-8">
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

                {/* Content info */}
                <div className="pt-2">
                  <h4 className="text-[17px] font-bold text-gray-900 mb-2 font-['Satoshi',sans-serif]">
                    Lesson Content
                  </h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed max-w-[680px]">
                    Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.
                  </p>
                </div>

                {/* Progress Tracking Card */}
                <div className="pt-2">
                  <h4 className="text-[17px] font-bold text-gray-900 mb-2 font-['Satoshi',sans-serif]">
                    Lesson Progress Tracking
                  </h4>
                  <p className="text-[13px] text-gray-600 leading-relaxed max-w-[680px] mb-4">
                    Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.
                  </p>

                  <div className="w-full max-w-[640px] bg-white rounded-[24px] p-6 border border-gray-150 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col gap-2">
                    <span className="text-[12px] font-semibold text-gray-600">
                      Learning Progress
                    </span>
                    <span className="text-[32px] font-bold text-gray-900 tracking-tight leading-none mb-2">
                      55%
                    </span>
                    <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-[#CBFC01] rounded-full transition-all duration-500"
                        style={{ width: '55%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ================= C. REVIEWS TAB CONTENT ================= */}
            {activeTab === 'Reviews' && (
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="text-[20px] font-bold text-gray-900 mb-2 font-['Satoshi',sans-serif]">
                    What Learners Are Saying
                  </h3>
                  <p className="text-[13px] text-gray-600 leading-relaxed max-w-[680px]">
                    Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                  </p>
                </div>

                {/* Ratings Overview Card */}
                <div className="w-full max-w-[640px] bg-white rounded-[24px] p-6 border border-gray-150 shadow-[0_4px_25px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center gap-6">
                  <div className="w-28 h-28 bg-[#CBFC01] rounded-[20px] flex flex-col items-center justify-center shrink-0">
                    <span className="text-[12px] font-semibold text-gray-800">Ratings</span>
                    <span className="text-[38px] font-black text-gray-900 leading-none tracking-tight">4.7</span>
                  </div>

                  <div className="flex-1 w-full flex flex-col gap-2">
                    {ratingBreakdown.map((row) => (
                      <div key={row.stars} className="flex items-center gap-3">
                        <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-[#CBFC01] rounded-full"
                            style={{ width: row.percentage }}
                          />
                        </div>
                        <div className="flex items-center gap-0.5 shrink-0">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-gray-900 text-gray-900" />
                          ))}
                        </div>
                        <span className="w-8 text-right text-[12px] text-gray-600 font-medium shrink-0">
                          {row.count}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Filter Pills */}
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

                {/* Reviews List */}
                <div className="flex flex-col gap-4 max-w-[640px]">
                  {reviewsData.map((review) => (
                    <div
                      key={review.id}
                      className="bg-white rounded-[24px] p-6 border border-gray-150 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col gap-3 text-left"
                    >
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

                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-gray-900 text-gray-900" />
                        ))}
                      </div>

                      <p className="text-[13px] text-gray-600 leading-relaxed font-normal">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right empty spacer for sidebar alignment */}
          <div className="hidden lg:block lg:col-span-4" />

        </div>
      </section>

      {/* ================= 3. FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default CourseDetails;