import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectList = [
  {
    title: 'Schere-Stein-Papier',
    description: 'Klassisches Mini-Spiel gebaut mit HTML, CSS, JavaScript und Bootstrap. Enthält Spiellogik, Ergebnisanzeige und responsives Design.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    live: 'https://frankmik.github.io/schere-stein-papier/',
    github: 'https://github.com/FrankMik/schere-stein-papier',
    emoji: '✂️',
  },
  {
    title: 'Clicker-Spiel',
    description: 'Ein einfaches, reaktionsschnelles Mini-Spiel mit React. Klick-Counter, Animationen und eine Highscore-Anzeige.',
    tech: ['React', 'HTML', 'CSS'],
    live: 'https://frankmik.github.io/clicker-race/',
    github: 'https://github.com/FrankMik/clicker-race',
    emoji: '🖱️',
  },
  {
    title: 'Scrum-Quiz',
    description: 'Eine interaktive Quiz-Webseite zum Thema Scrum und agile Methodik — erstellt mit reinem HTML und CSS.',
    tech: ['HTML', 'CSS'],
    live: 'https://frankmik.github.io/Scrum-Master/',
    github: 'https://github.com/FrankMik/Scrum-Master',
    emoji: '📋',
  },
  {
    title: 'Portfolio Website',
    description: 'Dieses Portfolio selbst — gebaut mit React, Vite und AOS-Animationen. Responsiv, Single-Page, auf GitHub Pages gehostet.',
    tech: ['React', 'Vite', 'CSS', 'AOS'],
    live: 'https://frankmik.github.io/Portfolio-react/',
    github: 'https://github.com/FrankMik/Portfolio-react',
    emoji: '🌐',
  },
];

const Projects = () => {
  return (
    <>
      <h2 data-aos="fade-up">Projekte</h2>
      <p className="section-sub" data-aos="fade-up" data-aos-delay="100">
        Projekte, die ich im Rahmen meiner Ausbildung und in der Freizeit realisiert habe.
      </p>
      <div className="project-cards">
        {projectList.map((project, index) => (
          <div
            className="card"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="card-emoji">{project.emoji}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="card-tech">
              {project.tech.map((t, i) => (
                <span className="tech-tag" key={i}>{t}</span>
              ))}
            </div>
            <div className="card-links">
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="card-link primary">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link secondary">
                  <FaGithub /> Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      <p className="more-projects" data-aos="fade-up">
        Weitere Projekte findest du auf meinem{' '}
        <a href="https://github.com/FrankMik" target="_blank" rel="noopener noreferrer">
          GitHub-Profil
        </a>.
      </p>
    </>
  );
};

export default Projects;
