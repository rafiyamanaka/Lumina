# Lumina Growth

Next.js App Router version of the Lumina Growth landing page.

## Structure

- `src/app/` contains the route, layout, and global styles.
- `src/components/` contains reusable section components and shared UI.
- `src/data/site-data.tsx` contains the page content and card data.
- `lumina-growth.html` is kept as the legacy reference source.

## Run locally

1. Install dependencies with `npm install`.
2. Start the dev server with `npm run dev`.

## Notes

- The current Next.js scaffold preserves the original visual direction.
- Interactive parts are isolated into client components so the page stays maintainable.