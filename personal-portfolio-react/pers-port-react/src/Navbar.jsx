// Import necessary modules
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import './index.css'; // Tailwind and custom styles

// Navbar component
export default function Navbar() {
  return (
    <nav className="flex justify-between px-12 bg-orange-400 py-8">
      {/* <Link to="/" className="border-2 border-sky-500 px-12 py-4">
        Home
      </Link> */}
      <Link to="/" className="border-2 border-sky-500 px-12 py-4">
        About Me
      </Link>
      <Link to="/portfolio" className="border-2 border-sky-500 px-12 py-4">
        Portfolio
      </Link>
      <Link to="/resume" className="border-2 border-sky-500 px-12 py-4">
        Resume
      </Link>
      <Link to="/contact" className="border-2 border-sky-500 px-12 py-4">
        Contact
      </Link>
    </nav>
  );
}
