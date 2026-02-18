import Image from 'next/image';

export function Badges({ className = '' }: { className?: string }) {
  return (
    <div className={`grid gap-3 sm:grid-cols-3 ${className}`}>
      {[
        { src: '/badges/chas-advanced.svg', alt: 'CHAS Advanced' },
        { src: '/badges/dbs-checked.svg', alt: 'DBS checked' },
        { src: '/badges/fully-insured.svg', alt: 'Fully insured' },
      ].map((b) => (
        <div key={b.src} className="hover-lift rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
          <Image src={b.src} alt={b.alt} width={320} height={96} className="h-16 w-full object-contain" />
        </div>
      ))}
    </div>
  );
}
