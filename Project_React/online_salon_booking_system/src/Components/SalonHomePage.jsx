import React,{useEffect, useState} from 'react';

import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './SalonHomePage.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './LoginPage.css';


function SalonHomePage() {

  const a=JSON.parse(localStorage.getItem("loginsal")).loginId;
  const[salid,setSalid]=useState([])
  useEffect(() => {
    //alert(a);
    fetch("http://localhost:8080/getByloginid/"+a)
      .then(resp => resp.text())
      .then(text => text.length ? JSON.parse(text) : {})
      .then(obj => {
        setSalid(obj);
        localStorage.setItem("salid", JSON.stringify(obj));
      });
  }, []);

  return (
    <div className="salon-home-container">
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
      {/* <p>{JSON.stringify(a)}</p> */}
      {/* <div class="topnav">
        <a class="active" href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Logout</a>
      </div> */}
      <header className="salon-header">
        <h1>Welcome {salid.salon_name}!</h1>
        <p>Manage your salon profile, appointments, and services.</p>
      </header>
      <div className="salon-dashboard">
        <div className="dashboard-section">
          <h2>Appointment Calender</h2>
          <br/>
          <Link to="/appointmentcalender">
            <Button variant="primary">Appointment Calender</Button>
          </Link>
        </div>
        {/* Other dashboard sections */}
        <div className="dashboard-section">
          <h2>Manage Barbers</h2>
          <br/>
          <Link to="/mBarbers">
            <Button variant="primary">Manage Barbers</Button>
          </Link>
         </div>
          <div className="dashboard-section">
            <h2>Manage Profile</h2>
            <br/>
              <Link to="/salonprofilemanagement">
            <Button variant="primary">Manage Profile</Button>
          </Link>
         </div>

      </div>
    </div>
  );
}

export default SalonHomePage;
