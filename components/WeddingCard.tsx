import Link from "next/link";
import { SafeImage as Image } from "@/components/SafeImage";
import type { Wedding } from "@/data/weddings";

type WeddingCardProps = {
  wedding: Wedding;
  imageShape?: "wide" | "portrait" | "tall" | "square";
  featured?: boolean;
};

const imageShapeClasses = {
  wide: "aspect-[6/4]",
  portrait: "aspect-[4/5]",
  tall: "aspect-[3/4]",
  square: "aspect-square",
};

export function WeddingCard({
  wedding,
  imageShape = "portrait",
  featured = false,
}: WeddingCardProps) {
  return (
    <article className={`group ${featured ? "lg:pt-8" : ""}`}>
      <Link
        href={`/weddings/${wedding.slug}`}
        className="block outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876]"
      >
        <div
          className={`relative overflow-hidden bg-[#1a1a1a] shadow-[0_20px_50px_rgba(26,26,26,0.08)] ${imageShapeClasses[imageShape]}`}
        >
          <Image
            src={wedding.coverImage}
            alt={`${wedding.coupleNames} wedding in ${wedding.location}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition duration-700 group-hover:scale-105"
            style={{ objectPosition: wedding.coverPosition }}
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/15 transition group-hover:bg-[#1a1a1a]/35" />
        </div>
        <div className="bg-white px-1 pt-5 md:pt-6">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#a98652] md:text-xs md:tracking-[0.22em]">
            {wedding.type}
          </p>
          <h3 className="mt-2 font-serif text-2xl leading-[1.08] text-[#1a1a1a] md:mt-3 md:text-[2rem]">
            {wedding.coupleNames}
          </h3>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#1a1a1a]/55 md:text-sm md:tracking-[0.16em]">
            {wedding.location}
          </p>
          <p className="mt-3 text-[0.95rem] leading-7 text-[#1a1a1a]/72 md:mt-4 md:text-base md:leading-8">
            {wedding.shortDescription}
          </p>
          <span className="mt-4 inline-block border-b border-[#c9a876] pb-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#1a1a1a] transition group-hover:text-[#a98652] md:mt-5 md:text-xs md:tracking-[0.22em]">
            View details
          </span>
        </div>
      </Link>
    </article>
  );
}
