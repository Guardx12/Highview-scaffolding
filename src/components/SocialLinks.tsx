'use client';

import { site } from '@/lib/site';

function FacebookIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H8.08V12h2.36V9.8c0-2.33 1.39-3.62 3.51-3.62 1.02 0 2.08.18 2.08.18v2.3h-1.17c-1.15 0-1.5.71-1.5 1.44V12h2.56l-.41 2.88h-2.15v6.99A10 10 0 0 0 22 12z"
      />
    </svg>
  );
}

function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        fill="currentColor"
        d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4zm-4.5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.6 6.9a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"
      />
    </svg>
  );
}

export function SocialLinks({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={site.facebook}
        target="_blank"
        rel="noreferrer"
        className="hover-lift inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 text-[#1877F2] shadow-sm"
        aria-label="Facebook"
        title="Facebook"
      >
        <FacebookIcon className="h-6 w-6" />
      </a>
      <a
        href={site.instagram}
        target="_blank"
        rel="noreferrer"
        className="hover-lift inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-3 shadow-sm"
        aria-label="Instagram"
        title="Instagram"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_110%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)] text-white">
          <InstagramIcon className="h-5 w-5" />
        </span>
      </a>
      <a
        href={site.googleReviewUrl}
        target="_blank"
        rel="noreferrer"
        className="hover-lift inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/85 shadow-sm"
        title="Leave a Google review"
      >
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/10"><img src="/google-logo.svg" alt="Google" className="h-5 w-5" /></span>
        Leave a review
      </a>
    </div>
  );
}
