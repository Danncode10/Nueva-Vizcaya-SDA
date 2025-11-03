import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar />
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
