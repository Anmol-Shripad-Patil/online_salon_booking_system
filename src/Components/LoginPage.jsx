import React, { useState } from 'react';
import './LoginPage.css'; // Import your custom styling here

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform validation and authentication logic
    console.log("Logging in with username:", username);
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Log In</button>
        <p>Don't have an account? <a href="./centereds"> Sign Up</a></p>
        <p><a href="#"> Forgot password?</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
