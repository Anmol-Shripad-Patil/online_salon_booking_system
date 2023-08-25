import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SalonHomePage.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './LoginPage.css';


function SalonHomePage() {
  return (
    <div className="salon-home-container">
      <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Logout</a>
      </div>
      <header className="salon-header">
        <h1>Welcome, [Salon Name]!</h1>
        <p>Manage your salon profile, appointments, and services.</p>
      </header>
      <div className="salon-dashboard">
        <div className="dashboard-section">
          <h2>Appointment Calender</h2>
          <Link to="/appointmentcalender">
            <Button variant="primary">Appointment Calender</Button>
          </Link>
        </div>
        {/* Other dashboard sections */}
        <div className="dashboard-section">
          <h2>Manage Barbers</h2>
          <Link to="/mBarbers">
            <Button variant="primary">Manage Barbers</Button>
          </Link>
         </div>
          <div className="dashboard-section">
            <h2>Manage Profile</h2>
              <Link to="/salonprofilemanagement">
            <Button variant="primary">Manage Profile</Button>
          </Link>
         </div>

      </div>
    </div>
  );
}

export default SalonHomePage;
