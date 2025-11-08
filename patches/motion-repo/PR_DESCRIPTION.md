PR-ready patch: Motion UI Kit subdomain (vercel + SEO + indexing)

Files included (drop at repo root or open a PR):

-   vercel.json -> Vercel rewrite to SPA `index.html` (prevents 404s for client routes)
-   HEAD_SNIPPET.html -> Copy into your HTML shell (index.html template or equivalent) inside <head>
-   JSON-LD_SNIPPET.html -> Copy to <head> to add SoftwareApplication structured data
-   robots.txt -> Allow crawling and point to sitemap
-   sitemap.xml -> Minimal sitemap template; expand with your routes

How to apply:

1. Add `vercel.json` to the project root. Vercel will pick it up automatically on deploy.
2. Insert the contents of `HEAD_SNIPPET.html` and `JSON-LD_SNIPPET.html` into the <head> of your HTML/templating system (e.g., `public/index.html` or server-side template). Make sure preview.png exists at the specified path or update the URL.
3. Add `robots.txt` and `sitemap.xml` to the static output (project `public/` or root) so they are served at `https://motion.sebastiangonzalez.design/robots.txt` and `/sitemap.xml`.
4. Deploy to Vercel and verify that client routes return index.html by visiting a nested route (e.g. https://motion.sebastiangonzalez.design/examples). If you see server 404s, confirm `vercel.json` is in repo root and redeploy.

Verification checklist:

-   curl -I https://motion.sebastiangonzalez.design/ -> ensure 200
-   curl -s https://motion.sebastiangonzalez.design/ | grep -E "<title|og:image|canonical|application/ld+json" -> confirm tags
-   Visit https://motion.sebastiangonzalez.design/sitemap.xml and https://motion.sebastiangonzalez.design/robots.txt

Search Console:

-   Either add a Domain property `sebastiangonzalez.design` (covers subdomains), or add `https://motion.sebastiangonzalez.design/` as a separate property and submit the sitemap.

Notes & suggestions:

-   Use absolute canonical URLs per page. For documentation pages, canonicalize to the subdomain URL (not your main portfolio).
-   Add an internal footer link on the subdomain back to your portfolio (e.g., "Part of Sebastian González portfolio — sebastiangonzalez.design") to signal ownership.
-   If you generate sitemaps programmatically, automate pushing `sitemap.xml` to the public directory at build time.

If you want, I can:

-   Create a PR in the motion repo (requires access) with these files in place.
-   Generate a more complete sitemap by scanning the motion repo's routes if you provide the repo contents.
