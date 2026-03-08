import React from 'react';
import './Projects.css';

const projectList = [
  {
    title: 'Mini Spiel',
    description: 'Diese Spiel habe ich mit HTML, CSS, JS und Bootstrap gemacht.',
    link: 'https://frankmik.github.io/schere-stein-papier/'
     },
  {
    title: 'Clicker-Spiel',
    description: 'Ein einfaches kleines Minispiel mit React, HTML und CSS',
    link: 'https://frankmik.github.io/clicker-race/'
  },
  {
    title: 'Scrum Quitz',
    description: 'Kleine Scrum Qiutz-Webseite. Gemacht nur mit HTML und CSS',
    link: 'https://frankmik.github.io/Scrum-Master/'
  },
  {
    title: 'Andere Projekte',
    description: 'die andere Projekte können Sie auf meinem GitHub anschauen',
    link: 'https://github.com/FrankMik'
  }

];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projekte</h2>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            ) : (
              <span style={{ color: '#888' }}>Noch kein Link</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;