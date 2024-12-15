import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>QuickRent - Rent the Latest Gadgets Today!</h1>
          <p>Your go-to platform for renting high-end gadgets like laptops, cameras, and gaming consoles.</p>
          <button className="cta-button">Explore Rentals</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose QuickRent?</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="path_to_image/variety.jpg" alt="Variety of Gadgets" />
            <h3>Wide Variety of Gadgets</h3>
            <p>Choose from a wide selection of gadgets to rent, from laptops to gaming consoles.</p>
          </div>
          <div className="feature-card">
            <img src="path_to_image/affordable.jpg" alt="Affordable Pricing" />
            <h3>Affordable Pricing</h3>
            <p>Rent high-quality gadgets at budget-friendly prices with no hidden fees.</p>
          </div>
          <div className="feature-card">
            <img src="path_to_image/delivery.jpg" alt="Quick Delivery" />
            <h3>Quick Delivery</h3>
            <p>Get your gadgets delivered to your doorsteps quickly and securely.</p>
          </div>
        </div>
      </section>

      {/* Gadget Gallery Section */}
      <section className="gallery">
        <h2>Featured Gadgets</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="path_to_image/laptop.jpg" alt="Laptop" />
            <h3>Premium Laptops</h3>
          </div>
          <div className="gallery-item">
            <img src="path_to_image/camera.jpg" alt="Camera" />
            <h3>High-End Cameras</h3>
          </div>
          <div className="gallery-item">
            <img src="path_to_image/gaming.jpg" alt="Gaming Console" />
            <h3>Gaming Consoles</h3>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to Rent? Get Started Now!</h2>
        <button className="cta-button">Start Renting</button>
      </section>
    </div>
  );
};

export default Home;
