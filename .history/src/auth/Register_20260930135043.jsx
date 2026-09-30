import React, { useState } from 'react';
import { Star, BarChart2 } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Data:', formData);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#1456fd] flex items-center justify-center p-4 lg:p-10 overflow-hidden font-sans">
      {/* 1. Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff14_1px,transparent_1px),linear-gradient(to_bottom,#ffffff14_1px,transparent_1px)] bg-[size:105px_105px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1240px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* ================= LEFT SIDE: BRAND & VISUAL COLLAGE ================= */}
        <div className="lg:col-span-6 flex flex-col justify-between py-6">
          
          {/* Logo & Headline */}
          <div className="max-w-[460px]">
            {/* Lime Logo Icon */}
            <div className="w-8 h-8 bg-[#CBFC01] rounded-[8px] flex items-center justify-center mb-10 shadow-sm">
              <div className="w-0 h-0 border-l-[7px] border-l-[#1456fd] border-y-[5px] border-y-transparent ml-0.5" />
            </div>

            <h1 className="text-3xl md:text-[38px] font-bold text-white tracking-tight leading-tight font-['Satoshi',sans-serif]">
              Sign up and come in
            </h1>
            <p className="mt-3 text-[14px] text-white/80 leading-relaxed font-normal">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
            </p>
          </div>

          {/* Floating Visual Collage */}
          <div className="relative w-full max-w-[480px] h-[440px] mt-8 flex items-center justify-center">
            
            {/* Top Left Lime 3D Donut / Torus */}
            <div className="absolute left-10 top-0 w-24 h-24 rounded-full border-[18px] border-[#CBFC01] shadow-2xl pointer-events-none -rotate-12 z-20" />

            {/* Bottom Left Lime 3D Cone / Pyramid */}
            <div className="absolute left-6 bottom-0 w-28 h-28 pointer-events-none z-30 drop-shadow-2xl rotate-6">
              <div className="w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[88px] border-b-[#CBFC01]" />
            </div>

            {/* Right Middle White Zigzag / Spring */}
            <div className="absolute right-4 top-44 w-20 h-28 pointer-events-none hidden sm:block z-20 opacity-95 rotate-12">
              <svg viewBox="0 0 100 160" fill="none" className="w-full h-full stroke-white" strokeWidth="22" strokeLinecap="round">
                <path d="M 20 20 C 80 20, 80 60, 20 60 C 80 60, 80 100, 20 100 C 80 100, 80 140, 20 140" />
              </svg>
            </div>

            {/* Back Course Card: Build Digital Asset */}
            <div className="absolute left-2 top-14 z-0 w-[240px] bg-white/95 rounded-[20px] p-3.5 shadow-xl opacity-90 pointer-events-none">
              <div className="w-full h-[110px] rounded-[14px] overflow-hidden bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=400&q=80"
                  alt="Build Digital"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-2.5">
                <span className="text-[12px] font-bold text-gray-900 block leading-tight">Build Digital Asset</span>
                <span className="text-[10px] text-gray-400 block mt-0.5">by purepearl studio</span>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500 font-medium">Beginner</span>
                  <span className="text-[12px] font-bold text-[#1456fd]">$25<span className="text-[9px] text-gray-400 font-normal">/lifetime</span></span>
                </div>
              </div>
            </div>

            {/* Front Course Card: the Power of Big Data */}
            <div className="absolute left-20 top-4 z-10 w-[285px] bg-white rounded-[22px] p-3.5 shadow-2xl border border-white/60">
              {/* Image & Badges */}
              <div className="relative w-full h-[125px] rounded-[15px] overflow-hidden bg-gray-900">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=80"
                  alt="the Power of Big Data"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[8px] font-medium text-gray-800">
                  <span className="bg-white/80 backdrop-blur-md px-2 py-0.5 rounded-full">17 Lessons</span>
                  <span className="bg-white/80 backdrop-blur-md px-2 py-0.5 rounded-full">2 hours 16 mins</span>
                  <span className="bg-white/80 backdrop-blur-md px-2 py-0.5 rounded-full">59 Comments</span>
                </div>
              </div>

              {/* Title & Rating */}
              <div className="pt-2.5">
                <div className="flex items-center justify-between">
                  <h4 className="text-[14px] font-bold text-gray-900 leading-tight">the Power of Big Data</h4>
                  <div className="flex items-center gap-0.5 text-[11px] font-semibold text-gray-500">
                    <span>4.5</span>
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  </div>
                </div>
                <p className="text-[10px] text-gray-400 mt-0.5">by purepearl studio</p>
              </div>

              {/* Beginner & Avatars */}
              <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between">
                <div className="flex items-center gap-1 bg-[#F4F5F7] px-2.5 py-1 rounded-full text-gray-700 text-[10px] font-medium">
                  <BarChart2 className="w-3 h-3 text-gray-500" />
                  <span>Beginner</span>
                </div>
                <div className="flex items-center -space-x-1.5">
                  <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=60&q=80" alt="avatar" />
                  <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80" alt="avatar" />
                  <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80" alt="avatar" />
                  <div className="w-5 h-5 rounded-full bg-black border border-white flex items-center justify-center text-[8px] font-bold text-white">26+</div>
                </div>
              </div>

              {/* Price */}
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-[17px] font-bold text-[#1456fd]">$25</span>
                <span className="text-[10px] text-gray-400">/lifetime</span>
              </div>
            </div>

            {/* Bottom Lime Happy Students Card */}
            <div className="absolute right-6 bottom-4 z-20 bg-[#CBFC01] rounded-[18px] p-3 px-4 shadow-xl border border-white/20 min-w-[200px]">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[11px] font-bold text-black">Happy Students</span>
                <span className="text-[10px] font-semibold text-gray-800 flex items-center gap-0.5">
                  4.5 (240) <span className="text-black text-xs">★</span>
                </span>
              </div>
              <div className="flex items-center -space-x-1.5">
                <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&q=80" alt="avatar" />
                <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&q=80" alt="avatar" />
                <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&q=80" alt="avatar" />
                <img className="w-5 h-5 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=60&q=80" alt="avatar" />
                <div className="w-5 h-5 rounded-full bg-black border border-white flex items-center justify-center text-[8px] font-bold text-white">2K+</div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE: SIGN UP FORM (579px x 784px) ================= */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[579px] min-h-[680px] bg-white rounded-[36px] p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col justify-between">
            
            {/* Header */}
            <div>
              <span className="text-[#1456fd] text-[15px] font-bold block mb-2 font-['Satoshi',sans-serif]">
                Create an Account
              </span>
              <h2 className="text-3xl sm:text-[42px] font-bold text-[#141518] tracking-tight leading-tight font-['Satoshi',sans-serif]">
                Welcome to <br /> ByteSpace
              </h2>
            </div>

            {/* Inputs Form */}
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
              
              {/* Full Name */}
              <div className="flex flex-col gap-2 text-left">
                <label className="text-[14px] font-semibold text-gray-800">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Jamie Davis"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full h-[52px] px-5 rounded-[14px] border border-gray-200 text-gray-800 text-[15px] placeholder-gray-400 focus:outline-none focus:border-gray-400"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 text-left">
                <label className="text-[14px] font-semibold text-gray-800">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="designer@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[52px] px-5 rounded-[14px] border border-gray-200 text-gray-800 text-[15px] placeholder-gray-400 focus:outline-none focus:border-gray-400"
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2 text-left">
                <label className="text-[14px] font-semibold text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="********"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full h-[52px] px-5 rounded-[14px] border border-gray-200 text-gray-800 text-[15px] placeholder-gray-400 focus:outline-none focus:border-gray-400 tracking-widest"
                />
              </div>

              {/* Continue Button (Aligned Right) */}
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="h-[50px] px-10 bg-[#CBFC01] hover:bg-[#b8e500] text-black font-semibold text-[15px] rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Continue
                </button>
              </div>

            </form>

            {/* Bottom Login Link */}
            <div className="mt-10 pt-6 text-center text-[14px] text-gray-600">
              Already have an account?{' '}
              <a href="login" className="text-[#1456fd] font-semibold hover:underline cursor-pointer">
                Login
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Register;