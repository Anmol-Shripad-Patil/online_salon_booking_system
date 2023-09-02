import React, { useEffect, useState } from 'react';
import './CustomerHomePage.css'; 
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css';
import { Link } from 'react-router-dom';


function CustomerHomePage() {
const[customer,setCustomer]=useState(null);

useEffect(() => {
  const loginid = JSON.parse(localStorage.getItem("logincus")).loginId;

  fetch("http://localhost:8080/getCustomer/" + loginid)
    .then(resp => {
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      return resp.json();
    })
    .then(obj => {
      localStorage.setItem("logincusOBJ", JSON.stringify(obj));
      setCustomer(obj);
    })
    .catch(error => {
      console.error("Error fetching customer data:", error);
      
    });
}, []);


  return (

    <div className='backImag1'>
       {console. log("in nav" ) }
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

   
    <div className="customer-home-container">
    <table > 
       <header className="customer-header">
       <th>
        <h1>Welcome {customer && customer.first_name}{" "}{customer && customer.last_name}!</h1>
        <p>View and manage your appointments, services, and more.</p>
        </th>
      </header>
      <form></form>
      <div className="customer-dashboard">
        
          <tr className="dashboard-section">
          <h2>Your Appointments</h2>
          <Link to="/cAppoint">
          <Button variant="primary">Click here</Button>
          </Link>
          </tr>

        <tr className="dashboard-section">
          <h2>Book Appointment</h2>
          <Link to="/service">
            <Button variant="primary">Book Now</Button>
          </Link>
        </tr>

        <tr className="dashboard-section">
          <h2>Manage Profile</h2>
          <br/>
          <Link to="/cProfile">
          <Button variant="primary">Click here</Button>
          </Link>
        </tr>
      
      </div>
      </table>
      </div>
      <footer className="footer">
        <p>&copy; 2023 E-Salon System. All rights reserved.</p>
      </footer>
    </div> 
    
  );
}

export default CustomerHomePage;

// import React from 'react';
// import { Container, Row, Col, Button } from 'react-bootstrap';
// import './CustomerHomePage.css';
// const CustomerHomePage = () => {
//   return (
//     <Container className="customer-home-container">
//       <Row className="justify-content-center">
//         <Col md={8} className="text-center">
//           <h1>Welcome to Our Salon Booking System</h1>
//           <p>Book your appointments and enjoy our services.</p>
//           <Button variant="primary">Book Now</Button>
//         </Col>
//       </Row>
//       <Row className="mt-5">
//         <Col md={4}>
//           <h2>Services</h2>
//           <ul className="list-unstyled">
//             <li>Haircut & Styling</li>
//             <li>Manicure & Pedicure</li>
//             <li>Facials & Skincare</li>
//             {/* Add more services */}
//           </ul>
//         </Col>
//         <Col md={4}>
//           <h2>Opening Hours</h2>
//           <p>Monday - Friday: 9 AM - 8 PM</p>
//           <p>Saturday: 10 AM - 6 PM</p>
//           <p>Sunday: Closed</p>
//         </Col>
//         <Col md={4}>
//           <h2>Contact Us</h2>
//           <p>123 Salon Street</p>
//           <p>City, State ZIP</p>
//           <p>Phone: (123) 456-7890</p>
//           <p>Email: info@example.com</p>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default CustomerHomePage;
