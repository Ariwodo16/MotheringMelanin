import { NextRequest, NextResponse } from "next/server";

// In-memory rate limiter (upgrade to Upstash Redis in production)
const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const LIMIT = 3;
const WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + WINDOW });
    return false; // not limited
  }
  if (record.count >= LIMIT) return true; // limited
  record.count++;
  return false;
}

function getIp(req: NextRequest): string {
  return req.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown";
}

const sanitize = (s: string) =>
  String(s).replace(/<[^>]*>/g, "").trim().slice(0, 2000);

export async function POST(req: NextRequest) {
  const ip = getIp(req);

  if (checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot
  if (body.honeypot) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, message } = body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 }
    );
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.CONTACT_EMAIL ?? "hello@motheringmelanin.com";
  const FROM_EMAIL = process.env.FROM_EMAIL ?? "noreply@motheringmelanin.com";

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not configured.");
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  const emailPayload = {
    from: FROM_EMAIL,
    to: [TO_EMAIL],
    reply_to: sanitize(email),
    subject: `New Consultation Request from ${sanitize(name)}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 580px; margin: 0 auto; padding: 32px; background: #FAF7F2; color: #3D1F0F; border-radius: 12px;">
        <h1 style="font-size: 22px; font-weight: 500; margin-bottom: 24px; padding-bottom: 16px; border-bottom: 1px solid rgba(61,31,15,0.1);">
          New Consultation Request — Mothering Melanin
        </h1>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          ${[
            ["Name", sanitize(name)],
            ["Email", sanitize(email)],
            ["Phone", sanitize(body.phone || "—")],
            ["Due Date", sanitize(body.dueDate || "—")],
            ["Service", sanitize(body.service || "—")],
          ]
            .map(
              ([label, value]) => `
            <tr>
              <td style="padding: 8px 12px 8px 0; font-weight: bold; white-space: nowrap; color: #6B3A22; width: 120px;">${label}:</td>
              <td style="padding: 8px 0;">${value}</td>
            </tr>`
            )
            .join("")}
        </table>
        <div style="margin-top: 24px; padding: 20px; background: white; border-left: 4px solid #C8956C; border-radius: 4px;">
          <p style="font-weight: bold; margin: 0 0 8px; font-size: 14px;">Message:</p>
          <p style="margin: 0; white-space: pre-wrap; font-family: 'DM Sans', sans-serif; font-size: 14px; line-height: 1.7; color: rgba(61,31,15,0.75);">${sanitize(message)}</p>
        </div>
        <p style="margin-top: 32px; font-family: sans-serif; font-size: 11px; color: rgba(61,31,15,0.35);">
          Sent via motheringmelanin.com contact form
        </p>
      </div>
    `,
  };

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });

    if (!resendRes.ok) {
      const err = await resendRes.json();
      console.error("Resend error:", err);
      return NextResponse.json(
        { error: "Failed to send your message. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
