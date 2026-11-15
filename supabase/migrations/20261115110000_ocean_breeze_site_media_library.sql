-- General Ocean Breeze website media library. Product media remains in product_media.
create table if not exists public.site_media (
  id uuid primary key default gen_random_uuid(),
  title text not null check (char_length(trim(title)) between 1 and 180),
  asset_url text not null,
  asset_type text not null check (asset_type in ('image','video')),
  alt_text text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists site_media_created_idx on public.site_media(created_at desc);
alter table public.site_media enable row level security;
grant select, insert, update, delete on public.site_media to authenticated;
drop policy if exists "Admins manage Ocean Breeze site media" on public.site_media;
create policy "Admins manage Ocean Breeze site media"
  on public.site_media for all to authenticated
  using ((select auth.jwt())->'app_metadata'->>'role' = 'admin')
  with check ((select auth.jwt())->'app_metadata'->>'role' = 'admin');
