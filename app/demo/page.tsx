import React from "react";

const pageStyle: React.CSSProperties = {
  maxWidth: 1180,
  margin: "0 auto",
  padding: "40px 20px 80px",
  color: "#111",
};

const heroWrap: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: 28,
  alignItems: "center",
  marginBottom: 36,
};

const heroCard: React.CSSProperties = {
  background: "#f7f7f8",
  border: "1px solid #e5e7eb",
  borderRadius: 28,
  padding: 28,
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  background: "#111",
  color: "#fff",
  padding: "8px 14px",
  borderRadius: 999,
  fontSize: 13,
  fontWeight: 700,
  marginBottom: 16,
};

const h1Style: React.CSSProperties = {
  fontSize: "clamp(34px, 5vw, 54px)",
  lineHeight: 1.05,
  margin: "0 0 14px 0",
};

const leadStyle: React.CSSProperties = {
  fontSize: 18,
  lineHeight: 1.65,
  color: "#444",
  margin: 0,
};

const ctaRow: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 22,
};

const primaryBtn: React.CSSProperties = {
  display: "inline-block",
  background: "#111",
  color: "#fff",
  padding: "12px 18px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 14,
};

const secondaryBtn: React.CSSProperties = {
  display: "inline-block",
  background: "#fff",
  color: "#111",
  padding: "12px 18px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 700,
  fontSize: 14,
  border: "1px solid #d1d5db",
};

const sectionTitle: React.CSSProperties = {
  fontSize: 30,
  margin: "0 0 10px 0",
  lineHeight: 1.15,
};

const sectionText: React.CSSProperties = {
  color: "#555",
  lineHeight: 1.65,
  fontSize: 17,
  margin: 0,
};

const grid3: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: 18,
  marginTop: 24,
};

const gridVehicles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
  gap: 16,
  marginTop: 24,
};

const card: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 22,
  padding: 20,
  boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
};

const softCard: React.CSSProperties = {
  background: "#f8fafc",
  border: "1px solid #e5e7eb",
  borderRadius: 22,
  padding: 20,
};

const statWrap: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: 12,
  marginTop: 18,
};

const statCard: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 16,
  textAlign: "center",
};

const mockPanel: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: 24,
  padding: 18,
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
};

const tableWrap: React.CSSProperties = {
  overflowX: "auto",
  marginTop: 16,
};

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: 680,
};

const thTd: React.CSSProperties = {
  textAlign: "left",
  padding: "12px 10px",
  borderBottom: "1px solid #e5e7eb",
  fontSize: 14,
};

const tag = (bg: string, color = "#111"): React.CSSProperties => ({
  display: "inline-block",
  background: bg,
  color,
  padding: "6px 10px",
  borderRadius: 999,
  fontSize: 12,
  fontWeight: 700,
});

function PersonalCarIcon() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <rect x="8" y="28" width="48" height="14" rx="6" fill="#111" />
      <path d="M18 28l6-10h16l8 10" fill="#111" />
      <circle cx="20" cy="44" r="5" fill="#fff" />
      <circle cx="44" cy="44" r="5" fill="#fff" />
      <circle cx="20" cy="44" r="2.6" fill="#111" />
      <circle cx="44" cy="44" r="2.6" fill="#111" />
    </svg>
  );
}

function PickupIcon() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <rect x="8" y="30" width="24" height="12" rx="4" fill="#111" />
      <rect x="32" y="26" width="20" height="16" rx="3" fill="#111" />
      <path d="M16 30l5-8h9l2 8" fill="#111" />
      <circle cx="20" cy="44" r="5" fill="#fff" />
      <circle cx="44" cy="44" r="5" fill="#fff" />
      <circle cx="20" cy="44" r="2.6" fill="#111" />
      <circle cx="44" cy="44" r="2.6" fill="#111" />
    </svg>
  );
}

function KombiIcon() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <rect x="7" y="28" width="50" height="14" rx="6" fill="#111" />
      <path d="M16 28l6-9h24l8 9" fill="#111" />
      <circle cx="20" cy="44" r="5" fill="#fff" />
      <circle cx="46" cy="44" r="5" fill="#fff" />
      <circle cx="20" cy="44" r="2.6" fill="#111" />
      <circle cx="46" cy="44" r="2.6" fill="#111" />
    </svg>
  );
}

