import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AdminLayout from './layouts/AdminLayout';
import HomePage from './pages/HomePage';
import MissionStories from './pages/MissionStories';
import Sermons from './pages/Sermons';
import LessonReviews from './pages/LessonReviews';
import AfternoonService from './pages/AfternoonService';
import Youth from './pages/Youth';
import Health from './pages/Health';
import Calendar from './pages/Calendar';
import Comments from './pages/Comments';
import AboutContact from './pages/AboutContact';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="mission-stories" element={<MissionStories />} />
          <Route path="sermons" element={<Sermons />} />
          <Route path="lesson-reviews" element={<LessonReviews />} />
          <Route path="afternoon-service" element={<AfternoonService />} />
          <Route path="youth" element={<Youth />} />
          <Route path="health" element={<Health />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="comments" element={<Comments />} />
          <Route path="about-contact" element={<AboutContact />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="admin-dashboard" element={<AdminDashboard />} />
          {/* Add other admin routes here */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
