import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Wedding Films | Pixel Perfection Photography",
  description: "Cinematic destination wedding films by Pixel Perfection.",
};

const videos = [
  ["Shama & Sourya", "Koh Samui"],
  ["Aarya & Dev", "Udaipur"],
  ["Mira & Kabir", "Jaipur"],
  ["Nora & Eli", "Tuscany"],
];

export default function VideosPage() {
  return (
    <PageShell eyebrow="Wedding Films" title="Wedding films">
      <section className="px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {videos.map(([couple, location]) => (
            <article key={couple}>
              <h2 className="mb-4 font-serif text-3xl">{couple}</h2>
              <div className="grid aspect-video place-items-center bg-[#1a1a1a] text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                Film embed placeholder
              </div>
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#1a1a1a]/55">
                Location: {location}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
