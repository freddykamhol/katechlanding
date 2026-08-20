import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  phone?: unknown;
  topic?: unknown;
  message?: unknown;
  company?: unknown;
};

const rateLimitWindowMs = 10 * 60 * 1000;
const rateLimitMaxRequests = 5;
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= 254;
}

function getClientKey(request: NextRequest) {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip")?.trim() || null;
}

function isRateLimited(key: string | null) {
  // Ohne verlässliche Client-IP darf kein globales Limit alle Besucher sperren.
  if (!key) return false;

  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + rateLimitWindowMs });
    return false;
  }

  if (current.count >= rateLimitMaxRequests) {
    return true;
  }

  current.count += 1;
  return false;
}

function getBooleanEnv(name: string, fallback = false) {
  const value = process.env[name]?.trim().toLowerCase();
  if (!value) return fallback;
  return ["1", "true", "yes", "on"].includes(value);
}

function getRequiredEnv(name: string) {
  const value = process.env[name]?.trim();
  if (!value) throw new Error(`${name} fehlt.`);
  return value;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] || character);
}

function buildMailContent(input: { name: string; email: string; phone: string; topic: string; message: string }) {
  const safe = {
    name: escapeHtml(input.name),
    email: escapeHtml(input.email),
    phone: escapeHtml(input.phone || "nicht angegeben"),
    topic: escapeHtml(input.topic || "Allgemeine Anfrage"),
    message: escapeHtml(input.message),
  };

  const text = [
    "Neue Kontaktanfrage über katechnologies.de",
    "",
    `Name: ${safe.name}`,
    `E-Mail: ${safe.email}`,
    `Telefon: ${safe.phone}`,
    `Thema: ${safe.topic}`,
    "",
    "Nachricht:",
    safe.message,
  ].join("\n");

  const html = `
    <div style="font-family: Arial, sans-serif; color: #111815; line-height: 1.55;">
      <h2 style="margin: 0 0 16px;">Neue Kontaktanfrage</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tr><td style="padding: 8px 0; font-weight: 700;">Name</td><td>${safe.name}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 700;">E-Mail</td><td>${safe.email}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 700;">Telefon</td><td>${safe.phone}</td></tr>
        <tr><td style="padding: 8px 0; font-weight: 700;">Thema</td><td>${safe.topic}</td></tr>
      </table>
      <h3 style="margin: 24px 0 8px;">Nachricht</h3>
      <p style="white-space: pre-wrap; margin: 0;">${safe.message}</p>
    </div>
  `;

  return { subject: `Neue Kontaktanfrage: ${safe.topic}`, text, html };
}

export async function POST(request: NextRequest) {
  try {
    const payload = (await request.json()) as ContactPayload;
    if (asString(payload.company)) {
      return NextResponse.json({ ok: true });
    }

    const name = asString(payload.name);
    const email = asString(payload.email);
    const phone = asString(payload.phone);
    const topic = asString(payload.topic);
    const message = asString(payload.message);

    if (name.length < 2 || name.length > 120) {
      return NextResponse.json({ message: "Bitte einen gültigen Namen angeben." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Bitte eine gültige E-Mail-Adresse angeben." }, { status: 400 });
    }

    if (phone.length > 80) {
      return NextResponse.json({ message: "Die Telefonnummer ist zu lang." }, { status: 400 });
    }

    if (!topic || topic.length > 120) {
      return NextResponse.json({ message: "Bitte ein gültiges Thema auswählen." }, { status: 400 });
    }

    if (message.length < 10) {
      return NextResponse.json({ message: "Bitte beschreiben Sie Ihr Anliegen mit mindestens 10 Zeichen." }, { status: 400 });
    }

    if (message.length > 4000) {
      return NextResponse.json({ message: "Die Nachricht darf höchstens 4.000 Zeichen enthalten." }, { status: 400 });
    }

    // Erst vollständig geprüfte Versandversuche zählen, nicht Tippfehler oder Validierungsfehler.
    if (isRateLimited(getClientKey(request))) {
      return NextResponse.json({ message: "Zu viele Anfragen. Bitte in einigen Minuten erneut versuchen." }, { status: 429 });
    }

    const smtpPort = Number.parseInt(process.env.SMTP_PORT || "587", 10);
    const transporter = nodemailer.createTransport({
      host: getRequiredEnv("SMTP_HOST"),
      port: Number.isFinite(smtpPort) ? smtpPort : 587,
      secure: getBooleanEnv("SMTP_SECURE", false),
      requireTLS: getBooleanEnv("SMTP_REQUIRE_TLS", true),
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 20_000,
      auth: {
        user: getRequiredEnv("SMTP_USER"),
        pass: getRequiredEnv("SMTP_PASS"),
      },
    });

    const from = process.env.CONTACT_MAIL_FROM?.trim() || getRequiredEnv("SMTP_USER");
    const to = process.env.CONTACT_MAIL_TO?.trim() || "info@katechnologies.de";
    const { subject, text, html } = buildMailContent({ name, email, phone, topic, message });

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
      headers: {
        "X-Entity-Ref-ID": `contact-${Date.now()}`,
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Kontaktformular konnte nicht versendet werden.", error);
    return NextResponse.json({ message: "Die Anfrage konnte nicht gesendet werden." }, { status: 500 });
  }
}
