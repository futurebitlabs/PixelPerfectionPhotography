import { MotionReveal } from "@/components/MotionReveal";
import { SafeImage as Image } from "@/components/SafeImage";
import { SectionHeading } from "@/components/SectionHeading";
import { cld } from "@/lib/cloudinary";

export function AboutTeaser() {
  return (
    <section className="bg-[#fbf8f3] px-5 py-16 md:py-24 lg:px-8 lg:py-40">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <MotionReveal>
          <SectionHeading
            eyebrow="About Us"
            title="For couples who want their wedding to feel"
            italic="cinematic"
          />
          <p className="mt-6 max-w-xl text-base leading-8 text-[#1a1a1a]/70 md:mt-8 md:text-lg md:leading-9">
            Pixel Perfection is a destination wedding photography and film
            studio crafting romantic, editorial stories across coastlines,
            palaces, gardens, and candlelit ballrooms. We blend quiet
            documentary observation with refined direction, so every gallery
            feels intimate, artful, and alive.
          </p>
          <p className="mt-6 font-serif text-3xl italic text-[#c9a876] md:mt-8 md:text-4xl">
            With love, PP
          </p>
        </MotionReveal>

        <MotionReveal delay={0.12}>
          <div className="relative aspect-[4/5] overflow-hidden lg:aspect-[5/6]">
            <Image
              src={cld("/images/about/about-main.png")}
              alt="Luxury wedding studio editorial detail"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "70% center" }}
            />
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
