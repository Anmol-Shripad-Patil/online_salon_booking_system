import React from 'react';
import './CustomerHomePage.css'; // Import your custom styling here
import { Container, Row, Col, Button } from 'react-bootstrap';
import './HomePage.css';
import { Link } from 'react-router-dom';


function CustomerHomePage() {
  return (

    
    <div className="customer-home-container">

       <header className="customer-header">
       
        <h1>Welcome, [Customer Name]!</h1>
        <p>View and manage your appointments, services, and more.</p>
       
      </header>
      <div className="customer-dashboard">
        <div className="dashboard-section">
          <h2>Your Appointments</h2>
          <Link to="/cAppoint">
          <Button variant="primary">Click here</Button>
          </Link>
        </div>
        <div className="dashboard-section">
          <h2>Book Appointment</h2>
          <Link to="/service">
            <Button variant="primary">Book Now</Button>
          </Link>

        </div>
        <div className="dashboard-section">
          <h2>Manage Profile</h2>
          <Link to="/cProfile">
          <Button variant="primary">Click here</Button>
          </Link>
        </div>
      </div>
      
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
