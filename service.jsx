import React from 'react';
import '../styles/styles.css'; // Ensure styles.css is in the correct path

const Services = () => {
  return (
    <section className="service" id="service">
      <div className="title">
        <h1><span>Service</span></h1>
      </div>
      <div className="services-row">
        <div className="services-col">
          <i className="fas fa-book-open"></i>
          <h2>Invitation</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis repudiandae maxime tempora porro?</p>
        </div>
        <div className="services-col">
          <i className="fas fa-camera"></i>
          <h2>Photography & Video</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis repudiandae maxime tempora porro?</p>
        </div>
        <div className="services-col">
          <i className="fas fa-brush"></i>
          <h2>Beauty & Makeup</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis repudiandae maxime tempora porro?</p>
        </div>
        <div className="services-col">
          <i className="fas fa-leaf"></i>
          <h2>Wedding Flowers</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis repudiandae maxime tempora porro?</p>
        </div>
        <div className="services-col">
          <i className="fas fa-birthday-cake"></i>
          <h2>Wedding Cake</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis repudiandae maxime tempora porro?</p>
        </div>
        <div className="services-col">
          <i className="fas fa-music"></i>
          <h2>Music Band</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis repudiandae maxime tempora porro?</p>
        </div>
        <div className="services-col">
          <i className="fas fa-utensils"></i>
          <h2>Catering</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis repudiandae maxime tempora porro?</p>
        </div>
        <div className="services-col">
          <i className="fas fa-ring"></i>
          <h2>Jewellery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis repudiandae maxime tempora porro?</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
