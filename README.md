# Ocean Breeze — immersive brand experience

A responsive premium website for Ocean Breeze, a beverage brand currently focused on purified water. The existing Cloudflare Worker architecture is retained.

## Experience
- Cinematic, full-height brand introduction with custom glass-like bottle concept artwork.
- Editorial brand discovery, purified-water feature, signature everyday moment, future direction and enquiry conversion sections.
- Responsive desktop, tablet and portrait mobile compositions, including an accessible mobile navigation.
- Reduced-motion support, progressive reveal motion, keyboard focus states, semantic structure and SEO/Open Graph metadata.
- No external runtime dependencies or third-party asset requests.

## Enquiries
- `POST /api/enquiries` validates and persists customer enquiries to Supabase.
- Required fields: name, email, enquiry type and message; phone is optional.
- Honeypot, same-origin validation, request-size checks, Worker validation and Postgres constraints.
- Supabase RLS is enabled. The anonymous role receives INSERT only; it cannot read, update or delete enquiries.
- Enquiries are stored in Supabase for manual review. No email notification or admin inbox is configured yet.
- Required Worker bindings: `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY`. The publishable key is designed for public use and is not a service-role credential.

## Local validation
- `node --check worker.js`
- `node --test tests/worker.test.mjs`

GitHub Actions runs these checks for pushes and pull requests on the main, implementation and maintenance branches.

## Content integrity and launch dependencies
The site does not claim packaging sizes, source, mineral composition, certifications, health benefits, pricing, stock, delivery areas, testimonials, or achievements. The bottle visual is a concept illustration, not confirmed final packaging. Before full commercial launch, supply approved product photography and specifications, confirmed contact and social channels, and a reviewed POPIA privacy notice and retention policy.

## Deployment
Cloudflare Worker entrypoint: `worker.js`; script: `ocean-breeze`.
