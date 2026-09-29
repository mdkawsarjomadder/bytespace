import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-12 px-4 border-t border-gray-100 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col justify-between">
        
        {/* ================= TOP GRID AREA (1200px x 234px) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16">
          
          {/* Left Brand & Newsletter (Span 6) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#CBFC01] rounded-sm flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-[#1456fd] border-y-[4px] border-y-transparent ml-0.5" />
              </div>
              <span className="text-[22px] font-bold tracking-tight text-[#141518]">
                ByteSpace
              </span>
            </div>

            {/* Newsletter Description */}
            <p className="mt-4 text-[14px] text-gray-500 max-w-[420px] leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Email Input & Search Button */}
            <div className="mt-6 flex items-center gap-3 w-full max-w-[460px]">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-[48px] px-5 rounded-full border border-gray-200 text-gray-700 text-[14px] placeholder-gray-400 focus:outline-none focus:border-gray-400"
              />
              <button className="h-[48px] px-8 bg-[#CBFC01] hover:bg-[#b8e500] text-black font-semibold text-[14px] rounded-full transition-transform active:scale-95 shrink-0 cursor-pointer">
                Search
              </button>
            </div>

            {/* Consent Note */}
            <p className="mt-4 text-[12px] text-gray-400 max-w-[440px] leading-relaxed">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Navigation Columns (Span 6) */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-6 pt-2">
            
            {/* Column 1 */}
            <div className="flex flex-col gap-3.5">
              <a href="#featured-courses" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Featured Courses
              </a>
              <a href="#featured-categories" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Featured Categories
              </a>
              <a href="#business" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Business
              </a>
              <a href="#it" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                IT
              </a>
              <a href="#design" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Design
              </a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3.5">
              <a href="#development" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Development
              </a>
              <a href="#marketing" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Marketing
              </a>
              <a href="#photography" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Photography
              </a>
              <a href="#finance" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Finance
              </a>
              <a href="#sport" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Sport
              </a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3.5">
              <a href="#creator" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Become a Creator
              </a>
              <a href="#affiliate" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Affiliate Program
              </a>
              <a href="#contact" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Contact
              </a>
              <a href="#help" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Help
              </a>
              <a href="#about" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                About
              </a>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM COPYRIGHT BAR ================= */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-gray-500">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-black transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-black transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;