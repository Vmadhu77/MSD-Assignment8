import React, { useState } from 'react';
import '../styles/styles.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      setMessage(data.message);

      if (response.status === 200) {
        localStorage.setItem('token', data.token);
        window.location.href = '/profile'; // Redirect to the profile page
      }
    } catch (error) {
      setMessage('Error logging in');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2 className="login-heading">Login</h2>
        <form onSubmit={handleLoginSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleInputChange}
              value={loginData.email}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleInputChange}
              value={loginData.password}
            />
          </div>

          <button type="submit" className="submit-btn">Login</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Login;
