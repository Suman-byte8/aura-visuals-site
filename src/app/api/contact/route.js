import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, business, message } = await request.json();

    // Basic server-side validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Aura Visuals Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Inquiry from ${name}${business ? ` — ${business}` : ""}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a1c1c;">
          <div style="border-top: 3px solid #febb3c; padding: 32px 0 8px;">
            <h2 style="font-size: 22px; font-weight: 700; margin: 0 0 24px;">New Contact Inquiry</h2>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-size: 12px; color: #747878; letter-spacing: 0.1em; text-transform: uppercase; width: 140px;">Name</td>
              <td style="padding: 10px 0; font-size: 16px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 12px; color: #747878; letter-spacing: 0.1em; text-transform: uppercase;">Email</td>
              <td style="padding: 10px 0; font-size: 16px;"><a href="mailto:${email}" style="color: #000;">${email}</a></td>
            </tr>
            ${business ? `
            <tr>
              <td style="padding: 10px 0; font-size: 12px; color: #747878; letter-spacing: 0.1em; text-transform: uppercase;">Business</td>
              <td style="padding: 10px 0; font-size: 16px;">${business}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 10px 0; font-size: 12px; color: #747878; letter-spacing: 0.1em; text-transform: uppercase; vertical-align: top;">Message</td>
              <td style="padding: 10px 0; font-size: 16px; white-space: pre-wrap;">${message}</td>
            </tr>
          </table>
          <div style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e2e2e2; font-size: 12px; color: #747878;">
            Sent via aura-visuals.com contact form
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
