"use client";

import { FormEvent, useState } from "react";
import TopicSelect from "./topic-select";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [topic, setTopic] = useState("Webdesign");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");
    setErrorMessage("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(["name", "email", "phone", "topic", "message", "company"].map((key) => [key, String(formData.get(key) || "")]))),
      });
      const result = (await response.json().catch(() => ({}))) as { message?: string };
      if (!response.ok) throw new Error(result.message || "Die Anfrage konnte nicht gesendet werden.");
      setStatus("sent");
      form.reset();
      setTopic("Webdesign");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Die Anfrage konnte nicht gesendet werden.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" aria-label="Projektanfrage" aria-busy={status === "sending"}>
      <label hidden aria-hidden="true">Firma<input name="company" tabIndex={-1} autoComplete="off" /></label>
      <div className="form-row">
        <label className="form-field">Ihr Name<input required name="name" minLength={2} maxLength={120} autoComplete="name" placeholder="Vor- und Nachname" /></label>
        <label className="form-field">E-Mail<input required name="email" type="email" maxLength={254} autoComplete="email" placeholder="name@unternehmen.de" /></label>
      </div>
      <div className="form-row">
        <label className="form-field">Telefon <span className="optional">(optional)</span><input name="phone" type="tel" maxLength={80} autoComplete="tel" placeholder="Ihre Telefonnummer" /></label>
        <TopicSelect value={topic} onChange={setTopic} />
      </div>
      <label className="form-field">Ihr Vorhaben<textarea required name="message" minLength={10} maxLength={4000} rows={5} placeholder="Was möchten Sie mit Ihrer Website oder Software erreichen? (mindestens 10 Zeichen)" /></label>
      <div className="consent-row">
        <input required id="privacy-consent" name="privacy" type="checkbox" className="custom-checkbox" aria-describedby="privacy-description" />
        <div id="privacy-description"><label htmlFor="privacy-consent">Ich habe die Datenschutzerklärung gelesen. Meine Angaben werden zur Bearbeitung der Anfrage verarbeitet.</label> <a href="/datenschutz">Datenschutzerklärung ansehen ↗</a></div>
      </div>
      <button type="submit" disabled={status === "sending"} className="form-submit">{status === "sending" ? "Anfrage wird gesendet …" : "Kostenlose Ersteinschätzung anfragen"}<span aria-hidden="true">↗</span></button>
      <div className="form-feedback" aria-live="polite" aria-atomic="true">
        {status === "sent" ? <p role="status" className="form-success">Vielen Dank! Ihre Anfrage wurde versendet. Wir melden uns zeitnah zurück.</p> : status === "error" ? <div role="alert" className="form-error"><p>{errorMessage}</p><a href="mailto:info@katechnologies.de">Alternativ per E-Mail schreiben ↗</a></div> : <p>Unverbindlich. Ihre Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.</p>}
      </div>
    </form>
  );
}
