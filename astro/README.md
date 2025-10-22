# Astro migration preview

This folder is an initial Astro scaffold for the portfolio migration. It is intentionally minimal and designed to reuse existing React components via `@astrojs/react`.

How to run locally:

```bash
cd astro
npm install
npm run dev
```

Notes:

-   This scaffold uses client:load for React components to keep behavior identical to the current Vite setup while allowing server-side rendering for static content.
-   Next steps: copy assets, layouts, and progressively migrate components into native Astro or keep them as React components rendered client-side until fully ported.
