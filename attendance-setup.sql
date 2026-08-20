-- ============================================================
-- STEP 3 — Attendance table + RLS setup
-- Run this in: Supabase Dashboard → SQL Editor → New query
-- Safe to run even if the table already exists (checks first,
-- never drops or deletes existing data).
-- ============================================================

-- 1) Create the table ONLY if it doesn't already exist.
create table if not exists public.attendance (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  work_date   date not null,
  status      text not null check (status in ('Present', 'Leave')),
  created_at  timestamptz not null default now(),
  unique (user_id, work_date)
);

-- 2) Enable Row Level Security (does nothing if already enabled).
alter table public.attendance enable row level security;

-- 3) Policy: a user can only SELECT their own rows.
-- Drop-then-create so this is safe to re-run without erroring
-- if the policy already exists from a previous run.
drop policy if exists "Users can view own attendance" on public.attendance;
create policy "Users can view own attendance"
  on public.attendance
  for select
  using (auth.uid() = user_id);

-- (Optional, not required by Step 3 — only add if you later want
-- users to submit their own attendance from the client. Leave
-- commented out for now since this step is read-only.)
-- create policy "Users can insert own attendance"
--   on public.attendance
--   for insert
--   with check (auth.uid() = user_id);

-- 4) Quick check: confirm the table + policy exist.
select
  (select count(*) from information_schema.tables
   where table_schema = 'public' and table_name = 'attendance') as table_exists,
  (select count(*) from pg_policies
   where schemaname = 'public' and tablename = 'attendance') as policy_count;
