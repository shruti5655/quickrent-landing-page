import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Our Features</h1>
        <p>Why QuickRent is the best choice for renting gadgets</p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Features That Make Us Stand Out</h2>
        <div className="feature-cards">
          <div className="feature-card">
            <img src="path_to_image/affordable.jpg" alt="Affordable Pricing" />
            <h3>Affordable Pricing</h3>
            <p>We offer the best prices in the market with no hidden fees. Renting gadgets has never been more cost-effective.</p>
          </div>
          <div className="feature-card">
            <img src="path_to_image/fast_delivery.jpg" alt="Fast Delivery" />
            <h3>Fast Delivery</h3>
            <p>Get your rented gadgets delivered directly to your doorstep within hours, wherever you are.</p>
          </div>
          <div className="feature-card">
            <img src="path_to_image/easy_return.jpg" alt="Easy Returns" />
            <h3>Easy Returns</h3>
            <p>Returning rented items is simple and hassle-free with multiple drop-off points and pickup options.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How QuickRent Works</h2>
        <div className="steps">
          <div className="step">
            <img src="path_to_image/search.jpg" alt="Search Gadgets" />
            <h3>Search & Choose</h3>
            <p>Browse through our vast collection of gadgets and choose the one you want to rent.</p>
          </div>
          <div className="step">
            <img src="path_to_image/order.jpg" alt="Order Gadget" />
            <h3>Order & Pay</h3>
            <p>Once you choose, place an order and make a payment using secure methods.</p>
          </div>
          <div className="step">
            <img src="path_to_image/delivery.jpg" alt="Gadget Delivery" />
            <h3>Get Delivered</h3>
            <p>Your chosen gadget will be delivered at your doorstep with fast and secure shipping.</p>
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <img src="path_to_image/user1.jpg" alt="User 1" />
            <p>"QuickRent made renting gadgets so simple. I got my camera delivered in just 2 hours!"</p>
            <h3>John Doe</h3>
            <span>Photographer</span>
          </div>
          <div className="testimonial-card">
            <img src="path_to_image/user2.jpg" alt="User 2" />
            <p>"Affordable prices and fast delivery! Will definitely rent again."</p>
            <h3>Jane Smith</h3>
            <span>Content Creator</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
