const pageStyle: React.CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "56px 20px 80px 20px",
  color: "#111",
};

const heroStyle: React.CSSProperties = {
  textAlign: "center",
  marginBottom: 48,
};

const badgeStyle: React.CSSProperties = {
  display: "inline-block",
  background: "#111",
  color: "#fff",
  padding: "10px 18px",
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 600,
  marginBottom: 18,
};

const headingStyle: React.CSSProperties = {
  fontSize: "clamp(32px, 5vw, 48px)",
  lineHeight: 1.1,
  margin: "0 0 16px 0",
};

const subheadingStyle: React.CSSProperties = {
  maxWidth: 760,
  margin: "0 auto",
  fontSize: 18,
  lineHeight: 1.6,
  color: "#444",
};

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 24,
  marginTop: 40,
};

const cardStyle: React.CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: 20,
  overflow: "hidden",
  background: "#fff",
  boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
};

const imageStyle: React.CSSProperties = {
  width: "100%",
  height: 180,
  objectFit: "cover",
  display: "block",
};

const cardBodyStyle: React.CSSProperties = {
  padding: 20,
};

const cardTitleStyle: React.CSSProperties = {
  margin: "0 0 10px 0",
  fontSize: 22,
  lineHeight: 1.25,
};

const cardTextStyle: React.CSSProperties = {
  margin: 0,
  color: "#555",
  lineHeight: 1.6,
  fontSize: 16,
};

const closingStyle: React.CSSProperties = {
  marginTop: 56,
  textAlign: "center",
  padding: "36px 24px",
  background: "#f7f7f8",
  borderRadius: 24,
};

const closingTextStyle: React.CSSProperties = {
  maxWidth: 760,
  margin: "0 auto 22px auto",
  fontSize: 18,
  lineHeight: 1.6,
  color: "#444",
};

const buttonRowStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: 12,
  flexWrap: "wrap",
};

const primaryBtnStyle: React.CSSProperties = {
  display: "inline-block",
  background: "#111",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 14,
  lineHeight: 1.2,
  whiteSpace: "nowrap",
};

const secondaryBtnStyle: React.CSSProperties = {
  display: "inline-block",
  background: "#f3f4f6",
  color: "#111",
  padding: "12px 20px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 600,
  fontSize: 14,
  lineHeight: 1.2,
  whiteSpace: "nowrap",
  border: "1px solid #d1d5db",
};

export default function DemoPage() {
  return (
    <main style={pageStyle}>
      <section style={heroStyle}>
        <div style={badgeStyle}>Ukázka aplikace Garážmistr</div>
        <h1 style={headingStyle}>Mějte všechny termíny svých vozidel pod kontrolou.</h1>
        <p style={subheadingStyle}>
          Garážmistr hlídá STK, pojištění, servis i další důležité události.
          Díky přehlednému systému máte vždy jasno v tom, co vás čeká — dnes i za měsíc.
        </p>
      </section>

      <section style={gridStyle}>
        <article style={cardStyle}>
          <img
            src="https://www.garazmistr.com/wp-content/uploads/2026/04/98047793a5d1c2571458f74e2fa22b1aad4651f1.jpg"
            alt="Přehled budoucích událostí"
            style={imageStyle}
          />
          <div style={cardBodyStyle}>
            <h2 style={cardTitleStyle}>Přehled budoucích událostí</h2>
            <p style={cardTextStyle}>
              Na jednom místě uvidíte všechny nadcházející termíny. Bez hledání v kalendářích,
              poznámkách nebo tabulkách.
            </p>
          </div>
        </article>

        <article style={cardStyle}>
          <img
            src="https://www.garazmistr.com/wp-content/uploads/2026/04/88a662fcd2357d6077de53fcb138ac22df420ab4.jpg"
            alt="Hlídání STK a pojištění"
            style={imageStyle}
          />
          <div style={cardBodyStyle}>
            <h2 style={cardTitleStyle}>Hlídání STK a pojištění</h2>
            <p style={cardTextStyle}>
              Včasné upozornění na STK, pojištění a další povinnosti. Nic důležitého vám neunikne.
            </p>
          </div>
        </article>

        <article style={cardStyle}>
          <img
            src="https://www.garazmistr.com/wp-content/uploads/2026/04/a99bb60bcca2b4db9c69d167a6a8486dfcd0aa06.jpg"
            alt="Servis a údržba bez chaosu"
            style={imageStyle}
          />
          <div style={cardBodyStyle}>
            <h2 style={cardTitleStyle}>Servis a údržba bez chaosu</h2>
            <p style={cardTextStyle}>
              Mějte přehled o údržbě, opravách i plánovaných servisech pro každé vozidlo zvlášť.
            </p>
          </div>
        </article>

        <article style={cardStyle}>
          <img
            src="https://www.garazmistr.com/wp-content/uploads/2026/04/98047793a5d1c2571458f74e2fa22b1aad4651f1.jpg"
            alt="Ideální při více vozidlech"
            style={imageStyle}
          />
          <div style={cardBodyStyle}>
            <h2 style={cardTitleStyle}>Ideální při více vozidlech</h2>
            <p style={cardTextStyle}>
              Čím více vozidel spravujete, tím větší je chaos. Garážmistr vám v tom udělá pořádek.
            </p>
          </div>
        </article>
      </section>

      <section style={closingStyle}>
        <p style={closingTextStyle}>
          Garážmistr je řešení pro každého, kdo chce mít vozidla pod kontrolou — od jednotlivců po menší firmy.
        </p>

        <div style={buttonRowStyle}>
          <a href="/register" style={primaryBtnStyle}>Chci vědět, až bude spuštěn</a>
          <a href="/login" style={secondaryBtnStyle}>Přihlášení</a>
        </div>
      </section>
    </main>
  );
}
