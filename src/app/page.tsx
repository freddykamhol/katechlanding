import ContactForm from "./components/contact-form";
import MobileMenu from "./components/mobile-menu";
import { locationPages } from "./seo/locations";
import BrandIcon from "./ui/brand-icons";

const systems = [
  ["01", "Webdesign", "Individuelle Websites und Landingpages: klare Inhalte, überzeugendes Design, schnelle Ladezeiten und ein einfacher Weg zur Anfrage."],
  ["02", "Individualsoftware", "Webanwendungen, Kundenportale und interne Tools, die sich an Ihren Abläufen orientieren. Wartbar, erweiterbar und auf Ihr Unternehmen zugeschnitten."],
  ["03", "Prozesse", "Bestehende Abläufe verbinden und wiederkehrende Aufgaben sinnvoll automatisieren — damit mehr Zeit für Ihr Kerngeschäft bleibt."],
];

const products = [
  ["SSDmanagement", "Schulsanitätsdienst komplett organisieren"],
  ["MPcontrol", "Medizinprodukte und Prüfpflichten im Griff"],
  ["MoveOffice", "Umzüge, Kunden und Routen zentral steuern"],
  ["Vermietungssystem", "Fahrzeuge, Inventar und Verträge digital verwalten"],
  ["Zeiterfassung", "Arbeitszeiten einfach und sauber nachweisen"],
  ["Webdesign", "Digital sichtbar werden und Anfragen gewinnen"],
];

const references = [
  { number: "01", name: "Tattoo Sfumato", url: "https://tattoosfumato.de", domain: "tattoosfumato.de", description: "Website für das Tattoo-Studio in Einbeck mit Verwaltungsportal und smarten Automatisierungen – unter anderem für die Terminvergabe.", system: "BlackbookOS · Studio-Management", screenshot: "/references/tattoo-sfumato.png" },
  { number: "02", name: "Jimmy Automobile", url: "https://jimmyautomobile.de", domain: "jimmyautomobile.de", description: "Moderner Auftritt für den Gebrauchtwagen-Händler aus Boffzen – inklusive eigenem Portal für Anfragen und Inserate.", system: "Website · Anfrage- & Inserateportal", screenshot: "/references/jimmy-automobile.png" },
  { number: "03", name: "Milodo Medical", url: "https://milodo-medical.de", domain: "milodo-medical.de", description: "Moderne Website und umfangreiches Mitarbeiterportal für Personal- und Dienstverwaltung, Stundenzettel, Unterlagen und direkte Kundenanfragen.", system: "Mitarbeiterportal · Kundenanbindung", screenshot: "/references/milodo-medical.png" },
  { number: "04", name: "Dumah Edition", url: "https://dumahedition.de", domain: "dumahedition.de", description: "Digitaler Auftritt für die Clothing-Brand mit Bestellportal, Live-Stats und zentraler Übersicht über Bestellungen.", system: "Brand Website · Bestellportal", screenshot: "/references/dumah-edition.png" },
];

const faqs = [
  ["Arbeiten Sie im gesamten Weserbergland?", "Ja. Von unserem Standort Holzminden begleiten wir Unternehmen im gesamten Weserbergland — unter anderem in Hameln, Höxter, Bad Pyrmont, Bodenwerder, Rinteln und Stadtoldendorf. Abstimmungen sind auch digital möglich."],
  ["Was gehört zu einer neuen Website?", "Wir stimmen Struktur, Gestaltung und Inhalte auf Ihr Angebot ab und setzen die Website für Smartphone, Tablet und Desktop um. Suchmaschinen, Ladezeiten und einfache Kontaktmöglichkeiten werden von Anfang an berücksichtigt. Den genauen Leistungsumfang vereinbaren wir vor Projektstart."],
  ["Wie starten wir?", "Wir beginnen mit einem kurzen, ehrlichen Gespräch über Ziel, Ausgangslage und Engpass. Danach bekommen Sie eine klare Empfehlung für den sinnvollsten ersten Schritt."],
  ["Entwickeln Sie auch individuelle Software?", "Ja. Von kleinen internen Tools bis zu kundenspezifischen Portalen und Managementsystemen entwickeln wir Lösungen, die zu Ihrem tatsächlichen Ablauf passen."],
  ["Kann ich mit einem kleinen Projekt starten?", "Absolut. Ein fokussierter erster Baustein reduziert Risiko und schafft schnell einen sichtbaren Nutzen. Danach entscheiden Sie in Ruhe über den nächsten Ausbau."],
];

