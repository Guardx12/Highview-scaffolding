'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/**
 * Subtle "DVD screensaver" style bouncing logo.
 * - Respects prefers-reduced-motion
 * - Pauses on hover
 * - Keeps it tasteful (slow speed + small size)
 */
export function DVDLogo({
  size = 64,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (reduce) return;

    const parent = el.parentElement;
    if (!parent) return;

    let x = 12;
    let y = 12;
    let vx = 0.35; // slow = premium
    let vy = 0.28;

    const tick = () => {
      if (!ref.current || !parent) return;

      if (!paused) {
        const pw = parent.clientWidth;
        const ph = parent.clientHeight;

        x += vx * 10;
        y += vy * 10;

        const maxX = Math.max(0, pw - size);
        const maxY = Math.max(0, ph - size);

        if (x <= 0) {
          x = 0;
          vx *= -1;
        } else if (x >= maxX) {
          x = maxX;
          vx *= -1;
        }

        if (y <= 0) {
          y = 0;
          vy *= -1;
        } else if (y >= maxY) {
          y = maxY;
          vy *= -1;
        }

        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      frame.current = window.requestAnimationFrame(tick);
    };

    frame.current = window.requestAnimationFrame(tick);

    return () => {
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, [paused, size]);

  return (
    <div
      ref={ref}
      className={`pointer-events-auto absolute left-0 top-0 select-none ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden="true"
      title="Highview Scaffolding"
    >
      <div className="rounded-full bg-white/80 p-1 shadow-sm ring-1 ring-gray-200 backdrop-blur">
        <Image
          src="/images/highview-logo.webp"
          alt=""
          width={size}
          height={size}
          className="h-12 w-12 object-contain"
          priority={false}
        />
      </div>
    </div>
  );
}
