"use client";
export default function HomePage() {
  const vehicles = [
    {
      name: "Škoda Octavia",
      plate: "1TA234",
      image: "/vehicles/kombi-octavia.jpg",
      status: "ok",
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
      text: "STK končí za 15 dní",
      date: "20.07.2025",
      type: "warning",
    },
    {
      vehicle: "Škoda Octavia 1TA234",
      text: "Výměna oleje za 1 den",
      date: "01.05.2026",
      type: "soon",
    },
    {
      vehicle: "Vysokozdvižný vozík VZV001",
      text: "Revize za 10 dní",
      date: "30.04.2026",
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
            <button className="icon-btn">☰</button>
            <div className="mobile-title">Garážmistr</div>
            <button className="icon-btn">⚙</button>
          </div>

          <div className="content-top">
            <div>
              <h1>Přehled vozidel</h1>
            </div>

            <div className="top-actions">
              <button className="primary-btn">＋ Přidat vozidlo</button>
              <button className="icon-btn desktop-icon">⚙</button>
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
              <div className="stat-value">3</div>
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
              <select className="select">
                <option>Všechna vozidla</option>
              </select>
              <button className="icon-btn small">◫</button>
              <button className="icon-btn small">≣</button>
            </div>
          </div>

          <div className="cards-grid">
            {vehicles.map((vehicle) => (
              <article className="vehicle-card" key={vehicle.plate}>
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="vehicle-image"
                />
                <div className="vehicle-name">{vehicle.name}</div>
                <div className="vehicle-plate">{vehicle.plate}</div>
                <div className="vehicle-line">📅 {vehicle.lines[0]}</div>
                <div className="vehicle-line">🛠 {vehicle.lines[1]}</div>
                <div className={`status ${vehicle.status}`}>
                  {vehicle.status === "warning" ? "POZOR" : "OK"}
                </div>
              </article>
            ))}
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
                <button>Přidat vozidlo</button>
                <button>Přidat událost / připomínku</button>
                <button>Nahrát dokument</button>
                <button>Servisní záznam</button>
              </div>
            </section>
          </div>
        </section>
      </div>

      <button className="fab">＋</button>

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
          font-family: Arial, sans-serif

