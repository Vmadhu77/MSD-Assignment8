import React from 'react';
import '../styles/styles.css'; // Optional: Move styles to an external CSS file

const CardDesign = () => {
  return (
    <section className="Card-Design" id="Card-Design">
      <div className="title">
        <h1>
          Card<span>Design</span>
        </h1>
        <p>Choose the best card design</p>
      </div>
      <div className="invitation-row">
        <div className="invitation-box">
          <img
            src="https://www.craftyartapp.com/blog/wp-content/uploads/2023/05/4634-Wedding-Invitation-English-10-scaled.jpg"
            alt="Wedding Invitation 1"
          />
        </div>
        <div className="invitation-box">
          <img
            src="https://www.craftyartapp.com/blog/wp-content/uploads/2023/06/Wedding-Invitation-Card-4-min-724x1024.jpg"
            alt="Wedding Invitation 2"
          />
        </div>
        <div className="invitation-box">
          <img
            src="http://www.outfittrends.com/wp-content/uploads/2016/10/wedding-invitation-cards-bangalore-best-wedding-invitations-cards-wedding-invitation-cards-at.jpg"
            alt="Wedding Invitation 3"
          />
        </div>
        <div className="invitation-box">
          <img
            src="https://www.craftyartapp.com/blog/wp-content/uploads/2023/08/6967-Wedding-Invitation-A4-Template-77-min-1024x731.webp"
            alt="Wedding Invitation 4"
          />
        </div>
        <div className="invitation-box">
          <img
            src="https://www.craftyartapp.com/blog/wp-content/uploads/2023/07/main-2.webp"
            alt="Wedding Invitation 5"
          />
        </div>
      </div>
    </section>
  );
};

export default CardDesign;
