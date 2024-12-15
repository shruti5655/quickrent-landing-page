// src/components/HeroBanner.js
import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <div className="hero">
      <nav className="navbar">
        <h1>QuickRent</h1>
        <div>
          <button>Sign Up</button>
        </div>
      </nav>
      <div className="hero-content">
        <h2>Rent Gadgets, Save Money</h2>
        <p>Affordable rentals for laptops, cameras, gaming consoles, and more.</p>
        <button>Explore Rentals</button>
      </div>
    </div>
  );
};

export default HeroBanner;
