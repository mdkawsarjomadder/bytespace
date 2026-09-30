import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#CBFC01] selection:text-black">
      
      {/* ================= 1. BLUE HERO / 404 SECTION ================= */}
      <section className="relative w-full bg-[#1456fd] text-white pt-6 pb-20 px-4 sm:px-8 overflow-hidden min-h-[640px] flex flex-col justify-between">
        {/* Figma Blueprint Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:90px_90px] pointer-events-none" />

        {/* Top Navbar */}
        <div className="relative z-10 max-w-[1240px] mx-auto w-full">
          <nav className="flex items-center justify-between py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#CBFC01] rounded-sm flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-[#1456fd] border-y-[4px] border-y-transparent ml-0.5" />
              </div>
              <span className="text-[20px] font-bold tracking-tight text-white">
                ByteSpace
              </span>
            </Link>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8 text-[14px] text-white/90">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
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
              <button className="text-white hover:text-white/80 transition-colors p-1">
                <ShoppingBag className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>

        {/* 404 Center Content (Figma: W 920 x H 480) */}
        <div className="relative z-10 max-w-[920px] mx-auto w-full text-center flex flex-col items-center justify-center py-12">
          
          {/* Giant 404 with Gradient Blend Effect */}
          <div className="relative select-none leading-none">
            <h1 className="text-[140px] sm:text-[200px] md:text-[240px] font-extrabold tracking-tighter text-[#CBFC01] opacity-90 drop-shadow-sm font-['Poppins',sans-serif]">
              404
            </h1>

            {/* Overlapping Text: The page you are looking for doesn't exist */}
            <div className="absolute inset-x-0 bottom-4 sm:bottom-6 flex flex-col items-center">
              <h2 className="text-2xl sm:text-3xl md:text-[38px] font-bold text-white tracking-tight leading-tight max-w-[620px] drop-shadow-md">
                The page you are looking for doesn’t exist
              </h2>
            </div>
          </div>

          {/* Subtitle */}
          <p className="mt-8 text-white/85 text-[13px] sm:text-[14px] font-normal">
            Try to use a correct url or go back to homepage to start again
          </p>

          {/* Back to Home Button */}
          <div className="mt-6">
            <Link
              to="/"
              className="inline-block bg-[#CBFC01] hover:bg-[#b8e500] text-black text-[13px] font-bold px-8 py-2.5 rounded-full shadow-lg transition-transform active:scale-95 cursor-pointer"
            >
              Back to Home
            </Link>
          </div>

        </div>

        {/* Bottom Spacer */}
        <div className="relative z-10" />
      </section>

      {/* ================= 2. FOOTER ================= */}
      <Footer />

    </div>
  );
};

export default NotFound;