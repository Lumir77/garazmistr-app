
export default function DemoPage() {
  const section = { maxWidth: 1000, margin: "0 auto", padding: "60px 20px" };
  const card = {
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    padding: 20,
    background: "#fff",
  };

  return (
    <main style={{ fontFamily: "sans-serif", background: "#fafafa" }}>

      {/* HERO */}
      <section style={{ ...section, textAlign: "center" }}>
        <h1 style={{ fontSize: 42, marginBottom: 10 }}>
          Jak funguje Garážmistr v praxi
        </h1>
        <p style={{ color: "#555", fontSize: 18 }}>
          Jednoduchý přehled vozidel, termínů a připomínek na jednom místě.
        </p>
      </section>

      {/* KROK 1 */}
      <section style={section}>
        <h2>1. Přidání vozidla</h2>
        <p style={{ color: "#555" }}>
          Zadáte základní údaje o vozidle – název, SPZ a typ.
        </p>

        <div style={card}>
          <strong>Název:</strong> Dacia Duster<br/>
          <strong>SPZ:</strong> 2TB7391<br/>
          <strong>Typ:</strong> SUV
        </div>
      </section>

      {/* KROK 2 */}
      <section style={section}>
        <h2>2. Přehled všech vozidel</h2>
        <p style={{ color: "#555" }}>
          Všechny vozidla vidíte na jednom místě v přehledných kartách.
        </p>

        <div style={{ display: "grid", gap: 12 }}>
          <div style={card}>
            🚗 Dacia Duster — Pojištění za 4 dny
          </div>
          <div style={card}>
            🚐 Ford Transit — Servis OK
          </div>
          <div style={card}>
            🛻 Pickup Toyota — STK za 20 dní
          </div>
        </div>
      </section>

      {/* KROK 3 */}
      <section style={section}>
        <h2>3. Zadání událostí</h2>
        <p style={{ color: "#555" }}>
          Ke každému vozidlu přidáte STK, pojištění, servis nebo vlastní poznámky.
        </p>

        <div style={card}>
          Typ: Pojištění<br/>
          Datum: 13.12.2026<br/>
          Poznámka: Allianz
        </div>
      </section>

      {/* KROK 4 */}
      <section style={section}>
        <h2>4. Přehled termínů</h2>
        <p style={{ color: "#555" }}>
          Vidíte, co vás čeká dnes, tento týden i později.
        </p>

        <div style={{ display: "grid", gap: 10 }}>
          <div style={{ ...card, background: "#fee2e2" }}>
            ❗ Po termínu: výměna oleje
          </div>
          <div style={{ ...card, background: "#fef3c7" }}>
            ⚠ Za 4 dny: pojištění
          </div>
          <div style={{ ...card, background: "#dcfce7" }}>
            ✔ Za 30 dní: STK
          </div>
        </div>
      </section>

      {/* KROK 5 */}
      <section style={section}>
        <h2>5. Připomínky</h2>
        <p style={{ color: "#555" }}>
          Garážmistr vás včas upozorní na všechny důležité termíny.
        </p>

        <div style={card}>
          🔔 Upozornění: Pojištění končí za 4 dny
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...section, textAlign: "center" }}>
        <h2>To je vše</h2>
        <p style={{ color: "#555" }}>
          Garážmistr vám pomůže udržet pořádek ve vozidlech a termínech.
        </p>

        <div style={{ marginTop: 20 }}>
          <a href="/register" style={{
            background: "#111",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: 999,
            textDecoration: "none",
            marginRight: 10
          }}>
            Registrace
          </a>

          <a href="/login" style={{
            border: "1px solid #ccc",
            padding: "12px 20px",
            borderRadius: 999,
            textDecoration: "none"
          }}>
            Přihlášení
          </a>
        </div>
      </section>

    </main>
  );
}