function SuvIcon() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <rect x="8" y="27" width="48" height="15" rx="6" fill="#111" />
      <path d="M17 27l7-10h18l9 10" fill="#111" />
      <circle cx="20" cy="45" r="5.5" fill="#fff" />
      <circle cx="44" cy="45" r="5.5" fill="#fff" />
      <circle cx="20" cy="45" r="2.8" fill="#111" />
      <circle cx="44" cy="45" r="2.8" fill="#111" />
    </svg>
  );
}

function ForkliftIcon() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <rect x="16" y="24" width="20" height="14" rx="3" fill="#111" />
      <rect x="36" y="18" width="4" height="24" fill="#111" />
      <rect x="40" y="18" width="2" height="28" fill="#111" />
      <rect x="42" y="42" width="10" height="2" fill="#111" />
      <rect x="42" y="46" width="10" height="2" fill="#111" />
      <circle cx="22" cy="44" r="5" fill="#fff" />
      <circle cx="34" cy="44" r="5" fill="#fff" />
      <circle cx="22" cy="44" r="2.6" fill="#111" />
      <circle cx="34" cy="44" r="2.6" fill="#111" />
    </svg>
  );
}

function TrailerIcon() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" aria-hidden="true">
      <rect x="12" y="24" width="28" height="16" rx="3" fill="#111" />
      <path d="M40 32h10l4-4" stroke="#111" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="44" r="5" fill="#fff" />
      <circle cx="34" cy="44" r="5" fill="#fff" />
      <circle cx="20" cy="44" r="2.6" fill="#111" />
      <circle cx="34" cy="44" r="2.6" fill="#111" />
    </svg>
  );
}

function VehicleTypeCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div style={card}>
      <div style={{ marginBottom: 10 }}>{icon}</div>
      <h3 style={{ margin: "0 0 8px 0", fontSize: 20 }}>{title}</h3>
      <p style={{ margin: 0, color: "#555", lineHeight: 1.55 }}>{text}</p>
    </div>
  );
}

function ReminderCard({
  title,
  vehicle,
  due,
  status,
  note,
}: {
  title: string;
  vehicle: string;
  due: string;
  status: React.ReactNode;
  note: string;
}) {
  return (
    <div style={card}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "start" }}>
        <div>
          <h3 style={{ margin: "0 0 6px 0", fontSize: 20 }}>{title}</h3>
          <div style={{ color: "#333", fontWeight: 600, marginBottom: 4 }}>{vehicle}</div>
          <div style={{ color: "#666", fontSize: 14 }}>Termín: {due}</div>
        </div>
        <div>{status}</div>
      </div>
      <p style={{ margin: "14px 0 0 0", color: "#555", lineHeight: 1.55 }}>{note}</p>
    </div>
  );
}

