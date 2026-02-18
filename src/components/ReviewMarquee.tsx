import React from 'react';
import { reviews } from '@/lib/reviews';
import { Stars } from './Stars';

function GoogleBadge() {
  return (
    <div className="flex items-center gap-2 text-xs text-white/60">
      <div className="h-6 w-6 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center">
        <span className="font-semibold text-white"><img src="/google-logo.svg" alt="Google" className="h-4 w-4" /></span>
      </div>
      <span className="font-medium text-white/70">Google</span>
    </div>
  );
}

function ReviewCard({ name, text, rating, when }: { name: string; text: string; rating: number; when?: string }) {
  return (
    <div className="w-[320px] sm:w-[360px] shrink-0 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-sm backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-semibold text-white">{name}</div>
          <div className="mt-1 flex items-center gap-2">
            <Stars rating={rating} />
            {when ? <span className="text-xs text-white/60">• {when}</span> : null}
          </div>
        </div>
        <GoogleBadge />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-white/80 line-clamp-5">{text}</p>

      <div className="mt-4 text-xs text-white/60">Verified Google review</div>
    </div>
  );
}

export function ReviewMarquee({ title = 'Trusted by local customers' }: { title?: string }) {
  // 2x duplication = seamless loop without obvious repetition overload
  const loop = [...reviews, ...reviews];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">{title}</h2>
            <p className="mt-2 text-sm text-white/70">Recent feedback from Highview Scaffolding customers.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex btn-ghost"
          >
            Get a quote
          </a>
        </div>

        <div className="relative mt-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-dark to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-dark to-transparent z-10" />

          <div className="group">
            <div className="flex gap-4 py-2 will-change-transform motion-safe:animate-[marquee_11s_linear_infinite] sm:motion-safe:animate-[marquee_34s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {loop.map((r, idx) => (
                <ReviewCard key={`${r.name}-${idx}`} name={r.name} text={r.text} rating={r.rating} when={r.when} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
