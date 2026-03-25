# WWFFYJ Landing (WordPress theme)

Self-contained theme for a **single WWFFYJ landing page**. Use on a **separate** WordPress install from the FTA theme.

## Setup

1. Copy this folder to `wp-content/themes/wwffyj-landing/` (or zip and upload).
2. In the theme directory:
   ```bash
   npm install
   npm run build
   ```
3. **Settings → Reading**: set a static front page if you want `front-page.php` to apply; otherwise `index.php` renders the same landing.
4. Activate **WWFFYJ Landing**.

Links use `home_url()` only (no references to the FTA site). Hero avatars load from Unsplash URLs defined in `inc/data.php`.

## Editing styles

- Source: `src/theme-input.css`
- Rebuild: `npm run build:css`
