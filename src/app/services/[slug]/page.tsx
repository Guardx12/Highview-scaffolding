import { notFound } from 'next/navigation';
import { services } from '@/lib/servicesData';
import { Button } from '@/components/Button';
import { Reveal } from '@/components/Reveal';
import { site } from '@/lib/site';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${site.name}`,
    description: service.summary,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return notFound();

  return (
    <Reveal>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-green" />
            Sussex scaffolding specialists
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white shine-title">
            {service.title}
          </h1>
          <p className="mt-4 max-w-3xl text-white/75">{service.summary}</p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {service.body.map((p, idx) => (
              <div key={idx} className="card hover-lift">
                <p className="text-sm leading-relaxed text-white/75">{p}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contact">Get a Quote</Button>
            <Button href={`tel:${site.phoneE164}`} variant="secondary">
              Call {site.phoneDisplay}
            </Button>
            <Button href="/services" variant="secondary">
              Back to services
            </Button>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
