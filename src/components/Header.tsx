import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { Button } from './Button';
import { SocialLinks } from './SocialLinks';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/areas', label: 'Areas' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-dark/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/highview-logo.webp"
            alt={`${site.name} logo`}
            width={160}
            height={48}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <SocialLinks />
          </div>
          <Button href={`tel:${site.phoneE164}`} variant="secondary" className="hidden sm:inline-flex">
            Call {site.phoneDisplay}
          </Button>
          <Button href={`tel:${site.secondaryPhoneE164}`} variant="secondary" className="hidden lg:inline-flex">
            Office {site.secondaryPhoneDisplay}
          </Button>
          <Button href="/contact">Get a Quote</Button>
        </div>
      </div>
    </header>
  );
}
