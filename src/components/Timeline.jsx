import React from 'react';
import './Timeline.css';

const events = [
  {
    date: '06/2025 – 06/2027',
    title: 'Umschulung: Fachinformatiker Anwendungsentwicklung',
    place: 'Bildungsträger · Deutschland',
    desc: 'Vollzeit-Umschulung mit Fokus auf Full-Stack-Entwicklung. Inhalte: Java, Python, PHP, SQL, HTML/CSS, JavaScript, React, OOP, Cloud & AWS, Künstliche Intelligenz.',
    current: true,
    badge: null,
  },
  {
    date: '04/2026',
    title: 'AWS Zertifizierung',
    place: 'Zertifizierung · Cloud Practitioner',
    desc: 'Zertifizierung in Amazon Web Services — Cloud-Infrastruktur, Dienste und Architektur.',
    current: false,
    badge: '✓ Erhalten',
  },
  {
    date: '03/2026',
    title: 'Python Zertifizierung',
    place: 'Zertifizierung · Programmierung',
    desc: 'Zertifizierungsprüfung in Python — Grundlagen, OOP und Scripting.',
    current: false,
    badge: '✓ Erhalten',
  },
  {
    date: '02/2026',
    title: 'Java Zertifikat',
    place: 'Zertifizierung · Programmierung',
    desc: 'Erfolgreich zertifiziert in Java-Programmierung mit Fokus auf objektorientierte Entwicklung.',
    current: false,
    badge: '✓ Erhalten',
  },
  {
    date: '10/2025',
    title: 'Scrum Master Zertifikat',
    place: 'Zertifizierung · Agile Methodik',
    desc: 'Erfolgreich zertifiziert in agiler Projektmethodik mit Scrum.',
    current: false,
    badge: '✓ Erhalten',
  },
  {
    date: 'Bis 2025',
    title: 'Berufliche Tätigkeit vor der Umschulung',
    place: 'Deutschland',
    desc: 'Praktische Berufserfahrung in verschiedenen Bereichen — entschied mich für den Wechsel in die IT-Entwicklung.',
    current: false,
    badge: null,
  },
];

const Timeline = () => {
  return (
    <>
      <h2 data-aos="fade-up">Werdegang</h2>
      <p className="section-sub" data-aos="fade-up" data-aos-delay="100">
        Mein Weg in die Softwareentwicklung — aktuell auf der Suche nach einem Praktikumsplatz.
      </p>
      <div className="timeline">
        {events.map((ev, i) => (
          <div
            className={`timeline-item ${ev.current ? 'current' : ''}`}
            key={i}
            data-aos="fade-left"
            data-aos-delay={i * 120}
          >
            <div className="timeline-dot" />
            <div className="timeline-card">
              <span className="timeline-date">{ev.date}</span>
              {ev.current && <span className="timeline-now">Aktuell</span>}
              {ev.badge && !ev.current && <span className={`timeline-now ${ev.badge.startsWith('✓') ? 'certified' : 'soon'}`}>{ev.badge}</span>}
              <h3 className="timeline-title">{ev.title}</h3>
              <span className="timeline-place">{ev.place}</span>
              <p className="timeline-desc">{ev.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
