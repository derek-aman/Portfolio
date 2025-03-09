import React from "react";
import "./About.css"; // Import the CSS file
import profileImage from "../../assets/about_profile.jpg"; // Replace with your actual image path

const About = () => {
  return (
    <section className="about">
      {/* Left Side - Image */}
      <div className="about-left">
        <img src={profileImage} alt="Profile" />
      </div>

      {/* Right Side - Bio */}
      <div className="about-right">
        <h2><span>About Me</span></h2>
        <p>I'm a passionate web developer with a strong focus on creating intuitive and performant user experiences. With several years of experience in the field, I've worked on a variety of projects ranging from small business websites to complex web applications.</p>
        <p>When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying outdoor activities to maintain a healthy work-life balance.</p>

      </div>
    </section>
  );
};

export default About;
