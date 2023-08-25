import React from 'react';
import './AdminHomePage.css'; // Import your custom styling here

function AdminHomePage() {
  return (
    <div className="admin-home-container">
      <h1>Welcome, Admin</h1>
      <div className="admin-home-options">
        <div className="admin-home-option">
          <h2>User Management</h2>
          <p>Manage user accounts, profiles, and deactivation.</p>
        </div>
        <div className="admin-home-option">
          <h2>Barber Management</h2>
          <p>Approve salon profiles, verify accounts, and manage salons.</p>
        </div>
        <div className="admin-home-option">
          <h2>Appointment Management</h2>
          <p>View, modify, and cancel appointments.</p>
        </div>
        <div className="admin-home-option">
          <h2>Services Management</h2>
          <p>Add, edit, or remove salon services.</p>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
