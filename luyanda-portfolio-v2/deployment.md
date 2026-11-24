# Deploying on Netlify (https://luyandankosi.netlify.app)

## Run locally in VS Code
File > Open Folder > select this folder (index.html must be directly inside it), then right-click index.html > Open with Live Server.
Paths start with `/` (like `/style.css`), so always open THIS folder, not its parent.

## Files
- `index.html`, `style.css`, `script.js`: the portfolio page (street-style: ink black, cream and pastel green, stickers, ticker, stacked process cards, drippy footer).
- `assets/`: images, `form.js` (contact form), `consent.js` (cookie banner), `analytics.js`.
- `style.css`: the single stylesheet for every page (index, privacy, terms, 404). The old `assets/theme.css` was removed.
- `assets/stickers/*.webp`: 512px web copies of every sticker in `sticker-library/`. `sticker-library/`: the master library (2048px PNG + SVG + web WebP, five categories, open `sticker-library/index.html` to browse). It is not referenced by the site, so you can leave the png/svg folders out of the deploy if you want a lighter upload.
- `_headers`, `_redirects`: Netlify security headers and redirects (replace netlify.toml).

## Deploy
Upload the whole folder (or push to GitHub and import into Netlify). Leave the build command empty and publish directory as `.`.
Keep folder names lowercase. The CV must stay named `Luyanda_Nkosi_CV.pdf`.

## After the first deploy
1. Contact form: Netlify > Forms > Settings > Form notifications, add an email notification to Laynkosi1304@gmail.com.
2. Analytics: set `GC_CODE` in `assets/analytics.js` (goatcounter.com). It only loads after a visitor clicks Accept.
3. Search: submit /sitemap.xml in Google Search Console.
4. `.well-known/security.txt` expires 2027-11-16: update or delete it.
