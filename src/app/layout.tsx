import type { Metadata } from "next";
import CookieNotice from "./components/cookie-notice";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Karam Azmy Technologies",
    template: "%s · Karam Azmy Technologies",
  },
  description:
    "Karam Azmy Technologies entwickelt individuelle Software, optimiert Prozesse und erstellt Websites für Unternehmen.",
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
      <body className="min-h-full flex flex-col">
        {children}
        <CookieNotice />
      </body>
    </html>
  );
}
