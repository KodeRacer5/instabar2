import { NextRequest, NextResponse } from 'next/server';

const RECIPIENT_EMAIL = 'titanlabcases@gmail.com';

// Simple in-memory rate limiting (resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // max submissions
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour in ms

// Lazy-load Resend only when API key is available
async function getResend() {
  if (!process.env.RESEND_API_KEY) return null;
  const { Resend } = await import('resend');
  return new Resend(process.env.RESEND_API_KEY);
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT) {
    return true;
  }

  record.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip =
      request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Check rate limit
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const data = await request.json();
    const { name, email, subject, message, website } = data;

    // Honeypot check - if 'website' field is filled, it's a bot
    if (website) {
      // Return success to not alert the bot, but don't send email
      console.log('Bot detected via honeypot');
      return NextResponse.json({ success: true });
    }

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email format' }, { status: 400 });
    }

    // Check if Resend API key is configured
    const resend = await getResend();
    if (!resend) {
      console.log('Contact form submission (Resend not configured):', {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });
      return NextResponse.json({ success: true });
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: 'Insta-Bar Contact <onboarding@resend.dev>', // Use verified domain in production
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `[Insta-Bar] ${subject || 'Contact Form'}: ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'Not specified'}</p>
        <hr />
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br />')}</p>
        <hr />
        <p style="color: #666; font-size: 12px;">
          Sent from Insta-Bar contact form at ${new Date().toISOString()}
        </p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
