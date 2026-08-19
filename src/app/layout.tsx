import type { Metadata, Viewport } from "next";
import CookieNotice from "./components/cookie-notice";
import "./globals.css";

const siteUrl = "https://katechnologies.de";
const siteTitle = "KA Technologies | Webdesign, Software & Prozessoptimierung";
const siteDescription =
  "KA Technologies entwickelt verkaufsstarke Websites, individuelle Software und effizientere digitale Prozesse für Unternehmen.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s · KA Technologies",
  },
  description: siteDescription,
  applicationName: "KA Technologies",
  authors: [{ name: "Freddy Karam Azmy", url: siteUrl }],
  creator: "KA Technologies",
  publisher: "Karam Azmy Media",
  category: "Webdesign und Softwareentwicklung",
  keywords: [
    "Softwareentwicklung Holzminden",
    "KA Technologies",
    "Karam Azmy Media",
    "Prozessoptimierung Software",
    "Websites erstellen lassen",
    "Webdesign Holzminden",
    "Landingpage erstellen lassen",
    "SSDmanagement",
    "MPcontrol",
    "MoveOffice",
    "Vermietungssystem",
    "Zeiterfassung",
    "Individualsoftware",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "de-DE": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteUrl,
    siteName: "KA Technologies",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "KA Technologies – Webdesign, Software und Prozessoptimierung",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f7f3ec",
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
