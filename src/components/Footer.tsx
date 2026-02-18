import Link from 'next/link';
import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-dark/60">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-lg font-bold text-white">{site.legalName}</div>
            <p className="mt-2 text-sm text-white/70">
              Professional, reliable scaffolding for domestic and commercial projects across {site.areas.join(', ')}.
            </p>
            <div className="mt-4 text-sm text-white/80">
              <div>
                <span className="font-semibold">Mobile:</span>{' '}
                <a className="hover:underline" href={`tel:${site.phoneE164}`}>
                  {site.phoneDisplay}
                </a>
              </div>
              <div className="mt-1">
                <span className="font-semibold">Office:</span>{' '}
                <a className="hover:underline" href={`tel:${site.secondaryPhoneE164}`}>
                  {site.secondaryPhoneDisplay}
                </a>
              </div>
              <div className="mt-1">
                <span className="font-semibold">Email:</span>{' '}
                <a className="hover:underline" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Quick links</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li><Link className="hover:underline" href="/services">Services</Link></li>
              <li><Link className="hover:underline" href="/areas">Areas</Link></li>
              <li><Link className="hover:underline" href="/gallery">Gallery</Link></li>
              <li><Link className="hover:underline" href="/contact">Contact</Link></li>
              <li><a className="hover:underline" href={site.googleReviewUrl} target="_blank" rel="noreferrer">Leave a Google review</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-white">Why Highview</div>
            <ul className="mt-3 space-y-2 text-sm text-white/80">
              <li>CHAS Advanced</li>
              <li>DBS checked</li>
              <li>Fully insured</li>
              <li>Domestic & commercial</li>
              <li className="pt-2 text-xs text-white/60">Follow</li>
              <li><a className="hover:underline" href={site.facebook} target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a className="hover:underline" href={site.instagram} target="_blank" rel="noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</div>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
