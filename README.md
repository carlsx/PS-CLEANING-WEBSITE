# PS Cleaning website

A static site (HTML, CSS, vanilla JS) in English, Português and Español. No build step.

## Deploy on GitHub Pages
1. Create a new repository on GitHub.
2. Upload everything in this folder (`index.html`, `styles.css`, `script.js`, `assets/`) to the repository root.
3. Go to **Settings → Pages**, set **Source** to *Deploy from a branch*, pick `main` and `/ (root)`, then **Save**.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

To preview locally, just open `index.html` in a browser.

## Things to fill in
- **Phone, email, form:** edit `CONFIG` at the top of `script.js`. Paste a Formspree URL in `formEndpoint` to send form submissions; leave it empty to open a pre-filled email instead.
- **Hero photo (optional):** add `assets/images/hero.jpg`. Until then, the hero uses the "after" side of the living-room image.
- **About photo:** replace the placeholder block in `index.html` (see the comment in the About section).
- **Reviews:** replace each "Customer review coming soon." card with a real, verified review.
- **Canonical URL, JSON-LD business details, favicon, social links:** search `index.html` for `REPLACE`.
- **Service area text:** `arP` in `script.js` (Portuguese and Spanish) and the matching line in `index.html` (English).
