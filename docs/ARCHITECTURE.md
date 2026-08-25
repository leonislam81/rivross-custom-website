# Custom Website Architecture

The supplied WordPress/Elementor blueprint is retained as a planning reference. The implementation direction has changed to a custom static frontend.

## Shared shell

- `site-header` — responsive navigation, dropdown, mobile drawer
- `site-footer` — five-column desktop grid, stacked mobile layout
- design tokens in `:root`
- reusable `.section-heading`, `.button`, `.card`, `.image-placeholder` patterns

## Content model

`data/content.json` is the single content source for the static build. It contains properties, projects, news, events, jobs, leadership, services, and business verticals. `assets/js/data.js` loads it for both the root Home page and the nested pages. `assets/js/app.js` renders the Home cards, while `assets/js/pages.js` renders archive pages, detail pages, and client-side search results.

Every record has a stable `id` so cards can link to a specific detail route, for example `property-details.html?id=rv-lvr-001` or `news-details.html?id=news-sustainability`.

The search layer is intentionally backend-free for GitHub Pages: property, project, news, event, and global search forms filter the loaded JSON in the browser and update the URL query string. A future CMS or API can replace the loader without changing the page structure.

## Responsive contract

- Desktop: 1280px content frame, multi-column grids
- Tablet: reduced gaps and two-column cards
- Mobile: single-column sections, hidden desktop navigation, menu drawer, full-width actions

Every section owns its spacing and grid rules; no absolute positioning is used for the page layout.
