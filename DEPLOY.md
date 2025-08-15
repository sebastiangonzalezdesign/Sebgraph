Deployment checklist for SEO and assets

1. Place your CV PDF in one of these locations before running `npm run build:critical`:

    - `public/cv-sebastian-gonzalez.pdf`
    - `src/assets/cv-sebastian-gonzalez.pdf`
    - `assets/cv-sebastian-gonzalez.pdf`

    The build script runs `prepare-assets.js` which will copy the file into `public/assets/cv-sebastian-gonzalez-vIgh5JXi.pdf` so it will be available at `/assets/cv-sebastian-gonzalez-vIgh5JXi.pdf`.

2. Ensure you deploy the `dist/` contents (or contents of `public/` if your host serves that directly) and that `.htaccess` from `public/.htaccess` is copied to the server root.

3. Verify redirects and canonical:

    - Visit `http://sebastiangonzalez.design/` and ensure it 301 redirects to `https://sebastiangonzalez.design/`.
    - Visit `http://www.sebastiangonzalez.design/` and ensure it 301 redirects to `https://sebastiangonzalez.design/`.
    - Visit `https://sebastiangonzalez.design/assets/cv-sebastian-gonzalez-vIgh5JXi.pdf` and ensure it returns `Content-Type: application/pdf`.

4. Revalidate URLs in Google Search Console (URL Inspection → Request Indexing) for the home page and the PDF after deploy.

Notes:

-   If your host uses a different docroot (for example `public_html/`), ensure `.htaccess` and `assets/` are placed in the host's document root.
-   If you use a CDN or caching layer, purge caches after deploy so Google sees the latest content.
