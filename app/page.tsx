"use client";

export default function HomePage() {
  const vehicles = [
    {
      name: "Škoda Octavia",
      plate: "1TA234",
      image: "/vehicles/kombi-octavia.jpg",
      link: "/vehicle/octavia",
      lines: ["STK: 04.05.2026", "Výměna oleje: 01.05.2026"],
    },
    {
      name: "Škoda Kodiaq",
      plate: "2BC5678",
      image: "/vehicles/suv-kodiaq.jpg",
      link: "#",
      lines: ["STK: 12.09.2026", "Pojištění: 10.06.2026"],
    },
  ];

  return (
    <main className="page">
      <h1>Garážmistr</h1>

      <div className="grid">
        {vehicles.map((v) => (
          <a
            key={v.plate}
            href={v.link}
            className="card"
          >
            <img src={v.image} />

            <div className="content">
              <h2>{v.name}</h2>
              <div className="plate">{v.plate}</div>

              <div className="line">{v.lines[0]}</div>
              <div className="line">{v.lines[1]}</div>
            </div>
          </a>
        ))}
      </div>

      <style jsx>{`
        .page {
          padding: 20px;
          font-family: Arial;
          background: #f5f7fb;
          min-height: 100vh;
        }

        h1 {
          margin-bottom: 20px;
        }

        .grid {
          display: grid;
          gap: 16px;
        }

        .card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          background: white;
          border-radius: 16px;
          border: 1px solid #ddd;
          text-decoration: none;
          color: black;
          transition: 0.2s;
        }

        .card:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }

        img {
          width: 180px;
          height: 100px;
          object-fit: contain;
        }

        .content {
          flex: 1;
        }

        h2 {
          margin: 0;
        }

        .plate {
          color: gray;
          margin-bottom: 10px;
        }

        .line {
          font-size: 14px;
          margin-top: 4px;
        }
      `}</style>
    </main>
  );
}
