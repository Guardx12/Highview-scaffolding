'use client';

import Image from 'next/image';

type Badge = { src: string; alt: string };

export function BadgeMarquee({
  badges,
  title = 'Accreditations & training',
}: {
  badges: Badge[];
  title?: string;
}) {
  const loop = [...badges, ...badges];

  return (
    <section className="py-6">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-white">{title}</h2>
            <p className="mt-1 text-sm text-white/70">Trusted standards that support safer work on site.</p>
          </div>
        </div>

        <div className="relative mt-4 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-dark to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-dark to-transparent z-10" />

          <div className="group">
            <div className="flex items-center gap-4 py-2 will-change-transform motion-safe:animate-[marqueeBadges_16s_linear_infinite] sm:motion-safe:animate-[marqueeBadges_30s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {loop.map((b, idx) => (
                <div
                  key={`${b.src}-${idx}`}
                  className="shrink-0 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 shadow-sm backdrop-blur hover-lift"
                >
                  <Image
                    src={b.src}
                    alt={b.alt}
                    width={320}
                    height={120}
                    className={b.alt.toLowerCase().includes("chas") ? "h-16 w-[280px] object-contain sm:h-20 sm:w-[340px]" : "h-14 w-[240px] object-contain sm:h-16 sm:w-[280px]"}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes marqueeBadges {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}
