# Ocean Breeze — immersive brand experience

A premium, responsive web experience for Ocean Breeze, a beverage brand currently focused on purified water.

## Current scope
- Cinematic bottle-centered hero composition with original inline SVG bottle artwork.
- Editorial brand-story section and purified-water product showcase.
- Future-ready brand expansion section, worded cautiously.
- Responsive mobile layout, keyboard-accessible anchor navigation, and reduced-motion support.
- Lightweight IntersectionObserver reveal motion.
- Page title, description, Open Graph metadata, theme color.
- Cloudflare Worker serves the experience and a `/health` plain-text endpoint.

## Content integrity
The site intentionally does not claim bottle formats, source, mineral composition, certifications, health benefits, pricing, supply/distribution availability, testimonials, or contact details. Update those only when confirmed by Ocean Breeze.

## Deployment
The entrypoint is `worker.js`, an ES module Worker. The existing Cloudflare Worker script is named `ocean-breeze`. Compatibility date currently set to `2026-11-15`.

## QA notes
Responsive and reduced-motion behaviors are authored in CSS. A local package/build pipeline is not yet configured because this repository was initially empty and the first delivery is a self-contained Worker HTML experience. Live browser visual inspection and independent external HTTP verification remain outstanding in the execution environment.
