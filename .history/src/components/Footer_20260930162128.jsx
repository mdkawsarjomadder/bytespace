import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-16 pb-12 px-4 border-t border-gray-100 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col justify-between">
        
        {/* ================= TOP GRID AREA (1200px x 234px) ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pb-16">
          
          {/* Left Brand & Newsletter (Span 6) */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Logo (Navbar-এর স্টাইলে 'b' ভেক্টর মার্ক + ByteSpace) */}
            <Link 
              to="/" 
              className="flex items-center gap-3 cursor-pointer select-none group"
            >
              {/* Custom 'b' Logo Vector */}
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

              {/* Logo Text (সাদা ব্যাকগ্রাউন্ডে ফিগমা অনুযায়ী ডার্ক টেক্সট) */}
              <span className="text-[24px] font-black tracking-tight text-gray-900 leading-none font-['Satoshi',sans-serif]">
                ByteSpace
              </span>
            </Link>

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
              <Link to="/courses" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Featured Courses
              </Link>
              <Link to="/courses" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Featured Categories
              </Link>
              <Link to="/courses" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Business
              </Link>
              <Link to="/courses" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                IT
              </Link>
              <Link to="/courses" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Design
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3.5">
              <Link to="/courses" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Development
              </Link>
              <Link to="/courses" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Marketing
              </Link>
              <Link to="/courses" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Photography
              </Link>
              <Link to="/courses" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Finance
              </Link>
              <Link to="/courses" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Sport
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3.5">
              <Link to="/creators" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Become a Creator
              </Link>
              <Link to="/creators" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Affiliate Program
              </Link>
              <Link to="/contact" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Contact
              </Link>
              <Link to="/help" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                Help
              </Link>
              <Link to="/about" className="text-[14px] text-gray-600 hover:text-black transition-colors">
                About
              </Link>
            </div>

          </div>

        </div>

        {/* ================= BOTTOM COPYRIGHT BAR ================= */}
        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-gray-500">
          <p>© 2023 ByteSpace. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-black transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-black transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="hover:text-black transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;