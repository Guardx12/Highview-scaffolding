import { site } from '@/lib/site';
import { SocialLinks } from '@/components/SocialLinks';
import { ContactForm } from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <section className="py-12" id="contact">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white shine-title">Get a quote</h1>
        <p className="mt-4 text-white/75">
          Tell us what you need and we’ll get back to you quickly. For urgent jobs, calling is best.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a href={`tel:${site.phoneE164}`} className="card hover-lift hover:bg-white/10 transition">
            <div className="text-xs font-semibold text-white/60">Mobile</div>
            <div className="mt-1 text-2xl font-bold text-white">{site.phoneDisplay}</div>
            <div className="mt-2 text-sm text-white/70">Tap to call</div>
          </a>
          <a href={`tel:${site.secondaryPhoneE164}`} className="card hover-lift hover:bg-white/10 transition">
            <div className="text-xs font-semibold text-white/60">Office</div>
            <div className="mt-1 text-2xl font-bold text-white">{site.secondaryPhoneDisplay}</div>
            <div className="mt-2 text-sm text-white/70">Tap to call</div>
          </a>
          <a href={`mailto:${site.email}`} className="card hover-lift hover:bg-white/10 transition">
            <div className="text-xs font-semibold text-white/60">Email</div>
            <div className="mt-1 text-base font-bold break-all text-white">{site.email}</div>
            <div className="mt-2 text-sm text-white/70">Tap to email</div>
          </a>
          <a href={site.googleReviewUrl} target="_blank" rel="noreferrer" className="card hover-lift hover:bg-white/10 transition">
            <div className="text-xs font-semibold text-white/60">Google</div>
            <div className="mt-1 text-2xl font-bold text-white">Leave a review</div>
            <div className="mt-2 text-sm text-white/70">Takes 30 seconds</div>
          </a>
        </div>

        <div className="mt-6">
          <SocialLinks />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