function SocialIcon({ type }: { type: "instagram" | "youtube" }) {
  return type === "instagram" ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.8" r=".9" className="social-icon-dot" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4" /><path d="m10 9 5 3-5 3Z" className="social-icon-play" /></svg>
  );
}


const cities = ["Holzminden", "Hameln", "Höxter", "Bad Pyrmont", "Bodenwerder", "Rinteln", "Stadtoldendorf"];
const organizationId = "https://katechnologies.de/#organization";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": organizationId,
      name: "KA Technologies",
      legalName: "Karam Azmy Media",
      url: "https://katechnologies.de/",
      image: "https://katechnologies.de/opengraph-image",
      email: "info@katechnologies.de",
      telephone: "+4915568126206",
      sameAs: ["https://www.instagram.com/katech_germany/", "https://www.youtube.com/@katechnologiesde"],
      founder: { "@type": "Person", name: "Freddy Karam Azmy" },
      address: { "@type": "PostalAddress", streetAddress: "Neue Straße 3", postalCode: "37603", addressLocality: "Holzminden", addressCountry: "DE" },
      areaServed: [{ "@type": "Place", name: "Weserbergland" }, ...cities.map((name) => ({ "@type": "City", name }))],
      knowsAbout: ["Webdesign", "Landingpages", "Individualsoftware", "Softwareentwicklung", "Prozessoptimierung"],
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Webdesign und Individualsoftware", itemListElement: systems.map(([, name, description]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name, description, provider: { "@id": organizationId } } })) },
    },
    { "@type": "WebSite", "@id": "https://katechnologies.de/#website", name: "KA Technologies", url: "https://katechnologies.de/", inLanguage: "de-DE", publisher: { "@id": organizationId } },
  ],
};

