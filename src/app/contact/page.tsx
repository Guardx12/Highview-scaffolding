import { site } from '@/lib/site';

export default function ContactPage() {
  return (
    <section className="py-12" id="contact">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Get a quote</h1>
        <p className="mt-4 text-gray-700">
          Tell us what you need and we’ll get back to you quickly. For urgent jobs, calling is best.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a href={`tel:${site.phoneE164}`} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow">
            <div className="text-xs font-semibold text-gray-500">Mobile</div>
            <div className="mt-1 text-2xl font-bold">{site.phoneDisplay}</div>
            <div className="mt-2 text-sm text-gray-700">Tap to call</div>
          </a>
          <a href={`tel:${site.secondaryPhoneE164}`} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow">
            <div className="text-xs font-semibold text-gray-500">Office</div>
            <div className="mt-1 text-2xl font-bold">{site.secondaryPhoneDisplay}</div>
            <div className="mt-2 text-sm text-gray-700">Tap to call</div>
          </a>
          <a href={`mailto:${site.email}`} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow">
            <div className="text-xs font-semibold text-gray-500">Email</div>
            <div className="mt-1 text-xl font-bold break-all">{site.email}</div>
            <div className="mt-2 text-sm text-gray-700">Tap to email</div>
          </a>
          <a href={site.googleReviewUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow">
            <div className="text-xs font-semibold text-gray-500">Google</div>
            <div className="mt-1 text-2xl font-bold">Leave a review</div>
            <div className="mt-2 text-sm text-gray-700">Takes 30 seconds</div>
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a className="rounded-xl border border-gray-200 bg-white px-4 py-2 font-semibold text-gray-900 shadow-sm hover:shadow" href={site.facebook} target="_blank" rel="noreferrer">
            Facebook
          </a>
          <a className="rounded-xl border border-gray-200 bg-white px-4 py-2 font-semibold text-gray-900 shadow-sm hover:shadow" href={site.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>

        <form
          className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6"
          action={`mailto:${site.email}`}
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-3">
            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-gray-700">Name</span>
              <input name="name" required className="rounded-xl border border-gray-200 bg-white px-3 py-2" />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-gray-700">Phone</span>
              <input name="phone" required className="rounded-xl border border-gray-200 bg-white px-3 py-2" />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-gray-700">Postcode / area</span>
              <input name="area" className="rounded-xl border border-gray-200 bg-white px-3 py-2" />
            </label>
            <label className="grid gap-1 text-sm">
              <span className="font-semibold text-gray-700">Project details</span>
              <textarea name="message" rows={5} className="rounded-xl border border-gray-200 bg-white px-3 py-2" />
            </label>
            <button type="submit" className="mt-2 rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white hover:brightness-110">
              Send enquiry
            </button>
            <p className="text-xs text-gray-500">
              This opens your email client to send your message. If you’d prefer, call us.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
