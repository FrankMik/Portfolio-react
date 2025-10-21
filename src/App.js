import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Projects from "./Projects";
import Footer from './Footer';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-left">
          <img src="DSC_4972.jpg" alt="Michael Frank" className="nav-profile-pic" />
          <h2>Michael Frank</h2>
        </div>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Menü umschalten"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Über mich</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projekte</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Kontakt</a></li>
        </ul>
      </nav>

      <div className="navbar-spacer"></div>

      <section id="about" className="about-section">
        <div className="about-content">
          <img src="DSC_4940.jpg" alt="Michael Frank" className="about-photo" data-aos="zoom-in" />
          <div className="about-text">
            <h1 data-aos="fade-up">Willkommen in meinem Portfolio</h1>
            <p data-aos="fade-right">
              Ich bin Michael Frank, angehender Anwendungsentwickler mit Fokus auf Full-Stack-Entwicklung und SCRUM-Zertifikat. Bis Oktober 2026 werde ich zusätzlich Zertifikate in Java, Python und AWS erworben und meine Kenntnisse in OOP, PHP, Cloud-Technologien und Künstlicher Intelligenz vertieft haben. Mit technischem Know-how, Teamgeist und schneller Umsetzungsstärke bin ich bereit, von Tag eins an echten Mehrwert ins Team zu bringen.
            </p>
          </div>
        </div>
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <h2>Kontakt</h2>
        <p> Du möchtest mit mir in Kontakt treten? Schreib mir gerne eine E-Mail oder besuche meine Profile:</p>
        <ul className="contact-links">
          <li><strong>E-Mail:</strong> <a href="mailto:michael-frank88@gmx.de" rel="noopener noreferrer">michael-frank88@gmx.de</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/michael-frank-977626372" rel="noopener noreferrer">LinkedIn.com/in/michael-frank-977626372</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/FrankMik" target="_blank" rel="noopener noreferrer">github.com/FrankMik</a></li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default App;
