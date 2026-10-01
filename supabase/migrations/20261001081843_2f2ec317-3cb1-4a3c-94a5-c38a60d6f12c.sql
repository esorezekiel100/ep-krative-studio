create type public.app_role as enum ('admin', 'client');

create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  role app_role not null,
  unique (user_id, role)
);
grant select on public.user_roles to authenticated;
grant all on public.user_roles to service_role;
alter table public.user_roles enable row level security;
create policy "Users read own roles" on public.user_roles for select to authenticated using (auth.uid() = user_id);

create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean language sql stable security definer set search_path = public
as $$ select exists (select 1 from public.user_roles where user_id = _user_id and role = _role) $$;

create or replace function public.handle_new_user_role()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  if lower(new.email) = 'esorezekiel100@gmail.com' then
    insert into public.user_roles (user_id, role) values (new.id, 'admin') on conflict do nothing;
  else
    insert into public.user_roles (user_id, role) values (new.id, 'client') on conflict do nothing;
  end if;
  return new;
end; $$;
create trigger on_auth_user_created_role after insert on auth.users
  for each row execute function public.handle_new_user_role();

create table public.client_projects (
  id uuid primary key default gen_random_uuid(),
  client_email text not null,
  client_name text not null,
  name text not null,
  summary text,
  status text not null default 'In progress',
  progress int not null default 0,
  live_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
grant select, insert, update, delete on public.client_projects to authenticated;
grant all on public.client_projects to service_role;
alter table public.client_projects enable row level security;
create policy "Clients view own projects" on public.client_projects for select to authenticated
  using (lower(client_email) = lower(auth.jwt() ->> 'email') or public.has_role(auth.uid(), 'admin'));
create policy "Admin inserts projects" on public.client_projects for insert to authenticated with check (public.has_role(auth.uid(), 'admin'));
create policy "Admin updates projects" on public.client_projects for update to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "Admin deletes projects" on public.client_projects for delete to authenticated using (public.has_role(auth.uid(), 'admin'));

create table public.change_requests (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.client_projects(id) on delete cascade,
  user_id uuid not null default auth.uid(),
  title text not null check (char_length(title) between 1 and 120),
  details text not null check (char_length(details) between 1 and 2000),
  status text not null default 'Open',
  created_at timestamptz not null default now()
);
grant select, insert, update, delete on public.change_requests to authenticated;
grant all on public.change_requests to service_role;
alter table public.change_requests enable row level security;
create policy "View requests on visible projects" on public.change_requests for select to authenticated
  using (exists (select 1 from public.client_projects p where p.id = project_id));
create policy "Clients create requests on own projects" on public.change_requests for insert to authenticated
  with check (user_id = auth.uid() and exists (select 1 from public.client_projects p where p.id = project_id));
create policy "Admin updates requests" on public.change_requests for update to authenticated using (public.has_role(auth.uid(), 'admin'));
create policy "Admin deletes requests" on public.change_requests for delete to authenticated using (public.has_role(auth.uid(), 'admin'));