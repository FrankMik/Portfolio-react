import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import React from "react";
import Projects from "./Projects";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true, // Animation nur beim ersten Scroll
  });
}, []);
  return (
  <div className="App">
  <nav className="navbar">
    <div className="navbar-left">
      <img src="DSC_4972.jpg" alt="Michael Frank" className="nav-profile-pic" />
      <h2>Michael Frank</h2>
    </div>
    <ul>
      <li><a href="#about">Über mich</a></li>
      <li><a href="#projects">Projekte</a></li>
      <li><a href="#contact">Kontakt</a></li>
    </ul>
  </nav>
  <div className="navbar-spacer"></div>

    <section id="about" className="about-section">
  <div className="about-content">
    <img src="DSC_4940.jpg" alt="Michael Frank" className="about-photo" data-aos="zoom-in" />
    <div className="about-text">
      <h1 data-aos="fade-up">Willkommen in meinem Portfolio</h1>
      <p data-aos="fade-right">
        Mein Name ist Michael Frank. Ich bin angehender Anwendungsentwickler mit Fokus auf moderne Web-Technologien
        wie React, JavaScript und Datenbanken. Hier präsentiere ich meine Arbeiten und Fortschritte.
      </p>
    </div>
  </div>
</section>
 <Projects />
      <section id="projects">
        <h2>Projekte</h2>
        <p>Hier kommen bald meine spannenden Projekte rein.</p>
      </section>

      <section id="contact">
        <h2>Kontakt</h2>
        <p>Du kannst mich über LinkedIn, GitHub oder per E-Mail erreichen.</p>
      </section>
    </div>
  );
}

export default App;
