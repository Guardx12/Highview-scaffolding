# Highview Scaffolding – Modern Website (Next.js + Tailwind)

## Quick start

1) Install dependencies

```bash
npm install
```

2) Run locally

```bash
npm run dev
```

3) Build for production

```bash
npm run build
npm run start
```

## Deploy (Vercel)
- Push this folder to GitHub
- Import the repo in Vercel
- Framework preset: **Next.js**
- Deploy

## Editing content
- Company details: `src/lib/site.ts`
- Reviews (marquee): `src/lib/reviews.ts`
- Gallery images list: `src/lib/gallery.ts`
- Pages live in: `src/app/*`

## Notes
- Contact form uses `mailto:` so it works without a backend.
- `sitemap.xml` and `robots.txt` are generated via Next metadata routes.
