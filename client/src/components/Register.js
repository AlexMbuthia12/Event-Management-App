import React, { useState } from 'react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`);
    // Add your registration logic here
     // Reset the state values
  setUsername('');
  setEmail('');
  setPassword('');
  setConfirmPassword('');
    /*const userData = {
        username,
        email,
        password,
        confirmPassword
      };
       
      // Authenticate user credentials
  const token = authenticateUser(userData);

  if (token) {
    // Store token in local storage or cookies
    localStorage.setItem('token', token);
    // Redirect to protected route or dashboard
    window.location.href = '/dashboard';
  } else {
    // Handle authentication error
    console.error('Invalid credentials');
  }


      fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      })
      .then(response => response.json())
      .then(data => {
        // Handle successful registration response
        console.log('Registration successful!');
      })
      .catch(error => {
        // Handle registration error
        console.error('Registration failed:', error);
      });*/
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Username:</label>
      <input type="text" value={username} onChange={handleUsernameChange} />
      <br />
      <label>Email:</label>
      <input type="email" value={email} onChange={handleEmailChange} />
      <br />
      <label>Password:</label>
      <input type="password" value={password} onChange={handlePasswordChange} />
      <br />
      <label>Confirm Password:</label>
      <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      <br />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;