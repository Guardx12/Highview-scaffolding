'use client';

import { useState } from 'react';
import { site } from '@/lib/site';

export function ContactForm() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'|'error'>('idle');
  const [error, setError] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get('name') || ''),
      phone: String(formData.get('phone') || ''),
      area: String(formData.get('area') || ''),
      message: String(formData.get('message') || ''),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data?.error || 'Failed to send message');

      setStatus('sent');
      form.reset();
    } catch (err: any) {
      setStatus('error');
      setError(err?.message || 'Something went wrong');
    }
  }

  return (
    <form
      className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
      onSubmit={onSubmit}
    >
      <div className="grid gap-3">
        <label className="grid gap-1 text-sm">
          <span className="font-semibold text-white/80">Name</span>
          <input name="name" required className="rounded-xl border border-white/10 bg-brand-dark/60 px-3 py-2 text-white" />
        </label>

        <label className="grid gap-1 text-sm">
          <span className="font-semibold text-white/80">Phone</span>
          <input name="phone" required className="rounded-xl border border-white/10 bg-brand-dark/60 px-3 py-2 text-white" />
        </label>

        <label className="grid gap-1 text-sm">
          <span className="font-semibold text-white/80">Postcode / area</span>
          <input name="area" className="rounded-xl border border-white/10 bg-brand-dark/60 px-3 py-2 text-white" />
        </label>

        <label className="grid gap-1 text-sm">
          <span className="font-semibold text-white/80">Project details</span>
          <textarea name="message" rows={5} className="rounded-xl border border-white/10 bg-brand-dark/60 px-3 py-2 text-white" />
        </label>

        <button
          type="submit"
          className="btn-shine hover-lift mt-2 rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white hover:brightness-110"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        </button>

        {status === 'sent' && (
          <div className="mt-2 rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/85">
            Sent ✅ We’ll reply to you shortly. If it’s urgent, call <a className="underline" href={`tel:${site.secondaryPhoneE164}`}>{site.secondaryPhoneDisplay}</a>.
          </div>
        )}

        {status === 'error' && (
          <div className="mt-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-white/90">
            Couldn’t send right now: {error}. You can email us at <a className="underline" href={`mailto:${site.email}`}>{site.email}</a>.
          </div>
        )}
      </div>
    </form>
  );
}
