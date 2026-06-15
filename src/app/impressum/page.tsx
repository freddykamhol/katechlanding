import Link from "next/link";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] px-4 py-12 text-[#111815] sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-[#287563]">← Zurück zur Startseite</Link>
        <h1 className="mt-7 text-4xl font-semibold tracking-[-0.04em] sm:mt-8 sm:text-6xl">Impressum</h1>
        <div className="mt-7 space-y-8 rounded-[1.5rem] border border-[#dfd7ca] bg-white/80 p-5 leading-7 text-[#53605b] shadow-sm sm:mt-8 sm:rounded-[2rem] sm:p-6">
          <section>
            <h2 className="text-lg font-semibold text-[#111815]">Angaben gemäß § 5 DDG</h2>
            <div className="mt-3 space-y-1">
              <p className="font-semibold text-[#111815]">Karam Azmy Media</p>
              <p>Inhaber: Freddy Karam Azmy</p>
              <p>Neue Straße 3</p>
              <p>37603 Holzminden</p>
              <p>Deutschland</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111815]">Kontakt</h2>
            <div className="mt-3 space-y-1">
              <p>Telefon: folgt</p>
              <p>
                E-Mail: <a className="font-semibold text-[#287563]" href="mailto:info@katechnologies.de">info@katechnologies.de</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111815]">Steuerliche Angaben</h2>
            <p className="mt-3">Steuernummer: folgt</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111815]">Verantwortlich für den Inhalt</h2>
            <div className="mt-3 space-y-1">
              <p>Freddy Karam Azmy</p>
              <p>Neue Straße 3</p>
              <p>37603 Holzminden</p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#111815]">Verbraucherstreitbeilegung</h2>
            <p className="mt-3">
              Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
