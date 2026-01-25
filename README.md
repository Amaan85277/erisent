# Erisent Electro Controls Website

A production-ready, lightweight, responsive, and SEO-friendly website for Erisent Electro Controls - an electrical panel manufacturing company.

## Features

- ✅ Next.js 14 with App Router
- ✅ TypeScript
- ✅ Tailwind CSS for styling
- ✅ SEO optimized (metadata, sitemap, robots.txt, JSON-LD)
- ✅ Mobile-first responsive design
- ✅ EmailJS integration for contact form
- ✅ Leaflet map integration
- ✅ Modular component architecture

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Set up environment variables:
```bash
cp .env.example .env
```

Edit `.env` and add your EmailJS credentials:
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

3. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with Header, Footer, and JSON-LD
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── solutions/
│   │   └── page.tsx        # Solutions page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── sitemap.ts          # Sitemap generation
│   ├── robots.ts           # Robots.txt generation
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # Navigation header
│   │   └── Footer.tsx      # Footer component
│   └── sections/
│       ├── HomeHero.tsx
│       ├── WhyChooseUs.tsx
│       ├── Clients.tsx
│       ├── AboutCompany.tsx
│       ├── DirectorSection.tsx
│       ├── SolutionsList.tsx
│       ├── ContactForm.tsx
│       └── MapSection.tsx
└── seo/
    └── metadata.ts         # Page-specific metadata
```

## Customization

### Images

Replace placeholder images with actual images:
- Director photo: `/public/director-placeholder.jpg`
- Client logos: Update the `clientLogos` array in `components/sections/Clients.tsx`
- Panel images: Update image URLs in `components/sections/SolutionsList.tsx`

### Contact Information

Update contact details in:
- `components/layout/Footer.tsx`
- `components/sections/DirectorSection.tsx`
- `components/sections/MapSection.tsx` (map coordinates)

### Map Location

Update the map coordinates in `components/sections/MapSection.tsx`:
```typescript
const defaultCenter: [number, number] = [latitude, longitude]
```

## Build

```bash
pnpm build
pnpm start
```

## SEO Features

- ✅ Unique metadata for each page
- ✅ Semantic HTML structure
- ✅ One H1 per page
- ✅ JSON-LD Organization schema
- ✅ Canonical URLs
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Mobile-responsive design

## License

© 2026 Erisent Electro Controls. All rights reserved.
