"use client";

import { useState } from "react";
import { SafeImage as Image } from "@/components/SafeImage";

// For portrait slots (team headshots) where a missing photo shouldn't leave
// a bare dark box — falls back to the person's initial instead of nothing.
export function AvatarImage({
  src,
  alt,
  name,
  sizes,
}: {
  src: string;
  alt: string;
  name: string;
  sizes: string;
}) {
  const [failed, setFailed] = useState(false);
  const initial = name.trim().charAt(0).toUpperCase();

  if (failed) {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[#1a1a1a]">
        <span className="font-serif text-5xl italic text-[#c9a876]">
          {initial}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className="object-cover"
      onError={() => setFailed(true)}
    />
  );
}
