"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

export type GalleryPhoto = {
  src: string;
  alt: string;
};

const FALLBACK_RATIO = 3 / 2;

function CloseIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg aria-hidden="true" className="size-5" fill="none" viewBox="0 0 24 24">
      <path
        d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
    </svg>
  );
}

function AutoImage({
  photo,
  sizes,
  priority,
  onRatio,
  zoomOnHover = false,
}: {
  photo: GalleryPhoto;
  sizes: string;
  priority?: boolean;
  onRatio?: (ratio: number) => void;
  zoomOnHover?: boolean;
}) {
  const [ratio, setRatio] = useState(FALLBACK_RATIO);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ aspectRatio: ratio }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
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
      />
      {zoomOnHover ? (
        <div className="pointer-events-none absolute inset-0 bg-[#1a1a1a] opacity-0 transition-opacity duration-500 group-hover:opacity-10" />
      ) : null}
    </div>
  );
}

function useColumnCount() {
  const [columns, setColumns] = useState(3);

  useEffect(() => {
    const mobile = window.matchMedia("(min-width: 640px)");
    const desktop = window.matchMedia("(min-width: 1024px)");
    const wide = window.matchMedia("(min-width: 1536px)");
    const update = () =>
      setColumns(wide.matches ? 4 : desktop.matches ? 3 : mobile.matches ? 2 : 1);
    update();
    [mobile, desktop, wide].forEach((query) =>
      query.addEventListener("change", update),
    );
    return () => {
      [mobile, desktop, wide].forEach((query) =>
        query.removeEventListener("change", update),
      );
    };
  }, []);

  return columns;
}

function MasonryGrid({
  photos,
  onOpen,
}: {
  photos: GalleryPhoto[];
  onOpen: (index: number) => void;
}) {
  const columnCount = useColumnCount();
  const [ratios, setRatios] = useState<Record<number, number>>({});

  const columns = useMemo(() => {
    const heights = new Array(columnCount).fill(0);
    const buckets: { photo: GalleryPhoto; index: number }[][] = Array.from(
      { length: columnCount },
      () => [],
    );

    photos.forEach((photo, index) => {
      const shortest = heights.indexOf(Math.min(...heights));
      buckets[shortest].push({ photo, index });
      heights[shortest] += 1 / (ratios[index] ?? FALLBACK_RATIO);
    });

    return buckets;
  }, [photos, columnCount, ratios]);

  return (
    <div className="flex">
      {columns.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-1 flex-col">
          {column.map(({ photo, index }) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => onOpen(index)}
              aria-label={`Open photo ${index + 1} of ${photos.length}`}
              className="group relative block w-full cursor-zoom-in bg-[#1a1a1a]"
            >
              <AutoImage
                photo={photo}
                sizes="(min-width: 1536px) 25vw, (min-width: 1024px) 33vw, 50vw"
                priority={index < columnCount}
                zoomOnHover
                onRatio={(ratio) =>
                  setRatios((current) =>
                    current[index] === ratio ? current : { ...current, [index]: ratio },
                  )
                }
              />
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export function PhotoGallery({
  photos,
  layout = "stack",
  className = "",
}: {
  photos: GalleryPhoto[];
  layout?: "stack" | "masonry";
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current - 1 + photos.length) % photos.length,
    );
  }, [photos.length]);
  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? current : (current + 1) % photos.length,
    );
  }, [photos.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <>
      {layout === "masonry" ? (
        <div className={className}>
          <MasonryGrid photos={photos} onOpen={setActiveIndex} />
        </div>
      ) : (
        <div className={`flex flex-col gap-6 md:gap-8 ${className}`}>
          {photos.map((photo, index) => (
            <button
              key={`${photo.src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Open photo ${index + 1} of ${photos.length}`}
              className="block w-full cursor-zoom-in bg-[#1a1a1a]"
            >
              <AutoImage
                photo={photo}
                sizes="(min-width: 1024px) 64rem, 100vw"
                priority={index === 0}
              />
            </button>
          ))}
        </div>
      )}

      {active ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 px-4 py-10"
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-white/30 text-white transition hover:border-white"
          >
            <CloseIcon />
          </button>

          {photos.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 text-white transition hover:border-white md:left-6"
            >
              <ChevronIcon direction="left" />
            </button>
          ) : null}

          <div
            className="relative h-[80vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>

          {photos.length > 1 ? (
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full border border-white/30 text-white transition hover:border-white md:right-6"
            >
              <ChevronIcon direction="right" />
            </button>
          ) : null}

          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.2em] text-white/60">
            {activeIndex! + 1} / {photos.length}
          </p>
        </div>
      ) : null}
    </>
  );
}
