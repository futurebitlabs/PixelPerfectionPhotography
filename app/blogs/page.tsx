import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { WeddingCard } from "@/components/WeddingCard";
import { weddings } from "@/data/weddings";

export const metadata: Metadata = {
  title: "Wedding Stories | Pixel Perfection Photography",
  description: "Destination wedding stories photographed by Pixel Perfection.",
};

export default function BlogsPage() {
  return (
    <PageShell eyebrow="Our blog" title="Wedding stories">
      <section className="px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Stories"
            title="Every celebration has its own"
            italic="language"
          />
          <div className="mt-10 grid gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {weddings.map((wedding) => (
              <WeddingCard key={wedding.slug} wedding={wedding} />
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
