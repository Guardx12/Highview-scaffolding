import { Button } from '@/components/Button';
import { site } from '@/lib/site';

export default function AreasPage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Areas we cover</h1>
        <p className="mt-4 max-w-2xl text-gray-700">
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
            <div key={a.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold">{a.title}</div>
              <p className="mt-2 text-sm text-gray-700">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-gray-50 p-6">
          <div className="text-base font-semibold">Not sure if you’re in range?</div>
          <p className="mt-2 text-sm text-gray-700">Send your postcode and a couple of details — we’ll confirm quickly.</p>
          <div className="mt-4">
            <Button href="/contact">Get a Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
