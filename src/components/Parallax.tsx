'use client';

import { useEffect, useRef } from 'react';

/**
 * Lightweight parallax helper: updates a CSS variable (--parY) on the wrapper.
 * Respects prefers-reduced-motion.
 */
export function Parallax({ children, strength = 18, className = '' }: { children: React.ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    if (reduce) return;

    let raf: number | null = null;

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const viewportH = window.innerHeight || 800;
        const progress = (rect.top - viewportH) / (viewportH + rect.height); // -1..1-ish
        const y = Math.max(-strength, Math.min(strength, -progress * strength));
        el.style.setProperty('--parY', `${y}px`);
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
