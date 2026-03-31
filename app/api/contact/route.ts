import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, website, _gotcha, timestamp } = body;

    // Honeypot: bots fill hidden fields, real users don't
    if (website || _gotcha) {
      // Return success to not alert the bot
      return NextResponse.json(
        { message: "Email sent successfully", id: "ok" },
        { status: 200 }
      );
    }

    // Time-based: reject if submitted faster than 3 seconds
    if (timestamp && Date.now() - Number(timestamp) < 3000) {
      return NextResponse.json(
        { message: "Email sent successfully", id: "ok" },
        { status: 200 }
      );
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Basic content spam check: reject gibberish names or messages
    const gibberishPattern = /^[A-Za-z0-9]{15,}$/;
    if (gibberishPattern.test(name.trim())) {
      return NextResponse.json(
        { message: "Email sent successfully", id: "ok" },
        { status: 200 }
      );
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .content { background: white; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: 600; color: #495057; margin-bottom: 5px; display: block; }
            .value { background: #f8f9fa; padding: 10px; border-radius: 4px; border-left: 4px solid #007bff; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e9ecef; font-size: 14px; color: #6c757d; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="margin: 0; color: #007bff;">New Contact Form Submission</h1>
            <p style="margin: 10px 0 0 0; color: #6c757d;">Received from ingchina.dev</p>
          </div>
          
          <div class="content">
            <div class="field">
              <span class="label">Name:</span>
              <div class="value">${name}</div>
            </div>
            
            <div class="field">
              <span class="label">Email:</span>
              <div class="value">${email}</div>
            </div>
            
            <div class="field">
              <span class="label">Message:</span>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          
          <div class="footer">
            <p>This email was sent from the contact form on your portfolio website.</p>
            <p>You can reply directly to this email to respond to ${name}.</p>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}

This email was sent from the contact form on your portfolio website.
You can reply directly to this email to respond to ${name}.
    `;

    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "contact@ingchina.dev",
        to: ["ingchina2004@gmail.com"],
        subject: `New Contact Form Submission from ${name}`,
        html: emailHtml,
        text: emailText,
        reply_to: email,
      }),
    });

    const data = await result.json();

    if (!result.ok) {
      console.error("Resend API error:", data);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Email sent successfully", id: data.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}