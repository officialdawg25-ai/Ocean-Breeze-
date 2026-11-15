create table if not exists public.enquiries (
  id uuid primary key default gen_random_uuid(),
  full_name text not null check (char_length(trim(full_name)) between 2 and 100),
  email text not null check (char_length(email) between 5 and 254),
  phone text check (phone is null or char_length(phone) <= 40),
  enquiry_type text not null check (enquiry_type in ('product','supply','partnership','other')),
  message text not null check (char_length(trim(message)) between 10 and 3000),
  created_at timestamptz not null default now()
);
alter table public.enquiries enable row level security;
revoke all on table public.enquiries from anon, authenticated;
grant insert on table public.enquiries to anon;
create policy "Public can submit Ocean Breeze enquiries"
on public.enquiries
for insert
to anon
with check (
  char_length(trim(full_name)) between 2 and 100
  and char_length(email) between 5 and 254
  and email ~* '^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,}$'
  and (phone is null or char_length(phone) <= 40)
  and enquiry_type in ('product','supply','partnership','other')
  and char_length(trim(message)) between 10 and 3000
);
