"use client";

export default function HomePage() {
  const vehicles = [
    {
      name: "Škoda Octavia",
      plate: "1TA234",
      image: "/vehicles/kombi-octavia.jpg",
      status: "ok",
      link: "/vehicle/octavia",
      lines: ["STK: 04.05.2026", "Výměna oleje: 01.05.2026"],
    },
    {
      name: "Škoda Kodiaq",
      plate: "2BC5678",
      image: "/vehicles/suv-kodiaq.jpg",
      status: "ok",
      lines: ["STK: 12.09.2026", "Pojištění: 10.06.2026"],
    },
    {
      name: "Ford Ranger",
      plate: "3XY9876",
      image: "/vehicles/pickup-ranger.jpg",
      status: "warning",
      lines: ["STK: 20.07.2025", "Pojištění: 15.06.2025"],
    },
    {
      name: "Přívěsný vozík",
      plate: "4AA1234",
      image: "/vehicles/privesny-vozik.jpg",
      status: "ok",
      lines: ["STK: 18.08.2026", "Známka: 01.07.2026"],
    },
    {
      name: "Vysokozdvižný vozík",
      plate: "VZV001",
      image: "/vehicles/vysokozdvizny-vozik.jpg",
      status: "ok",
      lines: ["Revize: 30.04.2026", "Servis: 30.06.2026"],
    },
    {
      name: "Obytný přívěs",
      plate: "5BB6789",
      image: "/vehicles/obytny-prives.jpg",
      status: "ok",
      lines: ["STK: 05.06.2026", "Servis: 01.07.2026"],
    },
    {
      name: "Obytné auto",
      plate: "6CC7890",
      image: "/vehicles/obytne-auto.jpg",
      status: "ok",
      lines: ["STK: 01.10.2026", "Servis: 15.09.2026"],
    },
    {
      name: "Dlouhý přívěsný vozík",
      plate: "7DD8901",
      image: "/vehicles/dlouhy-prives.jpg",
      status: "ok",
      lines: ["STK: 22.11.2026", "Kontrola: 10.10.2026"],
    },
  ];

  const upcoming = [
    {
      vehicle: "Ford Ranger 3XY9876",
      text: "Pojištění končí za 5 dní",
      date: "15.06.2025",
      type: "warning",
    },
    {
      vehicle: "Škoda Octavia 1TA234",
      text: "Výměna oleje za 1 den",
      date: "01.05.2026",
      type: "soon",
    },
    {
      vehicle: "Škoda Kodiaq 2BC5678",
      text: "Dálniční známka končí za 8 dní",
      date: "10.06.2026",
      type: "soon",
    },
    {
      vehicle: "Vysokozdvižný vozík VZV001",
      text: "Revize za 10 dní",
      date: "30.04.2026",
      type: "soon",
    },
    {
      vehicle: "Přívěsný vozík 4AA1234",
      text: "STK za 20 dní",
      date: "18.08.2026",
      type: "soon",
    },
  ];

  return (
    <main className="page">
      <div className="app-shell">
        <aside className="sidebar">
          <div className="brand">🚗 Garážmistr</div>

          <nav className="menu">
            <a className="active">Přehled</a>
            <a>Vozidla</a>
            <a>Události</a>
            <a>Připomínky</a>
            <a>Servis a náklady</a>
            <a>Dokumenty</a>
            <a>Statistiky</a>
            <a>Nastavení</a>
          </nav>

          <div className="sidebar-footer">
            <strong>FIRMA s.r.o.</strong>
            <span>Jan Novák</span>
          </div>
        </aside>

        <section className="content">
          <div className="mobile-topbar">
            <button className="icon-btn" type="button">☰</button>
            <div className="mobile-title">Garážmistr</div>
            <button className="icon-btn" type="button">⚙</button>
          </div>

          <div className="content-top">
            <h1>Přehled vozidel</h1>

            <div className="top-actions">
              <a href="/add-vehicle" className="primary-btn">
                ＋ Přidat vozidlo
              </a>
              <button className="icon-btn desktop-icon" type="button">⚙</button>
            </div>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-label">Všechna vozidla</div>
              <div className="stat-value">8</div>
              <div className="stat-note">Aktivní</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Blížící se události</div>
              <div className="stat-value">5</div>
              <div className="stat-note">do 30 dnů</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Po termínu</div>
              <div className="stat-value danger">1</div>
              <div className="stat-note">je potřeba řešit</div>
            </div>

            <div className="stat-card">
              <div className="stat-label">Všechno v pořádku</div>
              <div className="stat-value success">4</div>
              <div className="stat-note">vše OK</div>
            </div>
          </div>

          <div className="toolbar">
            <input className="search" placeholder="Hledat vozidlo..." />

            <div className="toolbar-right">
              <select className="select" defaultValue="all">
                <option value="all">Všechna vozidla</option>
              </select>
              <button className="icon-btn small" type="button">◫</button>
              <button className="icon-btn small" type="button">≣</button>
            </div>
          </div>

          <div className="cards-grid">
            {vehicles.map((vehicle) => {
              const content = (
                <>
                  <img src={vehicle.image} alt={vehicle.name} className="vehicle-image" />
                  <div className="vehicle-name">{vehicle.name}</div>
                  <div className="vehicle-plate">{vehicle.plate}</div>
                  <div className="vehicle-line">📅 {vehicle.lines[0]}</div>
                  <div className="vehicle-line">🛠 {vehicle.lines[1]}</div>
                  <div className={`status ${vehicle.status}`}>
                    {vehicle.status === "warning" ? "POZOR" : "OK"}
                  </div>
                </>
              );

              if (vehicle.link) {
                return (
                  <a key={vehicle.plate} href={vehicle.link} className="vehicle-card clickable">
                    {content}
                  </a>
                );
              }

              return (
                <article key={vehicle.plate} className="vehicle-card">
                  {content}
                </article>
              );
            })}
          </div>

          <div className="bottom-grid">
            <section className="panel">
              <div className="panel-head">
                <h3>Nejbližší události</h3>
                <a>Zobrazit všechny</a>
              </div>

              <div className="upcoming-list">
                {upcoming.map((item, index) => (
                  <div className="upcoming-row" key={index}>
                    <div className={`row-bar ${item.type}`}></div>

                    <div className="upcoming-main">
                      <div className="upcoming-vehicle">{item.vehicle}</div>
                      <div className="upcoming-text">{item.text}</div>
                    </div>

                    <div className="upcoming-date">{item.date}</div>
                  </div>
                ))}
              </div>
            </section>

            <section className="panel">
              <div className="panel-head">
                <h3>Rychlé akce</h3>
              </div>

              <div className="quick-actions">
                <a href="/add-vehicle">Přidat vozidlo</a>
                <button type="button">Přidat událost / připomínku</button>
                <button type="button">Nahrát dokument</button>
                <button type="button">Servisní záznam</button>
              </div>
            </section>
          </div>
        </section>
      </div>

      <a href="/add-vehicle" className="fab">＋</a>

      <div className="mobile-nav">
        <span className="active">Přehled</span>
        <span>Události</span>
        <span>Vozidla</span>
        <span>Více</span>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f4f6fb;
          padding: 24px;
          color: #111827;
          font-family: Arial, sans-serif;
        }

        .app-shell {
          display: grid;
          grid-template-columns: 220px 1fr;
          max-width: 1450px;
          margin: 0 auto;
          border: 1px solid #e5e7eb;
          border-radius: 28px;
          background: #fff;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
        }

        .sidebar {
          background: #fbfcfe;
          border-right: 1px solid #e5e7eb;
          padding: 20px;
          display: flex;
          flex-direction: column;
        }

        .brand {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 24px;
        }

        .menu {
          display: grid;
          gap: 8px;
        }

        .menu a {
          padding: 12px 14px;
          border-radius: 12px;
          color: #374151;
          text-decoration: none;
          cursor: default;
        }

        .menu a.active {
          background: #eaf1ff;
          color: #2563eb;
          font-weight: 700;
        }

        .sidebar-footer {
          margin-top: auto;
          padding-top: 18px;
          color: #6b7280;
          display: grid;
          gap: 4px;
          font-size: 14px;
        }

        .content {
          padding: 28px;
        }

        .mobile-topbar {
          display: none;
        }

        .mobile-title {
          font-size: 20px;
          font-weight: 700;
        }

        .content-top,
        .toolbar,
        .panel-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        h1 {
          margin: 0;
          font-size: 28px;
        }

        .top-actions {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .primary-btn {
          background: #2563eb;
          color: #fff;
          border: 0;
          border-radius: 14px;
          padding: 12px 18px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }

        .icon-btn {
          width: 42px;
          height: 42px;
          border-radius: 999px;
          border: 1px solid #e5e7eb;
          background: #fff;
          font-size: 22px;
          line-height: 1;
          cursor: pointer;
        }

        .desktop-icon {
          font-size: 20px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 22px;
        }

        .stat-card {
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 18px;
          background: #fff;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 8px;
        }

        .stat-value {
          font-size: 42px;
          font-weight: 800;
          line-height: 1;
        }

        .stat-value.danger {
          color: #ef4444;
        }

        .stat-value.success {
          color: #16a34a;
        }

        .stat-note {
          font-size: 14px;
          color: #6b7280;
          margin-top: 6px;
        }

        .toolbar {
          margin-top: 18px;
        }

        .search,
        .select {
          border: 1px solid #d1d5db;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 15px;
          background: #fff;
        }

        .search {
          width: min(420px, 100%);
        }

        .toolbar-right {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .small {
          width: 40px;
          height: 40px;
          font-size: 18px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-top: 20px;
        }

        .vehicle-card {
          position: relative;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 14px;
          box-shadow: 0 10px 28px rgba(15, 23, 42, 0.04);
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .vehicle-card.clickable {
          cursor: pointer;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .vehicle-card.clickable:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 34px rgba(15, 23, 42, 0.09);
        }

        .vehicle-image {
          width: 100%;
          height: 120px;
          object-fit: contain;
          margin-bottom: 8px;
        }

        .vehicle-name {
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 4px;
        }

        .vehicle-plate {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 8px;
        }

        .vehicle-line {
          font-size: 14px;
          color: #1f2937;
          margin-top: 6px;
        }

        .status {
          position: absolute;
          right: 12px;
          bottom: 12px;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          padding: 5px 10px;
          border-radius: 999px;
        }

        .status.ok {
          background: #16a34a;
        }

        .status.warning {
          background: #ef4444;
        }

        .bottom-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 16px;
          margin-top: 20px;
        }

        .panel {
          border: 1px solid #e5e7eb;
          border-radius: 18px;
          padding: 18px;
          background: #fff;
        }

        .panel-head h3 {
          margin: 0;
          font-size: 24px;
        }

        .panel-head a {
          color: #2563eb;
          font-size: 14px;
          text-decoration: none;
        }

        .upcoming-list {
          display: grid;
          gap: 12px;
          margin-top: 16px;
        }

        .upcoming-row {
          display: grid;
          grid-template-columns: 4px 1fr auto;
          gap: 12px;
          align-items: center;
          padding: 10px 0;
          border-bottom: 1px solid #f0f2f5;
        }

        .row-bar {
          height: 100%;
          border-radius: 999px;
          background: #f59e0b;
        }

        .row-bar.warning {
          background: #ef4444;
        }

        .upcoming-vehicle {
          font-weight: 700;
          margin-bottom: 4px;
        }

        .upcoming-text,
        .upcoming-date {
          color: #6b7280;
          font-size: 14px;
        }

        .quick-actions {
          display: grid;
          gap: 12px;
          margin-top: 16px;
        }

        .quick-actions button,
        .quick-actions a {
          border: 1px solid #dbe3f0;
          background: #f8fbff;
          color: #2563eb;
          border-radius: 14px;
          padding: 14px;
          text-align: left;
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
        }

        .fab,
        .mobile-nav {
          display: none;
        }

        @media (max-width: 1200px) {
          .cards-grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 900px) {
          .page {
            padding: 0 0 86px;
          }

          .app-shell {
            display: block;
            max-width: 100%;
            border: 0;
            border-radius: 0;
            box-shadow: none;
            background: transparent;
          }

          .sidebar {
            display: none;
          }

          .content {
            padding: 16px 16px 24px;
          }

          .mobile-topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 16px;
          }

          .content-top {
            display: none;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
            margin-top: 0;
          }

          .stat-card {
            padding: 8px 10px;
            border-radius: 12px;
            min-height: 72px;
          }

          .stat-label {
            font-size: 11px;
            margin-bottom: 6px;
            line-height: 1.2;
          }

          .stat-value {
            font-size: 20px;
          }

          .stat-note {
            display: none;
          }

          .toolbar {
            flex-direction: column;
            align-items: stretch;
          }

          .toolbar-right {
            justify-content: space-between;
          }

          .search {
            width: 100%;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }

          .vehicle-image {
            height: 110px;
          }

          .bottom-grid {
            grid-template-columns: 1fr;
          }

          .fab {
            display: flex;
            position: fixed;
            right: 18px;
            bottom: 82px;
            width: 62px;
            height: 62px;
            border-radius: 999px;
            border: 0;
            background: #2563eb;
            color: #fff;
            font-size: 34px;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 18px 38px rgba(37, 99, 235, 0.35);
            z-index: 20;
            text-decoration: none;
          }

          .mobile-nav {
            display: grid;
            position: fixed;
            left: 0;
            right: 0;
            bottom: 0;
            border-top: 1px solid #e5e7eb;
            background: #fff;
            grid-template-columns: repeat(4, 1fr);
            text-align: center;
            padding: 12px 8px;
            font-size: 12px;
            color: #6b7280;
            z-index: 10;
          }

          .mobile-nav .active {
            color: #2563eb;
            font-weight: 700;
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .panel-head {
            flex-direction: column;
            align-items: flex-start;
          }

          .upcoming-row {
            grid-template-columns: 4px 1fr;
          }

          .upcoming-date {
            grid-column: 2;
          }
        }
      `}</style>
    </main>
  );
}
