import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Your Home page component
import Features from './pages/Features'; // Your Features page component
import ContactUs from './pages/ContactUs'; // Your Contact Us page component
import Navbar from './components/Navbar'; // Import Navbar

const AppRouter = () => {
  return (
    <Router>
      <Navbar /> {/* Add this line */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
