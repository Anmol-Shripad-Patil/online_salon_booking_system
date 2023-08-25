import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function Cprofile() {
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
    // Fetch customer profile details from the API or database
    // For this example, using the initial hardcoded customer profile
    // Replace this with actual API call
    // For now, simulating API fetch
    setCustomerProfile({
      CustomerID: 1,
      FirstName: 'John',
      LastName: 'Doe',
      Email: 'john.doe@example.com',
      PhoneNumber: '555-987-6543',
    });
  }, []);

  const handleEditClick = () => {
    setEditedCustomerProfile(customerProfile);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedCustomerProfile({ ...editedCustomerProfile, [name]: value });
  };

  const handleSaveClick = () => {
    // Update customer profile details in the API or database
    // For this example, logging the updated profile
    // Replace this with actual API call
    console.log('Updated customer profile:', editedCustomerProfile);

    setCustomerProfile(editedCustomerProfile);
    setIsEditing(false);
  };

  return (
    <div>
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
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="LastName"
              value={editedCustomerProfile.LastName || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="Email"
              value={editedCustomerProfile.Email || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="PhoneNumber"
              value={editedCustomerProfile.PhoneNumber || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSaveClick}>
            Save
          </Button>
        </Form>
      ) : (
        <div>
          <p>First Name: {customerProfile.FirstName}</p>
          <p>Last Name: {customerProfile.LastName}</p>
          <p>Email: {customerProfile.Email}</p>
          <p>Phone Number: {customerProfile.PhoneNumber}</p>
          <Button variant="info" onClick={handleEditClick}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
}

export default Cprofile;
