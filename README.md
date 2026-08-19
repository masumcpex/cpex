# Work Attendance — Step 1: Project Foundation

## What's included
- React + Vite project structure
- Supabase client (`src/supabaseClient.js`) using the publishable/anon key only
- Routing foundation (`react-router-dom`) with a placeholder Home page and 404
- `.env` / `.env.example` for environment variables
- No dashboard, attendance, or reports features yet — intentionally out of scope for Step 1

## File structure
```
work-attendance/
├── .env                  # your real Supabase credentials (never commit)
├── .env.example          # template for teammates
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── supabaseClient.js
    ├── components/
    │   └── Layout.jsx
    └── pages/
        ├── Home.jsx
        └── NotFound.jsx
```

## Setup (run locally, since this sandbox has no network access)
1. Copy all files above into a folder named `work-attendance`.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Confirm `.env` has your real values (already filled in):
   ```
   VITE_SUPABASE_URL=https://zuzspxigzkatahmtopxa.supabase.co
   VITE_SUPABASE_PUBLISHABLE_KEY=Sb_publishable_MdePy9Or5nOyV-e7y6Cemg_PqOTOQ8Z
   ```
4. Run the dev server:
   ```bash
   npm run dev
   ```
5. Build for production:
   ```bash
   npm run build
   ```

Once running, the Home page will call `supabase.auth.getSession()` and show
"Supabase client connected ✅" if the URL/key are valid — this confirms the
Supabase wiring without requiring login or any attendance features.

## Security notes
- Only the **publishable/anon** key is used here — safe for client-side code.
- The **service-role key** and any OAuth client secrets must never be placed
  in this project or in any `VITE_*` variable, since Vite exposes all
  `VITE_*` variables to the browser bundle.
- `.env` is git-ignored by default.

## Not included in Step 1 (by design)
- Login / auth UI
- Dashboard
- Attendance check-in/out
- Reports
