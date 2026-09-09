# HKD V2 — Editorial redesign

This pack contains only files changed for the V2 visual/editorial pass.

## Design direction

- Keep Astro, Pagefind, existing content collections, Markdown entries and URLs.
- Reframe the site as an independent Hakodate travel publication rather than a card directory.
- Use large photography, a serif/sans editorial type system, restrained brick/slate accents, and flatter layouts with fewer rounded containers.
- Make the homepage curated: lead story, Eat / Drink / See sections, then browse links.
- Keep category filtering, but hide the full controls behind a compact Filter disclosure.
- Recompose detail pages as editorial articles with a sticky facts rail, large lead image, location block and related places.
- Remove duplicate RelatedPlaces rendering in restaurant and attraction detail templates.

## Files changed

- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/ListingCard.astro`
- `src/components/Hero.astro`
- `src/components/InfoCard.astro`
- `src/components/RelatedPlaces.astro`
- `src/pages/index.astro`
- `src/pages/restaurants/index.astro`
- `src/pages/restaurants/[id].astro`
- `src/pages/bars/index.astro`
- `src/pages/bars/[id].astro`
- `src/pages/attractions/index.astro`
- `src/pages/attractions/[id].astro`
- `src/styles/global.css`

## Important

The GitHub integration available during the design session could read the repository but returned HTTP 403 when asked to create a branch, so no files were written to `main`.

Apply these files on a branch such as `v2-editorial-redesign`, then run:

```sh
npm install
npm run build
npm run dev
```

Recommended first visual QA widths: 390px, 768px, 1024px, 1440px.
