import { MotionReveal } from "@/components/MotionReveal";
import { SafeImage as Image } from "@/components/SafeImage";
import { SectionHeading } from "@/components/SectionHeading";
import { pressLogos } from "@/data/team";
import { cld } from "@/lib/cloudinary";

export function TeamPreview() {
  return (
    <section className="bg-[#fbf8f3] px-5 py-16 md:py-24 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <MotionReveal className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Who we are"
            title="Artists, editors, and filmmakers with a"
            italic="romantic eye"
          />
          <p className="max-w-2xl text-base leading-8 text-[#1a1a1a]/70 md:text-lg md:leading-9">
            We work as a calm, intuitive crew: watching for emotion, shaping
            light when it matters, and building wedding stories that feel like
            keepsakes from the very first frame.
          </p>
        </MotionReveal>

        <MotionReveal delay={0.1} className="mt-10 md:mt-14">
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/8]">
            <Image
              src={cld("/images/about/team-wide.jpg")}
              alt="Pixel Perfection photography and videography artists"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: "45% center" }}
            />
          </div>
        </MotionReveal>

        <div className="mt-8 grid grid-cols-2 gap-2 border-y border-[#1a1a1a]/10 py-4 sm:grid-cols-2 md:mt-10 md:gap-3 md:py-6 lg:grid-cols-5">
          {pressLogos.map((logo) => (
            <div
              key={logo}
              className="py-3 text-center font-serif text-xl italic text-[#1a1a1a]/45 md:py-4 md:text-2xl"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
