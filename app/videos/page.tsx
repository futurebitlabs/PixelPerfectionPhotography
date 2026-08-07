import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { weddingFilms } from "@/data/videos";

export const metadata: Metadata = {
  title: "Wedding Films | Pixel Perfection Photography",
  description: "Cinematic destination wedding films by Pixel Perfection.",
};

export default function VideosPage() {
  return (
    <PageShell eyebrow="Wedding Films" title="Wedding films">
      <section className="px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {weddingFilms.map((film) => (
            <article key={film.slug}>
              <h2 className="mb-4 font-serif text-3xl">{film.coupleNames}</h2>
              <video
                className="aspect-video w-full bg-[#1a1a1a] object-cover"
                src={film.videoUrl}
                poster={film.posterUrl}
                controls
                preload="none"
              />
              <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[#1a1a1a]/55">
                Location: {film.location}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
