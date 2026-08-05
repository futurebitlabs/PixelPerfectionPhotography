import Link from "next/link";
import { MotionReveal } from "@/components/MotionReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WeddingCard } from "@/components/WeddingCard";
import { weddings } from "@/data/weddings";

const cardLayouts = [
  { className: "md:mt-12 lg:mt-24", shape: "wide", featured: false },
  { className: "md:-mt-2 lg:mt-0", shape: "tall", featured: true },
  { className: "md:mt-16 lg:mt-36", shape: "portrait", featured: false },
  { className: "md:-mt-8 lg:-mt-2", shape: "square", featured: false },
  { className: "md:mt-12 lg:mt-28", shape: "portrait", featured: false },
  { className: "md:-mt-12 lg:-mt-6", shape: "wide", featured: false },
] as const;

export function FeaturedWeddings() {
  return (
    <section className="bg-white px-5 py-16 md:py-24 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-7xl">
        <MotionReveal className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.85fr_1.15fr] md:items-end">
          <SectionHeading
            eyebrow="Meet Pixel Perfection"
            title="Featured destination"
            italic="weddings"
          />
          <p className="max-w-xl text-base leading-8 text-[#1a1a1a]/70 md:justify-self-end md:text-lg md:leading-9">
            A curated stack of wedding stories, arranged like a living portfolio
            so the page shows both the craft behind the camera and the craft
            behind the website.
          </p>
        </MotionReveal>

        <div className="mt-12 grid gap-x-8 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-y-0 lg:grid-cols-3 lg:gap-x-10">
          {weddings.slice(0, 6).map((wedding, index) => (
            <MotionReveal
              key={wedding.slug}
              className={cardLayouts[index].className}
              delay={(index % 3) * 0.06}
            >
              <WeddingCard
                wedding={wedding}
                imageShape={cardLayouts[index].shape}
                featured={cardLayouts[index].featured}
              />
            </MotionReveal>
          ))}
        </div>

        <div className="mt-12 text-center md:mt-20 lg:mt-24">
          <Link
            href="/blogs"
            className="inline-flex h-12 items-center justify-center border border-[#1a1a1a]/30 px-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#1a1a1a] transition hover:border-[#c9a876] hover:text-[#a98652]"
          >
            View all weddings
          </Link>
        </div>
      </div>
    </section>
  );
}
