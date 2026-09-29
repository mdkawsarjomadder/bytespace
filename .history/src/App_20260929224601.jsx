import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryPills from './components/CategoryPills';
import CourseGrid from './components/CourseGrid';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <Hero />
      < CategoryPills/>
      < CourseGrid/>
    </div>
  );
}

export default App;