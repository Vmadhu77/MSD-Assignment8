// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom'; // Using Link to navigate between pages
import '../styles/styles.css'; // Ensure your styles are correctly imported

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <header className="head">
        <a href="/" className="logo">
          <i className="fas fa-heart"></i>&nbsp;Be<span>Together</span>Forever&nbsp;
          <i className="fas fa-heart"></i>
        </a>
        <nav className="navbar">
          <Link to="#home">Home</Link>
          <Link to="/service">Service</Link>
          <Link to="/carddesign">Card Design</Link>
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </nav>
        <div id="menu-bar">
          <i className="fas fa-bars"></i>
        </div>
      </header>

      {/* Page content will be rendered here */}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
