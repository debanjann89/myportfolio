import React, { useState } from "react";
import { Link } from "react-scroll"; // Assuming you are using react-scroll
import "./Navbar.css"; // We will create this file next

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="/" onClick={closeMenu}>MyPortfolio</a>
        </div>

        {/* Hamburger Icon (Visible only on Mobile) */}
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? (
            // X Icon (Close)
            <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            </svg>
          ) : (
            // Hamburger Icon (Open)
            <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
            </svg>
          )}
        </div>

        {/* Nav Links */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="home" smooth={true} duration={500} onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500} onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="skills" smooth={true} duration={500} onClick={closeMenu}>Skills</Link>
          </li>
          <li className="nav-item">
            <Link to="projects" smooth={true} duration={500} onClick={closeMenu}>Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;