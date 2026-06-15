import type { Metadata, Viewport } from "next";
import CookieNotice from "./components/cookie-notice";
import "./globals.css";

const siteUrl = "https://katechnologies.de";
const siteTitle = "Karam Azmy Technologies | Software, Websites & Prozessoptimierung";
const siteDescription =
  "Individuelle Software, Websites und digitale Systeme für bessere Abläufe: SSDmanagement, MPcontrol, Vermietung, MoveOffice und Zeiterfassung.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s · Karam Azmy Technologies",
  },
  description: siteDescription,
  applicationName: "Karam Azmy Technologies",
  authors: [{ name: "Freddy Karam Azmy", url: siteUrl }],
  creator: "Karam Azmy Technologies",
  publisher: "Karam Azmy Media",
  category: "Softwareentwicklung",
  keywords: [
    "Softwareentwicklung Holzminden",
    "Karam Azmy Technologies",
    "Karam Azmy Media",
    "Prozessoptimierung Software",
    "Websites erstellen lassen",
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
    siteName: "Karam Azmy Technologies",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Karam Azmy Technologies – Software, Websites und Prozessoptimierung",
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
