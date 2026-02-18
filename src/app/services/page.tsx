import { Button } from '@/components/Button';
import { ReviewMarquee } from '@/components/ReviewMarquee';

const services = [
  {
    title: 'Domestic scaffolding',
    bullets: ['Roof access & repairs', 'Chimneys & re-pointing', 'Rendering & painting', 'Extensions & renovations'],
  },
  {
    title: 'Commercial scaffolding',
    bullets: ['Site scaffolds & access', 'Contractor support', 'Programme-friendly scheduling', 'Clear RAMS & compliance'],
  },
  {
    title: 'Temporary roofs',
    bullets: ['Weather protection', 'Project continuity', 'Secure structures', 'Practical solutions'],
  },
  {
    title: 'Access towers / short-term setups',
    bullets: ['Quick installation', 'Tidy footprint', 'Ideal for small works', 'Professional finish'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">Scaffolding services</h1>
          <p className="mt-4 max-w-2xl text-white/75">
            We deliver safe, tidy scaffolding for domestic and commercial projects across the South East. Here’s what we’re commonly booked for.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((s) => (
              <div key={s.title} className="card p-6">
                <h2 className="text-lg font-semibold text-white">{s.title}</h2>
                <ul className="mt-3 space-y-2 text-sm text-white/80">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-brand-green" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
