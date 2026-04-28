"use client";

import { useState } from "react";

export default function AddVehiclePage() {
  const [vehicleType, setVehicleType] = useState("osobni");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showStkHelper, setShowStkHelper] = useState(false);
  const [foreignVignettes, setForeignVignettes] = useState([1]);

  const [stkValidUntil, setStkValidUntil] = useState("");
  const [firstRegistrationDate, setFirstRegistrationDate] = useState("");
  const [stkMode, setStkMode] = useState("first_4_years");

  const [insuranceFrom, setInsuranceFrom] = useState("");
  const [insurancePeriod, setInsurancePeriod] = useState("Ročně");
  const [insuranceTo, setInsuranceTo] = useState("");

  const [vignetteFrom, setVignetteFrom] = useState("");
  const [vignettePeriod, setVignettePeriod] = useState("1 rok");
  const [vignetteTo, setVignetteTo] = useState("");

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

  const hasStk = isCar || isCamper || isTrailer || isLongTrailer || isCaravan;

  const calculateEndDate = (startDate, period) => {
    if (!startDate) return "";

    const date = new Date(startDate);

    switch (period) {
      case "1 den":
        date.setDate(date.getDate() + 1);
        break;
      case "10 dní":
        date.setDate(date.getDate() + 10);
        break;
      case "30 dní":
        date.setDate(date.getDate() + 30);
        break;
      case "2 měsíce":
        date.setMonth(date.getMonth() + 2);
        break;
      case "1 rok":
      case "Ročně":
        date.setFullYear(date.getFullYear() + 1);
        break;
      case "Pololetně":
        date.setMonth(date.getMonth() + 6);
        break;
      case "Čtvrtletně":
        date.setMonth(date.getMonth() + 3);
        break;
      case "Měsíčně":
        date.setMonth(date.getMonth() + 1);
        break;
      default:
        return "";
    }

    return date.toISOString().split("T")[0];
  };

  const calculateStkDate = () => {
    if (!firstRegistrationDate) return;

    const date = new Date(firstRegistrationDate);

    if (stkMode === "first_4_years") {
      date.setFullYear(date.getFullYear() + 4);
    }

    if (stkMode === "regular_2_years") {
      date.setFullYear(date.getFullYear() + 2);
    }

    setStkValidUntil(date.toISOString().split("T")[0]);
  };

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
              <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)}>
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

            <label>Značka<input placeholder="např. Škoda" /></label>
            <label>Model<input placeholder="např. Octavia" /></label>
            <label>Rok výroby<input placeholder="např. 2020" /></label>
            <label>SPZ / evidence<input placeholder="např. 1TA234" /></label>

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
                <label>Aktuální kilometry<input placeholder="např. 128450" /></label>

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

                <label>Interval výměny oleje<input placeholder="např. 15000 km" /></label>
              </>
            )}

            {isForklift && (
              <>
                <label>Aktuální motohodiny<input placeholder="např. 2450 mth" /></label>

                <label>
                  Pohon
                  <select>
                    <option>Elektro</option>
                    <option>Diesel</option>
                    <option>LPG</option>
                  </select>
                </label>

                <label>Interval servisní kontroly<input placeholder="např. 250 mth" /></label>
              </>
            )}

            {(isTrailer || isLongTrailer || isCaravan) && (
              <>
                <label>Nosnost<input placeholder="např. 750 kg" /></label>

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
                <label>Revize nástavby<input type="date" /></label>
                <label>Revize plynu<input type="date" /></label>
              </>
            )}

            {isCaravan && (
              <>
                <label>Revize plynu<input type="date" /></label>
                <label>Kontrola obytné části<input type="date" /></label>
              </>
            )}
          </div>
        </section>

        <section className="panel">
          <h2>Důležité termíny</h2>

          <div className="grid">
            {hasStk && (
              <div className="wide stk-box">
                <label>
                  STK platí do
                  <input
                    type="date"
                    value={stkValidUntil}
                    onChange={(e) => setStkValidUntil(e.target.value)}
                  />
                </label>

                <button
                  type="button"
                  className="helper-toggle"
                  onClick={() => setShowStkHelper(!showStkHelper)}
                >
                  {showStkHelper
                    ? "Skrýt výpočet STK"
                    : "Nevím datum – dopočítat podle první registrace"}
                </button>

                {showStkHelper && (
                  <div className="stk-helper">
                    <p>
                      Pokud znáš přesné datum platnosti STK, stačí vyplnit pole výše.
                      Výpočet je jen pomocník.
                    </p>

                    <div className="grid">
                      <label>
                        Datum první registrace
                        <input
                          type="date"
                          value={firstRegistrationDate}
                          onChange={(e) => setFirstRegistrationDate(e.target.value)}
                        />
                      </label>

                      <label>
                        Režim výpočtu STK
                        <select
                          value={stkMode}
                          onChange={(e) => setStkMode(e.target.value)}
                        >
                          <option value="first_4_years">
                            První STK – nové vozidlo (+4 roky)
                          </option>
                          <option value="regular_2_years">
                            Další STK – běžný interval (+2 roky)
                          </option>
                        </select>
                      </label>
                    </div>

                    <button
                      type="button"
                      className="calculate"
                      onClick={calculateStkDate}
                    >
                      Dopočítat STK
                    </button>
                  </div>
                )}
              </div>
            )}

            <label>
              Pojištění platí od
              <input
                type="date"
                value={insuranceFrom}
                onChange={(e) => {
                  const value = e.target.value;
                  setInsuranceFrom(value);
                  setInsuranceTo(calculateEndDate(value, insurancePeriod));
                }}
              />
            </label>

            <label>
              Periodicita pojištění
              <select
                value={insurancePeriod}
                onChange={(e) => {
                  const value = e.target.value;
                  setInsurancePeriod(value);
                  setInsuranceTo(calculateEndDate(insuranceFrom, value));
                }}
              >
                <option>Ročně</option>
                <option>Pololetně</option>
                <option>Čtvrtletně</option>
                <option>Měsíčně</option>
                <option>Vlastní</option>
              </select>
            </label>

            <label>
              Pojištění platí do / další platba
              <input
                type="date"
                value={insuranceTo}
                onChange={(e) => setInsuranceTo(e.target.value)}
              />
            </label>

            {(isCar || isCamper) && (
              <>
                <label>
                  Dálniční známka platí od
                  <input
                    type="date"
                    value={vignetteFrom}
                    onChange={(e) => {
                      const value = e.target.value;
                      setVignetteFrom(value);
                      setVignetteTo(calculateEndDate(value, vignettePeriod));
                    }}
                  />
                </label>

                <label>
                  Platnost dálniční známky
                  <select
                    value={vignettePeriod}
                    onChange={(e) => {
                      const value = e.target.value;
                      setVignettePeriod(value);
                      setVignetteTo(calculateEndDate(vignetteFrom, value));
                    }}
                  >
                    <option>1 den</option>
                    <option>10 dní</option>
                    <option>30 dní</option>
                    <option>1 rok</option>
                    <option>Vlastní</option>
                  </select>
                </label>

                <label>
                  Dálniční známka platí do
                  <input
                    type="date"
                    value={vignetteTo}
                    onChange={(e) => setVignetteTo(e.target.value)}
                  />
                </label>
              </>
            )}

            {isForklift && <label>Revize VZV<input type="date" /></label>}

            {(isTrailer || isLongTrailer || isCaravan) && (
              <label>Kontrola / servis přívěsu<input type="date" /></label>
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
                  Značky v depozitu
                  <select>
                    <option>Ne</option>
                    <option>Ano</option>
                  </select>
                </label>

                <label>Datum odevzdání značek<input type="date" /></label>
              </div>

              <h3>Zahraniční dálniční známky</h3>

              <div className="foreign-list">
                {foreignVignettes.map((item, index) => (
                  <div className="foreign-card" key={item}>
                    <div className="foreign-head">
                      <strong>Známka #{index + 1}</strong>

                      {foreignVignettes.length > 1 && (
                        <button
                          type="button"
                          className="remove"
                          onClick={() =>
                            setForeignVignettes(
                              foreignVignettes.filter((v) => v !== item)
                            )
                          }
                        >
                          Odebrat
                        </button>
                      )}
                    </div>

                    <div className="grid">
                      <label>
                        Stát
                        <select>
                          <option>Rakousko</option>
                          <option>Slovensko</option>
                          <option>Maďarsko</option>
                          <option>Slovinsko</option>
                          <option>Chorvatsko</option>
                          <option>Polsko</option>
                          <option>Jiný stát</option>
                        </select>
                      </label>

                      <label>
                        Platnost
                        <select>
                          <option>1 den</option>
                          <option>10 dní</option>
                          <option>30 dní</option>
                          <option>2 měsíce</option>
                          <option>1 rok</option>
                          <option>Vlastní</option>
                        </select>
                      </label>

                      <label>Platí od<input type="date" /></label>
                      <label>Platí do<input type="date" /></label>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="add-foreign"
                onClick={() =>
                  setForeignVignettes([...foreignVignettes, Date.now()])
                }
              >
                ＋ Přidat další zahraniční známku
              </button>

              <div className="grid advanced-note">
                {(isCamper || isCaravan) && (
                  <>
                    <label>Revize elektroinstalace<input type="date" /></label>
                    <label>Kontrola těsnosti<input type="date" /></label>
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
            <label>Jméno<input placeholder="Jan Novák" /></label>
            <label>Telefon<input placeholder="+420..." /></label>
            <label>E-mail<input placeholder="email@firma.cz" /></label>
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

        h3 {
          margin: 18px 0 12px;
          font-size: 18px;
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

        .stk-box {
          border: 1px solid #dbeafe;
          background: #f8fbff;
          border-radius: 18px;
          padding: 16px;
        }

        .helper-toggle {
          margin-top: 10px;
          border: 0;
          background: transparent;
          color: #2563eb;
          font-weight: 800;
          cursor: pointer;
          padding: 0;
          text-align: left;
        }

        .stk-helper {
          margin-top: 14px;
          padding-top: 14px;
          border-top: 1px solid #dbeafe;
        }

        .calculate {
          margin-top: 14px;
          border: 1px solid #bfdbfe;
          background: #eff6ff;
          color: #1d4ed8;
          border-radius: 12px;
          padding: 11px 14px;
          font-weight: 800;
          cursor: pointer;
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

        .foreign-list {
          display: grid;
          gap: 14px;
        }

        .foreign-card {
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 16px;
          background: #fbfcfe;
        }

        .foreign-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }

        .remove {
          border: 1px solid #fecaca;
          background: #fff1f2;
          color: #b91c1c;
          border-radius: 999px;
          padding: 7px 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .add-foreign {
          width: 100%;
          margin-top: 14px;
          border: 1px solid #dbe3f0;
          background: #eef3ff;
          color: #2563eb;
          border-radius: 14px;
          padding: 13px;
          font-weight: 800;
          cursor: pointer;
        }

        .advanced-note {
          margin-top: 18px;
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
