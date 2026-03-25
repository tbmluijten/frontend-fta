# FTA Landing (WordPress theme)

Self-contained theme for a **single FTA landing page**. Intended for its **own** WordPress install (not paired with the WWFFYJ theme).

## Setup

1. Copy this folder to `wp-content/themes/fta-landing/` (or zip and upload under **Appearance → Themes**).
2. In the theme directory, install assets:
   ```bash
   npm install
   npm run build
   ```
   This generates `assets/css/app.css` and `assets/js/main.js`.
3. In WordPress: **Settings → Reading → A static page**, pick a page as the homepage (or rely on `index.php` fallback for the blog home).
4. Activate **FTA Landing** under **Appearance → Themes**.

Internal links use `home_url()` (e.g. `/case-review/`, `/eligibility/`). Create matching pages or redirects in that environment.

## Editing styles

- Source: `src/theme-input.css` (Tailwind v4 + `@source` on all `*.php` in this theme).
- Rebuild after PHP/class changes: `npm run build:css`.
