import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function AppointmentCalendar() {
  const [appointments, setAppointments] = useState([]);
  const salonId = JSON.parse(localStorage.getItem("salid")).salon_id;

  useEffect(() => {
    fetch("http://localhost:8080/salon/" + salonId)
      .then(resp => resp.text())
      .then(text => text.length ? JSON.parse(text) : {})
      .then(obj => {
        setAppointments(obj);
      });
  }, [salonId]);

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
      <header className="bg-primary text-white text-center ">
        <h1 className="display-4">Appointment Calendar</h1>
      </header>
      <Container className="py-4">
        <Row>
          <Col>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>Barber Name</th>
                    <th>Customer Name</th>
                    <th>Slot Time</th>
                    <th>Service Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map(appo => (
                    <tr key={appo}>
                      <td>{appo.barber.barber_name}</td>
                      <td>{`${appo.customer.first_name} ${appo.customer.last_name}`}</td>
                      <td>{`${appo.slot.start_time} - ${appo.slot.end_time}`}</td>
                      <td>{appo.servic.serviceName}</td>
                      <td>{appo.servic.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AppointmentCalendar;
