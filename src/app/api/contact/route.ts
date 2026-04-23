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
  const trimmed = (value ?? "").trim();
  if (!trimmed) return "";
  return `<tr>
    <td style="padding:10px 16px 10px 0;color:#64748B;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.04em;vertical-align:top;width:40%;">${escapeHtml(label)}</td>
    <td style="padding:10px 0;color:#0B1D33;font-size:15px;vertical-align:top;">${escapeHtml(trimmed)}</td>
  </tr>`;
}

function section(title: string, rows: string): string {
  const inner = rows.trim();
  if (!inner) return "";
  return `
    <tr><td style="padding:24px 32px 8px 32px;">
      <h3 style="margin:0 0 8px;color:#0387cc;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">${escapeHtml(title)}</h3>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        ${inner}
      </table>
    </td></tr>`;
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
  const subject = `New service request — ${fullName}${body.serviceType ? ` (${body.serviceType})` : ""}`;

  const addressLine = [body.address, body.city, body.state, body.zip]
    .map((v) => (v ?? "").trim())
    .filter(Boolean)
    .join(", ");

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#F1F5F9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;color:#0B1D33;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F1F5F9;padding:32px 16px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(11,29,51,0.08);">

        <tr><td style="background:#0B1D33;padding:32px;text-align:center;">
          <img src="https://fivestarappliancerepairpros.com/images/logo.webp" alt="Sub-Zero Repair Services" width="180" style="display:block;margin:0 auto;max-width:180px;height:auto;" />
        </td></tr>

        <tr><td style="background:linear-gradient(135deg,#0387cc 0%,#00B4D8 100%);padding:28px 32px;color:#ffffff;">
          <p style="margin:0 0 4px;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;opacity:0.85;">New Service Request</p>
          <h1 style="margin:0;font-size:24px;font-weight:700;line-height:1.3;">${escapeHtml(fullName)}</h1>
          ${body.serviceType ? `<p style="margin:8px 0 0;font-size:16px;opacity:0.95;">${escapeHtml(body.serviceType)}</p>` : ""}
        </td></tr>

        ${section(
          "Customer",
          [
            row("Name", fullName),
            row("Email", body.email),
            row("Phone", body.phone),
            row("Preferred Contact", body.contactMethod),
          ].join(""),
        )}

        ${section(
          "Service Details",
          [
            row("Service Type", body.serviceType),
            row("Location", addressLine),
            row("Country", body.country),
          ].join(""),
        )}

        ${
          (body.message ?? "").trim()
            ? `<tr><td style="padding:24px 32px 8px 32px;">
                <h3 style="margin:0 0 8px;color:#0387cc;font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;">Message</h3>
                <div style="background:#F8FAFC;border-left:4px solid #0387cc;border-radius:4px;padding:16px 20px;color:#0B1D33;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(body.message!.trim())}</div>
              </td></tr>`
            : ""
        }

        <tr><td style="padding:24px 32px 32px 32px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center" style="padding:8px;">
                <a href="tel:${escapeHtml((body.phone ?? "").replace(/[^0-9+]/g, ""))}" style="display:inline-block;background:#f89406;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 28px;border-radius:10px;">Call customer</a>
              </td>
              <td align="center" style="padding:8px;">
                <a href="mailto:${escapeHtml(body.email ?? "")}" style="display:inline-block;background:#0387cc;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 28px;border-radius:10px;">Reply by email</a>
              </td>
            </tr>
          </table>
        </td></tr>

        <tr><td style="background:#020617;padding:24px 32px;text-align:center;color:#94A3B8;font-size:12px;line-height:1.6;">
          <p style="margin:0 0 4px;color:#E2E8F0;font-weight:600;">Sub-Zero Repair Company</p>
          <p style="margin:0;">Coral Gables, FL 33134 &middot; (800) 651-4528</p>
          <p style="margin:8px 0 0;">Submitted via fivestarappliancerepairpros.com/contact</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

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
