import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

function ManageSalonProfile() {
  const [salonProfile, setSalonProfile] = useState({
    SalonID: 1,
    LoginId: 'samplelogin',
    SalonName: 'My Salon',
    city_id: 1,
    SalonAddress: '123 Main St',
    ContactEmail: 'info@mysalon.com',
    ContactPhoneNumber: '555-123-4567',
  });

  const [editedSalonProfile, setEditedSalonProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Fetch salon profile details from the API or database
    // For this example, using the initial hardcoded salon profile
    // Replace this with actual API call
    // For now, simulating API fetch
    setSalonProfile({
      SalonID: 1,
      LoginId: 'samplelogin',
      SalonName: 'My Salon',
      city_id: 1,
      SalonAddress: '123 Main St',
      ContactEmail: 'info@mysalon.com',
      ContactPhoneNumber: '555-123-4567',
    });
  }, []);

  const handleEditClick = () => {
    setEditedSalonProfile(salonProfile);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedSalonProfile({ ...editedSalonProfile, [name]: value });
  };

  const handleSaveClick = () => {
    // Update salon profile details in the API or database
    // For this example, logging the updated profile
    // Replace this with actual API call
    console.log('Updated salon profile:', editedSalonProfile);

    setSalonProfile(editedSalonProfile);
    setIsEditing(false);
  };

  return (
    <div>
      <h2>Manage Salon Profile</h2>
      {isEditing ? (
        <Form>
          <Form.Group>
            <Form.Label>Salon Name</Form.Label>
            <Form.Control
              type="text"
              name="SalonName"
              value={editedSalonProfile.SalonName || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Salon Address</Form.Label>
            <Form.Control
              type="text"
              name="SalonAddress"
              value={editedSalonProfile.SalonAddress || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact Email</Form.Label>
            <Form.Control
              type="email"
              name="ContactEmail"
              value={editedSalonProfile.ContactEmail || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Contact Phone Number</Form.Label>
            <Form.Control
              type="text"
              name="ContactPhoneNumber"
              value={editedSalonProfile.ContactPhoneNumber || ''}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSaveClick}>
            Save
          </Button>
        </Form>
      ) : (
        <div>
          <p>Salon Name: {salonProfile.SalonName}</p>
          <p>Salon Address: {salonProfile.SalonAddress}</p>
          <p>Contact Email: {salonProfile.ContactEmail}</p>
          <p>Contact Phone Number: {salonProfile.ContactPhoneNumber}</p>
          <Button variant="info" onClick={handleEditClick}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
}

export default ManageSalonProfile;
