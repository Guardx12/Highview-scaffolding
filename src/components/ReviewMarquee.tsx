import React from 'react';
import { reviews } from '@/lib/reviews';
import { Stars } from './Stars';

function GoogleBadge() {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-500">
      <div className="h-5 w-5 rounded-full bg-white shadow flex items-center justify-center">
        <span className="font-semibold">G</span>
      </div>
      <span className="font-medium">Google</span>
    </div>
  );
}

function ReviewCard({ name, text, rating, when }: { name: string; text: string; rating: number; when?: string }) {
  return (
    <div className="w-[320px] sm:w-[360px] shrink-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="mt-1 flex items-center gap-2">
            <Stars rating={rating} />
            {when ? <span className="text-xs text-gray-500">• {when}</span> : null}
          </div>
        </div>
        <GoogleBadge />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-700 line-clamp-5">{text}</p>

      <div className="mt-4 text-xs text-gray-500">Verified Google review</div>
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
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">Recent feedback from Highview Scaffolding customers.</p>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-flex rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:shadow transition"
          >
            Get a quote
          </a>
        </div>

        <div className="relative mt-6 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />

          <div className="group">
            <div className="flex gap-4 py-2 will-change-transform motion-safe:animate-[marquee_34s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
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
