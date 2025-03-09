import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio showcasing my work and skills.",
    image: "https://via.placeholder.com/300", // Replace with real image
    link: "#",
  },
  {
    title: "E-commerce Store",
    description: "A MERN stack e-commerce platform with authentication.",
    image: "https://via.placeholder.com/300", 
    link: "#",
  },
  {
    title: "Chat Application",
    description: "A real-time chat app using Socket.io and React.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    title: "Task Manager",
    description: "A to-do list app with drag-and-drop features.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    title: "Task Manager",
    description: "A to-do list app with drag-and-drop features.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
  {
    title: "Task Manager",
    description: "A to-do list app with drag-and-drop features.",
    image: "https://via.placeholder.com/300",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
