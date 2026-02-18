import Image from 'next/image';
import { Button } from '@/components/Button';
import { galleryImages } from '@/lib/gallery';

export default function AboutPage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white">About Highview</h1>
            <p className="mt-4 text-white/75">
              We’re a professional scaffolding team focused on doing the basics exceptionally well: safety, reliability, clear communication and tidy working.
              From homeowners to contractors, we aim to make scaffolding the easiest part of your project.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { title: 'Safety-first', desc: 'Professional standards and a careful approach on every site.' },
                { title: 'Respectful on site', desc: 'We treat your property and surroundings properly.' },
                { title: 'Clear communication', desc: 'No guessing — we keep you updated.' },
                { title: 'Domestic & commercial', desc: 'Experienced across a wide range of projects.' },
              ].map((c) => (
                <div key={c.title} className="card">
                  <div className="font-semibold text-white">{c.title}</div>
                  <div className="mt-1 text-sm text-white/75">{c.desc}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/contact">Get a Quote</Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-sm backdrop-blur">
            <Image src={galleryImages[4].src} alt={galleryImages[4].alt} width={1200} height={900} className="h-[520px] w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
