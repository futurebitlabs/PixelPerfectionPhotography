"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

// Cloudinary paths are edited by hand outside this codebase (uploads,
// renames, deletions happen directly in Cloudinary). If a referenced photo
// isn't actually there, render nothing instead of Next's broken-image icon.
export function SafeImage({ onError, ...props }: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) return null;

  return (
    <Image
      {...props}
      onError={(event) => {
        setFailed(true);
        onError?.(event);
      }}
    />
  );
}
