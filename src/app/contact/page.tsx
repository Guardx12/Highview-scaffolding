import { site } from '@/lib/site';

export default function ContactPage() {
  return (
    <section className="py-12" id="contact">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">Get a quote</h1>
        <p className="mt-4 text-white/75">
          Tell us what you need and we’ll get back to you quickly. For urgent jobs, calling is best.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a href={`tel:${site.phoneE164}`} className="card hover:bg-white/10 transition">
            <div className="text-xs font-semibold text-white/60">Mobile</div>
            <div className="mt-1 text-2xl font-bold text-white">{site.phoneDisplay}</div>
            <div className="mt-2 text-sm text-white/70">Tap to call</div>
          </a>
          <a href={`tel:${site.secondaryPhoneE164}`} className="card hover:bg-white/10 transition">
            <div className="text-xs font-semibold text-white/60">Office</div>
            <div className="mt-1 text-2xl font-bold text-white">{site.secondaryPhoneDisplay}</div>
            <div className="mt-2 text-sm text-white/70">Tap to call</div>
          </a>
          <a href={`mailto:${site.email}`} className="card hover:bg-white/10 transition">
            <div className="text-xs font-semibold text-white/60">Email</div>
            <div className="mt-1 text-base font-bold break-all text-white">{site.email}</div>
            <div className="mt-2 text-sm text-white/70">Tap to email</div>
          </a>
          <a href={site.googleReviewUrl} target="_blank" rel="noreferrer" className="card hover:bg-white/10 transition">
            <div className="text-xs font-semibold text-white/60">Google</div>
            <div className="mt-1 text-2xl font-bold text-white">Leave a review</div>
            <div className="mt-2 text-sm text-white/70">Takes 30 seconds</div>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a className="btn-ghost" href={site.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a className="btn-ghost" href={site.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>

        <form
          className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
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
            <button type="submit" className="mt-2 rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white hover:brightness-110">
              Send enquiry
            </button>
            <p className="text-xs text-white/60">
              This opens your email client to send your message. If you’d prefer, call us.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
