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
  const isForklift = vehicleType === "vzv";

  return (
    <main className="page">
      <div className="shell">
        <div className="topbar">
          <a href="/" className="back">← Zpět</a>
          <h1>Nové vozidlo</h1>
        </div>

        {/* ZÁKLAD */}
        <section className="panel">
          <h2>Základní údaje</h2>

          <div className="grid">
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
            >
              <option value="osobni">Osobní auto</option>
              <option value="suv">SUV</option>
              <option value="kombi">Kombi</option>
              <option value="pickup">Pick-up</option>
              <option value="prives">Přívěs</option>
              <option value="vzv">VZV</option>
              <option value="obytne-auto">Obytné auto</option>
            </select>

            <input placeholder="Značka" />
            <input placeholder="Model" />
            <input placeholder="SPZ" />
          </div>
        </section>

        {/* PROVOZ */}
        <section className="panel">
          <h2>Provoz</h2>

          <div className="grid">
            {(isCar || isCamper) && (
              <>
                <input placeholder="Kilometry" />
                <select>
                  <option>Palivo</option>
                  <option>Benzín</option>
                  <option>Nafta</option>
                  <option>Elektro</option>
                </select>
              </>
            )}

            {isForklift && <input placeholder="Motohodiny" />}

            {isTrailer && <input placeholder="Nosnost (kg)" />}
          </div>
        </section>

        {/* TERMÍNY */}
        <section className="panel">
          <h2>Hlavní termíny</h2>

          <div className="grid">
            <input placeholder="STK" />
            <input placeholder="Pojištění" />

            {(isCar || isCamper) && (
              <input placeholder="Dálniční známka" />
            )}
          </div>
        </section>

        {/* ROZBALOVACÍ */}
        <section className="panel">
          <button
            className="toggle"
            onClick={() => setShowAdvanced(!showAdvanced)}
          >
            {showAdvanced ? "Skrýt další možnosti" : "Zobrazit další možnosti"}
          </button>

          {showAdvanced && (
            <div className="grid advanced">
              <input placeholder="Periodicita pojištění (měsíčně/ročně)" />
              <input placeholder="Depozit značek - datum" />
              <input placeholder="Zahraniční známka (stát)" />
              <input placeholder="Revize (plyn, nástavba...)" />
              <input placeholder="Poznámka" />
            </div>
          )}
        </section>

        <div className="actions">
          <button className="primary">Uložit vozidlo</button>
          <a href="/" className="cancel">Zrušit</a>
        </div>
      </div>

      <style jsx>{`
        .page {
          background: #f4f6fb;
          min-height: 100vh;
          padding: 24px;
          font-family: Arial;
        }

        .shell {
          max-width: 800px;
          margin: auto;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .panel {
          background: white;
          padding: 20px;
          border-radius: 18px;
          margin-bottom: 16px;
          border: 1px solid #ddd;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        input, select {
          padding: 12px;
          border-radius: 10px;
          border: 1px solid #ccc;
        }

        .toggle {
          width: 100%;
          padding: 12px;
          border-radius: 12px;
          background: #eef3ff;
          border: none;
          cursor: pointer;
        }

        .advanced {
          margin-top: 12px;
        }

        .actions {
          display: flex;
          gap: 12px;
        }

        .primary {
          background: #2563eb;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 12px;
        }

        .cancel {
          padding: 14px;
          color: gray;
        }

        @media (max-width: 700px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
