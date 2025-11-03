import React from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
  return (
    <div>
      <header>
        {/* Navbar will go here */}
        <nav>
          <ul>
            <li>Home</li>
            <li>Mission Stories</li>
            <li>Sermons</li>
            <li>Lesson Reviews</li>
            <li>Afternoon Service</li>
            <li>Youth</li>
            <li>Health</li>
            <li>Calendar</li>
            <li>Comments</li>
            <li>About & Contact</li>
            <li>Login</li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet /> {/* This is where child routes will render */}
      </main>
      <footer>
        {/* Footer will go here */}
        <p>&copy; 2025 SDA Nueva Vizcaya Church Website</p>
      </footer>
    </div>
  );
};

export default MainLayout;
