# Portfolio Site

SvelteKit 3 + Svelte 5 app deployed to **Cloudflare Workers** via
`@sveltejs/adapter-cloudflare`.

## Developing

Requires Node `>=22.17` and [Bun](https://bun.sh) 1.4+. Install dependencies
and start a development server:

```bash
bun install
bun run dev

# or start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

Preview the production build locally with Wrangler (uses
`.svelte-kit/cloudflare/_worker.js`):

```bash
bun run preview
```

## Deploying to Cloudflare

1. Install Wrangler and log in (already a devDependency here):
   ```bash
   bunx wrangler login
   ```
2. Configure `wrangler.jsonc` (worker name, account details as needed).
3. Set the `GIPHY_KEY` variable in the Cloudflare dashboard
   (Worker → Settings → Variables) or in `wrangler.jsonc` under `vars`.
   It is server-only (used in `+page.server.ts`), so it never reaches
   the browser. The home page falls back to a static GIF if the key
   is missing.
4. Build and deploy:
   ```bash
   bun run deploy
   ```

Alternatively, connect the repo via the Cloudflare dashboard
(Workers → Create → Import a repository) with build command
`bun run build` and deploy command `bunx wrangler deploy`.
