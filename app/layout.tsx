import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Garážmistr",
  description: "Správa vozidel, STK, pojištění a servisních termínů.",
};

const bodyStyle: React.CSSProperties = {
  margin: 0,
  fontFamily: "Arial, sans-serif",
  background: "#ffffff",
  color: "#111111",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body style={bodyStyle}>{children}</body>
    </html>
  );
}
