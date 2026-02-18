import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CallBar } from '@/components/CallBar';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: {
    default: `${site.name} | Domestic & Commercial Scaffolding`,
    template: `%s | ${site.name}`,
  },
  description:
    'Professional, reliable scaffolding services for domestic and commercial projects across Sussex, Kent and Hampshire. Fast quotes, tidy work, safety-first.',
  metadataBase: new URL('https://www.highviewscaffolding.co.uk'),
  openGraph: {
    title: `${site.name} | Scaffolding Services`,
    description:
      'Safety-first scaffolding for domestic and commercial projects. Sussex • Kent • Hampshire.',
    type: 'website',
  },
};

import WhatsAppBubble from "../components/WhatsAppBubble";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-carbon text-white">
        <Header />
        <main>{children}</main>
        <Footer />
        <CallBar />
        <WhatsAppBubble />
</body>
    </html>
  );
}
