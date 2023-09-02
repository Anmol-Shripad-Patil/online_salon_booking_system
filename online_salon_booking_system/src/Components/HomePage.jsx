import React from 'react';
import './HomePage.css'; 
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="home-container">
      {/* <header className="header">
        <nav>
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact</a></li>
            <li><Link to="/centereds" >Signup</Link></li>
            <li><Link to="/login" >Login</Link></li>
          </ul>
        </nav>
      </header> */}
      <section className="hero-section">
        <div className="hero-content" >
          <h1 >Welcome to E-Salon System</h1>
          <h4>Your One-Stop Solution for Salon Booking and Management</h4>
          <br/>
          <button className="explore-button">Explore Now</button>
        </div>
      </section>
      <section className="features-section">
        {/* <div className="feature">
          <h3>For Customers</h3>
          <p >Explore salon services, book appointments, and make secure payments.</p>
        </div>
        <div className="feature">
          <h3>For Salon Owners</h3>
          <p>Efficiently manage services, verify profiles, and streamline appointment scheduling.</p>
        </div>
        <div className="feature">
          <h3>For Administrators</h3>
          <p>Comprehensive control over user management, appointments, and insightful reporting.</p>
        </div> */}
      </section>
     <footer className="footer">
        <p>&copy; 2023 E-Salon System. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;