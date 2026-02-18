import React from 'react';

export function Stars({ rating }: { rating: number }) {
  const r = Math.max(0, Math.min(5, rating));
  return (
    <div className="flex items-center gap-0.5" aria-label={`${r} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className={`h-4 w-4 ${i < r ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 17.27l5.18 3.04-1.64-5.81L20 10.24l-5.9-.5L12 4.5 9.9 9.74 4 10.24l4.46 4.22-1.64 5.81z" />
        </svg>
      ))}
    </div>
  );
}
