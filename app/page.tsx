"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default function HomePage() {
  const [vehicles, setVehicles] = useState([]);

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  useEffect(() => {
    const fetchVehicles = async () => {
      const { data, error } = await supabase
        .from("vehicles")
        .select("*");

      if (error) {
        console.error("Chyba při načítání:", error);
      } else {
        setVehicles(data);
      }
    };

    fetchVehicles();
  }, []);

  const upcoming = [
    {
      vehicle: "Ford Ranger 3XY9876",
      text: "Pojištění končí za 5 dní",
      date: "15.06.2025",
      type: "warning",
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
          <div className="content-top">
            <h1>Přehled vozidel</h1>

            <div className="top-actions">
              <a href="/add-vehicle" className="primary-btn">
                ＋ Přidat vozidlo
              </a>
            </div>
          </div>

          <div className="cards-grid">
            {vehicles.map((vehicle) => (
              <article key={vehicle.id} className="vehicle-card">
                <img
                  src={vehicle.img || "/vehicles/default.jpg"}
                  alt={vehicle.name}
                  className="vehicle-image"
                />

                <div className="vehicle-name">{vehicle.name}</div>
                <div className="vehicle-plate">{vehicle.plate}</div>

                <div className="vehicle-line">
                  📅 STK: {vehicle.stk || "-"}
                </div>

                <div className="vehicle-line">
                  🛠 {vehicle.note || "-"}
                </div>

                <div className="status ok">OK</div>
              </article>
            ))}
          </div>

          <div className="bottom-grid">
            <section className="panel">
              <div className="panel-head">
                <h3>Nejbližší události</h3>
              </div>

              <div className="upcoming-list">
                {upcoming.map((item, index) => (
                  <div className="upcoming-row" key={index}>
                    <div className={`row-bar ${item.type}`}></div>

                    <div className="upcoming-main">
                      <div className="upcoming-vehicle">
                        {item.vehicle}
                      </div>
                      <div className="upcoming-text">
                        {item.text}
                      </div>
                    </div>

                    <div className="upcoming-date">{item.date}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
