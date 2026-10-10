# Portfolio Site

SvelteKit 3 + Svelte 5 app deployed to **Cloudflare Workers** via
`@sveltejs/adapter-cloudflare`.

## Developing

Requires Node `>=22.17`. Install dependencies and start a development server:

```bash
npm install
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

Preview the production build locally with Wrangler (uses
`.svelte-kit/cloudflare/_worker.js`):

```bash
npm run preview
```

## Deploying to Cloudflare

1. Install Wrangler and log in (already a devDependency here):
   ```bash
   npx wrangler login
   ```
2. Configure `wrangler.jsonc` (worker name, account details as needed).
3. Set the `PUBLIC_GIPHY_KEY` variable in the Cloudflare dashboard
   (Worker → Settings → Variables) or in `wrangler.jsonc` under `vars`.
   The home page falls back to a static GIF if the key is missing.
4. Build and deploy:
   ```bash
   npm run deploy
   ```

Alternatively, connect the repo via the Cloudflare dashboard
(Workers → Create → Import a repository) with build command
`npm run build` and deploy command `npx wrangler deploy`.
