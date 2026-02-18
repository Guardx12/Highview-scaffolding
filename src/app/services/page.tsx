import { Button } from '@/components/Button';
import { ReviewMarquee } from '@/components/ReviewMarquee';
import { services } from '@/lib/servicesData';

export default function ServicesPage() {
  return (
    <>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-white shine-title">Scaffolding services</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            Sussex-focused scaffolding for domestic and commercial projects. Explore each service for a clear overview and quick enquiry.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <a key={s.slug} href={`/services/${s.slug}`} className="card hover-lift p-6 group">
                <h2 className="text-lg font-semibold text-white group-hover:text-brand-green transition">{s.title}</h2>
                <p className="mt-2 text-sm text-white/75">{s.summary}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white transition">
                  View details <span className="transition group-hover:translate-x-0.5">→</span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/contact">Get a Quote</Button>
            <Button href="/gallery" variant="secondary">See recent work</Button>
          </div>
        </div>
      </section>

      <ReviewMarquee title="Customers recommend Highview" />
    </>
  );
}
