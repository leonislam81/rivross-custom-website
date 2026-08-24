# Custom Website Architecture

The supplied WordPress/Elementor blueprint is retained as a planning reference. The implementation direction has changed to a custom static frontend.

## Shared shell

- `site-header` — responsive navigation, dropdown, mobile drawer
- `site-footer` — five-column desktop grid, stacked mobile layout
- design tokens in `:root`
- reusable `.section-heading`, `.button`, `.card`, `.image-placeholder` patterns

## Content model

The first Home page uses arrays in `assets/js/app.js` for properties, projects, news, and leadership. These can later be replaced by JSON, a REST API, WordPress, or another CMS without changing the card markup.

## Responsive contract

- Desktop: 1280px content frame, multi-column grids
- Tablet: reduced gaps and two-column cards
- Mobile: single-column sections, hidden desktop navigation, menu drawer, full-width actions

Every section owns its spacing and grid rules; no absolute positioning is used for the page layout.
