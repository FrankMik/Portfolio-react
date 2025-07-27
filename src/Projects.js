import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Meine Projekte</h2>
      <div className="project-list">

        <div className="project-card">
          <h3>SQL Datenbank-Projekt</h3>
          <p>
            Beispielprojekt mit MariaDB und SQL – Tabellenstruktur, CRUD-Operationen und einfache Benutzeroberfläche.
          </p>
          <a href="https://github.com/deinGitHubAccount/sql-projekt" target="_blank" rel="noopener noreferrer">
            Auf GitHub ansehen
          </a>
        </div>

        <div className="project-card">
          <h3>Portfolio-Website</h3>
          <p>
            Dieses Portfolio wurde mit React erstellt. Es zeigt meine Lernfortschritte als Anwendungsentwickler.
          </p>
          <a href="https://github.com/FrankMik/Portfolio" target="_blank" rel="noopener noreferrer">
            Auf GitHub ansehen
          </a>
        </div>

        {/* Du kannst weitere Projekte hier hinzufügen */}

      </div>
    </section>
  );
};

export default Projects;