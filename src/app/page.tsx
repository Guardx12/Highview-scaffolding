import Image from 'next/image';
import { Button } from '@/components/Button';
import { ReviewMarquee } from '@/components/ReviewMarquee';
import { ImageMarquee } from '@/components/ImageMarquee';
import { DVDLogo } from '@/components/DVDLogo';
import { site } from '@/lib/site';
import { galleryImages } from '@/lib/gallery';

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="relative mx-auto max-w-6xl px-4 py-0">
            <div className="relative h-[520px] md:h-[560px]">
              <DVDLogo className="pointer-events-auto" />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-grid opacity-40" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-brand-green" />
              CHAS Advanced • DBS checked • Fully insured
            </div>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              Professional scaffolding services across <span className="text-brand-green">Sussex</span>, Kent & Hampshire
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-700">
              Domestic and commercial scaffolding built the right way — safe, tidy, reliable. Fast quotes, clear communication and a team that respects your
              property and schedule.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/contact">Get a Quote</Button>
              <Button href={`tel:${site.phoneE164}`} variant="secondary">
                Call {site.phoneDisplay}
              </Button>
              <Button href="/gallery" variant="secondary">
                View recent work
              </Button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold">Fast</div>
                <div className="mt-1 text-gray-600">Quotes & scheduling</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold">Safe</div>
                <div className="mt-1 text-gray-600">Compliance-first</div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="text-2xl font-bold">Tidy</div>
                <div className="mt-1 text-gray-600">Respectful on site</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-b from-brand-green/15 to-transparent" />
            <div className="overflow-hidden rounded-[28px] border border-gray-200 bg-white shadow">
              <Image
                src={galleryImages[1].src}
                alt={galleryImages[1].alt}
                width={1200}
                height={900}
                className="h-[420px] w-full object-cover"
                priority
              />
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {galleryImages.slice(2, 5).map((img) => (
                <div key={img.src} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                  <Image src={img.src} alt={img.alt} width={600} height={450} className="h-28 w-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ImageMarquee images={galleryImages.slice(0, 8)} title="Recent scaffolding work" />

      <ReviewMarquee title="Trusted by local customers" />

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold tracking-tight">What we do</h2>
              <p className="mt-2 text-sm text-gray-600">
                A straightforward scaffolding service that keeps projects moving — from small domestic jobs to larger commercial sites.
              </p>
            </div>

            <div className="md:col-span-2 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: 'Domestic scaffolding',
                  desc: 'House scaffolds, roof access, chimney work, rendering, painting and repairs — safe and tidy for homeowners.',
                },
                {
                  title: 'Commercial scaffolding',
                  desc: 'Reliable scaffolding for contractors and site managers, with clear scheduling and professional standards.',
                },
                {
                  title: 'Temporary roofs & weather protection',
                  desc: 'Protect your project and keep work moving with practical, secure temporary roof solutions.',
                },
                {
                  title: 'Access towers & short-term hire',
                  desc: 'Quick access solutions when you need a smaller setup with a professional finish.',
                },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="text-base font-semibold text-gray-900">{c.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/services">Explore services</Button>
            <Button href="/areas" variant="secondary">Areas we cover</Button>
          </div>
        </div>
      </section>

      <ReviewMarquee title="Clear communication. Reliable service." />

      <section className="py-12" id="contact">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-[28px] border border-gray-200 bg-white p-8 shadow-sm md:p-10">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-3xl font-extrabold tracking-tight">Get a fast quote</h2>
                <p className="mt-3 text-sm text-gray-700">
                  Tell us what you need and we’ll come back quickly with the next steps. Prefer to talk? Call us and we’ll help straight away.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <a
                    href={`tel:${site.phoneE164}`}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-4 hover:bg-gray-100"
                  >
                    <div className="text-xs font-semibold text-gray-500">Phone</div>
                    <div className="mt-1 text-lg font-bold text-gray-900">{site.phoneDisplay}</div>
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-4 hover:bg-gray-100"
                  >
                    <div className="text-xs font-semibold text-gray-500">Email</div>
                    <div className="mt-1 text-lg font-bold text-gray-900">{site.email}</div>
                  </a>
                </div>
              </div>

              <form
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
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
                    <span className="font-semibold text-gray-700">What do you need?</span>
                    <textarea name="message" rows={4} className="rounded-xl border border-gray-200 bg-white px-3 py-2" />
                  </label>
                  <button
                    type="submit"
                    className="mt-2 inline-flex items-center justify-center rounded-xl bg-brand-green px-4 py-3 text-sm font-semibold text-white hover:brightness-110"
                  >
                    Send enquiry
                  </button>
                  <p className="text-xs text-gray-500">
                    This form opens your email client to send your message. If you’d prefer, call us instead.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <ReviewMarquee title="Proven, trusted scaffolding" />
    </>
  );
}
