# cafedueweb

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/HidroaltoLS/cafedueweb)

## Deployment troubleshooting

If a Vercel build fails before running `npm run build` with a message like "permanent problem cloning the repo," it means Vercel could not fetch this repository. Re-link the project to the correct GitHub repo (HidroaltoLS/cafedueweb) or redeploy from a fresh import. Use these steps to restore access:

1) In Vercel, go to **Settings → Git** and click **Reconnect** (or remove and re-add) the GitHub integration so Vercel can read the org/repo.
2) Confirm the repository is selected under **Git Repository**; if not, click **Import Project** and paste `https://github.com/HidroaltoLS/cafedueweb`.
3) Ensure the Vercel GitHub App has permission to the org and repo (GitHub → Settings → Applications → Vercel) and that the repo is public or the token has access.
4) Retry the deployment from **Deployments → Redeploy** once the link is fixed.

After reconnecting, verify the environment variables so the Supabase data loads in production:

- `VITE_SUPABASE_URL` (or `NEXT_PUBLIC_SUPABASE_URL`)
- `VITE_SUPABASE_ANON_KEY` (or `NEXT_PUBLIC_SUPABASE_ANON_KEY`)

These must be set in the Vercel dashboard for the site to load socios data correctly.
