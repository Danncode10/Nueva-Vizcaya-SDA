import React from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout: React.FC = () => {
  return (
    <div>
      <aside>
        {/* Admin Sidebar will go here */}
        <nav>
          <ul>
            <li>Admin Dashboard</li>
            <li>Manage Posts</li>
            <li>Manage Events</li>
            <li>Manage Users</li>
          </ul>
        </nav>
      </aside>
      <main>
        <Outlet /> {/* This is where admin child routes will render */}
      </main>
    </div>
  );
};

export default AdminLayout;
