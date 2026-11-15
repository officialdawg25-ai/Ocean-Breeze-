# Ocean Breeze — discovery and implementation record

## Verified project state before this implementation

- Repository: `officialdawg25-ai/Ocean-Breeze-`; default branch: `main`.
- Initial repository content was a single self-contained Cloudflare Worker entrypoint (`worker.js`) and a short README.
- Existing production Worker script: `ocean-breeze`; workers.dev subdomain enabled.
- Existing Worker had no bindings, routes/domains, package manifest, framework build, or test pipeline.
- Supabase project: `rrvbhdpgcqhdlajlfnkd`, active PostgreSQL 17 project in `eu-central-1`.
- The public schema had no application tables before the enquiry migration.
- Existing product information confirmed in the conversation: Ocean Breeze is a beverage product brand currently focused on purified water, with possible future expansion. No verified packaging sizes, source, certifications, prices, distribution coverage, contact channels, or customer claims were available.

## Implementation decisions

- Keep the current Cloudflare Worker architecture; no framework rewrite or unnecessary dependencies.
- Use a custom bottle concept illustration because final retail packaging artwork and product photography were not supplied. The page explicitly describes it as a concept visual.
- Present only purified water as the current offering. Future beverage and health-oriented categories are described as future possibilities, not available products.
- Add a server-mediated enquiry endpoint backed by Supabase. The publishable key is a public key and is passed as a Worker binding; no service-role or secret key is used.
- The enquiry table enables RLS and grants anonymous users INSERT only. Anonymous users have no SELECT, UPDATE, or DELETE grants.
- Add validation at the Worker and database layers, a honeypot field, strict same-origin checking, security headers, and no-store API responses.
- Do not invent email addresses, phone numbers, social accounts, business locations, product claims, or testimonials.

## Known constraints

- No actual product photography, final packaging design, verified technical product specification, price list, or fulfilment/distribution information was supplied.
- No legal privacy notice details or designated privacy contact were supplied. The form shows a concise collection notice; a complete POPIA privacy notice and retention policy still require the business's verified responsible-party details and legal review.
- No independent browser automation or device farm was configured at discovery. CI provides syntax and structural smoke tests; it does not substitute for a full visual browser inspection.
