## Work in progress (D1 database connection)

Create a D1 database from cloudflare dashboard and update your `wrangler.toml` file with proper database name and id.

```
pnpm install
pnpm run dev
```

### Staging deployment
Make sure to set proper variables/bindings in `wrangler.toml` file.

```
pnpm run deploy:dev
```

### Production deployment
Make sure to set proper variables/bindings in `wrangler.toml` file.

```
pnpm run deploy:prod
```
