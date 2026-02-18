import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

type Payload = {
  name: string;
  phone: string;
  area?: string;
  message?: string;
};

function safe(v: unknown, max = 2000) {
  const s = String(v ?? '').trim();
  return s.length > max ? s.slice(0, max) : s;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<Payload>;
    const name = safe(body.name, 120);
    const phone = safe(body.phone, 60);
    const area = safe(body.area, 120);
    const message = safe(body.message, 4000);

    if (!name || !phone) {
      return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
    }

    const { RESEND_API_KEY } = process.env;
    const to = process.env.CONTACT_TO_EMAIL || 'info@highviewscaffolding.co.uk';
    const from = process.env.CONTACT_FROM_EMAIL || 'Highview Website <onboarding@resend.dev>';

    if (!RESEND_API_KEY) {
      return NextResponse.json(
        {
          error:
            'Email is not configured yet. Set RESEND_API_KEY in Vercel environment variables.',
        },
        { status: 500 }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const subject = `New Highview enquiry — ${name}`;
    const text =
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      (area ? `Area/Postcode: ${area}\n` : '') +
      `\nMessage:\n${message || '(no message)'}` +
      `\n\nSent via highviewscaffolding.co.uk contact form`;

    await resend.emails.send({
      from,
      to: [to],
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || 'Failed to send.' }, { status: 500 });
  }
}
