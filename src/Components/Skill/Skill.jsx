import React from "react";
import "./Skill.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="icon html" /> },
  { name: "CSS", icon: <FaCss3Alt className="icon css" /> },
  { name: "JavaScript", icon: <FaJs className="icon js" /> },
  { name: "React", icon: <FaReact className="icon react" /> },
  { name: "Node.js", icon: <FaNodeJs className="icon node" /> },
  { name: "Express.js", icon: <SiExpress className="icon express" /> },
  { name: "MongoDB", icon: <SiMongodb className="icon mongo" /> },
  { name: "SQL", icon: <FaDatabase className="icon sql" /> },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="title"><span>My Skills</span></h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill.icon}
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
