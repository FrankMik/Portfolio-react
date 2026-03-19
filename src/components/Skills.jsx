import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub,
  FaPython, FaJava, FaBootstrap,
} from 'react-icons/fa';
import { SiVite, SiMysql, SiPhp } from 'react-icons/si';
import './Skills.css';

const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5',      icon: <FaHtml5 />,      level: 80 },
      { name: 'CSS3',       icon: <FaCss3Alt />,     level: 75 },
      { name: 'JavaScript', icon: <FaJs />,          level: 65 },
      { name: 'React',      icon: <FaReact />,       level: 60 },
      { name: 'Bootstrap',  icon: <FaBootstrap />,   level: 65 },
    ],
  },
  {
    category: 'Backend & Datenbank',
    skills: [
      { name: 'Java',    icon: <FaJava />,   level: 70, badge: '✓ Zertifiziert' },
      { name: 'Python',  icon: <FaPython />, level: 65, badge: '⏳ Zertifizierung nächste Woche' },
      { name: 'PHP',     icon: <SiPhp />,    level: 40 },
      { name: 'MySQL',   icon: <SiMysql />,  level: 50 },
    ],
  },
  {
    category: 'Tools & Methoden',
    skills: [
      { name: 'Git',    icon: <FaGitAlt />,  level: 70 },
      { name: 'GitHub', icon: <FaGithub />,  level: 70 },
      { name: 'Vite',   icon: <SiVite />,    level: 60 },
      { name: 'Scrum',  icon: null,          level: 75, badge: '✓ Zertifiziert' },
      { name: 'AWS',    icon: null,          level: 50, badge: '⏳ Zertifizierung in 3 Wochen' },
    ],
  },
];

const Skills = () => {
  return (
    <>
      <h2 data-aos="fade-up">Skills</h2>
      <p className="section-sub" data-aos="fade-up" data-aos-delay="100">
        Technologien, die ich im Rahmen meiner Umschulung und eigener Projekte erlernt habe.
      </p>
      <div className="skills-groups">
        {skillGroups.map((group, gi) => (
          <div key={gi} className="skill-group" data-aos="fade-up" data-aos-delay={gi * 100}>
            <h3 className="skill-group-title">{group.category}</h3>
            <div className="skill-list">
              {group.skills.map((skill, si) => (
                <div className="skill-item" key={si}>
                  <div className="skill-header">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                    {skill.badge && <span className="skill-badge">{skill.badge}</span>}
                    <span className="skill-percent">{skill.level}%</span>
                  </div>
                  <div className="skill-bar-bg">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
