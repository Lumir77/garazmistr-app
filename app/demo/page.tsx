import React from "react";

const page: React.CSSProperties = {
  maxWidth: 1180,
  margin: "0 auto",
  padding: "40px 20px 80px",
  fontFamily: "Arial, sans-serif",
  color: "#111827",
};

const hero: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 24,
  alignItems: "center",
  marginBottom: 36,
};

const heroCard: React.CSSProperties = {
  background: "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
  color: "#fff",
  borderRadius: 28,
  padding: 28,
  boxShadow: "0 20px 50px rgba(17,24,39,0.18)",
};

const heroPanel: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: 28,
  padding: 20,
  boxShadow: "0 18px 40px rgba(17,24,39,0.08)",
};

const badge: React.CSSProperties = {
  display: "inline-block",
  background: "rgba(255,255,255,0.12)",
  color: "#fff",
  borderRadius: 999,
  padding: "8px 14px",
  fontSize: 13,
  fontWeight: 700,
  marginBottom: 14,
};

const h1: React.CSSProperties = {
  fontSize: "clamp(34px, 6vw, 54px)",
  lineHeight: 1.03,
  margin: "0 0 14px 0",
};

const lead: React.CSSProperties = {
  fontSize: 18,
  lineHeight: 1.65,
  color: "#e5e7eb",
  margin: 0,
};

const ctaRow: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 22,
};

const btnPrimary: React.CSSProperties = {
  display: "inline-block",
  background: "#fff",
  color: "#111827",
  borderRadius: 999,
  padding: "12px 18px",
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 700,
};

const btnSecondary: React.CSSProperties = {
  display: "inline-block",
  background: "transparent",
  color: "#fff",
  borderRadius: 999,
  padding: "12px 18px",
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 700,
  border: "1px solid rgba(255,255,255,0.3)",
};

const stepWrap: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: 22,
  alignItems: "center",
  marginTop: 22,
  marginBottom: 54,
};

const stepText: React.CSSProperties = {
  padding: "4px 4px 4px 0",
};

const stepNumber: React.CSSProperties = {
  display: "inline-flex",
  width: 40,
  height: 40,
  borderRadius: 999,
  alignItems: "center",
  justifyContent: "center",
  background: "#111827",
  color: "#fff",
  fontWeight: 800,
  fontSize: 16,
  marginBottom: 14,
};

const stepTitle: React.CSSProperties = {
  fontSize: 30,
  lineHeight: 1.1,
  margin: "0 0 10px 0",
};

const stepDesc: React.CSSProperties = {
  margin: 0,
  color: "#4b5563",
  lineHeight: 1.7,
  fontSize: 17,
};

const screen: React.CSSProperties = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 24,
  overflow: "hidden",
  boxShadow: "0 18px 40px rgba(17,24,39,0.08)",
};

const screenHead: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  padding: "12px 16px",
  background: "#f9fafb",
  borderBottom: "1px solid #e5e7eb",
};

const dot = (c: string): React.CSSProperties => ({
  width: 10,
  height: 10,
  borderRadius: 999,
  background: c,
});

const screenBody: React.CSSProperties = {
  padding: 18,
};

const label: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  color: "#6b7280",
  marginBottom: 6,
  fontWeight: 700,
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid #d1d5db",
  fontSize: 14,
  background: "#fff",
  boxSizing: "border-box",
};

const grid2: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 12,
};

const saveBtn: React.CSSProperties = {
  display: "inline-block",
  background: "#111827",
  color: "#fff",
  borderRadius: 999,
  padding: "11px 16px",
  fontWeight: 700,
  fontSize: 14,
};

const vehicleGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))",
  gap: 12,
};

const vehicleCard: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: 18,
  padding: 14,
  background: "#fff",
};

const muted: React.CSSProperties = {
  color: "#6b7280",
  fontSize: 13,
};

