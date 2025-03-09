import React from "react";
import "./SkillsScroll.css";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Node.js",
  "MongoDB", "Express.js", "Tailwind CSS", "Git", "Redux",
  "TypeScript", "Next.js", "Firebase", "GraphQL", "Docker"
];

const SkillsScroll = () => {
  return (
    <div className="skills-container">
      <div className="skills-wrapper">
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>{skill}</div>
          ))}
          {/* Duplicate skills for seamless infinite scrolling */}
          {skills.map((skill, index) => (
            <div className="skill-item" key={`duplicate-${index}`}>{skill}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsScroll;
