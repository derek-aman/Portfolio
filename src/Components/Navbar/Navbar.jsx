import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg.png";
import { Menu, X } from "lucide-react"; // Icons for mobile menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e, target) => {
    e.preventDefault();
    const section = document.getElementById(target);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <nav className="navbar">
      {/* Left - Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Right - Navigation Menu */}
      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={(e) => handleScroll(e, "home")}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleScroll(e, "about")}>About</a></li>
        <li><a href="#skills" onClick={(e) => handleScroll(e, "skills")}>Skills</a></li>
        <li><a href="#projects" onClick={(e) => handleScroll(e, "projects")}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")}>Contact</a></li>
      </ul>

      {/* Mobile Menu Toggle Button */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
    </nav>
  );
};

export default Navbar;
