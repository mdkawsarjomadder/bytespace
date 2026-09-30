import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Landing Page Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryPills from './components/CategoryPills';
import CourseGrid from './components/CourseGrid';
import LearningPaths from './components/LearningPaths';
import GrowthStats from './components/GrowthStats';
import CreatorCTA from './components/CreatorCTA';
import UnlockCreatorBanner from './components/UnlockCreatorBanner';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

// Auth Page
import Register from './auth/Register';
import Login from './auth/Login';

//Pages path
import SearchPage from './pages/SearchPage';
import CourseDetails from './pages/CourseDetails';
import CourseLessons  from './pages/CourseLessons';
import CourseReviews from './pages/CourseReviews';
import CreatorProfile from './pages/CreatorProfile';

// Full Landing Page Wrapper
const HomePage = () => (
  <div className="min-h-screen bg-white font-sans overflow-x-hidden selection:bg-[#CBFC01] selection:text-black">
    <Navbar />
    <Hero />
    <CategoryPills />
    <CourseGrid />
    <LearningPaths />
    <GrowthStats />
    <CreatorCTA />
    <UnlockCreatorBanner />
    <Testimonials />
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Landing Page Route */}
        <Route path="/" element={<HomePage />} />

        {/*Serache page Route */}
           <Route path="/serach" element={<SearchPage />} />
           <Route path="/creator" element={<CreatorProfile />} />
           <Route path="/courses" element={<CourseDetails />} />
           <Route path="/lessone" element={<CourseLessons />} />
           <Route path="/reviews" element={<CourseReviews />} />

        {/* Register Page Route */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        

      </Routes>
    </BrowserRouter>
  );
}

export default App;