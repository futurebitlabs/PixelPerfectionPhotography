"use client";

import Link from "next/link";
import { HeroCarousel } from "@/components/HeroCarousel";
import { MotionReveal } from "@/components/MotionReveal";
import { heroImages } from "@/data/heroImages";

export function Hero() {
  return (
    <section className="relative min-h-[82svh] overflow-hidden bg-[#1a1a1a] text-white md:min-h-screen">
      <HeroCarousel
        images={heroImages}
        alt="Editorial destination wedding photography moment"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#1a1a1a]/58" />

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[82svh] items-center justify-center px-5 pb-14 pt-24 text-center md:min-h-screen">
        <MotionReveal className="max-w-5xl">
          <h1 className="max-w-5xl font-serif text-2xl leading-[1.08] tracking-[-0.02em] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.28)] xs:text-3xl sm:text-5xl lg:text-6xl">
            Every Moment
            <br />
            <em className="font-normal italic text-[#c9a876]">
              Tells a Story.
            </em>
            <br />
            We Capture It Beautifully.
          </h1>

          <Link
            href="/photo"
            className="mt-8 inline-flex h-11 items-center justify-center border border-white/70 px-6 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white transition hover:border-[#c9a876] hover:text-[#c9a876] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876] md:mt-10 md:h-12 md:px-8"
          >
            View Portfolio
          </Link>
        </MotionReveal>
      </div>

      {/* Bottom Caption */}
      <p className="absolute bottom-5 left-5 z-10 max-w-[15rem] text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white/78 md:bottom-8 md:max-w-xs md:text-xs md:tracking-[0.22em] lg:left-8">
        Tina &amp; Sourya, Delhi
      </p>
    </section>
  );
}