export default function DemoPage() {
  return (
    <main style={pageStyle}>
      <section style={heroWrap}>
        <div style={heroCard}>
          <div style={badgeStyle}>Demo aplikace Garážmistr</div>
          <h1 style={h1Style}>Mějte budoucí termíny všech vozidel pod kontrolou.</h1>
          <p style={leadStyle}>
            Garážmistr pomáhá hlídat STK, pojištění, servis, dálniční známky i vlastní připomínky.
            Největší přínos ukáže tam, kde už je více vozidel a člověk se začíná ztrácet v datech.
          </p>

          <div style={ctaRow}>
            <a href="/register" style={primaryBtn}>
              Chci vědět, až bude spuštěn
            </a>
            <a href="/login" style={secondaryBtn}>
              Přihlášení
            </a>
          </div>

          <div style={statWrap}>
            <div style={statCard}>
              <div style={{ fontSize: 30, fontWeight: 800 }}>8</div>
              <div style={{ color: "#666", fontSize: 14 }}>evidovaných vozidel</div>
            </div>
            <div style={statCard}>
              <div style={{ fontSize: 30, fontWeight: 800 }}>3</div>
              <div style={{ color: "#666", fontSize: 14 }}>blížící se termíny</div>
            </div>
            <div style={statCard}>
              <div style={{ fontSize: 30, fontWeight: 800 }}>1</div>
              <div style={{ color: "#666", fontSize: 14 }}>urgentní událost</div>
            </div>
          </div>
        </div>

        <div style={mockPanel}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
            <div>
              <div style={{ fontSize: 13, color: "#666", marginBottom: 4 }}>Přehled dnes</div>
              <div style={{ fontSize: 24, fontWeight: 800 }}>Nejbližší připomínky</div>
            </div>
            <div style={tag("#111", "#fff")}>Aktivní</div>
          </div>

          <div style={{ display: "grid", gap: 10 }}>
            <div style={{ ...softCard, padding: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div style={{ fontWeight: 700 }}>Pojištění</div>
                  <div style={{ color: "#666", fontSize: 14 }}>Dacia Duster (2TB7391)</div>
                </div>
                <div style={tag("#fef3c7")}>za 4 dny</div>
              </div>
            </div>

            <div style={{ ...softCard, padding: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div style={{ fontWeight: 700 }}>Výměna oleje</div>
                  <div style={{ color: "#666", fontSize: 14 }}>Mazda 6 (1TA9385)</div>
                </div>
                <div style={tag("#fee2e2")}>po termínu</div>
              </div>
            </div>

            <div style={{ ...softCard, padding: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div style={{ fontWeight: 700 }}>Dálniční známka</div>
                  <div style={{ color: "#666", fontSize: 14 }}>Přívěs Donak 47</div>
                </div>
                <div style={tag("#dcfce7")}>za 28 dní</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 18 }}>
        <h2 style={sectionTitle}>Co v demu uvidíte</h2>
        <p style={sectionText}>
          Demo je navržené tak, aby ukázalo reálné použití: přehled budoucích událostí, práci s více typy vozidel,
          jednoduchou evidenci a rychlou orientaci v tom, co je potřeba řešit dnes, tento týden a tento měsíc.
        </p>

        <div style={grid3}>
          <ReminderCard
            title="Urgentní připomínka"
            vehicle="Mazda 6 (1TA9385)"
            due="15.12.2025"
            status={<span style={tag("#fee2e2")}>Po termínu</span>}
            note="Výměna oleje nebyla dosud potvrzena. Systém ji drží v urgentních událostech, dokud nebude vyřízena nebo přeplánována."
          />

          <ReminderCard
            title="Blížící se povinnost"
            vehicle="Dacia Duster (2TB7391)"
            due="13.12.2026"
            status={<span style={tag("#fef3c7")}>Brzy</span>}
            note="Pojištění se blíží. Uživatel vidí termín v přehledu i v detailu vozidla a může doplnit poznámku nebo úhradu."
          />

          <ReminderCard
            title="Plánovaná událost"
            vehicle="Přívěs Donak 47"
            due="29.03.2026"
            status={<span style={tag("#dcfce7")}>Naplánováno</span>}
            note="Dálniční známka je zaevidovaná dopředu. Garážmistr ukáže, že je vše v pořádku, ale termín zůstane pod kontrolou."
          />
        </div>
      </section>

      <section style={{ marginTop: 52 }}>
        <h2 style={sectionTitle}>Typy vozidel v jedné aplikaci</h2>
        <p style={sectionText}>
          Garážmistr nemá být jen pro jedno osobní auto. Smysl dává hlavně tam, kde se spravuje více různých vozidel
          a každé má své termíny, náklady a povinnosti.
        </p>

        <div style={gridVehicles}>
          <VehicleTypeCard
            icon={<PersonalCarIcon />}
            title="Osobní auto"
            text="Běžný provoz, STK, pojištění, servis, pneumatiky."
          />
          <VehicleTypeCard
            icon={<PickupIcon />}
            title="Pickup"
            text="Pracovní použití, větší nájezdy, servisní přehled."
          />
          <VehicleTypeCard
            icon={<KombiIcon />}
            title="Kombi"
            text="Rodinné nebo firemní vozidlo s pravidelnými úkony."
          />
          <VehicleTypeCard
            icon={<SuvIcon />}
            title="SUV"
            text="Vyšší auto, více provozních nákladů a plánovaných servisů."
          />
          <VehicleTypeCard
            icon={<ForkliftIcon />}
            title="Vysokozdvižný vozík"
            text="Technické kontroly, provozní servis a odpovědná osoba."
          />
          <VehicleTypeCard
            icon={<TrailerIcon />}
            title="Přívěs"
            text="Známka, kontroly, evidence a vlastní připomínky."
          />
        </div>
      </section>

      <section style={{ marginTop: 52 }}>
        <div style={mockPanel}>
          <h2 style={{ ...sectionTitle, marginBottom: 8 }}>Ukázka přehledu vozidel</h2>
          <p style={{ ...sectionText, marginBottom: 6 }}>
            V praxi má uživatel vidět jednoduchý seznam, stav a nejbližší důležité události. Na PC může být více dat
            najednou, na mobilu se vše skládá pod sebe.
          </p>

          <div style={tableWrap}>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={thTd}>Vozidlo</th>
                  <th style={thTd}>Kategorie</th>
                  <th style={thTd}>Nejbližší událost</th>
                  <th style={thTd}>Termín</th>
                  <th style={thTd}>Stav</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={thTd}>Dacia Duster (2TB7391)</td>
                  <td style={thTd}>Osobní</td>
                  <td style={thTd}>Pojištění</td>
                  <td style={thTd}>13.12.2026</td>
                  <td style={thTd}><span style={tag("#fef3c7")}>Brzy</span></td>
                </tr>
                <tr>
                  <td style={thTd}>Mazda 6 (1TA9385)</td>
                  <td style={thTd}>Osobní</td>
                  <td style={thTd}>Výměna oleje</td>
                  <td style={thTd}>15.12.2025</td>
                  <td style={thTd}><span style={tag("#fee2e2")}>Po termínu</span></td>
                </tr>
                <tr>
                  <td style={thTd}>Přívěs Donak 47</td>
                  <td style={thTd}>Přívěs</td>
                  <td style={thTd}>Dálniční známka</td>
                  <td style={thTd}>29.03.2026</td>
                  <td style={thTd}><span style={tag("#dcfce7")}>OK</span></td>
                </tr>
                <tr>
                  <td style={thTd}>Carelli Elevatori Mitsubishi</td>
                  <td style={thTd}>VZV</td>
                  <td style={thTd}>Servisní kontrola</td>
                  <td style={thTd}>10.01.2026</td>
                  <td style={thTd}><span style={tag("#dcfce7")}>Naplánováno</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 52 }}>
        <div style={{ ...heroCard, padding: 26 }}>
          <h2 style={{ ...sectionTitle, marginBottom: 10 }}>Jak bude Garážmistr fungovat v praxi</h2>
          <div style={grid3}>
            <div style={softCard}>
              <h3 style={{ marginTop: 0, fontSize: 20 }}>1. Přidání vozidla</h3>
              <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>
                Uživatel založí vozidlo, doplní základní údaje, SPZ, kategorii, kilometry a důležité termíny.
              </p>
            </div>
            <div style={softCard}>
              <h3 style={{ marginTop: 0, fontSize: 20 }}>2. Evidence událostí</h3>
              <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>
                Ke každému vozidlu se ukládají servisní úkony, pojištění, STK, výměny a vlastní připomínky.
              </p>
            </div>
            <div style={softCard}>
              <h3 style={{ marginTop: 0, fontSize: 20 }}>3. Přehled a upozornění</h3>
              <p style={{ margin: 0, color: "#555", lineHeight: 1.6 }}>
                Systém ukáže, co je po termínu, co se blíží a co je v pořádku. To je hlavní přínos celé aplikace.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: 52 }}>
        <div style={{ ...mockPanel, textAlign: "center" }}>
          <div style={badgeStyle}>Připraveno pro PC, tablet i mobil</div>
          <h2 style={{ ...sectionTitle, marginBottom: 10 }}>Jednoduchý přehled bez ztrácení v datech</h2>
          <p style={{ ...sectionText, maxWidth: 760, margin: "0 auto" }}>
            Garážmistr je určen pro jednotlivce, rodiny i menší firmy, které chtějí mít vozidla pod kontrolou.
            Hlavní hodnota je v tom, že budoucí termíny, připomínky a události jsou vidět jasně a včas.
          </p>

          <div style={{ ...ctaRow, justifyContent: "center" }}>
            <a href="/register" style={primaryBtn}>
              Chci vědět, až bude spuštěn
            </a>
            <a href="/login" style={secondaryBtn}>
              Přihlášení
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
