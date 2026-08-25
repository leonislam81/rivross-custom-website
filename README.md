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
- `assets/js/app.js` — home page data loading, navigation, mobile menu, and cards
- `assets/js/pages.js` — interior-page rendering, detail routes, and client-side search/filtering
- `assets/js/data.js` — shared JSON loader
- `data/content.json` — editable dynamic content for properties, projects, news, events, jobs, team, services, and businesses
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

## Dynamic content and search

All sample records are stored in `data/content.json`. Add or edit records there and the Home, Real Estate, Properties, Projects, News, Events, Careers, Leadership, Search, and detail pages will use the updated content automatically.

The static frontend provides working client-side search/filtering for properties, projects, news, events, and global site search. It does not require a database or backend. Forms such as contact, inquiry, and newsletter remain presentation-ready demo forms until an email/form endpoint is connected.
