import React from 'react';
import { site } from '@/lib/site';

export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <a
          href={`tel:${site.phoneE164}`}
          className="flex-1 rounded-xl bg-brand-green px-4 py-3 text-center text-sm font-semibold text-white"
        >
          Call {site.phoneDisplay}
        </a>
        <a
          href="/contact"
          className="flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-center text-sm font-semibold text-gray-900"
        >
          Get a quote
        </a>
      </div>
    </div>
  );
}
