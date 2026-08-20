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

function escapeHeader(value: string) {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function buildMailContent(input: { name: string; email: string; phone: string; topic: string; message: string }) {
  const safe = {
    name: escapeHtml(input.name),
    email: escapeHtml(input.email),
    phone: escapeHtml(input.phone || "nicht angegeben"),
    topic: escapeHtml(input.topic || "Allgemeine Anfrage"),
    message: escapeHtml(input.message),
  };
  const receivedAt = new Intl.DateTimeFormat("de-DE", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Berlin",
  }).format(new Date());

  const text = [
    "***KONTFORM*** Neue Kontaktanfrage",
    `Eingegangen: ${receivedAt} Uhr`,
    "",
    `Name: ${input.name}`,
    `E-Mail: ${input.email}`,
    `Telefon: ${input.phone || "nicht angegeben"}`,
    `Thema: ${input.topic || "Allgemeine Anfrage"}`,
    "",
    "Nachricht:",
    input.message,
  ].join("\n");

  const html = `
    <!doctype html>
    <html lang="de">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="color-scheme" content="light dark">
        <meta name="supported-color-schemes" content="light dark">
        <style>
          :root { color-scheme: light dark; supported-color-schemes: light dark; }
          body, .email-bg { background: #eef3f0 !important; }
          .email-card { background: #ffffff !important; border-color: #dce5e0 !important; }
          .surface { background: #f4f7f5 !important; border-color: #e1e8e4 !important; }
          .text-main { color: #111815 !important; }
          .text-muted { color: #5c6964 !important; }
          .label { color: #287563 !important; }
          @media (prefers-color-scheme: dark) {
            body, .email-bg { background: #0b100e !important; }
            .email-card { background: #151c19 !important; border-color: #2b3732 !important; }
            .surface { background: #1c2521 !important; border-color: #303c37 !important; }
            .text-main { color: #f4f7f5 !important; }
            .text-muted { color: #acb8b3 !important; }
            .label { color: #79d8bd !important; }
          }
          @media only screen and (max-width: 620px) {
            .outer { padding: 16px 8px !important; }
            .content { padding: 24px 20px !important; }
            .detail-label, .detail-value { display: block !important; width: 100% !important; }
            .detail-label { padding-bottom: 3px !important; }
            .detail-value { padding-top: 0 !important; }
          }
        </style>
      </head>
      <body class="email-bg" style="margin:0; padding:0; background:#eef3f0; font-family:Arial,Helvetica,sans-serif;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" class="email-bg" style="background:#eef3f0;">
          <tr>
            <td align="center" class="outer" style="padding:40px 16px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" class="email-card" style="max-width:680px; overflow:hidden; background:#ffffff; border:1px solid #dce5e0; border-radius:24px;">
                <tr>
                  <td style="height:7px; background:#79d8bd; font-size:0; line-height:0;">&nbsp;</td>
                </tr>
                <tr>
                  <td class="content" style="padding:36px 40px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td>
                          <span style="display:inline-block; padding:7px 11px; border-radius:999px; background:#dff6ee; color:#176451; font-size:11px; line-height:1; font-weight:700; letter-spacing:1.3px;">***KONTFORM***</span>
                          <h1 class="text-main" style="margin:18px 0 8px; color:#111815; font-size:28px; line-height:1.15; letter-spacing:-0.7px;">Neue Kontaktanfrage</h1>
                          <p class="text-muted" style="margin:0; color:#5c6964; font-size:14px; line-height:1.6;">Über katechnologies.de · ${receivedAt} Uhr</p>
                        </td>
                        <td align="right" valign="top" style="padding-left:16px;">
                          <span style="display:inline-block; width:48px; height:48px; border-radius:14px; background:#111815; color:#79d8bd; font-size:14px; line-height:48px; text-align:center; font-weight:800;">K/A</span>
                        </td>
                      </tr>
                    </table>

                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" class="surface" style="margin-top:28px; background:#f4f7f5; border:1px solid #e1e8e4; border-radius:16px;">
                      <tr><td class="detail-label label" width="32%" style="padding:18px 8px 9px 20px; color:#287563; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase;">Name</td><td class="detail-value text-main" style="padding:18px 20px 9px 8px; color:#111815; font-size:15px; font-weight:700;">${safe.name}</td></tr>
                      <tr><td class="detail-label label" width="32%" style="padding:9px 8px 9px 20px; color:#287563; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase;">E-Mail</td><td class="detail-value text-main" style="padding:9px 20px 9px 8px; color:#111815; font-size:15px;"><a href="mailto:${safe.email}" style="color:#287563; text-decoration:none;">${safe.email}</a></td></tr>
                      <tr><td class="detail-label label" width="32%" style="padding:9px 8px 9px 20px; color:#287563; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase;">Telefon</td><td class="detail-value text-main" style="padding:9px 20px 9px 8px; color:#111815; font-size:15px;">${safe.phone}</td></tr>
                      <tr><td class="detail-label label" width="32%" style="padding:9px 8px 18px 20px; color:#287563; font-size:11px; font-weight:700; letter-spacing:1px; text-transform:uppercase;">Thema</td><td class="detail-value text-main" style="padding:9px 20px 18px 8px; color:#111815; font-size:15px;">${safe.topic}</td></tr>
                    </table>

                    <p class="label" style="margin:28px 0 10px; color:#287563; font-size:11px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase;">Nachricht</p>
                    <div class="surface text-main" style="padding:20px; background:#f4f7f5; border:1px solid #e1e8e4; border-radius:16px; color:#111815; font-size:15px; line-height:1.7; white-space:pre-wrap;">${safe.message}</div>

                    <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top:28px;">
                      <tr><td style="border-radius:999px; background:#111815;"><a href="mailto:${safe.email}?subject=Re:%20${encodeURIComponent(escapeHeader(input.topic))}" style="display:inline-block; padding:13px 20px; color:#ffffff; font-size:14px; font-weight:700; text-decoration:none;">Direkt antworten&nbsp; →</a></td></tr>
                    </table>

                    <p class="text-muted" style="margin:30px 0 0; padding-top:20px; border-top:1px solid #dce5e0; color:#5c6964; font-size:12px; line-height:1.6;">Automatisch über das Kontaktformular von KA Technologies versendet.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  return { subject: `***KONTFORM*** ${escapeHeader(input.topic || "Allgemeine Anfrage")} – ${escapeHeader(input.name)}`, text, html };
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
