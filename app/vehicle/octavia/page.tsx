"use client";

export default function OctaviaDetailPage() {
  const events = [
    {
      title: "Výměna oleje",
      date: "01.05.2026",
      status: "soon",
      note: "Doporučeno zkontrolovat také filtr a hladinu kapalin.",
    },
    {
      title: "STK",
      date: "04.05.2026",
      status: "ok",
      note: "Platná technická kontrola.",
    },
    {
      title: "Pojištění",
      date: "10.06.2026",
      status: "ok",
      note: "Roční pojištění vozidla.",
    },
    {
      title: "Dálniční známka",
      date: "15.06.2026",
      status: "ok",
      note: "Elektronická dálniční známka.",
    },
  ];

  return (
    <main className="page">
      <div className="detail-shell">
        <header className="topbar">
          <a className="back" href="/">← Zpět</a>
          <div className="top-actions">
            <button type="button" className="secondary-btn">Upravit</button>
            <button type="button" className="primary-btn">＋ Přidat událost</button>
          </div>
        </header>

        <section className="hero-card">
          <div className="vehicle-image-wrap">
            <img src="/vehicles/kombi-octavia.jpg" alt="Škoda Octavia" className="vehicle-image" />
          </div>

          <div className="vehicle-main">
            <div className="badge ok">Vše v pořádku</div>
            <h1>Škoda Octavia</h1>
            <p className="plate">SPZ: 1TA234</p>

            <div className="quick-grid">
              <div className="quick-card">
                <span>Typ vozidla</span>
                <strong>Kombi</strong>
              </div>
              <div className="quick-card">
                <span>Stav tachometru</span>
                <strong>128 450 km</strong>
              </div>
              <div className="quick-card">
                <span>Palivo</span>
                <strong>Nafta</strong>
              </div>
              <div className="quick-card">
                <span>Nejbližší událost</span>
                <strong>Olej 01.05.2026</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="content-grid">
          <div className="panel">
            <div className="panel-head">
              <h2>Důležité termíny</h2>
            </div>

            <div className="term-list">
              <div className="term-row warning">
                <div>
                  <strong>Výměna oleje</strong>
                  <span>Servisní úkon</span>
                </div>
                <b>01.05.2026</b>
              </div>

              <div className="term-row ok">
                <div>
                  <strong>STK</strong>
                  <span>Technická kontrola</span>
                </div>
                <b>04.05.2026</b>
              </div>

              <div className="term-row ok">
                <div>
                  <strong>Pojištění</strong>
                  <span>Povinné ručení</span>
                </div>
                <b>10.06.2026</b>
              </div>

              <div className="term-row ok">
                <div>
                  <strong>Dálniční známka</strong>
                  <span>Elektronická známka</span>
                </div>
                <b>15.06.2026</b>
              </div>
            </div>
          </div>

          <div className="panel">
            <div className="panel-head">
              <h2>Rychlé akce</h2>
            </div>

            <div className="action-list">
              <button type="button">＋ Přidat servisní událost</button>
              <button type="button">＋ Přidat připomínku</button>
              <button type="button">📄 Nahrát dokument</button>
              <button type="button">✎ Upravit údaje vozidla</button>
            </div>
          </div>
        </section>

        <section className="panel full">
          <div className="panel-head row">
            <h2>Historie a plánované události</h2>
            <button type="button" className="small-btn">Filtrovat</button>
          </div>

          <div className="events-table">
            {events.map((event) => (
              <article className="event-row" key={event.title}>
                <div className={`event-dot ${event.status}`} />
                <div className="event-main">
                  <strong>{event.title}</strong>
                  <span>{event.note}</span>
                </div>
                <div className="event-date">{event.date}</div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f4f6fb;
          padding: 24px;
          color: #111827;
          font-family: Arial, sans-serif;
        }

        .detail-shell {
          max-width: 1180px;
          margin: 0 auto;
        }

        .topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }

        .back {
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }

        .top-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn,
        .small-btn {
          border-radius: 14px;
          padding: 12px 16px;
          font-weight: 700;
          cursor: pointer;
        }

        .primary-btn {
          border: 0;
          color: #fff;
          background: #2563eb;
        }

        .secondary-btn,
        .small-btn {
          border: 1px solid #d1d5db;
          color: #111827;
          background: #fff;
        }

        .hero-card {
          display: grid;
          grid-template-columns: minmax(260px, 420px) 1fr;
          gap: 24px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
        }

        .vehicle-image-wrap {
          background: #f9fafb;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          min-height: 250px;
        }

        .vehicle-image {
          width: 100%;
          height: 220px;
          object-fit: contain;
        }

        .badge {
          display: inline-block;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 12px;
        }

        .badge.ok {
          background: #dcfce7;
          color: #166534;
        }

        h1 {
          margin: 0;
          font-size: 38px;
        }

        .plate {
          margin: 8px 0 18px;
          color: #6b7280;
          font-size: 17px;
        }

        .quick-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .quick-card {
          border: 1px solid #e5e7eb;
          background: #fbfcfe;
          border-radius: 16px;
          padding: 14px;
        }

        .quick-card span {
          display: block;
          color: #6b7280;
          font-size: 13px;
          margin-bottom: 6px;
        }

        .quick-card strong {
          font-size: 16px;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 18px;
          margin-top: 18px;
        }

        .panel {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 22px;
          padding: 20px;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.04);
        }

        .panel.full {
          margin-top: 18px;
        }

        .panel-head h2 {
          margin: 0 0 16px;
          font-size: 24px;
        }

        .panel-head.row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .panel-head.row h2 {
          margin: 0;
        }

        .term-list,
        .action-list,
        .events-table {
          display: grid;
          gap: 12px;
        }

        .term-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          border-radius: 16px;
          padding: 14px;
          border: 1px solid #e5e7eb;
        }

        .term-row span {
          display: block;
          color: #6b7280;
          font-size: 13px;
          margin-top: 4px;
        }

        .term-row.warning {
          background: #fff7ed;
          border-color: #fed7aa;
        }

        .term-row.ok {
          background: #f0fdf4;
          border-color: #bbf7d0;
        }

        .action-list button {
          border: 1px solid #dbe3f0;
          background: #f8fbff;
          color: #2563eb;
          border-radius: 14px;
          padding: 14px;
          text-align: left;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
        }

        .event-row {
          display: grid;
          grid-template-columns: 10px 1fr auto;
          gap: 12px;
          align-items: center;
          border-bottom: 1px solid #f0f2f5;
          padding: 12px 0;
        }

        .event-dot {
          width: 10px;
          height: 38px;
          border-radius: 999px;
          background: #16a34a;
        }

        .event-dot.soon {
          background: #f59e0b;
        }

        .event-dot.ok {
          background: #16a34a;
        }

        .event-main strong,
        .event-main span {
          display: block;
        }

        .event-main span {
          color: #6b7280;
          font-size: 14px;
          margin-top: 4px;
        }

        .event-date {
          color: #111827;
          font-weight: 700;
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .page {
            padding: 14px;
          }

          .topbar {
            align-items: flex-start;
          }

          .top-actions {
            justify-content: flex-end;
          }

          .hero-card {
            grid-template-columns: 1fr;
            padding: 16px;
            border-radius: 22px;
          }

          .vehicle-image-wrap {
            min-height: 180px;
          }

          .vehicle-image {
            height: 170px;
          }

          h1 {
            font-size: 30px;
          }

          .quick-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }

          .quick-card {
            padding: 10px;
          }

          .content-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .topbar {
            flex-direction: column;
          }

          .top-actions {
            width: 100%;
          }

          .primary-btn,
          .secondary-btn {
            flex: 1;
          }

          .quick-grid {
            grid-template-columns: 1fr;
          }

          .panel-head.row {
            align-items: flex-start;
            flex-direction: column;
          }

          .term-row,
          .event-row {
            align-items: flex-start;
          }

          .event-row {
            grid-template-columns: 8px 1fr;
          }

          .event-date {
            grid-column: 2;
          }
        }
      `}</style>
    </main>
  );
}

