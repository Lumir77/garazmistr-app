"use client";

import { useState } from "react";

export default function AddVehiclePage() {
  const [vehicleType, setVehicleType] = useState("osobni");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [showStkHelper, setShowStkHelper] = useState(false);

  const [stkValidUntil, setStkValidUntil] = useState("");
  const [firstRegistrationDate, setFirstRegistrationDate] = useState("");
  const [stkMode, setStkMode] = useState("first_4_years");

  const [insuranceFrom, setInsuranceFrom] = useState("");
  const [insurancePeriod, setInsurancePeriod] = useState("Ročně");
  const [insuranceTo, setInsuranceTo] = useState("");

  const [vignetteFrom, setVignetteFrom] = useState("");
  const [vignettePeriod, setVignettePeriod] = useState("1 rok");
  const [vignetteTo, setVignetteTo] = useState("");

  const [currentKm, setCurrentKm] = useState("");
  const [lastOilKm, setLastOilKm] = useState("");
  const [oilIntervalKm, setOilIntervalKm] = useState("15000");
  const [lastOilDate, setLastOilDate] = useState("");
  const [nextOilKm, setNextOilKm] = useState("");
  const [nextOilDate, setNextOilDate] = useState("");

  const [foreignVignettes, setForeignVignettes] = useState([
    {
      id: 1,
      country: "Rakousko",
      period: "10 dní",
      from: "",
      to: "",
    },
  ]);

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

  const formatDate = (date) => date.toISOString().split("T")[0];

  const calculateValidToDate = (startDate, period) => {
    if (!startDate || period === "Vlastní") return "";

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

    date.setDate(date.getDate() - 1);
    return formatDate(date);
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

    date.setDate(date.getDate() - 1);
    setStkValidUntil(formatDate(date));
  };

  const calculateOilService = (oilKm, intervalKm, oilDate) => {
    if (oilKm && intervalKm) {
      setNextOilKm(String(Number(oilKm) + Number(intervalKm)));
    }

    if (oilDate) {
      const date = new Date(oilDate);
      date.setFullYear(date.getFullYear() + 1);
      date.setDate(date.getDate() - 1);
      setNextOilDate(formatDate(date));
    }
  };

  const updateForeignVignette = (id, field, value) => {
    setForeignVignettes((items) =>
      items.map((item) => {
        if (item.id !== id) return item;

        const updated = {
          ...item,
          [field]: value,
        };

        if (field === "from") {
          updated.to = calculateValidToDate(value, updated.period);
        }

        if (field === "period") {
          updated.to = calculateValidToDate(updated.from, value);
        }

        return updated;
      })
    );
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
                <label>
                  Aktuální kilometry
                  <input
                    value={currentKm}
                    onChange={(e) => setCurrentKm(e.target.value)}
                    placeholder="např. 128450"
                  />
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

        {(isCar || isCamper) && (
          <section className="panel">
            <h2>Výměna oleje</h2>

            <div className="grid">
              <label>
                Poslední výměna oleje při km
                <input
                  value={lastOilKm}
                  onChange={(e) => {
                    const value = e.target.value;
                    setLastOilKm(value);
                    calculateOilService(value, oilIntervalKm, lastOilDate);
                  }}
                  placeholder="např. 120000"
                />
              </label>

              <label>
                Interval výměny oleje v km
                <input
                  value={oilIntervalKm}
                  onChange={(e) => {
                    const value = e.target.value;
                    setOilIntervalKm(value);
                    calculateOilService(lastOilKm, value, lastOilDate);
                  }}
                  placeholder="např. 15000"
                />
              </label>

              <label>
                Poslední výměna oleje datum
                <input
                  type="date"
                  value={lastOilDate}
                  onChange={(e) => {
                    const value = e.target.value;
                    setLastOilDate(value);
                    calculateOilService(lastOilKm, oilIntervalKm, value);
                  }}
                />
              </label>

              <label>
                Další výměna oleje při km
                <input
                  value={nextOilKm}
                  onChange={(e) => setNextOilKm(e.target.value)}
                  placeholder="vypočítá se automaticky"
                />
              </label>

              <label>
                Další výměna oleje nejpozději
                <input
                  type="date"
                  value={nextOilDate}
                  onChange={(e) => setNextOilDate(e.target.value)}
                />
              </label>

              <div className="info wide">
                Olej se hlídá podle toho, co nastane dříve: dosažený nájezd km,
                nebo 1 rok od poslední výměny.
              </div>
            </div>
          </section>
        )}

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
                  setInsuranceTo(calculateValidToDate(value, insurancePeriod));
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
                  setInsuranceTo(calculateValidToDate(insuranceFrom, value));
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
                      setVignetteTo(calculateValidToDate(value, vignettePeriod));
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
                      setVignetteTo(calculateValidToDate(vignetteFrom, value));
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
                  <div className="foreign-card" key={item.id}>
                    <div className="foreign-head">
                      <strong>Známka #{index + 1}</strong>

                      {foreignVignettes.length > 1 && (
                        <button
                          type="button"
                          className="remove"
                          onClick={() =>
                            setForeignVignettes(
                              foreignVignettes.filter((v) => v.id !== item.id)
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
                        <select
                          value={item.country}
                          onChange={(e) =>
                            updateForeignVignette(item.id, "country", e.target.value)
                          }
                        >
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
                        <select
                          value={item.period}
                          onChange={(e) =>
                            updateForeignVignette(item.id, "period", e.target.value)
                          }
                        >
                          <option>1 den</option>
                          <option>10 dní</option>
                          <option>30 dní</option>
                          <option>2 měsíce</option>
                          <option>1 rok</option>
                          <option>Vlastní</option>
                        </select>
                      </label>

                      <label>
                        Platí od
                        <input
                          type="date"
                          value={item.from}
                          onChange={(e) =>
                            updateForeignVignette(item.id, "from", e.target.value)
                          }
                        />
                      </label>

                      <label>
                        Platí do
                        <input
                          type="date"
                          value={item.to}
                          onChange={(e) =>
                            updateForeignVignette(item.id, "to", e.target.value)
                          }
                        />
                      </label>
                    </div>
                  </div>
                ))}
              </div>

              <button
                type="button"
                className="add-foreign"
                onClick={() =>
                  setForeignVignettes([
                    ...foreignVignettes,
                    {
                      id: Date.now(),
                      country: "Rakousko",
                      period: "10 dní",
                      from: "",
                      to: "",
                    },
                  ])
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

        .info {
          background: #f8fbff;
          border: 1px solid #dbeafe;
          border-radius: 14px;
          padding: 12px 14px;
          color: #374151;
          font-size: 14px;
          line-height: 1.5;
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
