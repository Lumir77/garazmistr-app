"use client";

export default function AddVehiclePage() {
  return (
    <main className="page">
      <div className="shell">
        <div className="topbar">
          <a href="/" className="back">← Zpět</a>
          <h1>Nové vozidlo</h1>
        </div>

        <section className="panel">
          <div className="panelHead">
            <h2>Základní údaje</h2>
            <button className="secondary">📄 Načíst z eTechničáku</button>
          </div>

          <div className="grid">
            <select>
              <option>Osobní</option>
              <option>SUV</option>
              <option>Pick-up</option>
              <option>Přívěs</option>
              <option>VZV</option>
            </select>

            <input placeholder="Značka" />
            <input placeholder="Model" />
            <input placeholder="Rok výroby" />
            <input placeholder="SPZ" />
          </div>
        </section>

        <section className="panel">
          <h2>Provozní údaje</h2>

          <div className="grid">
            <input placeholder="Aktuální km" />
            <input placeholder="Interval oleje (km)" />

            <select>
              <option>Benzín</option>
              <option>Nafta</option>
              <option>Elektro</option>
            </select>
          </div>
        </section>

        <section className="panel">
          <h2>Řidič / kontakt</h2>

          <div className="grid">
            <input placeholder="Jméno řidiče" />
            <input placeholder="Telefon" />
            <input placeholder="E-mail" />
          </div>
        </section>

        <div className="actions">
          <button className="primary">Uložit vozidlo</button>
          <a href="/" className="cancel">Zrušit</a>
        </div>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f4f6fb;
          padding: 24px;
          font-family: Arial;
        }

        .shell {
          max-width: 900px;
          margin: 0 auto;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .back {
          color: #2563eb;
          text-decoration: none;
          font-weight: bold;
        }

        h1 {
          margin: 0;
        }

        .panel {
          background: white;
          padding: 20px;
          border-radius: 18px;
          border: 1px solid #ddd;
          margin-bottom: 16px;
        }

        .panelHead {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 14px;
        }

        h2 {
          margin: 0;
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
          font-size: 14px;
        }

        .actions {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .primary {
          background: #2563eb;
          color: white;
          border: none;
          padding: 14px 20px;
          border-radius: 12px;
          font-weight: bold;
        }

        .secondary {
          border: 1px solid #ccc;
          background: white;
          padding: 10px 14px;
          border-radius: 10px;
        }

        .cancel {
          display: flex;
          align-items: center;
          padding: 14px;
          text-decoration: none;
          color: #555;
        }

        @media (max-width: 700px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .topbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }

          .actions {
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
}
