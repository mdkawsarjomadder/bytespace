import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryPills from './components/CategoryPills';
import CourseGrid from './components/CourseGrid';
import LearningPaths from './components/LearningPaths';
import GrowthStats from './components/GrowthStats';
import CreatorCTA from './components/CreatorCTA';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <Hero />
      < CategoryPills/>
      < CourseGrid/>
      < LearningPaths/>
      < GrowthStats/>
      < CreatorCTA/>
    </div>
  );
}

export default App;