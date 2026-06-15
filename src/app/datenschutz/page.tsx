import Link from "next/link";

const updatedAt = "15.06.2026";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ec] px-4 py-12 text-[#111815] sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="text-sm font-semibold text-[#287563]">← Zurück zur Startseite</Link>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-[#287563]">Stand: {updatedAt}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-6xl">Datenschutzerklärung</h1>
        <div className="mt-8 space-y-8 rounded-[1.5rem] border border-[#dfd7ca] bg-white/82 p-5 leading-7 text-[#53605b] shadow-sm sm:rounded-[2rem] sm:p-8">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">1. Verantwortlicher</h2>
            <p>Verantwortlicher für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="rounded-2xl bg-[#f7f3ec] p-4">
              <p className="font-semibold text-[#111815]">Karam Azmy Media</p>
              <p>Inhaber: Freddy Karam Azmy</p>
              <p>Neue Straße 3</p>
              <p>37603 Holzminden</p>
              <p>Deutschland</p>
              <p>Telefon: folgt</p>
              <p>
                E-Mail: <a className="font-semibold text-[#287563]" href="mailto:info@katechnologies.de">info@katechnologies.de</a>
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">2. Allgemeine Hinweise</h2>
            <p>
              Wir verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung dieser Website, zur Bearbeitung
              von Anfragen, zur Durchführung vorvertraglicher Maßnahmen oder zur Erfüllung gesetzlicher Pflichten
              erforderlich ist. Maßgebliche Rechtsgrundlagen sind insbesondere Art. 6 Abs. 1 lit. b, lit. c und lit. f
              DSGVO sowie, soweit einschlägig, § 25 TDDDG.
            </p>
            <p>
              Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare
              natürliche Person beziehen, z. B. Name, E-Mail-Adresse, IP-Adresse oder Kommunikationsinhalte.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">3. Hosting und Auftragsverarbeitung</h2>
            <p>
              Diese Website wird bei netcup gehostet. Anbieter ist die netcup GmbH, Emmy-Noether-Straße 10, 76131
              Karlsruhe, Deutschland.
            </p>
            <p>
              Beim Aufruf der Website werden personenbezogene Daten, insbesondere technische Zugriffsdaten, auf Servern
              von netcup verarbeitet. Mit netcup besteht ein Vertrag zur Auftragsverarbeitung im Sinne von Art. 28 DSGVO.
              Die Verarbeitung erfolgt zur sicheren und zuverlässigen Bereitstellung der Website auf Grundlage unseres
              berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">4. Server-Logfiles</h2>
            <p>
              Beim Besuch der Website werden durch den Webserver automatisch Informationen verarbeitet, die Ihr Browser
              übermittelt. Dazu können gehören:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>IP-Adresse des anfragenden Geräts</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seite oder Datei</li>
              <li>übertragene Datenmenge</li>
              <li>Meldung über erfolgreichen oder fehlgeschlagenen Abruf</li>
              <li>Browsertyp, Browserversion und Betriebssystem</li>
              <li>Referrer-URL, sofern übermittelt</li>
            </ul>
            <p>
              Die Verarbeitung dient der technischen Bereitstellung, Stabilität, Fehleranalyse und Sicherheit der
              Website. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Logdaten werden in der Regel nur so lange
              gespeichert, wie dies für technische und sicherheitsrelevante Zwecke erforderlich ist. Bei konkreten
              Sicherheitsvorfällen kann eine längere Speicherung erforderlich sein.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">5. Kontaktaufnahme und Kontaktformular</h2>
            <p>
              Wenn Sie uns per E-Mail oder über das Kontaktformular kontaktieren, verarbeiten wir die von Ihnen
              angegebenen Daten, insbesondere Name, E-Mail-Adresse, optional Telefonnummer, Thema und Nachricht, zur
              Bearbeitung Ihrer Anfrage.
            </p>
            <p>
              Das Kontaktformular übermittelt Ihre Angaben verschlüsselt an unseren Server. Von dort wird die Anfrage
              per SMTP an das hinterlegte Kontaktpostfach versendet. Die SMTP-Zugangsdaten werden ausschließlich
              serverseitig über Umgebungsvariablen konfiguriert und nicht an den Browser ausgeliefert.
            </p>
            <p>
              Im Rahmen des Versands können die Formulardaten durch den eingesetzten Hostinganbieter und den
              E-Mail-/SMTP-Dienst verarbeitet werden. Die eingehende Anfrage wird im Kontaktpostfach gespeichert, damit
              sie bearbeitet und beantwortet werden kann.
            </p>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf Vertragsschluss oder
              vorvertragliche Maßnahmen gerichtet ist. In allen übrigen Fällen ist Rechtsgrundlage unser berechtigtes
              Interesse an der Bearbeitung von Anfragen gemäß Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p>
              Anfragen werden gelöscht, sobald sie abschließend bearbeitet sind und keine gesetzlichen
              Aufbewahrungspflichten oder berechtigten Aufbewahrungsinteressen entgegenstehen. Geschäfts- und
              steuerrelevante Kommunikation kann nach handels- und steuerrechtlichen Vorgaben länger aufbewahrt werden.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">6. Cookies, Local Storage und ähnliche Technologien</h2>
            <p>
              Diese Website verwendet keine Analyse-, Marketing- oder Tracking-Cookies. Es werden keine externen
              Trackingdienste, Werbenetzwerke oder Social-Media-Plugins eingebunden.
            </p>
            <p>
              Zur Anzeige des Cookie- und Speicherhinweises wird im Browser ein technisch notwendiger Eintrag im Local
              Storage gesetzt. Dieser speichert lediglich, dass der Hinweis bereits angezeigt und bestätigt wurde. Eine
              personenbezogene Auswertung findet nicht statt.
            </p>
            <p>
              Details finden Sie auf der{" "}
              <Link className="font-semibold text-[#287563]" href="/cookies">
                Cookie-Info-Seite
              </Link>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">7. Externe Inhalte und Drittlandübermittlungen</h2>
            <p>
              Auf dieser Website werden derzeit keine externen Schriftarten, Karten, Videos, Analysewerkzeuge oder
              Social-Media-Plugins geladen. Eine Übermittlung personenbezogener Daten an Anbieter außerhalb der EU bzw.
              des EWR findet durch diese Website derzeit nicht statt.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">8. Empfänger personenbezogener Daten</h2>
            <p>
              Empfänger personenbezogener Daten können technische Dienstleister sein, insbesondere unser Hostinganbieter
              netcup im Rahmen der Auftragsverarbeitung sowie der für den E-Mail-Versand konfigurierte SMTP- bzw.
              E-Mail-Dienst. Darüber hinaus geben wir personenbezogene Daten nur weiter, wenn eine gesetzliche
              Verpflichtung besteht, dies zur Vertragserfüllung erforderlich ist oder Sie eingewilligt haben.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">9. Speicherdauer</h2>
            <p>
              Wir speichern personenbezogene Daten nur so lange, wie es für die jeweiligen Zwecke erforderlich ist oder
              gesetzliche Aufbewahrungspflichten bestehen. Nach Wegfall des Zwecks oder Ablauf gesetzlicher Fristen
              werden die Daten gelöscht oder gesperrt.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">10. Ihre Rechte</h2>
            <p>Sie haben nach Maßgabe der DSGVO insbesondere folgende Rechte:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Recht auf Auskunft nach Art. 15 DSGVO</li>
              <li>Recht auf Berichtigung nach Art. 16 DSGVO</li>
              <li>Recht auf Löschung nach Art. 17 DSGVO</li>
              <li>Recht auf Einschränkung der Verarbeitung nach Art. 18 DSGVO</li>
              <li>Recht auf Datenübertragbarkeit nach Art. 20 DSGVO</li>
              <li>Recht auf Widerspruch gegen Verarbeitungen nach Art. 21 DSGVO</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung nach Art. 7 Abs. 3 DSGVO</li>
            </ul>
            <p>
              Zur Ausübung Ihrer Rechte genügt eine Mitteilung an{" "}
              <a className="font-semibold text-[#287563]" href="mailto:info@katechnologies.de">info@katechnologies.de</a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">11. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. Zuständig ist insbesondere:
            </p>
            <div className="rounded-2xl bg-[#f7f3ec] p-4">
              <p className="font-semibold text-[#111815]">Der Landesbeauftragte für den Datenschutz Niedersachsen</p>
              <p>Prinzenstraße 5</p>
              <p>30159 Hannover</p>
              <p>Telefon: 0511 120-4500</p>
              <p>
                E-Mail: <a className="font-semibold text-[#287563]" href="mailto:poststelle@lfd.niedersachsen.de">poststelle@lfd.niedersachsen.de</a>
              </p>
              <p>
                Website:{" "}
                <a className="font-semibold text-[#287563]" href="https://www.lfd.niedersachsen.de" rel="noreferrer" target="_blank">
                  www.lfd.niedersachsen.de
                </a>
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">12. Sicherheit</h2>
            <p>
              Wir treffen technische und organisatorische Maßnahmen, um personenbezogene Daten gegen Verlust,
              Missbrauch, unbefugten Zugriff und Veränderung zu schützen. Die Website wird, soweit vom Hosting
              bereitgestellt, verschlüsselt per HTTPS ausgeliefert.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111815]">13. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, wenn sich technische, rechtliche oder
              organisatorische Änderungen ergeben. Es gilt jeweils die auf dieser Website veröffentlichte Fassung.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
