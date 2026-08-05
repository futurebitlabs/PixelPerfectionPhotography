import Image from "next/image";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Client's Praise | Pixel Perfection Photography",
  description: "Client testimonials and praise for Pixel Perfection weddings.",
};

export default function TestimonialsPage() {
  return (
    <PageShell eyebrow="Client's Praise" title="Client's praise">
      <section className="px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article key={`${testimonial.name}-${index}`} className="bg-white p-5">
              {testimonial.image ? (
                <div className="relative mb-6 aspect-[5/4] overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} testimonial`}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: `${25 + index * 20}% center` }}
                  />
                </div>
              ) : null}
              <p className="font-serif text-2xl leading-9">
                &quot;{testimonial.quote}&quot;
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a876]">
                {testimonial.name}
              </p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
