@AGENTS.md

# Project Context

Luxury destination-wedding photography site for Pixel Perfection Photography.
Next.js 16 (App Router) + TypeScript + Tailwind v4 + Framer Motion, npm.
Run: `npm run dev`. Current branch `real-photos-and-gallery-ux` (real content
+ gallery UX rework, not yet PR'd — see Git state below).

## Content architecture

All editable copy lives in `/data` as typed TS, imported by `/app` pages:
- `data/site.ts` — nav, studio contact info, social links (WhatsApp/Instagram/etc, all real)
- `data/weddings.ts` — wedding cards + story pages (`app/weddings/[slug]`)
- `data/testimonials.ts`, `data/team.ts`, `data/instagramPosts.ts`, `data/heroImages.ts`

Wedding photo convention: each wedding folder under `public/images/weddings/<slug>/`
holds `cover.jpg` + `gallery-01.jpg`, `gallery-02.jpg`, ... referenced by
`data/weddings.ts`. Always lowercase `.jpg` (files arrive as mixed-case `.JPG`
from cameras — rename before referencing, Linux hosting is case-sensitive).
Only files actually referenced in `data/weddings.ts`/`data/testimonials.ts`
should be committed — camera-original filenames (`_MG_*`, `IMG_*`, `DSC*`,
`.ARW` raw files) sitting alongside the renamed copies are NOT committed;
they're the photographer's untouched exports, left in place but out of git.

## Real content status (as of this branch)

3 real couples are wired up and fully working: `amit-sanya`, `jhanvi-ashish`,
`durgesh-novika`. Their `coupleNames`/`location`/`fullStory` in
`data/weddings.ts` are still placeholder copy (marked `// TODO`) — needs real
text from the studio.

Several more wedding folders exist under `public/images/weddings/` but are
**empty or unorganized** and not yet in `data/weddings.ts`: `Ankur`, `Ashish`,
`gagan-simran`, `kunal-akshita` (also a stray dup `kunal  & Akshita` — needs
cleanup), `prakshit-garima`, `vaisali`, `vashi`. Add a wedding entry only once
a folder has real `cover.jpg`/`gallery-NN.jpg` files in it.

The original 8 fictional wedding entries (Shama & Sourya, Aarya & Dev, etc.)
were removed — their placeholder images were deleted from `public/images`.

## Key shared components

- **`components/PhotoGallery.tsx`** — used by the wedding story gallery
  (`layout="stack"`) and the portfolio page (`layout="masonry"`). Principle:
  never crop — each thumbnail sizes itself to the photo's real (EXIF-corrected)
  aspect ratio via `object-contain` + a dynamically-set `aspect-ratio`, not a
  fixed box. Masonry is a real shortest-column packer (not CSS `columns`,
  which fills one column fully before the next — looked wrong, don't revert
  to it), full-bleed edge-to-edge, responsive 1/2/3/4 columns. Clicking any
  photo opens a full-screen carousel (keyboard + click nav) reused across
  both layouts.
- **`components/HeroCarousel.tsx`** — rotating hero background used by
  `components/home/Hero.tsx` and `components/PageShell.tsx` (every interior
  page banner), image list in `data/heroImages.ts`. Starts on a random image
  per page load (randomized client-side post-mount to avoid a hydration
  mismatch), auto-advances every 6.5s with a crossfade + slow Ken Burns zoom.
  **Deliberately not framer-motion**: an earlier `AnimatePresence` version
  never unmounted exited slides, silently stacking all 9 multi-MB hero images
  in the DOM at once. Current version manually caps state at exactly 2
  slides (outgoing + incoming) via plain CSS `@keyframes` in `globals.css`
  (`hero-fade-in`/`hero-fade-out`/`hero-zoom`) — verified with fresh browser
  sessions. If touching this component, re-verify the DOM never accumulates
  more than 2 `<img>` per hero instance after several rotation cycles.

## Known gaps (not yet done)

- **Services page** (`app/services/page.tsx`): Corporate/School/Party service
  images have no source photos anywhere in the repo — still broken/missing.
  Wedding + Pre-Wedding images now point at real photos.
- **Team section** (`data/team.ts` → About page): 9 members reference
  `/images/team/*.jpg` which doesn't exist at all.
- **Videos page** (`app/videos/page.tsx`): static "film embed placeholder"
  box, no real video files or embeds anywhere in the project.
- **Contact form** (`app/contact-us/page.tsx`): not wired to any backend —
  button isn't even `type="submit"`. Needs an API route or form service.

## Git state

Everything above is uncommitted on `real-photos-and-gallery-ux`, staged
selectively in the past to exclude the unreferenced camera originals (see
"Wedding photo convention"). No PR opened yet for this branch as of the last
session.
