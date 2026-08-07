"use client";

import { useState } from "react";
import { SafeImage as Image } from "@/components/SafeImage";

const FALLBACK_RATIO = 3 / 2;

// Sizes itself to the photo's real (EXIF-corrected) aspect ratio instead of
// a fixed box, so nothing is ever cropped — see components/PhotoGallery.tsx
// for the original rationale. Shared here so any non-gallery spot that
// renders a real photo (e.g. the services page) gets the same treatment.
export function AutoImage({
  src,
  alt,
  sizes,
  priority,
  onRatio,
  onFail,
  zoomOnHover = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  onRatio?: (ratio: number) => void;
  onFail?: () => void;
  zoomOnHover?: boolean;
}) {
  const [ratio, setRatio] = useState(FALLBACK_RATIO);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`object-contain ${
          zoomOnHover
            ? "transition duration-700 ease-out group-hover:scale-[1.06]"
            : ""
        }`}
        onLoad={(event) => {
          const img = event.currentTarget;
          if (img.naturalWidth && img.naturalHeight) {
            const nextRatio = img.naturalWidth / img.naturalHeight;
            setRatio(nextRatio);
            onRatio?.(nextRatio);
          }
        }}
        onError={() => onFail?.()}
      />
      {zoomOnHover ? (
        <div className="pointer-events-none absolute inset-0 bg-[#1a1a1a] opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
      ) : null}
    </div>
  );
}
