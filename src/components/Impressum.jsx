import React, { useState } from 'react';
import './Impressum.css';

function Impressum() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="impressum-toggle" onClick={() => setOpen(!open)}>
        {open ? 'Impressum schließen ✕' : 'Impressum'}
      </button>

      {open && (
        <div className="impressum-box" data-aos="fade-up">
          <h3>Impressum</h3>
          <p className="impressum-hint">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</p>

          <div className="impressum-section">
            <h4>Verantwortlich für den Inhalt</h4>
            <p>
              Michael Frank<br />
              Max-Eichholz-Ring 14<br />
              21031 Hamburg<br />
              Deutschland
            </p>
          </div>

          <div className="impressum-section">
            <h4>Kontakt</h4>
            <p>
              Telefon: +49 176 690 042 70<br />
              E-Mail: <a href="mailto:michael-frank88@gmx.de">michael-frank88@gmx.de</a>
            </p>
          </div>

          <div className="impressum-section">
            <h4>Hinweis</h4>
            <p>
              Diese Website dient ausschließlich der persönlichen Vorstellung
              im Rahmen einer Bewerbung um einen Praktikumsplatz und hat keinen
              kommerziellen Zweck.
            </p>
          </div>

          <div className="impressum-section">
            <h4>Haftungsausschluss</h4>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>

          <div className="impressum-section">
            <h4>Urheberrecht</h4>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              dieser Website unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Impressum;
