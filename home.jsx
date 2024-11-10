import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import '../styles/styles.css';

const Home = () => {
  return (
    <div>
      <header className="head">
        <a href="/" className="logo">
          <i className="fas fa-heart"></i>&nbsp;Be<span>Together</span>Forever&nbsp;
          <i className="fas fa-heart"></i>
        </a>
        <nav className="navbar">
          {/* Use Link instead of <a> for React Router navigation */}
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

      {/* Home Section */}
      <section id="home" className="home">
        <form action="#">
          <div className="search-box">
            <img
              src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Wedding"
              className="home-image"
            />
            <h1>Together is a beautiful place to be.</h1>
            <p>Find The Best Wedding Vendors With Thousands of Trusted Reviews</p>
            <select className="search-field">
              <option disabled selected>
                Select Vendor type
              </option>
              <option value="Wedding Venues">Wedding Venues</option>
              <option value="Family makeup">Family Makeup</option>
              <option value="Bridal makeup">Bridal Makeup</option>
              <option value="Groom Wear">Groom Wear</option>
              <option value="Wedding Decoration">Wedding Decoration</option>
            </select>
            <select className="search-field">
              <option disabled selected>
                City
              </option>
              <option value="Goa">Goa</option>
              <option value="Ahmedabad">Ahmedabad</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Jaipur">Jaipur</option>
            </select>
            <button className="btn">Search here...</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Home;
