import React from "react";
import "./Hero.css";
import myheropic from "../../assets/myheropic.png";


const Hero = () => {
  return (
    
    <section className="hero">
      
      {/* Left Side Content */}
      <div className="hero-left">
        <h1>
          <span>I'm Aman Kumar</span>
        </h1>
        <p>MERN Stack Developer | Specializing in Scalable Web Applications</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn project-btn" aria-label="View Projects">
            View Projects
          </a>
          <a href="/resume.pdf" download className="btn resume-btn" aria-label="Download Resume">
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="hero-right">
        <img 
          src={myheropic} 
          alt="Aman Kumar" 
          loading="lazy"  // Improves performance
        />
      </div>
    </section>
  );
};

export default Hero;
