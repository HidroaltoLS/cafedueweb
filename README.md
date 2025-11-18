# cafedueweb

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/HidroaltoLS/cafedueweb)

## Deployment troubleshooting

If a Vercel build fails before running `npm run build` with a message like "permanent problem cloning the repo," it means Vercel could not fetch this repository. Re-link the project to the correct GitHub repo (HidroaltoLS/cafedueweb) or redeploy from a fresh import. After reconnecting, verify the environment variables so the Supabase data loads in production:

- `VITE_SUPABASE_URL` (or `NEXT_PUBLIC_SUPABASE_URL`)
- `VITE_SUPABASE_ANON_KEY` (or `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

These must be set in the Vercel dashboard for the site to load socios data correctly.
