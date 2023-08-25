import React from 'react';
import './CenteredSignup.css'; // Import your custom styling here
import { Link } from 'react-router-dom';

function CenteredSignup() {
  return (
    <div className="container">
      <div className="signup-form">
        <form>
          <h1>Register as</h1>
         <a><button><Link to="/signupC" >Customer Registration </Link></button></a>
          <br/>
         <a> <button><Link to="/signupS" >Salon Registration</Link></button></a>
        </form>
      </div>
    </div>
  );
}

export default CenteredSignup;
