'use client';

import Image from 'next/image';

type Img = { src: string; alt: string };

export function ImageMarquee({
  images,
  title = 'Recent projects',
}: {
  images: Img[];
  title?: string;
}) {
  const loop = [...images, ...images];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
            <p className="mt-2 text-sm text-white/70">A quick look at recent domestic and commercial scaffolds.</p>
          </div>
          <a
            href="/gallery"
            className="hidden sm:inline-flex btn-ghost"
          >
            View gallery
          </a>
        </div>

        <div className="relative mt-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-dark to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-dark to-transparent z-10" />

          <div className="group">
            <div className="flex gap-4 py-2 will-change-transform motion-safe:animate-[marqueeImages_38s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {loop.map((img, idx) => (
                <div key={`${img.src}-${idx}`} className="shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur">
                  <Image src={img.src} alt={img.alt} width={800} height={600} className="h-44 w-[280px] object-cover sm:h-48 sm:w-[320px]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marqueeImages {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
