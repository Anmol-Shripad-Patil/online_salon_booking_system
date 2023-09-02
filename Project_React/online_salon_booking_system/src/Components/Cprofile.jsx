import React, { useState, useEffect } from 'react';
import { Form, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cprofile() {

  const login_id=JSON.parse(localStorage.getItem("logincus")).loginId;

  const [customerProfile, setCustomerProfile] = useState({
    CustomerID: 1,
    FirstName: 'John',
    LastName: 'Doe',
    Email: 'john.doe@example.com',
    PhoneNumber: '555-987-6543',
  });

  const [editedCustomerProfile, setEditedCustomerProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
  //alert(JSON.stringify(login_id))
   
    setCustomerProfile({
      CustomerID: 1,
      FirstName: 'John',
      LastName: 'Doe',
      Email: 'john.doe@example.com',
      PhoneNumber: '555-987-6543',
    });
    fetch("http://localhost:8080/getCustomer/"+login_id)
    .then(resp=>resp.text())
    .then(text=>text.length ? JSON.parse(text):{})
    .then(obj=>{
      //alert(JSON.stringify(obj))
      if (Object.keys(obj).length > 0) {
        setCustomerProfile({
          CustomerID: obj.customer_id,
          FirstName: obj.first_name,
          LastName: obj.last_name,
          Email: obj.email,
          PhoneNumber: obj.contact_no,
        });
      }
    })
    .catch(error => {
      console.error("Error fetching customer profile:", error);
    });
}, []);

  const handleEditClick = () => {
    setEditedCustomerProfile(customerProfile);
    setIsEditing(true);
  };
const handleCustomeredit =() =>{}
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomerProfile({ ...editedCustomerProfile, [name]: value });
  };

  const handleSaveClick = () => {
  
    console.log('Updated customer profile:', editedCustomerProfile);

    setCustomerProfile(editedCustomerProfile);
    setIsEditing(false);
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
      <h2>Manage Customer Profile</h2>
      {isEditing ? (
        <Form>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="FirstName"
              value={editedCustomerProfile.FirstName || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
         
          <Button variant="primary" onClick={handleSaveClick}>
            Save
          </Button>
        </Form>
      ) : (
        <div>
        
          <Table striped bordered>
            <tbody>
              <tr>
                <td>First Name:</td>
                <td>{customerProfile.FirstName}</td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <td>{customerProfile.LastName}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{customerProfile.Email}</td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td>{customerProfile.PhoneNumber}</td>
              </tr>
            </tbody>
          </Table>
          <Button variant="info" onClick={handleEditClick}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cprofile;
