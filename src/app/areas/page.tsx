import { Button } from '@/components/Button';
import { site } from '@/lib/site';

export default function AreasPage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">Areas we cover</h1>
        <p className="mt-4 max-w-2xl text-white/75">
          Based near {site.town}, we provide scaffolding across {site.areas.join(', ')} and surrounding areas. If you’re unsure, just get in touch.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Sussex',
              desc: 'Domestic and commercial scaffolding across West & East Sussex, including coastal and inland areas.',
            },
            {
              title: 'Kent',
              desc: 'Support for contractors and homeowners across Kent with tidy setups and clear communication.',
            },
            {
              title: 'Hampshire',
              desc: 'Reliable scaffolding for projects across Hampshire with a safety-first approach.',
            },
          ].map((a) => (
            <div key={a.title} className="card p-6">
              <div className="text-lg font-semibold text-white">{a.title}</div>
              <p className="mt-2 text-sm text-white/75">{a.desc}</p>
            </div>
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
