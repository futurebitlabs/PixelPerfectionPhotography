"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

type Photo = {
  src: string;
  tall: boolean;
  category: string;
  alt: string;
  position: string;
};

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Wedding", value: "wedding" },
  { label: "Prewedding", value: "prewedding" },
] as const;

export function PortfolioGallery({ photos }: { photos: Photo[] }) {
  const [active, setActive] =
    useState<(typeof FILTERS)[number]["value"]>("all");

  const visible = useMemo(
    () =>
      active === "all" ? photos : photos.filter((p) => p.category === active),
    [photos, active],
  );

  return (
    <div>
      <div className="mb-10 flex items-center gap-8 border-b border-[#1a1a1a]/10">
        {FILTERS.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setActive(filter.value)}
            className="relative pb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#1a1a1a]/40 transition-colors duration-300 hover:text-[#1a1a1a]"
            style={active === filter.value ? { color: "#1a1a1a" } : undefined}
          >
            {filter.label}
            {active === filter.value && (
              <motion.span
                layoutId="portfolio-filter-underline"
                className="absolute inset-x-0 -bottom-px h-[2px] bg-[#c9a876]"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {visible.map((photo, index) => (
            <motion.figure
              key={photo.src}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.5,
                delay: (index % 6) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative mb-4 break-inside-avoid overflow-hidden bg-[#1a1a1a]"
            >
              <div
                className={`relative ${photo.tall ? "aspect-[4/5]" : "aspect-[5/4]"}`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  style={{ objectPosition: photo.position }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-[#1a1a1a]/0 to-[#1a1a1a]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-serif text-sm italic text-white/90">
                    {photo.category === "wedding"
                      ? "Wedding day"
                      : "Prewedding"}
                  </p>
                </div>
              </div>
            </motion.figure>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
