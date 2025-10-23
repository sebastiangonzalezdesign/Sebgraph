# Advanced: Deploying to cPanel (ZIP upload or copy `dist/`)

This doc explains how to build the site, prepare the `dist/` output produced by Vite + `react-snap`, and upload it to a cPanel hosting account (File Manager or FTP/SFTP). It also includes a short verification checklist.

## 1) Build (local)

1. Install dependencies (if not already):

    npm install

2. Run the production build (this runs `vite build` and your `postbuild` step which calls `react-snap`):

    npm run build

-   What the build produces:
    -   A `dist/` folder containing `index.html`, asset folders and per-route HTML files produced by `react-snap`.
    -   A copied `.htaccess` (if present) will be placed in `dist/`.

3. Quick local sanity-check (serve the static build locally):

    python3 -m http.server 8080 --directory dist

Open http://localhost:8080 and spot-check pages (home, Work page, a couple project pages).

## 2) Create ZIP (optional)

If you prefer uploading a single archive:

-   On macOS / Linux / WSL:

    zip -r dist.zip dist

This creates `dist.zip` that you can upload via cPanel File Manager.

## 3) Upload to cPanel (File Manager)

Option A — Upload a ZIP (recommended when you want one file):

1. Log in to cPanel and open **File Manager**.
2. Navigate to `public_html/` (or the document root for your domain).
3. Click **Upload** and choose `dist.zip`.
4. After upload completes, select `dist.zip` in File Manager and click **Extract**. Choose `public_html/` as the destination to place files at the site root.
5. Confirm extracted files exist at `public_html/index.html` and the `assets/` folder exists.

Option B — Upload the `dist/` folder contents directly (FTP/SFTP or File Manager):

1. In File Manager, open `public_html/` and click **Upload** → choose files from the `dist/` folder (you can upload folders or use an FTP client like FileZilla to transfer the full `dist/` tree).
2. Ensure you upload the `index.html` at the root and all asset directories placed adjacent to it.

## 4) .htaccess and SPA routing

-   `react-snap` generates static per-route HTML files (e.g. `/projects/aleph/index.html`) so you _do not_ strictly need SPA rewrites for static hosting.
-   If you prefer to keep a single `index.html` fallback instead of multiple per-route files, add this `.htaccess` to `public_html/`:

```
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

-   Note: If you uploaded `dist/` with per-route `index.html` files (react-snap output), leave them in place — that is usually preferable for SEO and simpler hosting.

## 5) CDN / Cache headers (optional)

-   If your host supports setting cache headers in cPanel, configure long cache TTLs for static assets (`assets/*`) and a conservative TTL for `index.html`.
-   Alternatively, enable a CDN and point it at your domain.

## 6) Verification checklist (after upload)

1. Open your site: `https://yourdomain/` — homepage loads and hero animation/spacing is visible.
2. Visit Work page (e.g. `https://yourdomain/#/work` or direct route if using per-route HTML) and confirm the hero renders immediately (no missing layout).
3. Spot-check several project pages — they should load without 404s and assets should be present.
4. View page source and confirm structured data is present: search for `<script type="application/ld+json">` in key pages.
5. Check `robots.txt` and `sitemap.xml` exist at `https://yourdomain/robots.txt` and `https://yourdomain/sitemap.xml`.
6. Test on mobile (or use Chrome DevTools device emulation) to confirm responsive layout and hero animation.
7. If using HTTPS, ensure all assets load over `https` (no mixed-content warnings).
8. If you see an unexpected 404 on a sub-route, make sure you uploaded the per-route `index.html` files produced by `react-snap` or add the `.htaccess` SPA fallback above.

## 7) Troubleshooting

-   If the hero or styling is broken after upload:

    -   Confirm the `dist/assets/*.css` files are present and accessible (open one in browser).
    -   Check console for 404 errors for CSS/JS assets and fix the upload if any files are missing.

-   If `react-snap` didn't create expected per-route HTML files, re-run locally:

    npm run build

and inspect `dist/` for per-route folders like `projects/aleph/index.html`.

## 8) Notes for this repository

-   This build already runs `react-snap` in `postbuild`, producing per-route HTML files suitable for static hosting on cPanel.
-   The `dist/` folder is the artifact to upload. Use the ZIP upload or FTP depending on your preferred workflow.

---

If you'd like, I can also create a small `deploy.sh` script that zips `dist/` and, if you provide SFTP credentials, uploads automatically (I won't store credentials in the repo; that script will expect them as runtime env vars).
