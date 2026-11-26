# Wedding Invitation Studio — Starter

A mobile-first interactive Sri Lankan wedding invitation platform built with Next.js, Tailwind CSS, GSAP and Supabase.

## Included in this starter

- Animated envelope opening
- Invitation story sections and scroll-ready animation structure
- Wedding date countdown
- Optional background music player
- RSVP form
- Personalized guest URL support: `/your-wedding-slug?g=GUEST_TOKEN`
- Admin login and RSVP viewer
- Supabase schema for weddings, guests and RSVPs
- Demo invitation at `/demo`

## 1. Requirements

Install:
- Node.js 20.9 or newer
- Visual Studio Code
- A Supabase account

## 2. Install

Extract the ZIP, open the folder in VS Code, then run:

```bash
npm install
```

Copy `.env.example` to `.env.local` and fill in your Supabase project URL and anon/public key.

```bash
npm run dev
```

Open http://localhost:3000

## 3. Configure Supabase

1. Create a new Supabase project.
2. Open **SQL Editor**.
3. Run all SQL in `supabase/schema.sql`.
4. Open **Project Settings → API** and copy Project URL and anon/public key into `.env.local`.
5. In **Authentication → Users**, create your admin user with email and password.
6. Restart the Next.js development server after changing `.env.local`.

## 4. Preview

- Demo invitation: `http://localhost:3000/demo`
- Admin: `http://localhost:3000/admin`
- Database-backed wedding: `http://localhost:3000/kasun-nethmi`

The database-backed route requires the Supabase setup above.

## 5. Create a personalized guest link

In Supabase Table Editor:
1. Open `guests`.
2. Add `wedding_id` (copy the wedding UUID), `full_name`, and `household_size`.
3. A token is generated automatically.
4. Share this link:

`https://YOUR-DOMAIN/kasun-nethmi?g=THE_GUEST_TOKEN`

The guest sees their name and their household RSVP limit.

## 6. Add wedding music

Upload a properly licensed MP3 to Supabase Storage or another hosting service, copy its public URL, then set `music_url` in the `weddings` table.

Browsers generally require the guest to tap Play before audio starts.

## 7. Important production security work

This is a development starter, not yet a production-ready multi-client SaaS. Before accepting real guest data:
- Replace the permissive guest read policy with a secure server-side token lookup.
- Restrict admin access to an explicit admin role or allowlist; current authenticated policies are intentionally starter-level.
- Validate RSVP guest tokens and household limits on the server, not only in the browser.
- Add rate limiting, spam protection and audit logging.
- Do not put Supabase service-role keys in browser code.
- Use private storage or controlled access for private guest data.

## 8. Next development milestones

1. Secure server-side RSVP and guest-token APIs.
2. Admin create/edit wedding forms.
3. Bulk guest import from CSV and one-click personalized link generation.
4. Traditional Sri Lankan visual theme with custom Kandyan motifs, lotus borders and decorative illustrations.
5. Timeline-based story animation and mobile performance optimization.
6. Deployment to Vercel with a custom domain.
