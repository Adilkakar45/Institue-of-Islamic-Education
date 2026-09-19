# Institute of Islamic Education

## Supabase setup

Copy `.env.example` to `.env` and set `VITE_SUPABASE_URL` and
`VITE_SUPABASE_ANON_KEY` from the Supabase project settings. The anon key is
safe for browser use when Row Level Security policies are configured.

The application uses these tables: `students`, `attendance`,
`fee_collections`, `transactions`, `progress`, `exams`, and `results`. Their
columns should match the existing record fields used by the portal, including
the numeric `id` column. Enable RLS and add policies appropriate to the
portal's authenticated users before deploying.

The browser reads local cache immediately, hydrates it from Supabase when
online, and writes successful UI changes to both the cache and Supabase. When
Supabase is unavailable, the cached data remains usable and failed requests
are reported in the browser console.

## Build

```bash
npm install
npm run build
```
