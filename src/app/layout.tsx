import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Karam Azmy Technologies",
    template: "%s · Karam Azmy Technologies",
  },
  description:
    "Perfektion im Aufbau: Die neue Website von Karam Azmy Technologies. Fokus: Engineering, Plattformen und Prozessoptimierung.",
  metadataBase: new URL("https://katechnologies.de"),
  alternates: {
    canonical: "https://katechnologies.de",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
