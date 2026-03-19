import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState, useRef } from 'react';
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Timeline from "./components/Timeline.jsx";
import Footer from "./components/Footer.jsx";
import fotoNav from './img/DSC_4972.jpg';
import fotoAbout from './img/DSC_4940.jpg';
import './App.css';

const TYPING_PHRASES = [
  'const rolle = "Full-Stack Dev";',
  'import React from "react";',
  'git commit -m "Hire me!";',
  'SELECT * FROM jobs WHERE praktikum = true;',
  'System.out.println("Bereit für Praktikum!");',
  'npm run start-career;',
];

function useTypingEffect(phrases) {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const idx = useRef(0);
  const charIdx = useRef(0);
  const deleting = useRef(false);

  useEffect(() => {
    const cursorInterval = setInterval(() => setShowCursor(c => !c), 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    let timeout;
    function tick() {
      const phrase = phrases[idx.current];
      if (!deleting.current) {
        charIdx.current++;
        setText(phrase.slice(0, charIdx.current));
        if (charIdx.current === phrase.length) {
          timeout = setTimeout(() => { deleting.current = true; tick(); }, 1800);
          return;
        }
        timeout = setTimeout(tick, 60);
      } else {
        charIdx.current--;
        setText(phrase.slice(0, charIdx.current));
        if (charIdx.current === 0) {
          deleting.current = false;
          idx.current = (idx.current + 1) % phrases.length;
          timeout = setTimeout(tick, 300);
          return;
        }
        timeout = setTimeout(tick, 30);
      }
    }
    timeout = setTimeout(tick, 800);
    return () => clearTimeout(timeout);
  }, []);

  return { text, showCursor };
}

function MatrixCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const codeChars = '{}[]()<>/=;:.#!?@&|+-*/\\%$_01';
    let drops = [];
    let animId;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const cols = Math.floor(canvas.width / 16);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
    }

    function draw() {
      ctx.fillStyle = 'rgba(18,18,18,0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '13px monospace';
      drops.forEach((y, i) => {
        const ch = codeChars[Math.floor(Math.random() * codeChars.length)];
        const alpha = Math.random() * 0.5 + 0.1;
        ctx.fillStyle = `rgba(0,188,212,${alpha})`;
        ctx.fillText(ch, i * 16, y * 16);
        if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i] += 0.4;
      });
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix-canvas" />;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { text, showCursor } = useTypingEffect(TYPING_PHRASES);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">

      <nav className="navbar">
        <div className="navbar-left">
          <img src={fotoNav} alt="Michael Frank" className="nav-profile-pic" />
          <h2>Michael Frank</h2>
        </div>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
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

      <section id="about" className="about-section">
        <MatrixCanvas />
        <div className="about-content">
          <img src={fotoAbout} alt="Michael Frank" className="about-photo" data-aos="zoom-in" />
          <div className="about-text">
            <p className="about-badge" data-aos="fade-up">
              🎓 Umschulung Anwendungsentwicklung · Auf Praktikumssuche
            </p>
            <h1 data-aos="fade-up" data-aos-delay="100">
              Hallo, ich bin<br /><span className="highlight">Michael Frank</span>
            </h1>
            <div className="typing-line" data-aos="fade-up" data-aos-delay="150">
              <span className="typing-text">{text}</span>
              <span className={`typing-cursor ${showCursor ? 'visible' : ''}`}>|</span>
            </div>
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

      <section id="skills"><Skills /></section>
      <section id="timeline"><Timeline /></section>
      <section id="projects"><Projects /></section>

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
            <input type="text" name="name" placeholder="Dein Name" required className="form-input" />
            <input type="text" name="subject" placeholder="Betreff" required className="form-input" />
          </div>
          <textarea name="message" placeholder="Deine Nachricht…" required className="form-input form-textarea" rows={5} />
          <button type="submit" className="btn-primary">Nachricht senden</button>
        </form>
        <ul className="contact-links" data-aos="fade-up" data-aos-delay="300">
          <li><strong>E-Mail:</strong> <a href="mailto:michael-frank88@gmx.de">michael-frank88@gmx.de</a></li>
          <li>
            <strong>LinkedIn:</strong>{' '}
            <a href="https://www.linkedin.com/in/michael-frank-977626372" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/michael-frank-977626372
            </a>
          </li>
          <li>
            <strong>GitHub:</strong>{' '}
            <a href="https://github.com/FrankMik" target="_blank" rel="noopener noreferrer">
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
