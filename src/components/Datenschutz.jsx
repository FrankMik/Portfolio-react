import React, { useState } from 'react';
import './Impressum.css';

function Datenschutz() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="impressum-toggle" onClick={() => setOpen(!open)}>
        {open ? 'Datenschutz schließen ✕' : 'Datenschutzerklärung'}
      </button>

      {open && (
        <div className="impressum-box">
          <h3>Datenschutzerklärung</h3>
          <p className="impressum-hint">Gemäß Art. 13 DSGVO</p>

          <div className="impressum-section">
            <h4>1. Verantwortlicher</h4>
            <p>
              Michael Frank<br />
              Max-Eichholz-Ring 14, 21031 Hamburg<br />
              E-Mail: michael-frank88@gmx.de<br />
              Telefon: +49 176 690 042 70
            </p>
          </div>

          <div className="impressum-section">
            <h4>2. Hosting</h4>
            <p>
              Diese Website wird über GitHub Pages (GitHub Inc., 88 Colin P Kelly Jr St,
              San Francisco, CA 94107, USA) gehostet. Beim Aufruf der Seite kann GitHub
              technische Zugriffsdaten (z. B. IP-Adresse, Browser, Zeitpunkt) in Server-Logs
              speichern. Weitere Informationen finden Sie in der{' '}
              <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer">
                Datenschutzerklärung von GitHub
              </a>.
            </p>
          </div>

          <div className="impressum-section">
            <h4>3. Kontaktformular</h4>
            <p>
              Das Kontaktformular auf dieser Seite öffnet Ihr lokales E-Mail-Programm
              (mailto-Link). Es werden keine Daten auf einem Server gespeichert oder
              verarbeitet. Die Datenübertragung erfolgt direkt über Ihren E-Mail-Client.
            </p>
          </div>

          <div className="impressum-section">
            <h4>4. Externe Links</h4>
            <p>
              Diese Website enthält Links zu externen Diensten (GitHub, LinkedIn). Beim
              Aufruf dieser Links gelten die jeweiligen Datenschutzbestimmungen der
              Anbieter. Es werden beim Klick keine personenbezogenen Daten von dieser
              Website an Dritte übermittelt.
            </p>
          </div>

          <div className="impressum-section">
            <h4>5. Cookies & Tracking</h4>
            <p>
              Diese Website verwendet keine Cookies, kein Tracking und keine
              Analyse-Tools (z. B. Google Analytics). Es werden keine personenbezogenen
              Daten gespeichert oder ausgewertet.
            </p>
          </div>

          <div className="impressum-section">
            <h4>6. Ihre Rechte</h4>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf
              Datenübertragbarkeit. Zur Ausübung Ihrer Rechte wenden Sie sich bitte an
              die oben genannte E-Mail-Adresse. Sie haben außerdem das Recht, sich bei
              der zuständigen Aufsichtsbehörde zu beschweren (Hamburgischer Beauftragter
              für Datenschutz und Informationsfreiheit).
            </p>
          </div>

          <div className="impressum-section">
            <h4>7. Aktualität</h4>
            <p>
              Stand: Januar 2026. Diese Datenschutzerklärung wird bei Bedarf aktualisiert.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Datenschutz;
