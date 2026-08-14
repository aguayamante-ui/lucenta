import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUCENTA | Recursos Humanos y asesoría laboral",
  description:
    "Asesoría laboral, reclutamiento, gestión de personal y consultoría de RR. HH. para PYMES, emprendedores y startups en Chile.",
  metadataBase: new URL("https://lucenta.cl")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
