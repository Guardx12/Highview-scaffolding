import { Button } from '@/components/Button';
import { site } from '@/lib/site';
import { areas } from '@/lib/areasData';

export default function AreasPage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white shine-title">Areas we cover</h1>
        <p className="mt-4 max-w-2xl text-white/75">
          Based near {site.town}, we cover key towns across Sussex. If you’re unsure, send your postcode and we’ll confirm quickly.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a) => (
            <a key={a.slug} href={`/areas/${a.slug}`} className="card hover-lift p-6 group">
              <div className="text-lg font-semibold text-white group-hover:text-brand-green transition">{a.name}</div>
              <p className="mt-2 text-sm text-white/75">{a.intro}</p>
              <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/80 group-hover:text-white transition">
                View area page <span className="transition group-hover:translate-x-0.5">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-brand-dark/60 p-6 backdrop-blur">
          <div className="text-base font-semibold text-white">Not sure if you’re in range?</div>
          <p className="mt-2 text-sm text-white/75">Send your postcode and a couple of details — we’ll confirm quickly.</p>
          <div className="mt-4">
            <Button href="/contact">Get a Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
