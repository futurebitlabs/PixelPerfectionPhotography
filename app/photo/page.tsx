import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PhotoGallery } from "@/components/PhotoGallery";
import { weddings } from "@/data/weddings";

export const metadata: Metadata = {
  title: "Portfolio | Pixel Perfection Photography",
  description:
    "A curated portfolio of destination wedding and prewedding photography.",
};

const gallery = weddings.flatMap((wedding) =>
  [wedding.coverImage, ...wedding.gallery].map((src) => ({
    src,
    alt: `${wedding.coupleNames} wedding photograph`,
  })),
);

export default function PortfolioPage() {
  return (
    <PageShell eyebrow="Portfolio" title="Portfolio">
      <section className="py-16 md:py-24">
        <div className="mb-10 flex flex-wrap gap-4 px-5 text-xs font-semibold uppercase tracking-[0.24em] lg:px-8">
          {["All", "Wedding", "Prewedding"].map((filter) => (
            <button
              key={filter}
              className="border-b border-[#c9a876] pb-2 text-[#1a1a1a]"
              type="button"
            >
              {filter}
            </button>
          ))}
        </div>
        <PhotoGallery layout="masonry" photos={gallery} />
      </section>
    </PageShell>
  );
}
