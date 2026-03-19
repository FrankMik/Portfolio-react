import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Impressum from './Impressum.jsx';
import Datenschutz from './Datenschutz.jsx';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-legal">
        <Impressum />
        <span className="footer-divider">·</span>
        <Datenschutz />
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          © 2025 Michael Frank
        </div>
        <div className="footer-right">
          <a
            href="https://github.com/FrankMik"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profil öffnen"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/michael-frank-977626372"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profil öffnen"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:michael-frank88@gmx.de"
            aria-label="E-Mail senden"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
