-- Ocean Breeze admin enquiry management.
-- Public visitors may submit enquiries; only trusted admins may read or update them.
alter table public.enquiries
  add column if not exists status text not null default 'new',
  add column if not exists admin_notes text,
  add column if not exists updated_at timestamptz not null default now();

alter table public.enquiries
  drop constraint if exists enquiries_status_check;
alter table public.enquiries
  add constraint enquiries_status_check
  check (status in ('new','in_progress','resolved','archived'));

create index if not exists enquiries_status_created_idx
  on public.enquiries(status, created_at desc);

alter table public.enquiries enable row level security;
grant select, update on public.enquiries to authenticated;

drop policy if exists "Admins read Ocean Breeze enquiries" on public.enquiries;
create policy "Admins read Ocean Breeze enquiries"
  on public.enquiries for select to authenticated
  using ((select auth.jwt())->'app_metadata'->>'role' = 'admin');

drop policy if exists "Admins update Ocean Breeze enquiries" on public.enquiries;
create policy "Admins update Ocean Breeze enquiries"
  on public.enquiries for update to authenticated
  using ((select auth.jwt())->'app_metadata'->>'role' = 'admin')
  with check ((select auth.jwt())->'app_metadata'->>'role' = 'admin');