export default function Home() {
  return (
    <main id="main-content" className="site-shell">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <a href="#content" className="skip-link">Zum Inhalt springen</a>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="KA Technologies Startseite"><span className="brand-mark">K<span>/</span>A</span><span className="brand-name">KA Technologies<small>digital systems studio</small></span></a>
        <nav className="desktop-nav" aria-label="Hauptnavigation"><a href="#systeme">Leistungen</a><a href="#referenzen">Referenzen</a><a href="#produkte">Produkte</a><a href="#prozess">Prozess</a></nav>
        <a className="top-cta" href="#kontakt">Projekt starten <span>↗</span></a>
      </header>
      <MobileMenu />

      <section id="top" className="hero" aria-labelledby="hero-title"><div className="hero-grid" /><div className="orb orb-one" /><div className="orb orb-two" />
        <div className="hero-copy" id="content"><p className="eyebrow"><span className="pulse" /> Webdesign &amp; Individualsoftware · Weserbergland</p><h1 id="hero-title">Starker Auftritt.<br /><span>Software, die<br />weiterbringt.</span></h1><p className="hero-intro">KA Technologies aus Holzminden entwickelt individuelles Webdesign und passgenaue Software für Unternehmen im Weserbergland. Für mehr Anfragen, klare Abläufe und einen digitalen Auftritt mit Charakter.</p><div className="hero-actions"><a className="button button-lime" href="#kontakt">Potenzial aufdecken <span>↗</span></a><a className="text-link" href="#systeme">Was wir bauen <span>↓</span></a></div></div>
        <div className="hero-console" aria-label="Illustrative Systemübersicht"><div className="console-top"><span className="console-dot" /> SYSTEMKONZEPT <span>KA / 2026</span></div><div className="console-main"><div className="console-label">YOUR BUSINESS<br /><strong>IN MOTION</strong></div><div className="radar"><i /><i /><i /><i /><b>KA</b></div></div><div className="console-lines"><div><span>DESIGN</span><strong>01</strong><small>clear / magnetic / useful</small></div><div><span>BUILD</span><strong>02</strong><small>fast / flexible / yours</small></div><div><span>IMPACT</span><strong>03</strong><small>less friction / more flow</small></div></div><div className="console-status"><span>● All systems ready</span><span>scroll to explore ↓</span></div></div><div className="hero-side-note">SCROLL<br />TO EXPLORE</div>
      </section>

      <div className="ticker" aria-label="Leistungsübersicht"><div>WEB DESIGN <b>✳</b> SOFTWARE DEVELOPMENT <b>✳</b> PROCESS OPTIMIZATION <b>✳</b> WEB DESIGN <b>✳</b> SOFTWARE DEVELOPMENT <b>✳</b> PROCESS OPTIMIZATION <b>✳</b></div></div>

      <section id="systeme" className="section dark-section system-section"><div className="section-heading"><p className="eyebrow lime">01 / THE STACK</p><h2>Webdesign überzeugt.<br /><span>Individualsoftware<br />vereinfacht.</span></h2><p className="section-lead">Ihre Website ist oft der erste Kontakt mit Ihrem Unternehmen. Ihre Software begleitet den Arbeitsalltag. Wir gestalten beides so, dass Besucher sich orientieren und Ihr Team effizient arbeiten kann.</p></div><div className="system-list">{systems.map(([number, title, text]) => <article className="system-row" key={number}><span className="row-number">{number}</span><BrandIcon className="system-icon" name={number === "01" ? "web" : number === "02" ? "software" : "process"} /><div><h3>{title}</h3><p>{text}</p></div><span className="row-arrow">↗</span></article>)}</div></section>

      <section id="referenzen" className="section references-section"><div className="section-heading split-heading"><div><p className="eyebrow lime">02 / AUS DER PRAXIS</p><h2>Gebaut für<br /><span>echte Abläufe.</span></h2></div><p className="section-lead">Ein Blick auf ausgewählte Projekte: Websites, Portale und Systeme, die nicht nur gut aussehen, sondern im Alltag spürbar Arbeit abnehmen.</p></div><div className="reference-grid">{references.map((reference) => <article className="reference-card" key={reference.name}><a className="reference-shot" href={reference.url} target="_blank" rel="noreferrer" aria-label={`${reference.name} live ansehen`}><img src={reference.screenshot} alt={`Screenshot von ${reference.name}`} loading="lazy" /><span className="shot-overlay">Live ansehen <b>↗</b></span></a><div className="reference-body"><div className="reference-meta"><span>{reference.number}</span><span>{reference.domain}</span></div><h3>{reference.name}</h3><p>{reference.description}</p><div className="reference-footer"><span>{reference.system}</span><a href={reference.url} target="_blank" rel="noreferrer">Live ansehen <b>↗</b></a></div></div></article>)}</div></section>

      <section id="produkte" className="section product-section"><div className="section-heading split-heading"><div><p className="eyebrow">03 / BUILT IN-HOUSE</p><h2>Tools, die Arbeit<br /><span>leichter machen.</span></h2></div><p className="section-lead">Kein Bauchladen. Sondern fokussierte Systeme fÃ¼r echte Herausforderungen â€” entwickelt aus der Praxis.</p></div><div className="product-grid">{products.map(([name, text], index) => <a href="#kontakt" className={`product-card product-${index + 1}`} key={name}><span className="card-index">0{index + 1}</span><BrandIcon className="product-icon" name={index === 0 ? "portal" : index === 1 ? "stats" : index === 2 ? "process" : index === 3 ? "automation" : index === 4 ? "stats" : "web"} /><h3>{name}</h3><p>{text}</p><span className="card-arrow">↗</span></a>)}</div></section>

      <section id="prozess" className="section process-section"><div className="process-quote"><p className="eyebrow lime">03 / THE METHOD</p><blockquote>„Komplexität ist kein<br /><span>Qualitätsmerkmal.</span>“</blockquote><p>Wir machen Dinge nicht größer als sie sein müssen. Wir machen sie klarer, schneller und passender für Ihren Alltag.</p><a className="button button-outline" href="#kontakt">So arbeiten wir <span>↗</span></a></div><div className="process-steps"><div><b>01</b><h3>Verstehen</h3><p>Wir hören zu, stellen die richtigen Fragen und finden den Hebel mit dem größten Effekt.</p></div><div><b>02</b><h3>Fokussieren</h3><p>Wir priorisieren, was jetzt zählt — und lassen den Rest bewusst weg.</p></div><div><b>03</b><h3>Bewegen</h3><p>Wir bauen, testen und verbessern. Mit Tempo, Transparenz und einem klaren nächsten Schritt.</p></div></div></section>

      <section className="section faq-section"><div className="section-heading"><p className="eyebrow">04 / GOOD TO KNOW</p><h2>Fragen? <span>Gut.</span></h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></section>

      <section id="weserbergland" className="section region-section"><div className="section-heading"><p className="eyebrow">AUS HOLZMINDEN. FÜR DIE REGION.</p><h2>Digital voran.<br /><span>Im ganzen Weserbergland.</span></h2><p className="section-lead">Ob Handwerksbetrieb, Dienstleister oder mittelständisches Unternehmen: Wir unterstützen Sie mit Webdesign und Individualsoftware, die zu Ihrem Angebot und Ihren Arbeitsabläufen passen. Unser Standort ist Holzminden; die Zusammenarbeit ist im gesamten Weserbergland und digital darüber hinaus möglich.</p><div className="region-cities" aria-label="Regionale Zusammenarbeit">{locationPages.map((location) => <a href={`/webdesign/${location.slug}`} key={location.slug}>{location.city}</a>)}</div></div></section>

      <section id="kontakt" className="contact-section"><div className="contact-intro"><p className="eyebrow lime">05 / IHR PROJEKT</p><h2>Bereit für<br /><span>den nächsten Schritt?</span></h2><p>Erzählen Sie uns, was Sie voranbringen möchten. Wir melden uns mit einer ehrlichen Einschätzung — ohne Agentur-Blabla.</p><div className="contact-meta"><a href="mailto:info@katechnologies.de">info@katechnologies.de</a><a href="tel:+4915568126206">0155 68126206</a><span>Holzminden · Weserbergland</span></div><div className="social-links"><a className="social-icon-link" href="https://www.instagram.com/katech_germany/" target="_blank" rel="noreferrer" aria-label="Instagram öffnen"><SocialIcon type="instagram" /></a><a className="social-icon-link" href="https://www.youtube.com/@katechnologiesde" target="_blank" rel="noreferrer" aria-label="YouTube öffnen"><SocialIcon type="youtube" /></a></div></div><div className="contact-form-wrap"><ContactForm /></div></section>

      <footer className="footer"><div className="brand"><span className="brand-mark">K<span>/</span>A</span><span className="brand-name">KA Technologies<small>digital systems studio</small></span></div><p>© {new Date().getFullYear()} KA Technologies</p><nav><a href="tel:+4915568126206">0155 68126206</a><a className="footer-social-icon" href="https://www.instagram.com/katech_germany/" target="_blank" rel="noreferrer" aria-label="Instagram öffnen"><SocialIcon type="instagram" /></a><a className="footer-social-icon" href="https://www.youtube.com/@katechnologiesde" target="_blank" rel="noreferrer" aria-label="YouTube öffnen"><SocialIcon type="youtube" /></a><a href="/impressum">Impressum</a><a href="/datenschutz">Datenschutz</a><a href="/cookies">Cookies</a></nav></footer>
    </main>
  );
}