const tag = (bg: string, color = "#111827"): React.CSSProperties => ({
  display: "inline-block",
  background: bg,
  color,
  borderRadius: 999,
  padding: "6px 10px",
  fontSize: 12,
  fontWeight: 700,
});

const tableWrap: React.CSSProperties = {
  overflowX: "auto",
};

const table: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  minWidth: 640,
};

const td: React.CSSProperties = {
  textAlign: "left",
  padding: "12px 10px",
  borderBottom: "1px solid #e5e7eb",
  fontSize: 14,
};

const endBox: React.CSSProperties = {
  background: "#f9fafb",
  border: "1px solid #e5e7eb",
  borderRadius: 28,
  padding: 28,
  textAlign: "center",
  marginTop: 24,
};

function CarIcon() {
  return (
    <svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">
      <rect x="8" y="28" width="48" height="14" rx="6" fill="#111827" />
      <path d="M18 28l6-9h16l8 9" fill="#111827" />
      <circle cx="20" cy="44" r="5" fill="#fff" />
      <circle cx="44" cy="44" r="5" fill="#fff" />
      <circle cx="20" cy="44" r="2.5" fill="#111827" />
      <circle cx="44" cy="44" r="2.5" fill="#111827" />
    </svg>
  );
}

function PickupIcon() {
  return (
    <svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">
      <rect x="8" y="30" width="24" height="12" rx="4" fill="#111827" />
      <rect x="32" y="26" width="20" height="16" rx="3" fill="#111827" />
      <path d="M16 30l5-8h9l2 8" fill="#111827" />
      <circle cx="20" cy="44" r="5" fill="#fff" />
      <circle cx="44" cy="44" r="5" fill="#fff" />
      <circle cx="20" cy="44" r="2.5" fill="#111827" />
      <circle cx="44" cy="44" r="2.5" fill="#111827" />
    </svg>
  );
}

function KombiIcon() {
  return (
    <svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">
      <rect x="7" y="28" width="50" height="14" rx="6" fill="#111827" />
      <path d="M16 28l6-9h24l8 9" fill="#111827" />
      <circle cx="20" cy="44" r="5" fill="#fff" />
      <circle cx="46" cy="44" r="5" fill="#fff" />
      <circle cx="20" cy="44" r="2.5" fill="#111827" />
      <circle cx="46" cy="44" r="2.5" fill="#111827" />
    </svg>
  );
}

function SuvIcon() {
  return (
    <svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">
      <rect x="8" y="27" width="48" height="15" rx="6" fill="#111827" />
      <path d="M17 27l7-10h18l9 10" fill="#111827" />
      <circle cx="20" cy="45" r="5.5" fill="#fff" />
      <circle cx="44" cy="45" r="5.5" fill="#fff" />
      <circle cx="20" cy="45" r="2.8" fill="#111827" />
      <circle cx="44" cy="45" r="2.8" fill="#111827" />
    </svg>
  );
}

function ForkliftIcon() {
  return (
    <svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">
      <rect x="16" y="24" width="20" height="14" rx="3" fill="#111827" />
      <rect x="36" y="18" width="4" height="24" fill="#111827" />
      <rect x="40" y="18" width="2" height="28" fill="#111827" />
      <rect x="42" y="42" width="10" height="2" fill="#111827" />
      <rect x="42" y="46" width="10" height="2" fill="#111827" />
      <circle cx="22" cy="44" r="5" fill="#fff" />
      <circle cx="34" cy="44" r="5" fill="#fff" />
      <circle cx="22" cy="44" r="2.5" fill="#111827" />
      <circle cx="34" cy="44" r="2.5" fill="#111827" />
    </svg>
  );
}

function TrailerIcon() {
  return (
    <svg viewBox="0 0 64 64" width="42" height="42" aria-hidden="true">
      <rect x="12" y="24" width="28" height="16" rx="3" fill="#111827" />
      <path d="M40 32h10l4-4" stroke="#111827" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="44" r="5" fill="#fff" />
      <circle cx="34" cy="44" r="5" fill="#fff" />
      <circle cx="20" cy="44" r="2.5" fill="#111827" />
      <circle cx="34" cy="44" r="2.5" fill="#111827" />
    </svg>
  );
}

