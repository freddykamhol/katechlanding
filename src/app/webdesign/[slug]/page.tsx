import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "../../components/contact-form";
import { locationBySlug, locationPages } from "../../seo/locations";

const siteUrl = "https://katechnologies.de";
const references = [
  ["Tattoo Sfumato", "/references/tattoo-sfumato.png", "tattoosfumato.de"],
  ["Jimmy Automobile", "/references/jimmy-automobile.png", "jimmyautomobile.de"],
  ["Milodo Medical", "/references/milodo-medical.png", "milodo-medical.de"],
  ["Dumah Edition", "/references/dumah-edition.png", "dumahedition.de"],
] as const;

export function generateStaticParams() {
  return locationPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = locationBySlug[slug];
  if (!location) return {};
  return {
    title: location.title,
    description: location.description,
    alternates: { canonical: `${siteUrl}/webdesign/${location.slug}` },
    openGraph: {
      title: location.title,
      description: location.description,
      url: `${siteUrl}/webdesign/${location.slug}`,
      type: "website",
      locale: "de_DE",
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = locationBySlug[slug];
  if (!location) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${siteUrl}/webdesign/${location.slug}#service`,
        name: `Webdesign ${location.city}`,
        serviceType: "Webdesign und Individualsoftware",
        description: location.description,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: { "@type": "City", name: location.city },
        url: `${siteUrl}/webdesign/${location.slug}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startseite", item: siteUrl },
          { "@type": "ListItem", position: 2, name: `Webdesign ${location.city}`, item: `${siteUrl}/webdesign/${location.slug}` },
        ],
      },
    ],
  };

  return (
    <main className="location-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <header className="location-topbar">
        <Link className="brand" href="/" aria-label="KA Technologies Startseite"><span className="brand-mark">K<span>/</span>A</span><span className="brand-name">KA Technologies<small>digital systems studio</small></span></Link>
        <Link className="location-back" href="/#kontakt">Projekt starten <span>↗</span></Link>
      </header>
      <section className="location-hero">
        <p className="eyebrow lime">WEBDESIGN · {location.region.toUpperCase()}</p>
        <h1>Webdesign<br /><span>{location.city}.</span></h1>
        <p className="location-lead">{location.intro}</p>
        <div className="location-actions"><Link className="button button-lime" href="/#kontakt">Projekt besprechen <span>↗</span></Link><Link className="text-link" href="/">KA Technologies <span>↗</span></Link></div>
      </section>
      <section className="location-content">
        <div><p className="eyebrow">DIGITALE LÖSUNGEN FÜR {location.city.toUpperCase()}</p><h2>Mehr als eine<br /><span>schöne Website.</span></h2></div>
        <div className="location-copy"><p>Wir verbinden Webdesign, Inhalte und Technik zu einem System, das zu Ihrem Unternehmen passt. Ihre Website wird zur klaren Anlaufstelle für Kunden – und kann bei Bedarf mit Portalen, Automatisierungen oder internen Tools wachsen.</p><p>{location.localAngle}</p><div className="location-services"><span>Webdesign &amp; Landingpages</span><span>Individualsoftware</span><span>Portale &amp; Automatisierung</span></div></div>
      </section>
      <section className="location-references"><div className="location-section-intro"><div><p className="eyebrow lime">AUSGEWÄHLTE PROJEKTE</p><h2>Was wir<br /><span>bauen.</span></h2></div><Link className="button button-outline" href="/#referenzen">Alle Referenzen ansehen <span>↗</span></Link></div><div className="location-reference-grid">{references.map(([name, image, domain]) => <a className="location-reference-card" href="/#referenzen" key={name}><img src={image} alt={`Screenshot von ${name}`} loading="lazy" /><span><b>{name}</b><small>{domain}</small></span></a>)}</div></section>
      <section id="kontakt" className="contact-section location-contact"><div className="contact-intro"><p className="eyebrow lime">IHR PROJEKT IN {location.city.toUpperCase()}</p><h2>Bereit für<br /><span>den nächsten Schritt?</span></h2><p>Erzählen Sie uns, was Sie digital voranbringen möchten. Wir melden uns mit einer ehrlichen Einschätzung und einem konkreten nächsten Schritt.</p><div className="contact-meta"><a href="mailto:info@katechnologies.de">info@katechnologies.de</a><a href="tel:+4915568126206">0155 68126206</a></div></div><div className="contact-form-wrap"><ContactForm /></div></section>
      <section className="location-next"><div><p className="eyebrow lime">WEITER ENTDECKEN</p><h2>Auch in Ihrer<br /><span>Region.</span></h2></div><nav aria-label="Weitere Orte"><Link href="/">Weserbergland Übersicht <span>↗</span></Link>{location.nearby.map((nearby) => { const target = locationPages.find((item) => item.city === nearby); return target ? <Link href={`/webdesign/${target.slug}`} key={target.slug}>Webdesign {nearby} <span>↗</span></Link> : null; })}</nav></section>
      <footer className="location-footer"><Link href="/">KA Technologies</Link><span>Webdesign &amp; Individualsoftware im Weserbergland</span><Link href="/#kontakt">Kontakt ↗</Link></footer>
    </main>
  );
}
