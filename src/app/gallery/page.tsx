import Image from 'next/image';
import { galleryImages } from '@/lib/gallery';
import { ImageMarquee } from '@/components/ImageMarquee';

export default function GalleryPage() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="text-4xl font-extrabold tracking-tight">Recent work</h1>
        <p className="mt-4 max-w-2xl text-gray-700">
          A snapshot of projects completed across domestic and commercial sites.
        </p>

        <div className="mt-8">
        <ImageMarquee images={galleryImages.slice(0, 10)} title="Projects in action" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((img) => (
            <div key={img.src} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
              <Image src={img.src} alt={img.alt} width={1200} height={900} className="h-56 w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
