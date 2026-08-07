"use client";

import { useEffect, useRef, useState } from "react";
import { SafeImage as Image } from "@/components/SafeImage";

const FADE_MS = 1600;

type Slide = {
  currentIndex: number;
  prevIndex: number | null;
  id: number;
};

export function HeroCarousel({
  images,
  alt,
  intervalMs = 6500,
  className = "",
  priority = false,
}: {
  images: string[];
  alt: string;
  intervalMs?: number;
  className?: string;
  priority?: boolean;
}) {
  const [slide, setSlide] = useState<Slide>({
    currentIndex: 0,
    prevIndex: null,
    id: 0,
  });
  const idRef = useRef(0);

  // Pick a random starting image once mounted on the client (kept at index 0
  // for the server-rendered first paint to avoid a hydration mismatch).
  useEffect(() => {
    if (images.length <= 1) return;
    const randomIndex = Math.floor(Math.random() * images.length);
    if (randomIndex === 0) return;
    idRef.current += 1;
    setSlide({ currentIndex: randomIndex, prevIndex: 0, id: idRef.current });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  // Drop the outgoing slide once its fade-out finishes.
  useEffect(() => {
    if (slide.prevIndex === null) return;
    const timeout = setTimeout(() => {
      setSlide((current) =>
        current.id === slide.id ? { ...current, prevIndex: null } : current,
      );
    }, FADE_MS);
    return () => clearTimeout(timeout);
  }, [slide.id, slide.prevIndex]);

  // Auto-advance to the next image.
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      idRef.current += 1;
      setSlide((current) => ({
        currentIndex: (current.currentIndex + 1) % images.length,
        prevIndex: current.currentIndex,
        id: idRef.current,
      }));
    }, intervalMs);
    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slide.prevIndex !== null ? (
        <div
          className="absolute inset-0"
          style={{ animation: `hero-fade-out ${FADE_MS}ms ease-in-out forwards` }}
        >
          <Image
            src={images[slide.prevIndex]}
            alt={alt}
            fill
            sizes="100vw"
            className={`object-cover ${className}`}
          />
        </div>
      ) : null}

      <div
        key={slide.id}
        className="absolute inset-0"
        style={{
          animation: `hero-fade-in ${FADE_MS}ms ease-in-out forwards, hero-zoom ${
            intervalMs / 1000 + FADE_MS / 1000
          }s linear forwards`,
        }}
      >
        <Image
          src={images[slide.currentIndex]}
          alt={alt}
          fill
          priority={priority && slide.id === 0}
          sizes="100vw"
          className={`object-cover ${className}`}
        />
      </div>
    </div>
  );
}
