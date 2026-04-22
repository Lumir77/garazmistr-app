const wrap: React.CSSProperties = {
  maxWidth: 900,
  margin: "0 auto",
  padding: "60px 20px",
  textAlign: "center",
};

const buttons: React.CSSProperties = {
  display: "flex",
  gap: 12,
  justifyContent: "center",
  flexWrap: "wrap",
  marginTop: 24,
};

const btn: React.CSSProperties = {
  background: "#111",
  color: "#fff",
  padding: "12px 20px",
  borderRadius: 999,
  textDecoration: "none",
  fontWeight: 600,
};

export default function HomePage() {
  return (
    <main style={wrap}>
      <h1>Garážmistr App</h1>
      <p>Tady bude samotná aplikace. Níže jsou první veřejné stránky.</p>

      <div style={buttons}>
        <a href="/demo" style={btn}>Demo</a>
        <a href="/login" style={btn}>Přihlášení</a>
        <a href="/register" style={btn}>Registrace</a>
      </div>
    </main>
  );
}
