import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { intake, packageName, packagePrice } = body;

  try {
    await resend.emails.send({
      from: "Mothering Melanin <onboarding@resend.dev>",
      to: process.env.JAZZLYN_EMAIL!,
      subject: `New Client Intake — ${intake.firstName} ${intake.lastName} (${packageName})`,
      html: `
        <h2>New Intake Form Submission</h2>
        <p><strong>Package:</strong> ${packageName} — ${packagePrice}</p>

        <h3>Birthing Person</h3>
        <p>${intake.firstName} ${intake.lastName}, Age ${intake.age} (${intake.pronouns || "pronouns not provided"})</p>

        <h3>Support Person</h3>
        <p>${intake.supportFirstName || "—"} ${intake.supportLastName || ""} (${intake.supportPronouns || "—"})</p>

        <h3>Contact</h3>
        <p>Email: ${intake.email}<br/>Phone: ${intake.phone}<br/>Due Date: ${intake.dueDate}</p>

        <h3>Healthcare Provider</h3>
        <p>${intake.providerFirstName} ${intake.providerLastName}</p>

        <h3>Home Address</h3>
        <p>${intake.homeAddress.line1}${intake.homeAddress.line2 ? ", " + intake.homeAddress.line2 : ""}<br/>
        ${intake.homeAddress.city}, ${intake.homeAddress.state} ${intake.homeAddress.zip}</p>

        <h3>Birthing Location</h3>
        <p>${intake.birthingAddress.line1}${intake.birthingAddress.line2 ? ", " + intake.birthingAddress.line2 : ""}<br/>
        ${intake.birthingAddress.city}, ${intake.birthingAddress.state} ${intake.birthingAddress.zip}</p>

        <h3>Pre-existing Conditions</h3>
        <p>${intake.conditions.length ? intake.conditions.join(", ") : "None"}</p>

        <h3>History of Abuse</h3>
        <p>${intake.abuseHistory.length ? intake.abuseHistory.join(", ") : "None disclosed"}</p>

        <h3>Tokophobia</h3>
        <p>${intake.tokophobia || "Not answered"}</p>

        <h3>Additional Info</h3>
        <p>${intake.additionalInfo || "None"}</p>

        <h3>How They Found Us</h3>
        <p>${intake.referral || "Not provided"}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}