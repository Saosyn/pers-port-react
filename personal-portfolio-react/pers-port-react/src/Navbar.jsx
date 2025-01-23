// Import necessary modules
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { Link } from 'react-router-dom';
import './index.css'; // Tailwind and custom styles
import './fonts.css';

// Navbar component
export default function Navbar() {
  return (
    <div className="bg-hero-pattern">
      <nav className="flex justify-between px-12 py-8">
        {/* <Link to="/" className="border-2 border-sky-500 px-12 py-4">
        Home
        </Link> */}
        <Link
          to="/"
          className="nav-bar border-2 text-white bg-gradient-to-r from-indigo-500 rounded-lg px-12 py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          About Me
        </Link>
        <Link
          to="/portfolio"
          className="nav-bar border-2 text-white bg-gradient-to-r from-indigo-500 rounded-lg px-12 py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Portfolio
        </Link>
        <Link
          to="/resume"
          className="nav-bar border-2 text-white bg-gradient-to-r from-indigo-500 rounded-lg px-12 py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Resume
        </Link>
        <Link
          to="/contact"
          className="nav-bar border-2 text-white bg-gradient-to-r from-indigo-500 rounded-lg px-12 py-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}
