import React from 'react';
import { PenTool, Code, Laptop, Building2, Megaphone, Camera } from 'lucide-react';

const paths = [
  { id: 1, name: 'Design', icon: PenTool },
  { id: 2, name: 'Development', icon: Code },
  { id: 3, name: 'IT & Software', icon: Laptop },
  { id: 4, name: 'Business', icon: Building2 },
  { id: 5, name: 'Marketing', icon: Megaphone },
  { id: 6, name: 'Photography', icon: Camera },
];

const LearningPaths = () => {
  return (
    <section className="w-full bg-white py-20 px-4 flex justify-center">
      <div className="w-full max-w-[1202px] flex flex-col items-center text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-[44px] font-bold text-[#141518] tracking-tight leading-[1.2] font-['Satoshi',sans-serif]">
          Explore Diverse Learning Paths at Bytespace
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm md:text-[15px] text-gray-500 max-w-[760px] leading-relaxed font-normal">
          At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>

        {/* Learning Path 6 Cards Row (Figma: 1202px x 167px) */}
        <div className="mt-14 w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {paths.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="h-[167px] bg-white rounded-[24px] border border-gray-200/90 hover:border-gray-300 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-md transition-all duration-200 flex flex-col items-center justify-center gap-4 cursor-pointer group"
              >
                {/* Lime Circular Icon */}
                <div className="w-14 h-14 rounded-full bg-[#CBFC01] flex items-center justify-center transition-transform group-hover:scale-110">
                  <Icon className="w-6 h-6 text-black stroke-[2.2]" />
                </div>

                {/* Path Label */}
                <span className="text-[15px] font-bold text-gray-900 group-hover:text-[#1456fd] transition-colors">
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default LearningPaths;