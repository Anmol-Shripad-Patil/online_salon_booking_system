import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import './SalonHomePage.css';
function ManageBarbers() {
  const [barbers, setBarbers] = useState([]);
  const [newBarber, setNewBarber] = useState({
    name: '',
    age: '',
    gender: 'male', // Default value
  });

  const addBarber = () => {
    if (newBarber.name.trim() !== '' && newBarber.age !== '') {
      setBarbers([...barbers, newBarber]);
      setNewBarber({ name: '', age: '', gender: 'male' });
    }
  };

  const removeBarber = (index) => {
    const updatedBarbers = barbers.filter((_, i) => i !== index);
    setBarbers(updatedBarbers);
  };

  return (
    <div>
      <h2>Manage Barbers</h2>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={newBarber.name}
            onChange={(e) => setNewBarber({ ...newBarber, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            value={newBarber.age}
            onChange={(e) => setNewBarber({ ...newBarber, age: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            value={newBarber.gender}
            onChange={(e) => setNewBarber({ ...newBarber, gender: e.target.value })}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={addBarber}>
          Add Barber
        </Button>
      </Form>
      <h3>Barbers List</h3>
      <ListGroup>
        {barbers.map((barber, index) => (
          <ListGroup.Item key={index}>
            <div>
              <span>Name: {barber.name}</span>
              <span>Age: {barber.age}</span>
              <span>Gender: {barber.gender}</span>
              <Button
                variant="danger"
                size="sm"
                className="mr-2"
                onClick={() => removeBarber(index)}
              >
                Remove
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default ManageBarbers;