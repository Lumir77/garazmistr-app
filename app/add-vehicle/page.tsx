"use client";

import { useState } from "react";

export default function AddVehiclePage() {
  const [vehicleType, setVehicleType] = useState("osobni");
  const [showAdvanced, setShowAdvanced] = useState(false);

  // 🔥 NOVÉ STATE PRO DATA
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [vin, setVin] = useState("");
  const [fuel, setFuel] = useState("Benzín");
  const [stk, setStk] = useState("");

  const isCar =
    vehicleType === "osobni" ||
    vehicleType === "suv" ||
    vehicleType === "kombi" ||
    vehicleType === "pickup";

  const isCamper = vehicleType === "obytne-auto";

  // 🔥 SIMULACE NAČTENÍ
  const loadFromTP = () => {
    setBrand("Mazda");
    setModel("6");
    setYear("2016");
    setVin("JMZGJ697861329538");
    setFuel("Benzín");
    setStk("2026-07-19");
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
            <p>Vyzkoušej načtení z eTechničáku (demo)</p>
          </div>

          <button className="secondary" type="button" onClick={loadFromTP}>
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
                <option value="obytne-auto">Obytné auto</option>
              </select>
            </label>

            <label>
              Značka
              <input value={brand} onChange={(e) => setBrand(e.target.value)} />
            </label>

            <label>
              Model
              <input value={model} onChange={(e) => setModel(e.target.value)} />
            </label>

            <label>
              Rok výroby
              <input value={year} onChange={(e) => setYear(e.target.value)} />
            </label>

            <label>
              VIN
              <input value={vin} onChange={(e) => setVin(e.target.value)} />
            </label>
          </div>
        </section>

        <section className="panel">
          <h2>Provozní údaje</h2>

          <div className="grid">
            {(isCar || isCamper) && (
              <>
                <label>
                  Palivo
                  <select value={fuel} onChange={(e) => setFuel(e.target.value)}>
                    <option>Benzín</option>
                    <option>Nafta</option>
                    <option>Elektro</option>
                  </select>
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
              <input type="date" value={stk} onChange={(e) => setStk(e.target.value)} />
            </label>
          </div>
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

        .actions {
          display: flex;
          gap: 12px;
        }

        .primary {
          background: #2563eb;
          color: white;
          padding: 14px;
          border-radius: 12px;
          border: none;
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
