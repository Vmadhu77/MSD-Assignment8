import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/styles.css'; // Import your styles

const Registration = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    password: '',
    phone: '',
    weddingDate: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:9876/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      console.log(result); // Check the response from the backend

      if (response.ok) {
        setMessage('Registration successful! Redirecting to login...');
        // After successful registration, redirect to the login page
        setTimeout(() => {
          navigate('/login'); // Navigate to login page after 2 seconds
        }, 2000);
      } else {
        setMessage(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setMessage('An error occurred during registration.');
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-container">
        <h2 className="registration-heading">Register for Wedding Planner</h2>
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-group">
            <label htmlFor="full_name">Full Name</label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              onChange={handleChange}
              value={formData.full_name}
              placeholder="Full Name"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              value={formData.email}
              placeholder="Email"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              value={formData.password}
              placeholder="Password"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="text"
              onChange={handleChange}
              value={formData.phone}
              placeholder="Phone"
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="weddingDate">Wedding Date</label>
            <input
              id="weddingDate"
              name="weddingDate"
              type="date"
              onChange={handleChange}
              value={formData.weddingDate}
              required
              className="form-input"
            />
          </div>

          <button type="submit" className="submit-btn">Register</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Registration;
