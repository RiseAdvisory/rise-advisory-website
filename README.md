# Rise Advisory Website

Marketing website for **Rise Advisory** — a business and personal advisory firm based in Kuwait.

Built with **Astro** and **Tailwind CSS** as a fast, fully static single-page site.

## Tech Stack

- **[Astro](https://astro.build)** — static site framework
- **[Tailwind CSS](https://tailwindcss.com)** — utility-first styling (via `@tailwindcss/vite`)
- **Fonts** — Raleway (body) plus self-hosted display serifs

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:4321
npm run build    # build for production -> ./dist
npm run preview  # preview the production build locally
```

## Project Structure

```
src/
├── assets/            # logo and images (optimized by Astro)
├── components/        # page sections (Hero, About, Approach, Services, ...)
├── data/              # content data (services, FAQ)
├── layouts/
│   └── Layout.astro   # <head>, meta, fonts, structured data
├── pages/
│   └── index.astro    # the single page, composing all sections
└── styles/
    └── global.css     # Tailwind import + design tokens
public/
├── fonts/             # self-hosted display fonts
└── favicon.ico, og-image.png, robots.txt
```

## Content

All copy lives in the section components under `src/components/`, with the
services and FAQ kept in `src/data/` so each list is defined once and reused.

## Deployment

The build output in `dist/` is fully static and can be hosted on any static
host (Vercel, Netlify, Cloudflare Pages, etc.). The production domain is set in
`astro.config.mjs` (`site`), which drives canonical URLs and the sitemap.
