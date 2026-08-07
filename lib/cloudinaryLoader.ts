// Configured as the global Next image loader (next.config.ts). `src` is
// whatever cld() returned — a relative "public2/images/..." path. Building
// the full URL here (with f_auto/q_auto/w_<width>) means the browser
// requests Cloudinary directly instead of proxying through Next's own
// `/_next/image` route. That matters: Next's built-in proxy caches upstream
// failures, so a transient Cloudinary hiccup (slow to generate a derivative
// on first request) previously got "stuck" as a cached 404 until the dev
// cache was manually cleared. Going direct avoids that failure mode
// entirely, in both dev and production.
export default function cloudinaryLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}): string {
  const q = quality ?? 75;
  return `https://res.cloudinary.com/mkxpycez/image/upload/f_auto,q_${q},w_${width}/${src}`;
}
