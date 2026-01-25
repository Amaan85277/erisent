# Vercel Agent Skills – Next.js / React

## React & Next.js Best Practices
- Prefer Server Components by default
- Avoid unnecessary `use client`
- Do not fetch data in `useEffect` for SEO-critical content
- Use App Router conventions
- Avoid blocking waterfalls
- Prefer static rendering (SSG)

## Web Performance
- Optimize Core Web Vitals (LCP, CLS, INP)
- Avoid large client bundles
- Lazy load non-critical components
- Use next/image for all images

## Accessibility (SEO signal)
- Semantic HTML required
- One h1 per page
- Proper heading hierarchy
- Accessible navigation

These rules are inspired by vercel-labs/agent-skills.
