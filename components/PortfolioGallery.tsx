"use client";

import { useMemo, useState } from "react";
import { PhotoGallery, type GalleryPhoto } from "@/components/PhotoGallery";

export type PortfolioPhoto = GalleryPhoto & {
  category: "wedding" | "prewedding";
};

const FILTERS = [
  { label: "All", value: "all" as const },
  { label: "Wedding", value: "wedding" as const },
  { label: "Prewedding", value: "prewedding" as const },
];

export function PortfolioGallery({ photos }: { photos: PortfolioPhoto[] }) {
  const [active, setActive] = useState<(typeof FILTERS)[number]["value"]>("all");

  const visible = useMemo(
    () => (active === "all" ? photos : photos.filter((p) => p.category === active)),
    [photos, active],
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-6 px-5 text-xs font-semibold uppercase tracking-[0.24em] lg:px-8">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter.value)}
            aria-pressed={active === filter.value}
            className={`border-b pb-2 transition-colors duration-300 ${
              active === filter.value
                ? "border-[#c9a876] text-[#1a1a1a]"
                : "border-transparent text-[#1a1a1a]/40 hover:text-[#1a1a1a]"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <PhotoGallery layout="masonry" photos={visible} />
    </>
  );
}
