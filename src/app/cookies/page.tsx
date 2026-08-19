import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie-Informationen",
  description: "Informationen zu Cookies und lokaler Speicherung auf der Website von KA Technologies.",
  alternates: {
    canonical: "/cookies",
  },
  robots: {
    index: false,
    follow: true,
  },
};

const storageItems = [
  {
    name: "katech_cookie_notice_ack",
    type: "Local Storage",
    purpose: "Speichert, dass der Cookie- und Speicherhinweis bestätigt wurde.",
    duration: "Bis zur Löschung durch den Nutzer im Browser.",
    legalBasis: "Berechtigtes Interesse an einer nutzerfreundlichen Anzeige technisch notwendiger Hinweise.",
  },
];

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] px-4 py-12 text-[#111815] sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-[#287563]">← Zurück zur Startseite</Link>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#287563]">Cookie-Informationen</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Cookies und lokale Speicherung</h1>
        <div className="mt-8 space-y-8 rounded-[1.5rem] border border-[#dfd7ca] bg-white/82 p-5 leading-7 text-[#53605b] shadow-sm sm:rounded-[2rem] sm:p-8">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">Kurzfassung</h2>
            <p>
              Diese Website verwendet keine Analyse-, Marketing- oder Tracking-Cookies. Es werden keine Werbeprofile
              erstellt und keine externen Trackingdienste eingebunden.
            </p>
            <p>
              Es wird lediglich eine technisch notwendige lokale Speicherung genutzt, um zu merken, dass der Hinweis zu
              Cookies und lokaler Speicherung bereits bestätigt wurde.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold text-[#111815]">Eingesetzte Speicherung</h2>
            <div className="grid gap-4">
              {storageItems.map((item) => (
                <article key={item.name} className="rounded-2xl border border-[#dfd7ca] bg-[#f7f3ec] p-4">
                  <h3 className="font-semibold text-[#111815]">{item.name}</h3>
                  <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-[10rem_1fr]">
                    <dt className="font-semibold text-[#111815]">Art</dt>
                    <dd>{item.type}</dd>
                    <dt className="font-semibold text-[#111815]">Zweck</dt>
                    <dd>{item.purpose}</dd>
                    <dt className="font-semibold text-[#111815]">Speicherdauer</dt>
                    <dd>{item.duration}</dd>
                    <dt className="font-semibold text-[#111815]">Rechtsgrundlage</dt>
                    <dd>{item.legalBasis}</dd>
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">Hinweis zu § 25 TDDDG</h2>
            <p>
              Nach § 25 TDDDG ist für das Speichern von Informationen auf Endeinrichtungen grundsätzlich eine
              Einwilligung erforderlich. Eine Einwilligung ist nicht erforderlich, wenn die Speicherung unbedingt
              erforderlich ist, um einen ausdrücklich gewünschten digitalen Dienst bereitzustellen oder eine technisch
              notwendige Funktion zu ermöglichen.
            </p>
            <p>
              Die hier eingesetzte lokale Speicherung dient ausschließlich dazu, den Hinweis nicht bei jedem Seitenaufruf
              erneut einzublenden.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">Speicherung löschen</h2>
            <p>
              Sie können lokale Speicherungen jederzeit über die Einstellungen Ihres Browsers löschen. Danach wird der
              Hinweis beim nächsten Besuch erneut angezeigt.
            </p>
            <p>
              Weitere Informationen finden Sie in der{" "}
              <Link className="font-semibold text-[#287563]" href="/datenschutz">
                Datenschutzerklärung
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
