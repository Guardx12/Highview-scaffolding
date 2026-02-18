import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

export function Button({ href, children, variant = 'primary', className = '' }: Props) {
  const base =
    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-green/50 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0';
  const styles =
    variant === 'primary'
      ? 'bg-brand-green text-white hover:brightness-110'
      : 'border border-white/15 bg-white/5 text-white hover:bg-white/10';

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
