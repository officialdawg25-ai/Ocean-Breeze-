-- Ocean Breeze Product Studio: managed products, 360 assets, art direction and publishing.
-- Admin authorization is intentionally based on trusted app_metadata, never user_metadata.
create table if not exists public.product_collections (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 1 and 120),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  description text,
  status text not null default 'draft' check (status in ('draft','published','archived')),
  display_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  name text not null check (char_length(trim(name)) between 1 and 160),
  slug text not null unique check (slug ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$'),
  subtitle text, description text, tagline text, category text,
  collection_id uuid references public.product_collections(id) on delete set null,
  packaging_format text, volume text, cover_image text, hero_asset text,
  rendering_mode text not null default 'image-sequence' check (rendering_mode in ('image-sequence','model-3d','static')),
  status text not null default 'draft' check (status in ('draft','published','archived')),
  display_order integer not null default 0, seo_title text, seo_description text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.product_art_directions (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null unique references public.products(id) on delete cascade,
  background_primary text not null default '#071d2b', background_secondary text not null default '#0d3b50',
  accent_primary text not null default '#a2e4df', accent_secondary text not null default '#d9eeeb',
  text_primary text not null default '#f2f6f1', text_secondary text not null default '#a8c0c6',
  atmosphere text not null default 'oceanic' check (atmosphere in ('oceanic','minimal','metallic','custom')),
  background_asset text, background_video text, texture_asset text, lighting_preset text,
  product_scale numeric not null default 1 check (product_scale between 0.5 and 2),
  transition_duration integer not null default 900 check (transition_duration between 0 and 5000),
  configuration_json jsonb not null default '{}'::jsonb, updated_at timestamptz not null default now()
);
create table if not exists public.product_360_assets (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null unique references public.products(id) on delete cascade,
  rendering_mode text not null default 'image-sequence' check (rendering_mode in ('image-sequence','model-3d','static')),
  model_asset text, frame_manifest jsonb not null default '[]'::jsonb,
  frame_count integer not null default 0 check (frame_count between 0 and 360),
  default_angle integer not null default 0,
  rotation_settings jsonb not null default '{"sensitivity":1,"direction":1,"scroll_enabled":true}'::jsonb,
  updated_at timestamptz not null default now()
);
create table if not exists public.product_information (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  information_type text not null check (information_type in ('benefit','ingredient','nutrition','mineral','source','purification','packaging','storage','manufacturer','regulatory','feature','other')),
  title text not null check (char_length(trim(title)) between 1 and 160),
  content text, structured_data jsonb not null default '{}'::jsonb,
  display_order integer not null default 0, is_visible boolean not null default true,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.product_media (
  id uuid primary key default gen_random_uuid(),
  product_id uuid not null references public.products(id) on delete cascade,
  asset_url text not null, asset_type text not null check (asset_type in ('image','video','texture','model','frame','document')),
  alt_text text, display_order integer not null default 0, metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create table if not exists public.website_experience_settings (
  setting_key text primary key, setting_value jsonb not null default '{}'::jsonb,
  is_published boolean not null default false, updated_at timestamptz not null default now()
);
create table if not exists public.product_admin_activity (
  id uuid primary key default gen_random_uuid(), actor_id uuid references auth.users(id) on delete set null,
  action text not null, entity_type text not null, entity_id uuid, details jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index if not exists products_status_order_idx on public.products(status, display_order);
create index if not exists products_collection_idx on public.products(collection_id);
create index if not exists product_information_product_order_idx on public.product_information(product_id, display_order);
create index if not exists product_media_product_order_idx on public.product_media(product_id, display_order);
create index if not exists product_admin_activity_created_idx on public.product_admin_activity(created_at desc);
alter table public.product_collections enable row level security;
alter table public.products enable row level security;
alter table public.product_art_directions enable row level security;
alter table public.product_360_assets enable row level security;
alter table public.product_information enable row level security;
alter table public.product_media enable row level security;
alter table public.website_experience_settings enable row level security;
alter table public.product_admin_activity enable row level security;
grant select on public.product_collections, public.products, public.product_art_directions, public.product_360_assets, public.product_information, public.product_media, public.website_experience_settings to anon;
grant select, insert, update, delete on public.product_collections, public.products, public.product_art_directions, public.product_360_assets, public.product_information, public.product_media, public.website_experience_settings, public.product_admin_activity to authenticated;
drop policy if exists "Public reads published collections" on public.product_collections;
create policy "Public reads published collections" on public.product_collections for select to anon, authenticated using (status = 'published' or (auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Admins manage collections" on public.product_collections;
create policy "Admins manage collections" on public.product_collections for all to authenticated using ((auth.jwt()->'app_metadata'->>'role') = 'admin') with check ((auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Public reads published products" on public.products;
create policy "Public reads published products" on public.products for select to anon, authenticated using (status = 'published' or (auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Admins manage products" on public.products;
create policy "Admins manage products" on public.products for all to authenticated using ((auth.jwt()->'app_metadata'->>'role') = 'admin') with check ((auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Public reads published product art direction" on public.product_art_directions;
create policy "Public reads published product art direction" on public.product_art_directions for select to anon, authenticated using (exists (select 1 from public.products p where p.id = product_id and p.status = 'published') or (auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Admins manage product art direction" on public.product_art_directions;
create policy "Admins manage product art direction" on public.product_art_directions for all to authenticated using ((auth.jwt()->'app_metadata'->>'role') = 'admin') with check ((auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Public reads published 360 assets" on public.product_360_assets;
create policy "Public reads published 360 assets" on public.product_360_assets for select to anon, authenticated using (exists (select 1 from public.products p where p.id = product_id and p.status = 'published') or (auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Admins manage product 360 assets" on public.product_360_assets;
create policy "Admins manage product 360 assets" on public.product_360_assets for all to authenticated using ((auth.jwt()->'app_metadata'->>'role') = 'admin') with check ((auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Public reads visible published product information" on public.product_information;
create policy "Public reads visible published product information" on public.product_information for select to anon, authenticated using ((is_visible and exists (select 1 from public.products p where p.id = product_id and p.status = 'published')) or (auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Admins manage product information" on public.product_information;
create policy "Admins manage product information" on public.product_information for all to authenticated using ((auth.jwt()->'app_metadata'->>'role') = 'admin') with check ((auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Public reads published product media" on public.product_media;
create policy "Public reads published product media" on public.product_media for select to anon, authenticated using (exists (select 1 from public.products p where p.id = product_id and p.status = 'published') or (auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Admins manage product media" on public.product_media;
create policy "Admins manage product media" on public.product_media for all to authenticated using ((auth.jwt()->'app_metadata'->>'role') = 'admin') with check ((auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Public reads published experience settings" on public.website_experience_settings;
create policy "Public reads published experience settings" on public.website_experience_settings for select to anon, authenticated using (is_published or (auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Admins manage experience settings" on public.website_experience_settings;
create policy "Admins manage experience settings" on public.website_experience_settings for all to authenticated using ((auth.jwt()->'app_metadata'->>'role') = 'admin') with check ((auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Admins read product activity" on public.product_admin_activity;
create policy "Admins read product activity" on public.product_admin_activity for select to authenticated using ((auth.jwt()->'app_metadata'->>'role') = 'admin');
drop policy if exists "Admins insert product activity" on public.product_admin_activity;
create policy "Admins insert product activity" on public.product_admin_activity for insert to authenticated with check ((auth.jwt()->'app_metadata'->>'role') = 'admin' and actor_id = (select auth.uid()));
insert into storage.buckets (id,name,public,file_size_limit,allowed_mime_types)
values ('ocean-breeze-products','ocean-breeze-products',true,52428800,array['image/jpeg','image/png','image/webp','image/avif','image/gif','video/mp4','video/webm','model/gltf-binary','model/gltf+json','application/octet-stream'])
on conflict (id) do update set public=true,file_size_limit=52428800,allowed_mime_types=excluded.allowed_mime_types;
drop policy if exists "Public reads Ocean Breeze product assets" on storage.objects;
create policy "Public reads Ocean Breeze product assets" on storage.objects for select to anon, authenticated using (bucket_id='ocean-breeze-products');
drop policy if exists "Admins upload Ocean Breeze product assets" on storage.objects;
create policy "Admins upload Ocean Breeze product assets" on storage.objects for insert to authenticated with check (bucket_id='ocean-breeze-products' and (auth.jwt()->'app_metadata'->>'role')='admin');
drop policy if exists "Admins update Ocean Breeze product assets" on storage.objects;
create policy "Admins update Ocean Breeze product assets" on storage.objects for update to authenticated using (bucket_id='ocean-breeze-products' and (auth.jwt()->'app_metadata'->>'role')='admin') with check (bucket_id='ocean-breeze-products' and (auth.jwt()->'app_metadata'->>'role')='admin');
drop policy if exists "Admins delete Ocean Breeze product assets" on storage.objects;
create policy "Admins delete Ocean Breeze product assets" on storage.objects for delete to authenticated using (bucket_id='ocean-breeze-products' and (auth.jwt()->'app_metadata'->>'role')='admin');
