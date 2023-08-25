import React from 'react';
import './CustomerHomePage.css';

const CustomerAppointment = () => {
  return (
    <div style={styles.container} className='backImag1'>
      <h1 style={styles.heading}>Your Appointments</h1>
      <div style={styles.appointmentCard}>
        <h2 style={styles.h2}>Appointment Details</h2>
        <p>Date: September 10, 2023</p>
        <p>Time: 3:00 PM</p>
        <p>Service: Haircut & Styling</p>
        <p>Salon: Salon A</p>
        <p>Address: 123 Main St, New York</p>
        <button style={styles.cancelButton}>Cancel Appointment</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#5783db',
  },
  heading: {
    marginBottom: '20px',
    color: 'black',
  },
  appointmentCard: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'left',
    backgroundColor: '#55c2da',
  },
  cancelButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  },
  h2:
  {
    color:'black',
  },
};

export default CustomerAppointment;
