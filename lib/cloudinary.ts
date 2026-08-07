const CLOUDINARY_CLOUD = "mkxpycez";
const IMAGE_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/image/upload`;
const VIDEO_BASE_URL = `https://res.cloudinary.com/${CLOUDINARY_CLOUD}/video/upload`;

// Relative path (no transformation baked in) — pass this as an <Image src>.
// lib/cloudinaryLoader.ts (configured as the global Next image loader) adds
// the f_auto/q_auto/w_<width> transformation per request. Going through a
// custom loader means the browser talks to Cloudinary directly instead of
// proxying through Next's own image-optimizer route, which was caching
// transient upstream failures as permanent 404s.
export function cld(path: string): string {
  return `public2${path}`;
}

// Fully resolved URL for contexts outside next/image (OG metadata, etc.)
// where there's no loader to add the transformation.
export function cldUrl(path: string): string {
  return `${IMAGE_BASE_URL}/f_auto,q_auto,w_2400/public2${path}`;
}

export function cldVideo(path: string): string {
  return `${VIDEO_BASE_URL}/q_auto/public2${path}`;
}

// Cloudinary can derive a still frame from a video by requesting the same
// public ID through the video pipeline with an image extension.
export function cldVideoPoster(path: string): string {
  const withoutExt = path.replace(/\.[^./]+$/, "");
  return `${VIDEO_BASE_URL}/f_jpg,q_auto/public2${withoutExt}.jpg`;
}
