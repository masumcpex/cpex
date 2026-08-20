-- ============================================================
-- STEP 4 — Attendance Entry: INSERT policy
-- Run this in: Supabase Dashboard → SQL Editor → New query
-- Safe to run even if already applied (drop-then-create).
-- Does NOT touch or delete any existing rows.
-- ============================================================

-- Allow a logged-in user to insert ONLY their own attendance rows.
-- auth.uid() is set by Supabase from the user's session token —
-- it cannot be spoofed from the client, so this blocks anyone
-- from submitting a record under someone else's user_id.
drop policy if exists "Users can insert own attendance" on public.attendance;
create policy "Users can insert own attendance"
  on public.attendance
  for insert
  with check (auth.uid() = user_id);

-- The table already has: unique (user_id, work_date)
-- from the Step 3 setup script — this is what makes a second
-- submission for the same date fail with a duplicate-key error
-- (Postgres code 23505), which the Attendance page already
-- catches and shows as a friendly message.

-- Quick check: confirm the insert policy now exists.
select policyname, cmd
from pg_policies
where schemaname = 'public' and tablename = 'attendance';
