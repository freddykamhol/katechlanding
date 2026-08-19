import ContactForm from "./components/contact-form";

const products = [
  {
    name: "SSDmanagement",
    tag: "Schulsanitätsdienst komplett",
    text: "Rundumpaket für Schulsanitätsdienste: Verwaltung, Alarmierung, Einsatzdokumentation, Lagerführung und klare Nachweise in einem System.",
  },
  {
    name: "MPcontrol",
    tag: "Medizinprodukte & Kontrolle",
    text: "Verwaltung und Kontrolle von Medizinprodukten, Prüfpflichten, Fristen und Dokumentation an einem zentralen Ort.",
  },
  {
    name: "Vermietungssystem",
    tag: "Fahrzeuge & Gegenstände",
    text: "Vermietungen, Inventar, Fahrzeuge, Schäden, Rückgaben, Mietverträge und digitale Signaturen sauber verwalten.",
  },
  {
    name: "MoveOffice",
    tag: "Planung für Umzugsunternehmen",
    text: "Kunden, Umzüge, Routen, Möbelvolumen, Preise, Dokumente und E-Mail-Abläufe für Umzugsunternehmen bündeln.",
  },
  {
    name: "Zeiterfassung",
    tag: "Arbeitszeiten & Nachweise",
    text: "Einfache Erfassung, transparente Auswertungen und digitale Nachweise für Mitarbeitende und Projekte.",
  },
  {
    name: "Webdesign & Landingpages",
    tag: "Webdesign & Kundengewinnung",
    text: "Strategische Websites und Landingpages, die Ihr Angebot auf den Punkt bringen, Vertrauen schaffen und Besucher in Anfragen verwandeln.",
  },
];

const services = [
  {
    number: "01",
    name: "Webdesign",
    text: "Websites und Landingpages, die Vertrauen aufbauen, Angebote verständlich machen und Besucher gezielt zur Anfrage führen.",
    result: "Mehr Sichtbarkeit & qualifizierte Anfragen",
  },
  {
    number: "02",
    name: "Softwareentwicklung",
    text: "Individuelle Webanwendungen, Kundenportale und interne Systeme, die exakt zu Ihrem Geschäftsmodell passen.",
    result: "Weniger Insellösungen & mehr Kontrolle",
  },
  {
    number: "03",
    name: "Prozessoptimierung",
    text: "Wir finden Zeitfresser, verbinden bestehende Abläufe und automatisieren wiederkehrende Arbeit sinnvoll.",
    result: "Weniger Aufwand & schnellere Abläufe",
  },
];

