import React, { useState } from 'react';
import { Form, Button, ListGroup } from 'react-bootstrap';
import './SalonHomePage.css';
import {Link} from 'react-router-dom'
function ManageBarbers() {

  const a=JSON.parse(localStorage.getItem("salid")).salon_id;

  const [barbers, setBarbers] = useState([]);
  const [newBarber, setNewBarber] = useState({
    barber_name: '',
    age: '',
    gender: 'male',
    salon_id:a// Default value
  });

  
  // const addBarber = () => {
  //   if (newBarber.name.trim() !== '' && newBarber.age !== '') {
  //     setBarbers([...barbers, newBarber]);
  //     setNewBarber({ name: '', age: '', gender: 'male' });
  //   }
  // };

const addBarber=()=>{
      alert(JSON.stringify(newBarber))
      const reqOptions = {
          method:'Post',
          headers:{'content-type':'application/json'},
          body:JSON.stringify(newBarber)
      }
      fetch("http://localhost:8080/registerBarber",reqOptions)
      .then(resp=>resp.text())
      .then(text=>text.length?JSON.parse(text):{})
      .then(obj=>{
        setBarbers(obj);
      })
}

  const removeBarber = (index) => {
    const updatedBarbers = barbers.filter((_, i) => i !== index);
    setBarbers(updatedBarbers);
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
      <h2>Manage Barbers</h2>

      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={newBarber.barber_name}
            onChange={(e) => setNewBarber({ ...newBarber, barber_name: e.target.value })}
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
        {/* {barbers.map((barber, index) => (
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
        ))} */}
      </ListGroup>
      {/* <p>{JSON.stringify(newBarber)}</p> */}
    </div>
  );
}

export default ManageBarbers;