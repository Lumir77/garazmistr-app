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
          </nav>
        </aside>

        <section className="content">
          <div className="content-top">
            <h1>Přehled vozidel</h1>

            <a href="/add-vehicle" className="primary-btn">
              ＋ Přidat vozidlo
            </a>
          </div>

          <div className="cards-grid">
            {vehicles.map((vehicle) => {
              const content = (
                <>
                  <img src={vehicle.image} className="vehicle-image" />
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
        </section>
      </div>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background: #f4f6fb;
          padding: 24px;
          font-family: Arial;
        }

        .app-shell {
          display: grid;
          grid-template-columns: 220px 1fr;
          max-width: 1200px;
          margin: 0 auto;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
        }

        .sidebar {
          background: #f9fafb;
          padding: 20px;
        }

        .brand {
          font-weight: bold;
          margin-bottom: 20px;
        }

        .menu a {
          display: block;
          padding: 10px;
          border-radius: 10px;
        }

        .menu .active {
          background: #e0ecff;
          color: #2563eb;
        }

        .content {
          padding: 24px;
        }

        .content-top {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .primary-btn {
          background: #2563eb;
          color: #fff;
          padding: 10px 16px;
          border-radius: 10px;
          text-decoration: none;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .vehicle-card {
          position: relative;
          border: 1px solid #e5e7eb;
          border-radius: 16px;
          padding: 12px;
          background: #fff;
        }

        .vehicle-card.clickable {
          cursor: pointer;
          transition: 0.2s;
        }

        .vehicle-card.clickable:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .vehicle-image {
          width: 100%;
          height: 120px;
          object-fit: contain;
        }

        .vehicle-name {
          font-weight: bold;
          margin-top: 8px;
        }

        .vehicle-plate {
          color: #666;
          font-size: 14px;
        }

        .vehicle-line {
          font-size: 14px;
          margin-top: 4px;
        }

        .status {
          position: absolute;
          bottom: 10px;
          right: 10px;
          padding: 4px 10px;
          border-radius: 999px;
          color: #fff;
          font-size: 12px;
        }

        .status.ok {
          background: green;
        }

        .status.warning {
          background: red;
        }

        @media (max-width: 900px) {
          .app-shell {
            grid-template-columns: 1fr;
          }

          .sidebar {
            display: none;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
