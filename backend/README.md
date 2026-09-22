# backend

Backend + admin portal for the Rajesh Kumar magician website. Next.js (App
Router) + Prisma + MySQL, deployed separately from the public site. The
public site (`../frontend`, the Vite/React app) fetches its content from
this app's `/api/public/*` endpoints instead of hardcoding it; admins manage
everything under `/admin`. This directory and `../frontend` live in one repo
but remain two separate apps/processes — a Vite SPA and a Next.js server
can't run as a single process.

## First-time setup

1. **Database connection.** `.env.local` already has the CloudPanel database
   credentials (`rajeshMagician` / `rajeshMagician` / `rajeshMagician@13DS`),
   but `DATABASE_URL`'s host is a placeholder — CloudPanel's MySQL is usually
   bound to `localhost` on the VPS for security, so you have three options:
   - **Developing on the VPS itself** (SSH in, run everything there): set the
     host to `127.0.0.1` or `localhost`.
   - **Remote access enabled**: in CloudPanel → the database → allow remote
     connections from your IP, then use the VPS's public IP as the host.
   - **SSH tunnel from your machine**: `ssh -L 3306:127.0.0.1:3306 <user>@<vps-ip>`,
     then use `127.0.0.1` as the host locally while that tunnel is open.

2. **Push the schema** (creates all tables — no separate migration files, this
   is a fresh database):
   ```
   npm run db:push
   ```

3. **Seed today's content** (creates the admin login and copies the old
   Vite site's exact content + images into the database, so the public site
   is pixel-identical before any admin edits happen):
   ```
   npm run seed
   ```
   Uses `ADMIN_EMAIL` / `ADMIN_PASSWORD` from `.env.local` — change the
   password there (or just log in and it's yours) before sharing access.
   Safe to re-run: it upserts by slug/email rather than duplicating rows,
   though re-running does not remove content you've since deleted in admin.

4. **Run it**:
   ```
   npm run dev
   ```
   Admin portal: http://localhost:3001/admin (redirects to `/admin/login`).

## Connecting the public Vite site

In `../frontend/.env.local`, `VITE_API_URL` must point at this app's
origin (`http://localhost:3001` in dev). In production, set it to wherever
this app is deployed, and set this app's `PUBLIC_SITE_ORIGINS` / `APP_URL` in
`.env.local` (or the server's env) to match the deployed site's real origin(s)
— `PUBLIC_SITE_ORIGINS` gates CORS for the public read endpoints, `APP_URL`
is used to build absolute URLs for uploaded images.

## Deploying on the VPS

This app writes uploaded images to `public/uploads/` on its own filesystem
(not a serverless-safe pattern — this is why it needs a persistent Node
process, not Vercel). On the VPS:

```
npm install
npm run build
npm run start   # or run it under PM2, pointed at by CloudPanel's Node app / reverse proxy
```

Back up `public/uploads/` (or point it at a persistent volume) — a deploy
step that wipes and re-clones the app directory would lose uploaded media.

## Admin areas

- **Page Content** — hero text, headings, paragraphs for Home, About,
  Services, Gallery, Events, Blogs, Contact, Privacy, Terms.
- **Navigation** — rename/reorder/hide the 7 navbar links (paths are fixed).
- **Services / Events / Gallery / Blogs / Testimonials / Brands** — list +
  add/edit/delete, with image upload.
- **Site Settings** — phone numbers, emails, social links, logo, footer
  content, contact-person block — shared everywhere on the public site.
- **Contact Leads / Booking Enquiries** — submissions from the two public
  forms.

## Notes for future changes

- Adding a new text field to an existing page: add it to
  `lib/pageContentSchemas.js`, no migration needed (`PageContent.content` is
  JSON).
- Adding a genuinely new page/collection: add a Prisma model, a config entry
  in `lib/adminResources.js` (if it's a simple list) or bespoke routes (if it
  needs relations, like Events → EventPhoto), then `npm run db:push`.
