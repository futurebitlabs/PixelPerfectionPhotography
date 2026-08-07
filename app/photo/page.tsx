import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { weddings } from "@/data/weddings";

export const metadata: Metadata = {
  title: "Portfolio | Pixel Perfection Photography",
  description:
    "A curated portfolio of destination wedding and prewedding photography.",
};

const seenSrc = new Set<string>();
const gallery = weddings.flatMap((wedding) => {
  const category = wedding.type === "PreWedding" ? "prewedding" : "wedding";
  return [wedding.coverImage, ...wedding.gallery]
    .filter((src) => (seenSrc.has(src) ? false : (seenSrc.add(src), true)))
    .map((src) => ({
      src,
      alt: `${wedding.coupleNames} wedding photograph`,
      category: category as "wedding" | "prewedding",
    }));
});

export default function PortfolioPage() {
  return (
    <PageShell eyebrow="Portfolio" title="Portfolio">
      <section className="py-16 md:py-24">
        <PortfolioGallery photos={gallery} />
      </section>
    </PageShell>
  );
}
