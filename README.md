# Pixel Perfection Photography

Luxury destination-wedding photography and videography website built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Run Locally

```powershell
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit Content

Most editable site content lives in `/data`:

- `data/site.ts` for navigation, social links, and studio contact basics
- `data/weddings.ts` for wedding cards and future wedding story pages
- `data/testimonials.ts` for client praise
- `data/team.ts` for team and press logo placeholders
- `data/instagramPosts.ts` for the recurring Instagram strip

## Swap Brand Styling

- Colors and font families are defined in `app/globals.css` and mirrored in `tailwind.config.ts`.
- Replace the wordmark in `data/site.ts`.
- Replace placeholder images in `/public`, then update image paths in the data files.

## Build

```powershell
npm run build
```
