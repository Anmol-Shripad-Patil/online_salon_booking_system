import React from 'react';
import './AdminHomePage.css'; // Import your custom styling here
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';


function AdminHomePage() {
  return (
   <div>
      <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Logout</a>
      </div>
      <div className="admin-home-container">
        
        <h1>Welcome, Admin</h1>
        <div className="admin-home-options">
          <div className="admin-home-option">
            <h2>User Management</h2>
            <p>Manage user accounts, profiles, and deactivation.</p>
            <Link to="/">
            <Button variant="primary">Click here</Button>
            </Link>
          </div>

          <div className="admin-home-option">
            <h2>Salon Management</h2>
            <p>Approve salon profiles and manage salons.</p>
            <Link to="/">
            <Button variant="primary">Click here</Button>
            </Link>
          </div>

          <div className="admin-home-option">
            <h2>Report Generation</h2>
            <p>View, and Analise.</p>
             <Link to="/">
            <Button variant="primary">Click here</Button>
            </Link>

          </div>
          <div className="admin-home-option">
            <h2>Services Management</h2>
            <p>Add, edit, or remove salon services.</p>
            <Link to="/">
            <Button variant="primary">Click here</Button>
            </Link>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default AdminHomePage;
