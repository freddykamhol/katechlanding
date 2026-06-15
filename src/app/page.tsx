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
    name: "Websites",
    tag: "Auftritt & digitale Präsenz",
    text: "Moderne Websites, Landingpages und Webanwendungen, die professionell wirken und technisch sauber gebaut sind.",
  },
];

const services = [
  "Individuelle Software-Entwicklung",
  "Prozessoptimierung mit Software",
  "Automatisierung wiederkehrender Aufgaben",
  "Dashboards, Verwaltungssysteme und interne Tools",
];

const slideNav = [
  { href: "#top", label: "Start" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#produkte", label: "Produkte" },
  { href: "#bewertungen", label: "Stimmen" },
  { href: "#vorgehen", label: "Vorgehen" },
  { href: "#kontakt", label: "Kontakt" },
];

const testimonials = [
  {
    quote: "Endlich weniger Abstimmung per WhatsApp und Excel. Die Abläufe sind klarer, schneller und nachvollziehbar.",
    name: "M. Schneider",
    role: "Geschäftsführer, Dienstleistungsbetrieb",
  },
  {
    quote: "Aus einem unübersichtlichen Prozess wurde ein System, das unser Team jeden Tag wirklich nutzt.",
    name: "A. Demir",
    role: "Inhaber, Fuhrpark & Vermietung",
  },
  {
    quote: "Die Software fühlt sich nicht wie Standardware an, sondern genau wie unser Betrieb arbeitet.",
    name: "L. Wagner",
    role: "Betriebsleitung, Handwerk",
  },
  {
    quote: "Besonders stark war die Kombination aus Website, interner Verwaltung und Automatisierung.",
    name: "S. Hoffmann",
    role: "Unternehmerin, lokaler Serviceanbieter",
  },
  {
    quote: "Wir sparen Zeit bei Dokumentation, Planung und Nachweisen. Das merkt man direkt im Tagesgeschäft.",
    name: "T. Kaya",
    role: "Projektleitung, Organisation",
  },
  {
    quote: "Klarer Prozess, schnelle Umsetzung und ein Ergebnis, das nicht überladen ist.",
    name: "J. Becker",
    role: "Geschäftsführung, KMU",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden scroll-smooth bg-[#f7f3ec] text-[#121614] md:h-screen md:overflow-y-auto md:overscroll-contain md:[scroll-snap-type:y_mandatory]">
      <header className="fixed left-1/2 top-3 z-50 w-[min(calc(100%-1rem),76rem)] -translate-x-1/2 sm:top-4 sm:w-[min(calc(100%-1.5rem),76rem)]">
        <input id="mobile-menu" type="checkbox" className="mobile-menu-toggle peer sr-only" />
        <div className="flex items-center justify-between rounded-full border border-white/70 bg-white/78 px-3 py-2.5 shadow-[0_18px_60px_rgba(20,32,28,0.12)] backdrop-blur-2xl sm:px-5 sm:py-3">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#111815] text-sm font-bold text-[#9be5cf]">
              KA
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-[#111815] sm:block">
              Karam Azmy Technologies
            </span>
          </a>
          <nav className="hidden items-center gap-1 rounded-full bg-[#111815]/5 p-1 text-sm font-medium text-[#46534f] md:flex">
            {slideNav.map((item) => (
              <a key={item.href} href={item.href} className="rounded-full px-4 py-2 transition hover:bg-white hover:text-[#111815]">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="mailto:info@katechnologies.de"
              className="hidden rounded-full bg-[#111815] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#26352f] min-[390px]:inline-flex"
            >
              Anfrage
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
              href="mailto:info@katechnologies.de"
              className="mt-1 rounded-2xl bg-[#111815] px-4 py-3 text-center text-white transition hover:bg-[#26352f]"
            >
              Projekt anfragen
            </a>
          </nav>
        </div>
      </header>

      <div className="pointer-events-none fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex">
        {slideNav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-label={item.label}
            className="pointer-events-auto h-2.5 w-2.5 rounded-full border border-[#111815]/25 bg-white/70 shadow-sm transition hover:scale-125 hover:bg-[#79d8bd]"
          />
        ))}
      </div>

      <section id="top" className="slide-panel relative isolate flex min-h-[100svh] items-start overflow-hidden px-4 pb-12 pt-24 sm:px-8 sm:pt-32 lg:px-10 lg:pt-36">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center opacity-45"
          style={{ backgroundImage: "url('/hero-operations.png')" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,243,236,0.98)_0%,rgba(247,243,236,0.92)_42%,rgba(247,243,236,0.56)_72%,rgba(247,243,236,0.36)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(121,216,189,0.32),transparent_28%),radial-gradient(circle_at_86%_24%,rgba(255,181,86,0.28),transparent_26%),linear-gradient(135deg,rgba(248,244,237,0.9)_0%,rgba(237,247,242,0.74)_50%,rgba(247,243,236,0.88)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-[#f7f3ec] to-transparent" />
        <div className="absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-[#79d8bd]/35 blur-3xl" />
        <div className="absolute bottom-10 right-[-8rem] h-96 w-96 rounded-full bg-[#f4b860]/30 blur-3xl" />

        <div className="slide-reveal relative mx-auto grid w-full max-w-7xl items-start gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div>
            <p className="inline-flex rounded-full border border-[#287563]/18 bg-white/72 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-[#287563] shadow-sm backdrop-blur sm:px-4 sm:text-xs sm:tracking-[0.18em]">
              Software-Entwicklung und Prozessoptimierung
            </p>
            <h1 className="mt-5 max-w-5xl text-[2.65rem] font-semibold leading-[0.96] tracking-[-0.055em] text-[#111815] min-[390px]:text-5xl sm:mt-6 sm:text-7xl lg:text-8xl">
              Software, die Abläufe einfacher macht.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#4d5955] sm:mt-6 sm:text-xl sm:leading-8">
              Karam Azmy Technologies entwickelt digitale Systeme, Websites und Automatisierungen für echte Abläufe:
              klar, schnell und mit Blick auf den Alltag.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a
                href="mailto:info@katechnologies.de"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#111815] px-6 py-3 text-sm font-semibold text-white shadow-[0_16px_40px_rgba(17,24,21,0.18)] transition hover:-translate-y-0.5 hover:bg-[#26352f] sm:w-auto"
              >
                Projekt anfragen
              </a>
              <a
                href="#produkte"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#111815]/12 bg-white/70 px-6 py-3 text-sm font-semibold text-[#111815] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
              >
                Produkte ansehen
              </a>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold text-[#40504b] sm:mt-7 sm:gap-3 sm:text-sm">
              {["Erstgespräch kostenlos", "Individuelle Umsetzung", "Website und Software zusammen gedacht"].map((item) => (
                <span key={item} className="rounded-full border border-[#111815]/10 bg-white/64 px-3 py-2 shadow-sm backdrop-blur sm:px-4">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative min-h-[18.5rem] sm:min-h-[32rem]">
            <div className="absolute inset-0 rounded-[2rem] border border-white/70 bg-white/42 shadow-[0_32px_100px_rgba(38,53,47,0.18)] backdrop-blur-md sm:rounded-[3rem]" />
            <div className="absolute inset-3 overflow-hidden rounded-[1.6rem] sm:inset-4 sm:rounded-[2.5rem]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(17,24,21,0.92),rgba(17,24,21,0.54)),url('/hero-operations.png')] bg-cover bg-center" />
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/18 to-transparent" />
              <div className="absolute left-4 right-4 top-4 flex items-center justify-between rounded-2xl border border-white/14 bg-white/12 px-3 py-2.5 text-white backdrop-blur sm:left-6 sm:right-6 sm:top-6 sm:px-4 sm:py-3">
                <span className="text-sm font-semibold">Projektübersicht</span>
                <span className="rounded-full bg-[#79d8bd] px-3 py-1 text-xs font-bold text-[#07120f]">Beispiel</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 grid gap-2 sm:bottom-6 sm:left-6 sm:right-6 sm:gap-3">
                {[
                  ["01", "Prozesse digitalisieren"],
                  ["02", "Teams entlasten"],
                  ["03", "Daten nutzbar machen"],
                ].map(([number, item]) => (
                  <div key={number} className="flex items-center justify-between gap-4 rounded-2xl border border-white/14 bg-white/14 p-3 text-white backdrop-blur-md sm:p-4">
                    <span className="text-xs font-bold text-[#79d8bd]">{number}</span>
                    <span className="text-right text-xs font-semibold sm:text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 left-4 rounded-3xl border border-white/70 bg-white/82 p-4 shadow-[0_20px_70px_rgba(38,53,47,0.16)] backdrop-blur-xl sm:-bottom-5 sm:-left-5 sm:p-5">
              <p className="text-2xl font-semibold tracking-tight text-[#111815] sm:text-3xl">Klarer</p>
              <p className="mt-1 text-sm font-medium text-[#53605b]">weniger doppelte Arbeit</p>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="slide-panel flex min-h-0 items-start bg-[#111815] px-4 py-20 text-white sm:min-h-[100svh] sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="slide-reveal mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#79d8bd]">Leistungen</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:mt-5 sm:text-6xl">
              Aus Prozessen werden Produkte.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70 sm:mt-6 sm:text-lg sm:leading-8">
              Wir starten beim Problem, nicht beim Feature. Daraus entstehen Tools, Dashboards und Websites, die
              Entscheidungen vereinfachen und Arbeit reduzieren.
            </p>
            <a
              href="mailto:info@katechnologies.de?subject=Kostenloser%20Prozess-Check"
              className="mt-7 inline-flex w-full justify-center rounded-full bg-[#79d8bd] px-6 py-3 text-sm font-semibold text-[#07120f] transition hover:bg-[#9be5cf] sm:mt-8 sm:w-auto"
            >
              Kostenlosen Prozess-Check anfragen
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <div key={service} className="slide-card rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 sm:rounded-[2rem] sm:p-6" style={{ animationDelay: `${index * 90}ms` }}>
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#79d8bd] text-base font-bold text-[#07120f] sm:mb-10 sm:h-12 sm:w-12 sm:text-lg">
                  {index + 1}
                </div>
                <p className="text-lg font-semibold tracking-tight sm:text-xl">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="produkte" className="slide-panel flex min-h-0 items-start bg-[#f7f3ec] px-4 py-20 sm:min-h-[100svh] sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="slide-reveal mx-auto w-full max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#287563]">Produkte</p>
              <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:mt-5 sm:text-6xl">
                Systeme für echte Aufgaben.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#4d5955] sm:text-lg sm:leading-8">
              Lösungen für Verwaltung, Dokumentation, Vermietung, Umzüge, Zeiterfassung und Websites.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 xl:grid-cols-3">
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
                <button
                  type="button"
                  disabled
                  className="mt-6 inline-flex cursor-not-allowed items-center justify-center rounded-full border border-[#111815]/12 bg-[#111815]/5 px-4 py-2.5 text-sm font-semibold text-[#111815]/60 sm:mt-7"
                >
                  Demo ansehen
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="bewertungen" className="slide-panel flex min-h-0 items-start bg-[#fffaf2] px-4 py-20 sm:min-h-[100svh] sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="slide-reveal mx-auto w-full max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#287563]">Bewertungen</p>
              <h2 className="mt-3 text-4xl font-semibold leading-[1] tracking-[-0.045em] text-[#111815] sm:text-7xl">
                Was Kunden an guter Software schätzen.
              </h2>
              <p className="mt-5 text-base leading-7 text-[#53605b] sm:mt-6 sm:text-lg sm:leading-8">
                Kurze Rückmeldungen aus typischen Projektsituationen. Echte Kundenzitate können hier später
                direkt eingesetzt werden.
              </p>
              <a
                href="mailto:info@katechnologies.de?subject=Ich%20will%20auch%20so%20ein%20System"
                className="mt-7 inline-flex w-full justify-center rounded-full bg-[#111815] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#26352f] sm:mt-8 sm:w-auto"
              >
                Projekt besprechen
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <figure
                  key={testimonial.name}
                  className="slide-card rounded-[1.5rem] border border-[#eadfce] bg-white/82 p-4 shadow-[0_18px_55px_rgba(40,54,49,0.07)] backdrop-blur sm:rounded-[1.75rem] sm:p-5"
                  style={{ animationDelay: `${index * 55}ms` }}
                >
                  <div className="mb-4 flex gap-1 text-[#e0a93d]" aria-label="5 Sterne">
                    {"★★★★★"}
                  </div>
                  <blockquote className="leading-7 text-[#34413d]">„{testimonial.quote}“</blockquote>
                  <figcaption className="mt-5 border-t border-[#eee4d5] pt-4">
                    <p className="font-semibold text-[#111815]">{testimonial.name}</p>
                    <p className="mt-1 text-sm text-[#65716d]">{testimonial.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="vorgehen" className="slide-panel relative flex min-h-0 items-start overflow-hidden bg-[#e6f1eb] px-4 py-20 sm:min-h-[100svh] sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-[#79d8bd]/35 blur-3xl" />
        <div className="absolute -bottom-24 left-16 h-80 w-80 rounded-full bg-[#f4b860]/25 blur-3xl" />
        <div className="slide-reveal relative mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#287563]">Vorgehen</p>
            <h2 className="mt-4 text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#111815] sm:mt-5 sm:text-6xl">
              Erst verstehen. Dann automatisieren.
            </h2>
          </div>
          <div className="grid gap-4">
            {[
              ["01", "Abläufe sichtbar machen", "Wir schauen, wo Arbeit hängen bleibt, doppelt passiert oder manuell unnötig Zeit kostet."],
              ["02", "System passend bauen", "Die Software folgt dem Betrieb und bleibt schlank, verständlich und erweiterbar."],
              ["03", "Wirkung messbar machen", "Dashboards, Nachweise und klare Daten zeigen, ob Prozesse wirklich besser laufen."],
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
            href="mailto:info@katechnologies.de?subject=15-Minuten%20Digitalisierungs-Check"
            className="w-full rounded-full bg-[#111815] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_16px_40px_rgba(17,24,21,0.16)] transition hover:-translate-y-0.5 hover:bg-[#26352f] sm:w-auto lg:col-start-2 lg:w-fit"
          >
            15-Minuten-Check vereinbaren
          </a>
        </div>
      </section>

      <section id="kontakt" className="slide-panel flex min-h-0 flex-col items-start bg-[#111815] px-4 py-20 text-white sm:min-h-[100svh] sm:px-8 sm:py-28 lg:px-10 lg:py-32">
        <div className="slide-reveal mx-auto grid w-full max-w-7xl flex-1 gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#79d8bd]">Kontakt</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.045em] sm:mt-5 sm:text-7xl">
              Bereit für den nächsten digitalen Schritt?
            </h2>
          </div>
          <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5 backdrop-blur sm:rounded-[2rem] sm:p-6">
            <p className="text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
              Schreib kurz, welches Problem gelöst werden soll. Daraus entsteht ein passender Vorschlag für Software,
              Prozessoptimierung oder eine neue Website.
            </p>
            <div className="mt-6 grid gap-3 text-sm font-semibold text-white/80">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 sm:p-4">Antwort mit einem klaren nächsten Schritt</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 sm:p-4">Direkte Einschätzung statt langer Umwege</div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 sm:p-4">Software, Website und Prozessdenken kombiniert</div>
            </div>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
        <footer className="mx-auto mt-12 w-full max-w-7xl border-t border-white/10 pt-8 text-sm text-white/56 sm:mt-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-semibold text-white">Karam Azmy Technologies</p>
              <p className="mt-2">© {new Date().getFullYear()} Karam Azmy Technologies. Alle Rechte vorbehalten.</p>
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
  );
}
