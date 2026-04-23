import { Resend } from "resend";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  phone?: string;
  email?: string;
  contactMethod?: string;
  serviceType?: string;
  message?: string;
  captcha?: string;
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string | undefined): string {
  const safe = escapeHtml((value ?? "").trim() || "—");
  return `<tr><td style="padding:6px 12px 6px 0;color:#64748B;vertical-align:top;"><strong>${escapeHtml(
    label,
  )}</strong></td><td style="padding:6px 0;color:#0B1D33;">${safe}</td></tr>`;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  // Server-side captcha check (mirrors client-side: 9 + 4 = 13)
  if ((body.captcha ?? "").trim() !== "13") {
    return Response.json({ error: "Captcha failed" }, { status: 400 });
  }

  // Required fields
  const required: Array<keyof ContactPayload> = [
    "firstName",
    "lastName",
    "phone",
    "email",
  ];
  for (const key of required) {
    if (!body[key] || !String(body[key]).trim()) {
      return Response.json(
        { error: `Missing required field: ${key}` },
        { status: 400 },
      );
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toAddress = process.env.FORM_TO_EMAIL;
  const fromAddress = process.env.FORM_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey || !toAddress) {
    console.error(
      "Contact form misconfigured: RESEND_API_KEY or FORM_TO_EMAIL not set",
    );
    return Response.json(
      { error: "Email service is not configured" },
      { status: 500 },
    );
  }

  const fullName = `${body.firstName} ${body.lastName}`.trim();
  const subject = `New service request from ${fullName}`;

  const html = `
    <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0B1D33;">
      <h2 style="margin:0 0 16px;color:#0387cc;">New Service Request</h2>
      <table style="border-collapse:collapse;font-size:14px;">
        ${row("Name", fullName)}
        ${row("Email", body.email)}
        ${row("Phone", body.phone)}
        ${row("Preferred Contact", body.contactMethod)}
        ${row("Service Type", body.serviceType)}
        ${row("Address", body.address)}
        ${row("City", body.city)}
        ${row("State", body.state)}
        ${row("ZIP", body.zip)}
        ${row("Country", body.country)}
      </table>
      <h3 style="margin:20px 0 8px;">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.5;">${escapeHtml(
        (body.message ?? "").trim() || "—",
      )}</p>
    </div>
  `;

  const text = [
    `New Service Request`,
    ``,
    `Name: ${fullName}`,
    `Email: ${body.email}`,
    `Phone: ${body.phone}`,
    `Preferred Contact: ${body.contactMethod ?? "—"}`,
    `Service Type: ${body.serviceType ?? "—"}`,
    `Address: ${body.address ?? "—"}`,
    `City: ${body.city ?? "—"}`,
    `State: ${body.state ?? "—"}`,
    `ZIP: ${body.zip ?? "—"}`,
    `Country: ${body.country ?? "—"}`,
    ``,
    `Message:`,
    body.message ?? "—",
  ].join("\n");

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: fromAddress,
    to: toAddress,
    replyTo: body.email,
    subject,
    html,
    text,
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      { error: "Failed to send email" },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
