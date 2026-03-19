import React from 'react';
import './Timeline.css';

const events = [
  {
    date: '06/2025 – 06/2027',
    title: 'Umschulung: Fachinformatiker Anwendungsentwicklung',
    place: 'Bildungsträger · Deutschland',
    desc: 'Vollzeit-Umschulung mit Fokus auf Full-Stack-Entwicklung. Inhalte: Java, Python, PHP, SQL, HTML/CSS, JavaScript, React, OOP, Cloud & AWS, Künstliche Intelligenz.',
    current: true,
  },
  {
    date: '2025',
    title: 'Scrum Master Zertifikat',
    place: 'Zertifizierung',
    desc: 'Erfolgreich zertifiziert in agiler Projektmethodik mit Scrum.',
    current: false,
  },
  {
    date: 'Bis 2025',
    title: 'Berufliche Tätigkeit vor der Umschulung',
    place: 'Deutschland',
    desc: 'Praktische Berufserfahrung in verschiedenen Bereichen — entschied mich für den Wechsel in die IT-Entwicklung.',
    current: false,
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