const slideNav = [
  { href: "#top", label: "Start" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#produkte", label: "Lösungen" },
  { href: "#bewertungen", label: "Vorteile" },
  { href: "#vorgehen", label: "Vorgehen" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

const faqs = [
  {
    question: "Welche Leistung ist für mein Unternehmen die richtige?",
    answer: "Das klären wir in der kostenlosen Ersteinschätzung. Wir prüfen gemeinsam, ob eine stärkere Website, individuelle Software oder ein optimierter Prozess aktuell den größten wirtschaftlichen Hebel bietet.",
  },
  {
    question: "Was kostet ein Projekt?",
    answer: "Der Aufwand hängt vom Ziel und Umfang ab. Bevor etwas startet, erhalten Sie eine transparente Empfehlung mit klar beschriebenen Leistungen und Kosten – ohne versteckte Positionen.",
  },
  {
    question: "Können bestehende Systeme weitergenutzt werden?",
    answer: "In vielen Fällen ja. Wir prüfen vorhandene Websites, Software und Arbeitsabläufe zuerst und bauen sinnvoll darauf auf, statt funktionierende Teile unnötig zu ersetzen.",
  },
  {
    question: "Kann ein Projekt klein starten?",
    answer: "Ja. Ein klar abgegrenzter erster Schritt reduziert Risiko und liefert schnell verwertbare Erkenntnisse. Danach kann die Lösung gezielt erweitert werden.",
  },
  {
    question: "Was passiert nach dem Start?",
    answer: "Je nach Bedarf begleiten wir Betrieb, Optimierung und Weiterentwicklung. Umfang und Verantwortlichkeiten werden vor Projektbeginn eindeutig vereinbart.",
  },
];

const benefits = [
  {
    number: "01",
    title: "Ein Ansprechpartner",
    text: "Strategie, Gestaltung und Entwicklung greifen ineinander. Sie müssen nicht mehrere Dienstleister koordinieren.",
  },
  {
    number: "02",
    title: "Geschäftsziel vor Feature-Liste",
    text: "Jede Entscheidung wird daran gemessen, ob sie Anfragen steigert, Arbeit reduziert oder Abläufe verbessert.",
  },
  {
    number: "03",
    title: "Passend statt aufgebläht",
    text: "Sie bekommen genau die Lösung, die Ihr Unternehmen benötigt – verständlich, wartbar und erweiterbar.",
  },
  {
    number: "04",
    title: "Mobile zuerst gedacht",
    text: "Websites und Anwendungen funktionieren schnell, klar und überzeugend auf jedem relevanten Gerät.",
  },
  {
    number: "05",
    title: "Saubere technische Basis",
    text: "Performance, Barrierefreiheit, Datenschutz und Suchmaschinen werden von Anfang an mitgedacht.",
  },
  {
    number: "06",
    title: "Weiterentwicklung möglich",
    text: "Die Lösung wächst mit Ihrem Unternehmen und bleibt auch nach dem Start sinnvoll betreubar.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://katechnologies.de/#organization",
      name: "KA Technologies",
      legalName: "Karam Azmy Media",
      url: "https://katechnologies.de/",
      email: "info@katechnologies.de",
      founder: {
        "@type": "Person",
        name: "Freddy Karam Azmy",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Neue Straße 3",
        postalCode: "37603",
        addressLocality: "Holzminden",
        addressCountry: "DE",
      },
      areaServed: {
        "@type": "Country",
        name: "Deutschland",
      },
      knowsAbout: [
        "Individualsoftware",
        "Softwareentwicklung",
        "Prozessoptimierung",
        "Webdesign",
        "Landingpages",
        "Websites",
        "Zeiterfassung",
        "Vermietungssysteme",
        "Schulsanitätsdienst-Management",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://katechnologies.de/#website",
      url: "https://katechnologies.de/",
      name: "KA Technologies",
      inLanguage: "de-DE",
      publisher: {
        "@id": "https://katechnologies.de/#organization",
      },
    },
    {
      "@type": "OfferCatalog",
      "@id": "https://katechnologies.de/#leistungen",
      name: "Software, Websites und digitale Systeme",
      itemListElement: products.map((product) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: product.name,
          description: product.text,
          provider: {
            "@id": "https://katechnologies.de/#organization",
          },
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://katechnologies.de/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Startseite",
          item: "https://katechnologies.de/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
    <a href="#main-content" className="skip-link">Zum Inhalt springen</a>
    <main id="main-content" className="min-h-screen overflow-x-hidden scroll-smooth bg-[#f7f3ec] text-[#121614]">
      <header className="fixed left-1/2 top-3 z-50 w-[min(calc(100%-1rem),78rem)] -translate-x-1/2 sm:top-4 sm:w-[min(calc(100%-1.5rem),78rem)]">
        <input id="mobile-menu" type="checkbox" className="mobile-menu-toggle peer sr-only" />
        <div className="flex items-center justify-between rounded-[1.25rem] border border-white/80 bg-[#fbfaf7]/88 p-2 shadow-[0_18px_60px_rgba(20,32,28,0.13)] backdrop-blur-2xl sm:rounded-[1.4rem] sm:pl-3">
          <a href="#top" className="group flex min-w-0 items-center gap-3" aria-label="KA Technologies – Startseite">
            <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-xl bg-[#111815] text-[0.7rem] font-black tracking-[-0.05em] text-[#9be5cf] shadow-sm">
              K/A
              <span className="absolute bottom-0 left-0 h-1 w-full bg-[#79d8bd]" />
            </span>
            <span className="hidden min-w-0 sm:block">
              <span className="block truncate text-sm font-bold leading-tight tracking-[-0.02em] text-[#111815]">KA Technologies</span>
              <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-[#66716d]">Web · Software · Prozesse</span>
            </span>
          </a>
          <nav className="hidden items-center gap-0.5 rounded-xl border border-[#111815]/[0.06] bg-white/60 p-1 text-[0.78rem] font-semibold text-[#52605b] lg:flex">
            {slideNav.slice(1, 5).map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-4 py-2 transition hover:bg-white hover:text-[#111815]">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#kontakt"
              className="hidden items-center gap-2 rounded-xl bg-[#111815] px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#26352f] sm:inline-flex"
            >
              Projekt starten <span aria-hidden="true" className="text-[#79d8bd]">↗</span>
            </a>
            <label
              htmlFor="mobile-menu"
              className="mobile-menu-button grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-[#111815]/10 bg-white/70 text-[#111815] shadow-sm transition hover:bg-white md:hidden"
              aria-label="Menü öffnen"
            >
              <span className="mobile-menu-lines" />
            </label>
          </div>
        </div>
        <div className="mobile-menu-panel mt-2 overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/88 p-2 shadow-[0_22px_70px_rgba(20,32,28,0.16)] backdrop-blur-2xl md:hidden">
          <nav className="grid gap-1 text-sm font-semibold text-[#26352f]">
            {slideNav.map((item) => (
              <a key={item.href} href={item.href} className="rounded-2xl px-4 py-3 transition hover:bg-[#111815]/5">
                {item.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="mt-1 rounded-2xl bg-[#111815] px-4 py-3 text-center text-white transition hover:bg-[#26352f]"
            >
              Projekt anfragen
            </a>
          </nav>
        </div>
      </header>

      <section id="top" className="slide-panel relative isolate flex items-center overflow-hidden px-5 pb-24 pt-28 sm:min-h-[52rem] sm:px-8 sm:pb-32 sm:pt-36 lg:min-h-[100svh] lg:px-10 lg:py-40">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center opacity-45"
          style={{ backgroundImage: "url('/hero-operations.webp')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,243,236,0.98)_0%,rgba(247,243,236,0.92)_42%,rgba(247,243,236,0.56)_72%,rgba(247,243,236,0.36)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(121,216,189,0.32),transparent_28%),radial-gradient(circle_at_86%_24%,rgba(255,181,86,0.28),transparent_26%),linear-gradient(135deg,rgba(248,244,237,0.9)_0%,rgba(237,247,242,0.74)_50%,rgba(247,243,236,0.88)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#f7f3ec] to-transparent" />
        <div className="absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-[#79d8bd]/35 blur-3xl" />
        <div className="absolute bottom-10 right-[-8rem] h-96 w-96 rounded-full bg-[#f4b860]/30 blur-3xl" />

        <div className="slide-reveal relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
          <div>
            <p className="inline-flex max-w-full rounded-full border border-[#287563]/18 bg-white/72 px-3 py-2 text-center text-[0.62rem] font-bold uppercase leading-4 tracking-[0.12em] text-[#287563] shadow-sm backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.18em]">
              Webdesign · Softwareentwicklung · Prozessoptimierung
            </p>
            <h1 className="mt-6 max-w-5xl text-balance text-[2.5rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[#111815] min-[390px]:text-[2.85rem] sm:mt-7 sm:text-7xl lg:text-[5.25rem]">
              Digitale Lösungen, die <span className="text-[#287563]">Ihr Geschäft</span> voranbringen.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#4d5955] sm:mt-7 sm:text-xl sm:leading-8">
              Wir entwickeln verkaufsstarke Websites, individuelle Software und effizientere Prozesse – aus einer Hand
              und mit einem klaren Ziel: messbarer Nutzen für Ihr Unternehmen.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
              <a
                href="#kontakt"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#111815] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(17,24,21,0.18)] transition hover:-translate-y-0.5 hover:bg-[#26352f] sm:w-auto"
              >
                Kostenlose Potenzialanalyse
              </a>
              <a
                href="#produkte"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#111815]/12 bg-white/70 px-6 py-3 text-sm font-semibold text-[#111815] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
              >
                Leistungen entdecken
              </a>
            </div>
            <div className="mt-7 grid gap-2 text-xs font-semibold text-[#40504b] min-[440px]:flex min-[440px]:flex-wrap sm:mt-8 sm:gap-3 sm:text-sm">
              {["Unverbindliche Ersteinschätzung", "Persönlicher Ansprechpartner", "Strategie und Umsetzung aus einer Hand"].map((item) => (
                <span key={item} className="rounded-full border border-[#111815]/10 bg-white/64 px-3 py-2 shadow-sm backdrop-blur sm:px-4">
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-4 text-xs font-medium text-[#65716d]">Unverbindlich · Klarer nächster Schritt · Kein Verkaufsdruck</p>
          </div>

          <div className="relative min-h-[24rem] sm:min-h-[32rem]">
            <div className="absolute inset-0 rounded-[2rem] border border-white/70 bg-white/42 shadow-[0_32px_100px_rgba(38,53,47,0.18)] backdrop-blur-md sm:rounded-[3rem]" />
            <div className="absolute inset-3 overflow-hidden rounded-[1.6rem] sm:inset-4 sm:rounded-[2.5rem]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,24,21,0.92),rgba(17,24,21,0.54)),url('/hero-operations.webp')] bg-cover bg-center" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/18 to-transparent" />
              <div className="absolute left-4 right-4 top-4 flex items-center justify-between rounded-2xl border border-white/14 bg-[#07120f]/35 px-3 py-2.5 text-white backdrop-blur sm:left-6 sm:right-6 sm:top-6 sm:px-4 sm:py-3">
                <span className="flex items-center gap-2 text-sm font-semibold"><span className="h-2 w-2 rounded-full bg-[#79d8bd] shadow-[0_0_16px_rgba(121,216,189,0.9)]" /> Ein Partner. Drei Kernbereiche.</span>
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-white/55">Für Wachstum</span>
              </div>
              <div className="absolute bottom-5 left-4 right-4 sm:bottom-7 sm:left-6 sm:right-6">
                <div className="grid gap-2 sm:gap-3">
                  {[
                    ["01", "Webdesign", "sichtbar werden & Kunden gewinnen"],
                    ["02", "Softwareentwicklung", "individuell digitalisieren"],
                    ["03", "Prozessoptimierung", "Zeit & Kosten reduzieren"],
                  ].map(([number, title, result]) => (
                    <div key={number} className="flex items-center gap-3 rounded-2xl border border-white/14 bg-white/10 px-3 py-2.5 text-white backdrop-blur-md sm:px-4 sm:py-3">
                      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#79d8bd] text-[0.65rem] font-black text-[#07120f]">{number}</span>
                      <div className="min-w-0 sm:flex sm:flex-1 sm:items-center sm:justify-between sm:gap-4">
                        <p className="text-xs font-bold sm:text-sm">{title}</p>
                        <p className="truncate text-[0.65rem] font-medium text-white/55 sm:text-xs">{result}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex items-center justify-between rounded-2xl border border-white/14 bg-[#07120f]/45 px-4 py-3 text-white backdrop-blur-md sm:mt-3 sm:px-5 sm:py-4">
                  <div>
                    <p className="text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white/50">Gemeinsames Ziel</p>
                    <p className="mt-1 text-sm font-semibold sm:text-base">Mehr Anfragen. Weniger Aufwand. Besser wachsen.</p>
                  </div>
                  <span className="ml-3 hidden h-10 w-10 shrink-0 place-items-center rounded-full bg-[#79d8bd] font-bold text-[#07120f] sm:grid">✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="slide-panel flex items-start bg-[#111815] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="slide-reveal mx-auto w-full max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#79d8bd]">Leistungen</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:mt-5 sm:text-6xl">
              Drei Hebel für Ihren digitalen Erfolg.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:mt-6 sm:text-lg sm:leading-8">
              Ob mehr Kunden, bessere interne Abläufe oder eine individuelle Plattform: Wir verbinden Strategie,
              Gestaltung und Technik zu einer Lösung, die sich wirtschaftlich lohnt.
            </p>
            </div>
            <a
              href="#kontakt"
              className="inline-flex w-full shrink-0 justify-center rounded-full bg-[#79d8bd] px-6 py-3 text-sm font-semibold text-[#07120f] transition hover:-translate-y-0.5 hover:bg-[#9be5cf] sm:w-auto"
            >
              Potenzial kostenlos besprechen
            </a>
          </div>
          <div className="mt-12 grid gap-5 sm:mt-16 lg:grid-cols-3 lg:gap-6">
            {services.map((service, index) => (
              <article key={service.name} className="slide-card flex flex-col rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 sm:rounded-[2rem] sm:p-6" style={{ animationDelay: `${index * 90}ms` }}>
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#79d8bd] text-base font-bold text-[#07120f] sm:mb-10 sm:h-12 sm:w-12 sm:text-lg">
                  {service.number}
                </div>
                <h3 className="text-2xl font-semibold tracking-tight">{service.name}</h3>
                <p className="mt-3 flex-1 leading-7 text-white/65">{service.text}</p>
                <p className="mt-6 border-t border-white/10 pt-4 text-sm font-semibold text-[#79d8bd]">{service.result}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="produkte" className="slide-panel flex items-start bg-[#f7f3ec] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="slide-reveal mx-auto w-full max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#287563]">Lösungen</p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:mt-5 sm:text-6xl">
                Lösungen, die bereits Praxis können.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#4d5955] sm:text-lg sm:leading-8">
              Bewährte Produkte und individuelle Lösungen für Kundengewinnung, Verwaltung und effizientere Abläufe.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product.name}
                className="slide-card flex min-h-0 flex-col rounded-[1.5rem] border border-[#dfd7ca] bg-white/82 p-5 shadow-[0_18px_60px_rgba(40,54,49,0.08)] backdrop-blur sm:min-h-[17rem] sm:rounded-[2rem] sm:p-6"
                style={{ animationDelay: `${index * 65}ms` }}
              >
                <div className="flex-1">
                  <p className="text-sm font-semibold text-[#287563]">{product.tag}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-[#111815] sm:mt-4">{product.name}</h3>
                  <p className="mt-3 leading-7 text-[#53605b] sm:mt-4">{product.text}</p>
                </div>
                <a
                  href="#kontakt"
                  className="mt-6 inline-flex items-center justify-between rounded-full border border-[#111815]/12 bg-[#111815]/5 px-4 py-2.5 text-sm font-semibold text-[#111815] transition hover:border-[#287563]/25 hover:bg-[#79d8bd]/20 sm:mt-7"
                >
                  Lösung besprechen <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bewertungen" className="slide-panel flex items-start bg-[#fffaf2] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="slide-reveal mx-auto w-full max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#287563]">Ihr Vorteil</p>
              <h2 className="mt-3 text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#111815] sm:text-7xl">
                Digital gedacht. Unternehmerisch umgesetzt.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#53605b] sm:mt-6 sm:text-lg sm:leading-8">
                Keine Technik um der Technik willen. Wir verbinden einen starken Außenauftritt mit funktionierenden
                Systemen und effizienteren Abläufen.
              </p>
              <a
                href="#kontakt"
                className="mt-7 inline-flex w-full justify-center rounded-full bg-[#111815] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#26352f] sm:mt-8 sm:w-auto"
              >
                Eigenes Vorhaben besprechen
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <article
                  key={benefit.title}
                  className="slide-card group rounded-[1.5rem] border border-[#eadfce] bg-white/82 p-5 shadow-[0_18px_55px_rgba(40,54,49,0.07)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-[#79d8bd]/60 hover:shadow-[0_24px_70px_rgba(40,54,49,0.12)] sm:rounded-[1.75rem] sm:p-6"
                  style={{ animationDelay: `${index * 55}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-[0.18em] text-[#287563]">{benefit.number}</span>
                    <span className="h-2 w-2 rounded-full bg-[#79d8bd] transition group-hover:scale-150" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-[#111815]">{benefit.title}</h3>
                  <p className="mt-3 leading-7 text-[#65716d]">{benefit.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="vorgehen" className="slide-panel relative flex items-start overflow-hidden bg-[#e6f1eb] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#79d8bd]/35 blur-3xl" />
        <div className="absolute -bottom-24 left-16 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" />
        <div className="slide-reveal relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#287563]">Vorgehen</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#111815] sm:mt-5 sm:text-6xl">
              Erst das Ziel. Dann die beste Lösung.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              ["01", "Potenzial erkennen", "Wir klären, ob Ihre größte Chance bei mehr Anfragen, besserer Software oder effizienteren Abläufen liegt."],
              ["02", "Lösung gezielt entwickeln", "Konzept, Design und Technik folgen einem klaren Geschäftsziel – verständlich, schlank und ohne unnötige Funktionen."],
              ["03", "Ergebnis verbessern", "Nach dem Start schauen wir auf Nutzung, Anfragen und Zeitersparnis und entwickeln dort weiter, wo es wirklich wirkt."],
            ].map(([number, title, text]) => (
              <div key={number} className="rounded-[1.5rem] border border-white/70 bg-white/70 p-5 shadow-[0_16px_50px_rgba(40,54,49,0.08)] backdrop-blur sm:rounded-[2rem] sm:p-6">
                <div className="flex gap-4 sm:gap-5">
                  <span className="text-sm font-bold text-[#287563]">{number}</span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-[#111815] sm:text-xl">{title}</h3>
                    <p className="mt-2 leading-7 text-[#53605b]">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#kontakt"
            className="w-full rounded-full bg-[#111815] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_40px_rgba(17,24,21,0.16)] transition hover:-translate-y-0.5 hover:bg-[#26352f] sm:w-auto lg:col-start-2 lg:w-fit"
          >
            Kostenloses Erstgespräch sichern
          </a>
        </div>
      </section>

      <section id="faq" className="slide-panel relative flex items-start overflow-hidden bg-[#f7f3ec] px-5 py-24 sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[#79d8bd]/20 blur-3xl" />
        <div className="slide-reveal relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#287563]">Häufige Fragen</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#111815] sm:mt-5 sm:text-6xl">
              Klarheit vor der Entscheidung.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#53605b] sm:text-lg sm:leading-8">
              Die wichtigsten Antworten zu Zusammenarbeit, Investition und Einstieg.
            </p>
            <a href="#kontakt" className="mt-7 inline-flex w-full justify-center rounded-full bg-[#111815] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#26352f] sm:w-auto">
              Offene Frage direkt klären
            </a>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="faq-item group rounded-[1.5rem] border border-[#dfd7ca] bg-white/80 p-5 shadow-[0_14px_44px_rgba(40,54,49,0.06)] backdrop-blur sm:p-6" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-semibold tracking-tight text-[#111815] sm:text-lg">
                  {faq.question}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#111815]/5 text-lg text-[#287563] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl border-t border-[#111815]/8 pt-4 leading-7 text-[#5d6965]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="slide-panel flex flex-col items-start bg-[#111815] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-10 lg:py-40">
        <div className="mx-auto grid w-full max-w-7xl flex-1 gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#79d8bd]">Kontakt</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:mt-5 sm:text-7xl">
              Welcher digitale Hebel bringt Sie weiter?
            </h2>
            <div className="mt-8 max-w-xl rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 sm:p-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#79d8bd]">Ihre Potenzialanalyse</p>
              <div className="mt-5 grid gap-4 text-sm leading-6 text-white/72">
                <p><span className="mr-3 font-bold text-white">01</span>Wir ordnen Ziel, Ausgangslage und größten Engpass ein.</p>
                <p><span className="mr-3 font-bold text-white">02</span>Sie erhalten eine klare Empfehlung zum sinnvollsten Ansatz.</p>
                <p><span className="mr-3 font-bold text-white">03</span>Sie entscheiden anschließend in Ruhe, ob es weitergeht.</p>
              </div>
            </div>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-[#1a211e] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.22)] sm:rounded-[2rem] sm:p-6">
            <p className="text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Beschreiben Sie kurz Ihr Ziel. Sie erhalten eine ehrliche Ersteinschätzung, ob Webdesign,
              individuelle Software oder Prozessoptimierung den größten Nutzen bringt.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-semibold text-white/80">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 sm:p-4">Kostenlose und unverbindliche Ersteinschätzung</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 sm:p-4">Konkreter nächster Schritt statt Verkaufsfloskeln</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 sm:p-4">Webdesign, Software und Prozesse aus einer Hand</div>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
        <footer className="mx-auto mt-12 w-full max-w-7xl border-t border-white/10 pt-8 text-sm text-white/56 sm:mt-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-white">KA Technologies</p>
              <p className="mt-2">© {new Date().getFullYear()} KA Technologies. Alle Rechte vorbehalten.</p>
            </div>
            <nav className="grid gap-2 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-3">
              <a className="rounded-full border border-white/10 px-4 py-2 transition hover:text-white sm:border-0 sm:p-0" href="/impressum">
                Impressum
              </a>
              <a className="rounded-full border border-white/10 px-4 py-2 transition hover:text-white sm:border-0 sm:p-0" href="/datenschutz">
                Datenschutzerklärung
              </a>
              <a className="rounded-full border border-white/10 px-4 py-2 transition hover:text-white sm:border-0 sm:p-0" href="/cookies">
                Cookie-Info
              </a>
              <a className="rounded-full border border-white/10 px-4 py-2 transition hover:text-white sm:border-0 sm:p-0" href="mailto:info@katechnologies.de">
                Kontakt
              </a>
            </nav>
          </div>
        </footer>
      </section>
    </main>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
    </>
  );
}
