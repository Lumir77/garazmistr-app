"use client";

import { useState } from "react";

export default function AddVehiclePage() {
  const [vehicleType, setVehicleType] = useState("osobni");
  const [showAdvanced, setShowAdvanced] = useState(false);

  const isCar =
    vehicleType === "osobni" ||
    vehicleType === "suv" ||
    vehicleType === "kombi" ||
    vehicleType === "pickup";

  const isCamper = vehicleType === "obytne-auto";
  const isTrailer = vehicleType === "prives";
  const isLongTrailer = vehicleType === "dlouhy-prives";
  const isCaravan = vehicleType === "obytny-prives";
  const isForklift = vehicleType === "vzv";

  return (
    <main className="page">
      <div className="shell">
        <div className="topbar">
          <a href="/" className="back">← Zpět</a>
          <h1>Nové vozidlo</h1>
        </div>

        <section className="panel highlight">
          <div>
            <h2>Rychlé založení vozidla</h2>
            <p>
              Vyber typ vozidla. Formulář se automaticky přizpůsobí tomu,
              co má pro dané vozidlo smysl.
            </p>
          </div>

          <button className="secondary" type="button">
            📄 Načíst z eTechničáku / QR
          </button>
        </section>

        <section className="panel">
          <h2>Základní údaje</h2>

          <div className="grid">
            <label>
              Typ vozidla
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
              >
                <option value="osobni">Osobní auto</option>
                <option value="suv">SUV</option>
                <option value="kombi">Kombi</option>
                <option value="pickup">Pick-up</option>
                <option value="prives">Přívěsný vozík</option>
                <option value="dlouhy-prives">Dlouhý přívěsný vozík</option>
                <option value="vzv">Vysokozdvižný vozík</option>
                <option value="obytny-prives">Obytný přívěs</option>
                <option value="obytne-auto">Obytné auto</option>
              </select>
            </label>

            <label>
              Značka
              <input placeholder="např. Škoda" />
            </label>

            <label>
              Model
              <input placeholder="např. Octavia" />
            </label>

            <label>
              Rok výroby
              <input placeholder="např. 2020" />
            </label>

            <label>
              SPZ / evidence
              <input placeholder="např. 1TA234" />
            </label>

            <label>
              Obrázek / typ ikony
              <select>
                <option>Automaticky podle typu</option>
                <option>Vybrat ručně</option>
              </select>
            </label>
          </div>
        </section>

        <section className="panel">
          <h2>Provozní údaje</h2>

          <div className="grid">
            {(isCar || isCamper) && (
              <>
                <label>
                  Aktuální kilometry
                  <input placeholder="např. 128450" />
                </label>

                <label>
                  Palivo
                  <select>
                    <option>Benzín</option>
                    <option>Nafta</option>
                    <option>Elektro</option>
                    <option>Hybrid</option>
                    <option>LPG / CNG</option>
                  </select>
                </label>

                <label>
                  Interval výměny oleje
                  <input placeholder="např. 15000 km" />
                </label>
              </>
            )}

            {isForklift && (
              <>
                <label>
                  Aktuální motohodiny
                  <input placeholder="např. 2450 mth" />
                </label>

                <label>
                  Pohon
                  <select>
                    <option>Elektro</option>
                    <option>Diesel</option>
                    <option>LPG</option>
                  </select>
                </label>

                <label>
                  Interval servisní kontroly
                  <input placeholder="např. 250 mth" />
                </label>
              </>
            )}

            {(isTrailer || isLongTrailer || isCaravan) && (
              <>
                <label>
                  Nosnost
                  <input placeholder="např. 750 kg" />
                </label>

                <label>
                  Počet náprav
                  <select>
                    <option>1 náprava</option>
                    <option>2 nápravy</option>
                    <option>3 nápravy</option>
                  </select>
                </label>
              </>
            )}

            {isCamper && (
              <>
                <label>
                  Revize nástavby
                  <input placeholder="např. 01.06.2026" />
                </label>

                <label>
                  Revize plynu
                  <input placeholder="např. 01.06.2026" />
                </label>
              </>
            )}

            {isCaravan && (
              <>
                <label>
                  Revize plynu
                  <input placeholder="např. 01.06.2026" />
                </label>

                <label>
                  Kontrola obytné části
                  <input placeholder="např. 01.06.2026" />
                </label>
              </>
            )}
          </div>
        </section>

        <section className="panel">
          <h2>Důležité termíny</h2>

          <div className="grid">
            <label>
              STK
              <input placeholder="např. 04.05.2026" />
            </label>

            <label>
              Pojištění
              <input placeholder="např. 10.06.2026" />
            </label>

            {(isCar || isCamper) && (
              <label>
                Dálniční známka
                <input placeholder="např. 15.06.2026" />
              </label>
            )}

            {isForklift && (
              <label>
                Revize VZV
                <input placeholder="např. 30.04.2026" />
              </label>
            )}

            {(isTrailer || isLongTrailer || isCaravan) && (
              <label>
                Kontrola / servis přívěsu
                <input placeholder="např. 18.08.2026" />
              </label>
            )}
          </div>
        </section>

        <section className="panel">
          <button
            className="advanced-toggle"
            type="button"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            {showAdvanced ? "Skrýt další možnosti" : "Zobrazit další možnosti"}
          </button>

          {showAdvanced && (
            <div className="advanced">
              <h2>Další možnosti</h2>

              <div className="grid">
                <label>
                  Periodicita pojištění
                  <select>
                    <option>Ročně</option>
                    <option>Pololetně</option>
                    <option>Čtvrtletně</option>
                    <option>Měsíčně</option>
                    <option>Vlastní</option>
                  </select>
                </label>

                <label>
                  Značky v depozitu
                  <select>
                    <option>Ne</option>
                    <option>Ano</option>
                  </select>
                </label>

                <label>
                  Datum odevzdání značek
                  <input placeholder="např. 01.01.2026" />
                </label>

                <label>
                  Zahraniční dálniční známka
                  <input placeholder="např. Rakousko, Slovensko..." />
                </label>

                <label>
                  Platnost zahraniční známky
                  <select>
                    <option>1 den</option>
                    <option>10 dní</option>
                    <option>30 dní</option>
                    <option>2 měsíce</option>
                    <option>1 rok</option>
                    <option>Vlastní</option>
                  </select>
                </label>

                <label>
                  Platí do
                  <input placeholder="např. 20.07.2026" />
                </label>

                {(isCamper || isCaravan) && (
                  <>
                    <label>
                      Revize elektroinstalace
                      <input placeholder="např. 01.06.2026" />
                    </label>

                    <label>
                      Kontrola těsnosti
                      <input placeholder="např. 01.06.2026" />
                    </label>
                  </>
                )}

                <label className="wide">
                  Poznámka
                  <textarea placeholder="Doplňující informace k vozidlu..." />
                </label>
              </div>
            </div>
          )}
        </section>

        <section className="panel">
          <h2>Odpovědná osoba</h2>

          <div className="grid">
            <label>
              Jméno
              <input placeholder="Jan Novák" />
            </label>

            <label>
              Telefon
              <input placeholder="+420..." />
            </label>

            <label>
              E-mail
              <input placeholder="email@firma.cz" />
            </label>
          </div>
        </section>

        <div className="actions">
          <button className="primary" type="button">Uložit vozidlo</button>
          <a href="/" className="cancel">Zrušit</a>
        </div>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f4f6fb;
          padding: 24px;
          color: #111827;
          font-family: Arial, sans-serif;
        }

        .shell {
          max-width: 980px;
          margin: 0 auto;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 20px;
        }

        .back {
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }

        h1 {
          margin: 0;
          font-size: 32px;
        }

        h2 {
          margin: 0 0 16px;
          font-size: 22px;
        }

        p {
          margin: 0;
          color: #6b7280;
          line-height: 1.5;
        }

        .panel {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 22px;
          padding: 20px;
          margin-bottom: 16px;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.04);
        }

        .panel.highlight {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 18px;
          background: #fbfcfe;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        label {
          display: grid;
          gap: 7px;
          color: #374151;
          font-size: 14px;
          font-weight: 700;
        }

        input,
        select,
        textarea {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #d1d5db;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 15px;
          background: #fff;
          color: #111827;
          font-family: Arial, sans-serif;
        }

        textarea {
          min-height: 90px;
          resize: vertical;
        }

        .wide {
          grid-column: 1 / -1;
        }

        .advanced-toggle {
          width: 100%;
          border: 1px solid #dbe3f0;
          background: #f8fbff;
          color: #2563eb;
          border-radius: 14px;
          padding: 14px;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
        }

        .advanced {
          margin-top: 18px;
          padding-top: 18px;
          border-top: 1px solid #e5e7eb;
        }

        .actions {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .primary,
        .secondary {
          border-radius: 14px;
          padding: 12px 18px;
          font-weight: 800;
          cursor: pointer;
        }

        .primary {
          border: 0;
          background: #2563eb;
          color: #fff;
        }

        .secondary {
          border: 1px solid #d1d5db;
          background: #fff;
          color: #111827;
        }

        .cancel {
          display: inline-flex;
          align-items: center;
          padding: 12px 14px;
          color: #6b7280;
          text-decoration: none;
          font-weight: 700;
        }

        @media (max-width: 760px) {
          .page {
            padding: 14px;
          }

          .topbar {
            align-items: flex-start;
            flex-direction: column;
          }

          .panel.highlight {
            align-items: stretch;
            flex-direction: column;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .wide {
            grid-column: auto;
          }

          .actions {
            flex-direction: column;
          }

          .primary,
          .secondary,
          .cancel {
            width: 100%;
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </main>
  );
}
