# RIVROSS Custom Website

Custom-built RIVROSS corporate website using semantic HTML, modern CSS Grid/Flexbox, and vanilla JavaScript. Elementor and WordPress are not required for the frontend.

## Development

Open `index.html` directly for a static preview, or serve the folder with any static server:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Structure

- `index.html` — Home page
- `assets/css/styles.css` — design tokens, layout, responsive rules, components
- `assets/js/app.js` — navigation, mobile menu, and data-driven cards
- `data/` — content data for future page/CMS integration
- `pages/` — additional pages will be added here
- `reference/mockups/` — supplied visual references, excluded from deployment
- `docs/` — project architecture and blueprint reference

## Design direction

- Corporate navy and RIVROSS gold palette
- Cormorant Garamond display typography with Inter for interface text
- 1280px desktop content frame
- CSS Grid for repeatable card layouts
- Flexbox for navigation, CTA actions, and row alignment
- Mobile-first responsive breakpoints at 1024px and 720px
