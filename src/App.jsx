import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Timeline from "./components/Timeline.jsx";
import Footer from "./components/Footer.jsx";
import fotoNav from './img/DSC_4972.jpg';
import fotoAbout from './img/DSC_4940.jpg';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">

      {/* ── Navbar ── */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={fotoNav} alt="Michael Frank" className="nav-profile-pic" />
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
          <li><a href="#about"    onClick={() => setMenuOpen(false)}>Über mich</a></li>
          <li><a href="#skills"   onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#timeline" onClick={() => setMenuOpen(false)}>Werdegang</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projekte</a></li>
          <li><a href="#contact"  onClick={() => setMenuOpen(false)}>Kontakt</a></li>
        </ul>
      </nav>

      <div className="navbar-spacer"></div>

      {/* ── Hero / About ── */}
      <section id="about" className="about-section">
        <div className="about-content">
          <img
            src={fotoAbout}
            alt="Michael Frank"
            className="about-photo"
            data-aos="zoom-in"
          />
          <div className="about-text">
            <p className="about-badge" data-aos="fade-up">
              🎓 Umschulung Anwendungsentwicklung · Auf Praktikumssuche
            </p>
            <h1 data-aos="fade-up" data-aos-delay="100">
              Hallo, ich bin<br /><span className="highlight">Michael Frank</span>
            </h1>
            <p data-aos="fade-right" data-aos-delay="200">
              Angehender Full-Stack-Entwickler in der Umschulung zum Fachinformatiker
              Anwendungsentwicklung (06/2025 – 06/2027). Ich bringe Teamgeist,
              Lernbereitschaft und echte Projekterfahrung mit — und suche aktuell
              einen <strong>Praktikumsplatz</strong>, um mein Wissen in der Praxis einzusetzen.
            </p>
            <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
              <a href="#contact" className="btn-primary">Praktikum anfragen</a>
              <a
                href="/Portfolio-react/michael-frank-cv.pdf"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                CV herunterladen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Skills ── */}
      <section id="skills">
        <Skills />
      </section>

      {/* ── Timeline / Werdegang ── */}
      <section id="timeline">
        <Timeline />
      </section>

      {/* ── Projekte ── */}
      <section id="projects">
        <Projects />
      </section>

      {/* ── Kontakt ── */}
      <section id="contact" className="contact-section">
        <h2 data-aos="fade-up">Kontakt</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          Du hast einen Praktikumsplatz oder möchtest mit mir in Kontakt treten?
          Schreib mir gerne — ich freue mich auf deine Nachricht!
        </p>
        <form
          className="contact-form"
          data-aos="fade-up"
          data-aos-delay="200"
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.target;
            window.location.href = `mailto:michael-frank88@gmx.de?subject=${encodeURIComponent(form.subject.value)}&body=${encodeURIComponent(form.message.value + '\n\nVon: ' + form.name.value)}`;
          }}
        >
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Dein Name"
              required
              className="form-input"
            />
            <input
              type="text"
              name="subject"
              placeholder="Betreff"
              required
              className="form-input"
            />
          </div>
          <textarea
            name="message"
            placeholder="Deine Nachricht…"
            required
            className="form-input form-textarea"
            rows={5}
          />
          <button type="submit" className="btn-primary">
            Nachricht senden
          </button>
        </form>

        <ul className="contact-links" data-aos="fade-up" data-aos-delay="300">
          <li>
            <strong>E-Mail:</strong>{' '}
            <a href="mailto:michael-frank88@gmx.de">michael-frank88@gmx.de</a>
          </li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a
              href="https://www.linkedin.com/in/michael-frank-977626372"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/michael-frank-977626372
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a
              href="https://github.com/FrankMik"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/FrankMik
            </a>
          </li>
        </ul>
      </section>

      <Footer />
    </div>
  );
}

export default App;
