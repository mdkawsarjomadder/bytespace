import React, { useState } from 'react';
import { Star, BarChart2 } from 'lucide-react';

const Login = ({ onNavigateRegister }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
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
              Sign in with ease
            </h1>
            <p className="mt-3 text-[14px] text-white/80 leading-relaxed font-normal">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
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
                  alt="Build Digital Asset"
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

        {/* ================= RIGHT SIDE: SIGN IN FORM ================= */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="w-full max-w-[540px] bg-white rounded-[36px] p-8 sm:p-12 shadow-2xl flex flex-col justify-between">
            
            {/* Header */}
            <div>
              <span className="text-[#1456fd] text-[15px] font-bold block mb-2 font-['Satoshi',sans-serif]">
                Sign In
              </span>
              <h2 className="text-3xl sm:text-[40px] font-bold text-[#141518] tracking-tight leading-tight font-['Satoshi',sans-serif]">
                Welcome Back
              </h2>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              
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

              {/* Sign In Button (Aligned Right) */}
              <div className="flex justify-end mt-2">
                <button
                  type="submit"
                  className="h-[48px] px-9 bg-[#CBFC01] hover:bg-[#b8e500] text-black font-semibold text-[15px] rounded-full shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Sign In
                </button>
              </div>

            </form>

            {/* Divider */}
            <div className="relative my-7">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-3 bg-white text-gray-400 text-[13px]">or</span>
              </div>
            </div>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-4">
              {/* Facebook */}
              <button
                type="button"
                className="w-13 h-13 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-xs cursor-pointer"
              >
                <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>

              {/* Google */}
              <button
                type="button"
                className="w-13 h-13 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-xs cursor-pointer"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
              </button>
            </div>

            {/* Bottom Create Account Link */}
            <div className="mt-8 text-center text-[14px] text-gray-600">
              New user?{' '}
              <button
                type="button"
                onClick={onNavigateRegister}
                className="text-[#1456fd] font-semibold hover:underline cursor-pointer"
              >
                Create an account
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;