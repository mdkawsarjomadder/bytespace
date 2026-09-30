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

// Pages path
import SearchPage from './pages/SearchPage';
import CourseDetails from './pages/CourseDetails';
import CourseLessons from './pages/CourseLessons';
import CourseReviews from './pages/CourseReviews';
import CreatorProfile from './pages/CreatorProfile';

// Errors path
import NotFound from './Errors/NotFound';

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

        {/* Courses & Search Routes */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/courses" element={<CourseDetails />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/lessons" element={<CourseLessons />} />
        <Route path="/reviews" element={<CourseReviews />} />

        {/* Creator Routes (দুটিই হ্যান্ডেল করা হলো যাতে /creators বা /creator যেকোনোটি লিখলেই কাজ করে) */}
        <Route path="/creators" element={<CreatorProfile />} />
        <Route path="/creator" element={<CreatorProfile />} />
        <Route path="/creator-profile" element={<CreatorProfile />} />

        {/* Auth Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Errors / 404 Page (path="*" দিলে ভুল রুটেও ব্ল্যাঙ্ক পেজ আসবে না, 404 পেজ শো করবে) */}
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;