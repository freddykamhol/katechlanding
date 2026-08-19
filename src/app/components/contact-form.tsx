"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: String(formData.get("name") || ""),
          email: String(formData.get("email") || ""),
          phone: String(formData.get("phone") || ""),
          topic: String(formData.get("topic") || ""),
          message: String(formData.get("message") || ""),
          company: String(formData.get("company") || ""),
        }),
      });

      const result = (await response.json().catch(() => ({}))) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "Die Anfrage konnte nicht gesendet werden.");
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Die Anfrage konnte nicht gesendet werden.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4" aria-label="Projektanfrage">
      <label className="hidden" aria-hidden="true">
        Firma
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-white/82">
          Name
          <input
            required
            name="name"
            autoComplete="name"
            className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/38 hover:border-white/20 focus:border-[#79d8bd] focus:bg-white/[0.11]"
            placeholder="Ihr Name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/82">
          E-Mail
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/38 hover:border-white/20 focus:border-[#79d8bd] focus:bg-white/[0.11]"
            placeholder="name@firma.de"
          />
        </label>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-white/82">
          Telefon optional
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            className="rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/38 hover:border-white/20 focus:border-[#79d8bd] focus:bg-white/[0.11]"
            placeholder="Telefonnummer"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-white/82">
          Thema
          <select
            name="topic"
            className="rounded-2xl border border-white/10 bg-[#1b241f] px-4 py-3 text-white outline-none transition hover:border-white/20 focus:border-[#79d8bd]"
            defaultValue="Webdesign"
          >
            <option>Webdesign</option>
            <option>Softwareentwicklung</option>
            <option>Prozessoptimierung</option>
            <option>SSDmanagement</option>
            <option>MPcontrol</option>
            <option>Vermietungssystem</option>
            <option>MoveOffice</option>
            <option>Zeiterfassung</option>
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-white/82">
        Nachricht
        <textarea
          required
          name="message"
          rows={5}
          className="resize-none rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3 text-white outline-none transition placeholder:text-white/38 hover:border-white/20 focus:border-[#79d8bd] focus:bg-white/[0.11]"
          placeholder="Was möchten Sie erreichen oder verbessern?"
        />
      </label>
      <label className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-sm leading-6 text-white/72">
        <input required type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[#79d8bd]" />
        <span>
          Ich habe die{" "}
          <a href="/datenschutz" className="font-semibold text-[#79d8bd] underline-offset-4 hover:underline">
            Datenschutzerklärung
          </a>{" "}
          gelesen. Mir ist bekannt, dass meine Angaben zur Bearbeitung der Anfrage verarbeitet werden.
        </span>
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center rounded-full bg-[#79d8bd] px-6 py-3.5 text-sm font-bold text-[#07120f] shadow-[0_16px_40px_rgba(121,216,189,0.16)] transition hover:-translate-y-0.5 hover:bg-[#9be5cf] disabled:cursor-wait disabled:opacity-65"
      >
        {status === "sending" ? "Wird gesendet ..." : "Kostenlose Ersteinschätzung anfragen →"}
      </button>
      {status === "sent" ? (
        <p role="status" aria-live="polite" className="text-sm leading-6 text-white/58">
          Danke, die Anfrage wurde versendet. Wir melden uns zeitnah zurück.
        </p>
      ) : status === "error" ? (
        <div role="alert" className="rounded-2xl border border-red-200/20 bg-red-200/10 p-4 text-sm leading-6 text-red-100">
          <p>{errorMessage}</p>
          <a className="mt-2 inline-flex font-semibold text-white underline underline-offset-4" href="mailto:info@katechnologies.de">
            Alternativ direkt per E-Mail schreiben
          </a>
        </div>
      ) : (
        <p className="text-sm leading-6 text-white/58">
          Die Angaben werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet.
        </p>
      )}
    </form>
  );
}
