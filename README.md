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


## Immersive product experience and Product Studio

The product experience is data-driven and reads only products with `status = 'published'` from Supabase.

- Homepage product rail and collection exhibition: `/`
- Product detail route: `/products/:slug`
- Product administration: `/admin`
- Public product API: `GET /api/products`
- Public homepage settings: `GET /api/experience`
- Public Supabase client configuration: `GET /api/config` (returns only the publishable key and project URL)

### Product rendering

- Image-sequence rotation stores an ordered frame manifest in `product_360_assets.frame_manifest`. Upload a consistently ordered set of genuine product photographs or renders; 36–72 frames are recommended.
- GLB/GLTF products use the browser `model-viewer` component with camera controls.
- Static imagery is supported as a fallback.
- No synthetic packaging, fake product renders, nutritional values, certifications or product claims are generated.
- Rotation supports pointer/touch dragging, scoped wheel rotation, arrow controls and reset. Normal page scrolling is retained outside the viewer.

### Product Studio access

The Product Studio uses Supabase Auth and trusted JWT `app_metadata.role = 'admin'`. It does not trust user-editable `user_metadata`, and it does not contain a service-role key.

1. Create the intended administrator account in Supabase Authentication.
2. In the Supabase SQL Editor, assign the trusted app metadata role to that exact account (replace the email):
   ```sql
   update auth.users
   set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || jsonb_build_object('role', 'admin')
   where lower(email) = lower('ADMIN_EMAIL_HERE');
   ```
3. Sign out and sign in again so the refreshed JWT contains the updated app metadata.
4. Open `/admin`.

The product bucket `ocean-breeze-products` is public-read for published product assets; uploads, updates and deletes require an authenticated JWT with the trusted admin app-metadata role. The product tables use RLS. Public users can read only published products and their visible information.

### Database objects

The product studio migrations are `supabase/migrations/20261115083000_create_ocean_breeze_product_studio.sql` and `supabase/migrations/20261115083500_tune_product_studio_rls.sql`. They create product, collection, art-direction, 360-asset, information, media, experience-settings and activity tables with RLS, plus the product asset bucket. The follow-up migration separates public SELECT from admin writes and wraps JWT lookups to avoid repeated per-row evaluation.

### Known launch dependencies

- The database currently has no verified product catalogue. Add actual products through Product Studio. Until then, the existing bottle concept artwork remains visible and is explicitly labelled as concept art, not confirmed retail packaging.
- No approved retail packaging photography or true 360-degree frame sets were present at implementation time. Upload approved assets before publishing a product as a full 360° experience.
- Product sizes, water source, mineral content, purification details, nutritional information, packaging claims and certifications must be confirmed before entry.
- Admin account provisioning requires an explicit trusted app-metadata role assignment as documented above.
