import React from 'react';
import './CustomerHomePage.css';

const Cprofile = () => {
  return (
    <div style={styles.container} className='backImag1'>
      <h1 style={styles.heading}>User Profile</h1>
      <div style={styles.profileCard}>
        <img src="user-avatar.jpg" alt="User Avatar" style={styles.profilePicture} />
        <div style={styles.profileInfo}>
          <h2 style={styles.profileInfoHeading}>John Doe</h2>
          <p>Email: john@example.com</p>
          <p>Location: New York, USA</p>
          <p>Member Since: January 2020</p>
        </div>
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

  },
  heading: {
    marginBottom: '20px',
    color: 'black',

  },
  profileCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  profilePicture: {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    marginRight: '20px',
    color:'blue',
  },
  profileInfo: {
    textAlign: 'left',
    color:'black',
  },
  profileInfoHeading: {
    margin: '0',
    color: '#343a40',
  },
};

export default Cprofile;
