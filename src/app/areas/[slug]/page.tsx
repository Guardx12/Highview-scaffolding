import { notFound } from 'next/navigation';
import { areas } from '@/lib/areasData';
import { services } from '@/lib/servicesData';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const area = areas.find((a) => a.slug === params.slug);
  if (!area) return {};
  return {
    title: `Scaffolding in ${area.name} | ${site.name}`,
    description: area.intro,
  };
}

export default function AreaPage({ params }: { params: { slug: string } }) {
  const area = areas.find((a) => a.slug === params.slug);
  if (!area) return notFound();

  return (
    <Reveal>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-green" />
            Sussex coverage
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white shine-title">
            Scaffolding in {area.name}
          </h1>
          <p className="mt-4 max-w-3xl text-white/75">{area.intro}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="card hover-lift">
              <div className="text-base font-semibold text-white">Fast quotes</div>
              <p className="mt-2 text-sm text-white/75">Tell us the job details and we’ll respond quickly with a clear plan.</p>
            </div>
            <div className="card hover-lift">
              <div className="text-base font-semibold text-white">Safe, tidy installs</div>
              <p className="mt-2 text-sm text-white/75">Compliance-first scaffolding with a respectful, professional team.</p>
            </div>
            <div className="card hover-lift">
              <div className="text-base font-semibold text-white">Domestic & commercial</div>
              <p className="mt-2 text-sm text-white/75">From home renovations to larger sites — built to suit access needs.</p>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">Popular services in {area.name}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 5).map((s) => (
                <a key={s.slug} href={`/services/${s.slug}`} className="card hover-lift group">
                  <div className="text-base font-semibold text-white group-hover:text-brand-green transition">{s.title}</div>
                  <p className="mt-2 text-sm text-white/75">{s.summary}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Get a Quote</Button>
            <Button href={`tel:${site.phoneE164}`} variant="secondary">
              Call {site.phoneDisplay}
            </Button>
            <Button href="/areas" variant="secondary">
              Back to areas
            </Button>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
