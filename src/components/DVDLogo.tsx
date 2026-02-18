'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

/**
 * Subtle "DVD screensaver" style bouncing logo.
 * - Respects prefers-reduced-motion
 * - Pauses on hover
 * - Keeps it tasteful (slow speed + small size)
 *
 * Mobile tweak:
 * - Uses a smaller logo on small screens so it doesn't cover hero text.
 */
export function DVDLogo({
  size = 320,
  mobileSize = 180,
  className = '',
}: {
  /** Desktop / default size (px) */
  size?: number;
  /** Size used on small screens (px) */
  mobileSize?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const frame = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [effectiveSize, setEffectiveSize] = useState(size);

  // Keep size in sync with screen width (Tailwind "sm" breakpoint = 640px)
  useEffect(() => {
    const mq = window.matchMedia?.('(max-width: 639px)');
    if (!mq) return;

    const apply = () => setEffectiveSize(mq.matches ? mobileSize : size);
    apply();

    mq.addEventListener?.('change', apply);
    return () => mq.removeEventListener?.('change', apply);
  }, [size, mobileSize]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (reduce) return;

    const parent = el.parentElement;
    if (!parent) return;

    let x = 12;
    let y = 12;
    // Slow, premium movement (less distracting)
    let vx = 0.12;
    let vy = 0.09;

    const tick = () => {
      if (!ref.current || !parent) return;

      if (!paused) {
        const pw = parent.clientWidth;
        const ph = parent.clientHeight;

        x += vx * 4;
        y += vy * 4;

        const maxX = Math.max(0, pw - effectiveSize);
        const maxY = Math.max(0, ph - effectiveSize);

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
  }, [paused, effectiveSize]);

  return (
    <div
      ref={ref}
      className={`pointer-events-auto absolute left-0 top-0 select-none ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-hidden="true"
      title="Highview Scaffolding"
    >
      <div className="relative rounded-full bg-white/10 p-2 shadow-sm ring-1 ring-white/15 backdrop-blur">
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-2xl opacity-70"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(67,160,71,0.35), transparent 60%)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-xl opacity-60"
          style={{
            background:
              'radial-gradient(circle at 70% 70%, rgba(255,255,255,0.18), transparent 55%)',
          }}
        />
        <Image
          src="/images/highview-logo.webp"
          alt=""
          width={effectiveSize}
          height={effectiveSize}
          className="object-cover rounded-full drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]"
          priority={false}
        />
      </div>
    </div>
  );
}
