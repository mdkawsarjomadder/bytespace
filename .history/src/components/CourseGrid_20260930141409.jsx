import React from 'react';
import { Star, BarChart } from 'lucide-react';

import image6 from '../assets/06.png';

const courses = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    author: 'purepearl studio',
    rating: '4.5',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: image6,
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    author: 'purepearl studio',
    rating: '4.5',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'the Power of Big Data',
    author: 'purepearl studio',
    rating: '4.5',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 4,
    title: 'Balancing Productivity and...',
    author: 'purepearl studio',
    rating: '4.5',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 5,
    title: 'Mastering Money Manage...',
    author: 'purepearl studio',
    rating: '4.5',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 6,
    title: 'From Idea to Startup Succ...',
    author: 'purepearl studio',
    rating: '4.5',
    lessons: '17 Lessons',
    duration: '2 hours 16 mins',
    comments: '59 Comments',
    level: 'Beginner',
    price: '$25',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80',
  },
];

const CourseGrid = () => {
  return (
    <section className="w-full bg-white pb-24 px-4 flex justify-center">
      <div className="w-full max-w-[1200px]">
        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-[20px] p-3.5 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Overlay Meta Pills */}
              <div className="relative w-full h-[200px] rounded-[16px] overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />

                {/* Glassmorphism Bottom Pills */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
                  <span className="bg-white/70 backdrop-blur-md text-[11px] font-medium text-gray-700 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {course.lessons}
                  </span>
                  <span className="bg-white/70 backdrop-blur-md text-[11px] font-medium text-gray-700 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {course.duration}
                  </span>
                  <span className="bg-white/70 backdrop-blur-md text-[11px] font-medium text-gray-700 px-2.5 py-1 rounded-full whitespace-nowrap">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Title, Rating & Author */}
              <div className="pt-4 px-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-[17px] font-bold text-gray-900 leading-snug line-clamp-1">
                    {course.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[13px] font-semibold text-gray-500 shrink-0">
                    <span>{course.rating}</span>
                    <Star className="w-3.5 h-3.5 fill-gray-400 text-gray-400" />
                  </div>
                </div>
                <p className="text-[12px] text-gray-400 mt-1">by {course.author}</p>
              </div>

              {/* Divider / Spacer */}
              <div className="mt-4 pt-3 border-t border-gray-100 px-1">
                {/* Level Badge & Students Stack */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[12px] font-medium text-gray-500">
                    <BarChart className="w-3.5 h-3.5 text-gray-400" />
                    <span>{course.level}</span>
                  </div>

                  {/* Avatars */}
                  <div className="flex items-center -space-x-1.5">
                    <img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&q=80" alt="avatar" />
                    <img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&q=80" alt="avatar" />
                    <img className="w-6 h-6 rounded-full border border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&q=80" alt="avatar" />
                    <div className="w-6 h-6 rounded-full bg-[#CBFC01] border border-white flex items-center justify-center text-[9px] font-bold text-black">
                      26+
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-[20px] font-bold text-[#1456fd]">{course.price}</span>
                  <span className="text-[12px] text-gray-400 font-normal">/lifetime</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;