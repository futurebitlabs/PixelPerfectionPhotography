import Link from "next/link";
import { MotionReveal } from "@/components/MotionReveal";
import { SafeImage as Image } from "@/components/SafeImage";
import { SectionHeading } from "@/components/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function TestimonialsPreview() {
  return (
    <section className="bg-white px-5 py-16 md:py-24 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <MotionReveal>
          <SectionHeading
            eyebrow="Client Praise"
            title="Words from the people"
            italic="inside the story"
            align="center"
          />
        </MotionReveal>

        <div className="mt-10 grid gap-5 md:mt-16 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <MotionReveal key={testimonial.name} delay={index * 0.08}>
              <article className="bg-[#fbf8f3] p-5">
                {testimonial.image ? (
                  <div className="relative mb-6 aspect-[5/4] overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={`${testimonial.name} testimonial portrait`}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: `${25 + index * 20}% center` }}
                    />
                  </div>
                ) : null}
                <p className="font-serif text-xl leading-8 text-[#1a1a1a] md:text-2xl md:leading-9">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a876]">
                  {testimonial.name}
                </p>
              </article>
            </MotionReveal>
          ))}
        </div>

        <div className="mt-10 text-center md:mt-12">
          <Link
            href="/testimonials"
            className="border-b border-[#c9a876] pb-1 text-xs font-semibold uppercase tracking-[0.24em] text-[#1a1a1a] transition hover:text-[#c9a876]"
          >
            View all client praise
          </Link>
        </div>
      </div>
    </section>
  );
}
