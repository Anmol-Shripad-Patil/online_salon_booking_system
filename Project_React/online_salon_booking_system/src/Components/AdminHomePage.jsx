import React from 'react';
import './AdminHomePage.css'; // Import your custom styling here
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';


function AdminHomePage() {
  return (
   <div>
    <div class="p-0 mb-3  bg-dark text-white"> 
         {/* <HomePage/>  */}
         <nav className="navbar navbar-expand-sm nanbar-dark mb-2 ">  
          {/* it diaplay header bare link in single line */}
          <div >
          <ul className="navbar-nav" >
            <li className="nav-item">
              <Link to='/' className='nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover'  >
                Home
                </Link>
            </li>
            <li className="nav-item">
              <Link to='#' className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                About Us
                </Link>
            </li>
            <li className="nav-item">
              <Link to='/logout' className="nav-link link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                Logout</Link>
            </li>
          </ul>
         </div>
       </nav>
       </div>
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
             <Link to="/revenuegeneration">
            <Button variant="primary">Click here</Button>
            </Link>

          </div>
          <div className="admin-home-option">
            <h2>Services Management</h2>
            <p>Add, edit, or remove salon services.</p>
            <Link to="/revenuegeneration">
            <Button variant="primary">Click here</Button>
            </Link>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default AdminHomePage;
