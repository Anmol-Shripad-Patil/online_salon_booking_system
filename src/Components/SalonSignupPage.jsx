import React, { useState } from 'react';
import './SignupPage.css'; // Import your custom styling here
import SalonHomePage from './SalonHomePage';

function SalonSignupPage() {
  const [salonName, setSalonName] = useState('');
  const [salonemailId, setSalonemailId]=useState('');
  const [contactNo, setContactNo] = useState('');
  const [city, setCity] = useState('');
  const [salonAddress, setSalonAddress] = useState('');
  // const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Perform validation and create salon account
    console.log({
      salonName,
      salonemailId,
      contactNo,
      city,
      salonAddress,
      // servicesOffered,
      // username,
      password,
    });
  };

  return (
    <div className="signup2-container">
      <div className="signup2-form">
        <h2>Create a Salon Account</h2>
        <input
          type="text"
          placeholder="Salon Name"
          value={salonName}
          onChange={(e) => setSalonName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email'ID"
          value={salonemailId}
          onChange={(e) => setSalonemailId(e.target.value)}
        />
        <input
          type="number"
          placeholder="Contact No."
          value={contactNo}
          onChange={(e) => setContactNo(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={salonAddress}
          onChange={(e) => setSalonAddress(e.target.value)}
        />

<input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* <textarea
          placeholder="Services Offered"
          value={servicesOffered}
          onChange={(e) => setServicesOffered(e.target.value)}
        /> 
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        */}
       
        
        <button onClick={SalonHomePage}>Sign Up</button>
        <p>Already have an account? <a href="./login">Login</a></p>
      </div>
    </div>
  );
}

export default SalonSignupPage;
