-- Product Studio RLS tuning: avoid per-row JWT evaluation and redundant permissive SELECT policies.
create index if not exists product_admin_activity_actor_idx on public.product_admin_activity(actor_id);

-- For each product-owned table, keep SELECT visibility separate from admin write permissions.
drop policy if exists "Admins manage collections" on public.product_collections;
create policy "Admins insert collections" on public.product_collections for insert to authenticated with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins update collections" on public.product_collections for update to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin') with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins delete collections" on public.product_collections for delete to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin');
drop policy if exists "Public reads published collections" on public.product_collections;
create policy "Public reads published collections" on public.product_collections for select to anon, authenticated using (status='published' or (select auth.jwt())->'app_metadata'->>'role'='admin');

drop policy if exists "Admins manage products" on public.products;
create policy "Admins insert products" on public.products for insert to authenticated with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins update products" on public.products for update to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin') with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins delete products" on public.products for delete to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin');
drop policy if exists "Public reads published products" on public.products;
create policy "Public reads published products" on public.products for select to anon, authenticated using (status='published' or (select auth.jwt())->'app_metadata'->>'role'='admin');

drop policy if exists "Admins manage product art direction" on public.product_art_directions;
create policy "Admins insert product art direction" on public.product_art_directions for insert to authenticated with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins update product art direction" on public.product_art_directions for update to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin') with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins delete product art direction" on public.product_art_directions for delete to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin');
drop policy if exists "Public reads published product art direction" on public.product_art_directions;
create policy "Public reads published product art direction" on public.product_art_directions for select to anon, authenticated using (exists (select 1 from public.products p where p.id=product_id and p.status='published') or (select auth.jwt())->'app_metadata'->>'role'='admin');

drop policy if exists "Admins manage product 360 assets" on public.product_360_assets;
create policy "Admins insert product 360 assets" on public.product_360_assets for insert to authenticated with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins update product 360 assets" on public.product_360_assets for update to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin') with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins delete product 360 assets" on public.product_360_assets for delete to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin');
drop policy if exists "Public reads published 360 assets" on public.product_360_assets;
create policy "Public reads published 360 assets" on public.product_360_assets for select to anon, authenticated using (exists (select 1 from public.products p where p.id=product_id and p.status='published') or (select auth.jwt())->'app_metadata'->>'role'='admin');

drop policy if exists "Admins manage product information" on public.product_information;
create policy "Admins insert product information" on public.product_information for insert to authenticated with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins update product information" on public.product_information for update to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin') with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins delete product information" on public.product_information for delete to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin');
drop policy if exists "Public reads visible published product information" on public.product_information;
create policy "Public reads visible published product information" on public.product_information for select to anon, authenticated using ((is_visible and exists (select 1 from public.products p where p.id=product_id and p.status='published')) or (select auth.jwt())->'app_metadata'->>'role'='admin');

drop policy if exists "Admins manage product media" on public.product_media;
create policy "Admins insert product media" on public.product_media for insert to authenticated with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins update product media" on public.product_media for update to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin') with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins delete product media" on public.product_media for delete to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin');
drop policy if exists "Public reads published product media" on public.product_media;
create policy "Public reads published product media" on public.product_media for select to anon, authenticated using (exists (select 1 from public.products p where p.id=product_id and p.status='published') or (select auth.jwt())->'app_metadata'->>'role'='admin');

drop policy if exists "Admins manage experience settings" on public.website_experience_settings;
create policy "Admins insert experience settings" on public.website_experience_settings for insert to authenticated with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins update experience settings" on public.website_experience_settings for update to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin') with check ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins delete experience settings" on public.website_experience_settings for delete to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin');
drop policy if exists "Public reads published experience settings" on public.website_experience_settings;
create policy "Public reads published experience settings" on public.website_experience_settings for select to anon, authenticated using (is_published or (select auth.jwt())->'app_metadata'->>'role'='admin');

drop policy if exists "Admins read product activity" on public.product_admin_activity;
drop policy if exists "Admins insert product activity" on public.product_admin_activity;
create policy "Admins read product activity" on public.product_admin_activity for select to authenticated using ((select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins insert product activity" on public.product_admin_activity for insert to authenticated with check ((select auth.jwt())->'app_metadata'->>'role'='admin' and actor_id=(select auth.uid()));

drop policy if exists "Admins upload Ocean Breeze product assets" on storage.objects;
drop policy if exists "Admins update Ocean Breeze product assets" on storage.objects;
drop policy if exists "Admins delete Ocean Breeze product assets" on storage.objects;
create policy "Admins upload Ocean Breeze product assets" on storage.objects for insert to authenticated with check (bucket_id='ocean-breeze-products' and (select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins update Ocean Breeze product assets" on storage.objects for update to authenticated using (bucket_id='ocean-breeze-products' and (select auth.jwt())->'app_metadata'->>'role'='admin') with check (bucket_id='ocean-breeze-products' and (select auth.jwt())->'app_metadata'->>'role'='admin');
create policy "Admins delete Ocean Breeze product assets" on storage.objects for delete to authenticated using (bucket_id='ocean-breeze-products' and (select auth.jwt())->'app_metadata'->>'role'='admin');
