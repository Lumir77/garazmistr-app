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
  ];

  return (
    <main style={{ padding: 20 }}>
      <h1>Garážmistr</h1>

      <div style={{ display: "grid", gap: 20 }}>
        {vehicles.map((vehicle) => {
          const isOctavia = vehicle.plate === "1TA234";

          const Card = (
            <div
              style={{
                border: "1px solid #ddd",
                padding: 16,
                borderRadius: 12,
              }}
            >
              <img
                src={vehicle.image}
                style={{ width: "100%", height: 120, objectFit: "contain" }}
              />
              <h3>{vehicle.name}</h3>
              <p>{vehicle.plate}</p>
              <p>{vehicle.lines[0]}</p>
              <p>{vehicle.lines[1]}</p>
            </div>
          );

          return isOctavia ? (
            <a
              key={vehicle.plate}
              href="/vehicle/octavia"
              style={{ textDecoration: "none", color: "black" }}
            >
              {Card}
            </a>
          ) : (
            <div key={vehicle.plate}>{Card}</div>
          );
        })}
      </div>
    </main>
  );
}
