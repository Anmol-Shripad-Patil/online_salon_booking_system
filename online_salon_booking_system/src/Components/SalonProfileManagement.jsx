import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

function ManageSalonProfile() {
  const login_id = JSON.parse(localStorage.getItem("loginsal")).loginId;

  const [salonProfile, setSalonProfile] = useState({
    Salon: '',
    Address: '',
    Email: '',
    PhoneNumber: '',
  });

  useEffect(() => {
    fetch("http://localhost:8080/getByloginid/" + login_id)
      .then(resp => resp.text())
      .then(text => text.length ? JSON.parse(text) : {})
      .then(obj => {
        if (Object.keys(obj).length > 0) {
          setSalonProfile({
            Salon: obj.salon_name,
            Address: obj.salon_address,
            Email: obj.email,
            PhoneNumber: obj.contact_no,
          });
        }
      })
      .catch(error => {
        console.error("Error fetching salon profile:", error);
      });
  }, [login_id]);

  const handleEditClick = () => {
   
  };

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
      <h2>Manage Salon Profile</h2>
      <div>
      
        <Table striped bordered>
          <tbody>
            <tr>
              <td>Salon Name:</td>
              <td>{salonProfile.Salon}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{salonProfile.Address}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{salonProfile.Email}</td>
            </tr>
            <tr>
              <td>Phone Number:</td>
              <td>{salonProfile.PhoneNumber}</td>
            </tr>
          </tbody>
        </Table>
        <Button variant="info" onClick={handleEditClick}>
          Edit
        </Button>
      </div>
    </div>
  );
}

export default ManageSalonProfile;
