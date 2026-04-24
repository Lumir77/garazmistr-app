"use client";

export default function OctaviaDetailPage() {
  return (
    <main className="page">
      <div className="shell">
        <div className="topbar">
          <a href="/" className="back">← Zpět na přehled</a>
          <button className="primary">＋ Přidat událost</button>
        </div>

        <section className="hero">
          <div className="imageBox">
            <img src="/vehicles/kombi-octavia.jpg" alt="Škoda Octavia" />
          </div>

          <div className="info">
            <span className="badge">OK</span>
            <h1>Škoda Octavia</h1>
            <p className="plate">SPZ: 1TA234</p>

            <div className="grid">
              <div><span>Typ</span><strong>Kombi</strong></div>
              <div><span>Palivo</span><strong>Nafta</strong></div>
              <div><span>Aktuální km</span><strong>128 450 km</strong></div>
              <div><span>Řidič</span><strong>Jan Novák</strong></div>
            </div>
          </div>
        </section>

        <section className="cards">
          <div className="card warning">
            <span>Výměna oleje</span>
            <strong>01.05.2026</strong>
            <p>Nejbližší servisní úkon</p>
          </div>

          <div className="card">
            <span>STK</span>
            <strong>04.05.2026</strong>
            <p>Technická kontrola</p>
          </div>

          <div className="card">
            <span>Pojištění</span>
            <strong>10.06.2026</strong>
            <p>Povinné ručení</p>
          </div>

          <div className="card">
            <span>Dálniční známka</span>
            <strong>15.06.2026</strong>
            <p>Elektronická známka</p>
          </div>
        </section>

        <section className="panel">
          <div className="panelHead">
            <h2>Události vozidla</h2>
            <button>Filtrovat</button>
          </div>

          <div className="event orange">
            <div>
              <strong>Výměna oleje</strong>
              <p>Naplánovaná výměna oleje a filtrů</p>
            </div>
            <b>01.05.2026</b>
          </div>

          <div className="event green">
            <div>
              <strong>STK</strong>
              <p>Platnost technické kontroly</p>
            </div>
            <b>04.05.2026</b>
          </div>

          <div className="event green">
            <div>
              <strong>Pojištění</strong>
              <p>Roční pojištění vozidla</p>
            </div>
            <b>10.06.2026</b>
          </div>
        </section>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f4f6fb;
          padding: 24px;
          font-family: Arial, sans-serif;
          color: #111827;
        }

        .shell {
          max-width: 1180px;
          margin: 0 auto;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
        }

        .back {
          color: #2563eb;
          font-weight: 700;
          text-decoration: none;
        }

        .primary {
          background: #2563eb;
          color: white;
          border: 0;
          border-radius: 14px;
          padding: 12px 18px;
          font-weight: 700;
        }

        .hero {
          display: grid;
          grid-template-columns: 420px 1fr;
          gap: 24px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
        }

        .imageBox {
          background: #f9fafb;
          border-radius: 22px;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .imageBox img {
          width: 100%;
          height: 240px;
          object-fit: contain;
        }

        .badge {
          display: inline-block;
          background: #dcfce7;
          color: #166534;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        h1 {
          font-size: 38px;
          margin: 0;
        }

        .plate {
          color: #6b7280;
          font-size: 17px;
          margin: 8px 0 18px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .grid div {
          background: #fbfcfe;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 14px;
        }

        .grid span,
        .card span {
          display: block;
          color: #6b7280;
          font-size: 13px;
          margin-bottom: 6px;
        }

        .grid strong {
          font-size: 16px;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 18px;
        }

        .card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 20px;
          padding: 18px;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.04);
        }

        .card.warning {
          background: #fff7ed;
          border-color: #fed7aa;
        }

        .card strong {
          display: block;
          font-size: 22px;
        }

        .card p {
          color: #6b7280;
          margin: 8px 0 0;
          font-size: 14px;
        }

        .panel {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 22px;
          padding: 20px;
          margin-top: 18px;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.04);
        }

        .panelHead {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .panelHead h2 {
          margin: 0;
          font-size: 24px;
        }

        .panelHead button {
          border: 1px solid #d1d5db;
          background: white;
          border-radius: 12px;
          padding: 10px 14px;
          font-weight: 700;
        }

        .event {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid #f0f2f5;
          border-left: 5px solid #16a34a;
          padding-left: 12px;
        }

        .event.orange {
          border-left-color: #f59e0b;
        }

        .event p {
          margin: 4px 0 0;
          color: #6b7280;
          font-size: 14px;
        }

        @media (max-width: 900px) {
          .page {
            padding: 14px;
          }

          .hero {
            grid-template-columns: 1fr;
            padding: 16px;
            border-radius: 22px;
          }

          .imageBox img {
            height: 180px;
          }

          h1 {
            font-size: 30px;
          }

          .cards {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }
        }

        @media (max-width: 560px) {
          .topbar {
            flex-direction: column;
            align-items: stretch;
          }

          .primary {
            width: 100%;
          }

          .grid,
          .cards {
            grid-template-columns: 1fr;
          }

          .event {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