function WindowHeader({ title }: { title: string }) {
  return (
    <div style={screenHead}>
      <span style={dot("#ef4444")} />
      <span style={dot("#f59e0b")} />
      <span style={dot("#10b981")} />
      <div style={{ marginLeft: 8, fontSize: 13, color: "#6b7280", fontWeight: 700 }}>{title}</div>
    </div>
  );
}

function Step({
  number,
  title,
  text,
  screenContent,
  reverse,
}: {
  number: number;
  title: string;
  text: string;
  screenContent: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section
      style={{
        ...stepWrap,
        direction: reverse ? "rtl" : "ltr",
      }}
    >
      <div style={{ ...stepText, direction: "ltr" }}>
        <div style={stepNumber}>{number}</div>
        <h2 style={stepTitle}>{title}</h2>
        <p style={stepDesc}>{text}</p>
      </div>
      <div style={{ direction: "ltr" }}>{screenContent}</div>
    </section>
  );
}

export default function DemoPage() {
  return (
    <main style={page}>
      <section style={hero}>
        <div style={heroCard}>
          <div style={badge}>Demo aplikace Garážmistr</div>
          <h1 style={h1}>Přehled vozidel, termínů a připomínek bez ztrácení v datech.</h1>
          <p style={lead}>
            Demo ukazuje, jak Garážmistr funguje v praxi: od zadání vozidla přes přehled vozidel
            až po budoucí události a připomínky. Právě tam je jeho největší přínos.
          </p>

          <div style={ctaRow}>
            <a href="/register" style={btnPrimary}>Chci vědět, až bude spuštěn</a>
            <a href="/login" style={btnSecondary}>Přihlášení</a>
          </div>
        </div>

        <div style={heroPanel}>
          <WindowHeader title="Přehled dnes" />
          <div style={screenBody}>
            <div style={{ display: "grid", gap: 12 }}>
              <div style={{ ...vehicleCard, background: "#fee2e2" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Po termínu</div>
                <div style={{ fontSize: 15 }}>Mazda 6 — výměna oleje</div>
                <div style={muted}>15.12.2025</div>
              </div>
              <div style={{ ...vehicleCard, background: "#fef3c7" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Blíží se</div>
                <div style={{ fontSize: 15 }}>Dacia Duster — pojištění</div>
                <div style={muted}>za 4 dny</div>
              </div>
              <div style={{ ...vehicleCard, background: "#dcfce7" }}>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Naplánováno</div>
                <div style={{ fontSize: 15 }}>Přívěs Donak — dálniční známka</div>
                <div style={muted}>za 28 dní</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Step
        number={1}
        title="Zadání vozidla"
        text="Každé vozidlo má vlastní kartu. Uživatel doplní název, SPZ, typ vozidla, stav kilometrů a poznámku. Cílem je rychlé zadání bez složitého formuláře."
        screenContent={
          <div style={screen}>
            <WindowHeader title="Nové vozidlo" />
            <div style={screenBody}>
              <div style={grid2}>
                <div>
                  <label style={label}>Název vozidla</label>
                  <div style={input}>Dacia Duster</div>
                </div>
                <div>
                  <label style={label}>SPZ</label>
                  <div style={input}>2TB7391</div>
                </div>
              </div>

              <div style={{ ...grid2, marginTop: 12 }}>
                <div>
                  <label style={label}>Typ vozidla</label>
                  <div style={input}>SUV</div>
                </div>
                <div>
                  <label style={label}>Kilometry</label>
                  <div style={input}>128 450 km</div>
                </div>
              </div>

              <div style={{ marginTop: 12 }}>
                <label style={label}>Poznámka</label>
                <div style={{ ...input, minHeight: 72 }}>Rodinné vozidlo, běžný provoz.</div>
              </div>

              <div style={{ marginTop: 16 }}>
                <span style={saveBtn}>Uložit vozidlo</span>
              </div>
            </div>
          </div>
        }
      />

      <Step
        number={2}
        title="Přehled všech vozidel"
        text="V další obrazovce uživatel hned vidí všechna vozidla pohromadě. U každého je typ, základní stav a nejbližší důležitá událost. To je klíčové hlavně při větším počtu vozidel."
        reverse
        screenContent={
          <div style={screen}>
            <WindowHeader title="Vozidla" />
            <div style={screenBody}>
              <div style={vehicleGrid}>
                <div style={vehicleCard}>
                  <CarIcon />
                  <div style={{ fontWeight: 700, marginTop: 8 }}>Mazda 6</div>
                  <div style={muted}>1TA9385</div>
                  <div style={{ marginTop: 10 }}>{tag("#fee2e2")} Po termínu</div>
                </div>

                <div style={vehicleCard}>
                  <SuvIcon />
                  <div style={{ fontWeight: 700, marginTop: 8 }}>Dacia Duster</div>
                  <div style={muted}>2TB7391</div>
                  <div style={{ marginTop: 10 }}>{tag("#fef3c7")} Pojištění za 4 dny</div>
                </div>

                <div style={vehicleCard}>
                  <PickupIcon />
                  <div style={{ fontWeight: 700, marginTop: 8 }}>Toyota Hilux</div>
                  <div style={muted}>7TX5521</div>
                  <div style={{ marginTop: 10 }}>{tag("#dcfce7")} STK za 22 dní</div>
                </div>

                <div style={vehicleCard}>
                  <KombiIcon />
                  <div style={{ fontWeight: 700, marginTop: 8 }}>Škoda Superb</div>
                  <div style={muted}>3AL4408</div>
                  <div style={{ marginTop: 10 }}>{tag("#dcfce7")} Bez problému</div>
                </div>

                <div style={vehicleCard}>
                  <ForkliftIcon />
                  <div style={{ fontWeight: 700, marginTop: 8 }}>Mitsubishi VZV</div>
                  <div style={muted}>interní evidence</div>
                  <div style={{ marginTop: 10 }}>{tag("#fef3c7")} Servis za 9 dní</div>
                </div>

                <div style={vehicleCard}>
                  <TrailerIcon />
                  <div style={{ fontWeight: 700, marginTop: 8 }}>Přívěs Donak</div>
                  <div style={muted}>47A-921</div>
                  <div style={{ marginTop: 10 }}>{tag("#dcfce7")} Známka za 28 dní</div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <Step
        number={3}
        title="Zadání události"
        text="Ke každému vozidlu lze přidat STK, pojištění, servis, výměnu oleje, dálniční známku i vlastní připomínku. Právě z těchto údajů pak vzniká budoucí přehled termínů."
        screenContent={
          <div style={screen}>
            <WindowHeader title="Nová událost" />
            <div style={screenBody}>
              <div style={grid2}>
                <div>
                  <label style={label}>Vozidlo</label>
                  <div style={input}>Dacia Duster</div>
                </div>
                <div>
                  <label style={label}>Typ události</label>
                  <div style={input}>Pojištění</div>
                </div>
              </div>

              <div style={{ ...grid2, marginTop: 12 }}>
                <div>
                  <label style={label}>Datum</label>
                  <div style={input}>13.12.2026</div>
                </div>
                <div>
                  <label style={label}>Cena</label>
                  <div style={input}>8 950 Kč</div>
                </div>
              </div>

              <div style={{ marginTop: 12 }}>
                <label style={label}>Poznámka</label>
                <div style={{ ...input, minHeight: 72 }}>Pojištění Allianz, roční platba.</div>
              </div>

              <div style={{ marginTop: 16 }}>
                <span style={saveBtn}>Uložit událost</span>
              </div>
            </div>
          </div>
        }
      />

      <Step
        number={4}
        title="Přehled termínů a budoucích událostí"
        text="Tohle je hlavní výhoda Garážmistra. Uživatel vidí, co je po termínu, co se blíží a co je zatím v pořádku. Nemusí hledat v papírech, kalendářích ani tabulkách."
        reverse
        screenContent={
          <div style={screen}>
            <WindowHeader title="Budoucí události" />
            <div style={screenBody}>
              <div style={tableWrap}>
                <table style={table}>
                  <thead>
                    <tr>
                      <th style={td}>Vozidlo</th>
                      <th style={td}>Událost</th>
                      <th style={td}>Termín</th>
                      <th style={td}>Stav</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={td}>Mazda 6</td>
                      <td style={td}>Výměna oleje</td>
                      <td style={td}>15.12.2025</td>
                      <td style={td}><span style={tag("#fee2e2")}>Po termínu</span></td>
                    </tr>
                    <tr>
                      <td style={td}>Dacia Duster</td>
                      <td style={td}>Pojištění</td>
                      <td style={td}>13.12.2026</td>
                      <td style={td}><span style={tag("#fef3c7")}>Za 4 dny</span></td>
                    </tr>
                    <tr>
                      <td style={td}>Toyota Hilux</td>
                      <td style={td}>STK</td>
                      <td style={td}>18.05.2026</td>
                      <td style={td}><span style={tag("#dcfce7")}>Za 22 dní</span></td>
                    </tr>
                    <tr>
                      <td style={td}>Přívěs Donak</td>
                      <td style={td}>Dálniční známka</td>
                      <td style={td}>20.05.2026</td>
                      <td style={td}><span style={tag("#dcfce7")}>Za 28 dní</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }
      />

      <Step
        number={5}
        title="Připomínky a upozornění"
        text="Jakmile se termíny blíží, Garážmistr je přesune do připomínek. Uživatel tak ví, co řešit teď, co tento týden a co může zatím nechat být."
        screenContent={
          <div style={screen}>
            <WindowHeader title="Připomínky" />
            <div style={screenBody}>
              <div style={{ display: "grid", gap: 12 }}>
                <div style={{ ...vehicleCard, background: "#fee2e2" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <div>
                      <div style={{ fontWeight: 700 }}>Mazda 6 — výměna oleje</div>
                      <div style={muted}>Termín už uplynul</div>
                    </div>
                    <div>{tag("#fee2e2")}</div>
                  </div>
                </div>

                <div style={{ ...vehicleCard, background: "#fef3c7" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <div>
                      <div style={{ fontWeight: 700 }}>Dacia Duster — pojištění</div>
                      <div style={muted}>Za 4 dny</div>
                    </div>
                    <div>{tag("#fef3c7")}</div>
                  </div>
                </div>

                <div style={{ ...vehicleCard, background: "#eff6ff" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <div>
                      <div style={{ fontWeight: 700 }}>Mitsubishi VZV — servisní kontrola</div>
                      <div style={muted}>Za 9 dní</div>
                    </div>
                    <div>{tag("#dbeafe")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <section style={endBox}>
        <h2 style={{ fontSize: 32, margin: "0 0 12px 0" }}>Takto má Garážmistr fungovat</h2>
        <p style={{ maxWidth: 760, margin: "0 auto", color: "#4b5563", lineHeight: 1.7, fontSize: 17 }}>
          Hlavní přínos není v ukládání dat samotných, ale v tom, že budoucí události, termíny a připomínky
          jsou vidět jasně a včas. Přesně to pomáhá hlavně tam, kde už je více vozidel a začíná vznikat chaos.
        </p>

        <div style={{ ...ctaRow, justifyContent: "center", marginTop: 24 }}>
          <a href="/register" style={{ ...btnPrimary, background: "#111827", color: "#fff" }}>
            Chci vědět, až bude spuštěn
          </a>
          <a href="/login" style={{ ...btnSecondary, color: "#111827", border: "1px solid #d1d5db", background: "#fff" }}>
            Přihlášení
          </a>
        </div>
      </section>
    </main>
  );
}
