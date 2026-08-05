const CLOUDINARY_BASE_URL =
  "https://res.cloudinary.com/mkxpycez/image/upload/public2";

export function cld(path: string): string {
  return `${CLOUDINARY_BASE_URL}${path}`;
}
