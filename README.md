# magician-rajesh

Rajesh Kumar magician website, as one repo with two apps:

- **`frontend/`** — the public site (Vite + React + React Router). Framework
  and visuals unchanged from the original; pages now fetch their content
  from `backend/` instead of hardcoding it. See `frontend/README.md`.
- **`backend/`** — Next.js + Prisma + MySQL app providing the public read
  API, the two lead-capture form endpoints, and the `/admin` portal used to
  manage all of the site's content. See `backend/README.md`.

They're two separate processes (a Vite SPA and a Next.js server can't run as
one) sharing this repo for convenience. Run each with its own `npm install`
+ `npm run dev`:

```
cd backend && npm run dev    # http://localhost:3001/admin
cd frontend && npm run dev   # http://localhost:5173
```

`backend` must be reachable at the URL `frontend/.env.local`'s
`VITE_API_URL` points to, and `backend/.env.local`'s `PUBLIC_SITE_ORIGINS`
must include `frontend`'s origin (for CORS on the public API).
