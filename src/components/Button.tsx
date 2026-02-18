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
    'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-green/50';
  const styles =
    variant === 'primary'
      ? 'bg-brand-green text-white hover:brightness-110'
      : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50';

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
