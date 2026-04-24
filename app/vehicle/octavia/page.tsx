"use client";

export default function OctaviaDetailPage() {
  return (
    <main style={{ padding: 20, fontFamily: "Arial" }}>
      <a href="/" style={{ display: "inline-block", marginBottom: 20 }}>
        ← Zpět
      </a>

      <div
        style={{
          background: "#fff",
          padding: 20,
          borderRadius: 16,
          border: "1px solid #ddd",
        }}
      >
        <img
          src="/vehicles/kombi-octavia.jpg"
          style={{ width: "100%", height: 200, objectFit: "contain" }}
        />

        <h1>Škoda Octavia</h1>
        <p>SPZ: 1TA234</p>

        <h3>Termíny</h3>
        <ul>
          <li>STK: 04.05.2026</li>
          <li>Výměna oleje: 01.05.2026</li>
          <li>Pojištění: 10.06.2026</li>
        </ul>
      </div>
    </main>
  );
}
