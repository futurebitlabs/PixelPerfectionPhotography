import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceRow, ServiceSvg, type Service } from "@/components/ServiceRow";
import { cld } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Services | Pixel Perfection Photography",
  description:
    "Premium photography services for weddings, pre-weddings, corporate events, school functions, birthdays, parties, and private celebrations.",
};

const services: Service[] = [
  {
    title: "Wedding Photography",
    description:
      "Capturing the most precious moments of your big day with timeless elegance and emotion.",
    image: cld("/images/weddings/durgesh-novika/cover.jpg"),
    icon: "rings",
    bullets: [
      "Full day coverage",
      "Candid moments",
      "Traditional and cinematic",
    ],
  },
  {
    title: "Pre-Wedding Shoots",
    description:
      "Beautiful locations, creative concepts, and cinematic storytelling for your love story.",
    image: cld("/images/pre-wed/vashi/cover.jpg"),
    icon: "camera",
    bullets: [
      "Concept planning",
      "Outdoor and destination",
      "Outfit and pose guidance",
    ],
  },
  {
    title: "Corporate Shoots",
    description:
      "Professional photography for events, conferences, brand requirements, and team identity.",
    image: cld("/images/corporate/corporate-main.jpg"),
    icon: "briefcase",
    bullets: [
      "Corporate events",
      "Conferences and seminars",
      "Team and headshots",
    ],
  },
  {
    title: "School Photography",
    description:
      "Preserving school memories and institutional milestones with creativity and perfection.",
    image: cld("/images/school/school-main.jpg"),
    icon: "school",
    bullets: [
      "Annual functions",
      "Graduation and convocation",
      "Sports and cultural events",
    ],
  },
  {
    title: "Birthday and Party Shoots",
    description:
      "From birthdays to anniversaries, we capture every smile, every hug, and every moment.",
    image: cld("/images/party/party-main.jpg"),
    icon: "cake",
    bullets: ["Birthdays", "Anniversaries", "Engagements and celebrations"],
  },
];

export default function ServicesPage() {
  return (
    <PageShell eyebrow="What We Do" title="Photography services">
      <section className="px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-8 text-[#1a1a1a]/70 md:text-lg md:leading-9">
            From intimate moments to grand celebrations, we capture your story
            with creativity, passion, and perfection.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl md:mt-20">
          <SectionHeading
            eyebrow="Our Services"
            title="Moments we"
            italic="specialize in"
            align="center"
          />

          <div className="mt-12 border border-[#1a1a1a]/12 bg-white md:mt-16">
            {services.map((service, index) => (
              <ServiceRow
                key={service.title}
                service={service}
                reversed={index % 2 === 1}
              />
            ))}
          </div>

          <div className="mt-12 bg-[#efe7dc] px-6 py-10 text-center md:mt-16 md:px-10 md:py-14">
            <div className="mx-auto mb-3 grid size-8 place-items-center text-[#1a1a1a]">
              <ServiceSvg icon="camera" className="size-6" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl">
              Let&apos;s Capture Your Story
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#1a1a1a]/68">
              Every moment is unique. Let us help you make it timeless.
            </p>
            <Link
              href="/contact-us"
              className="mt-7 inline-flex h-12 items-center justify-center bg-[#c9a876] px-8 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white outline-offset-4 transition hover:bg-[#1a1a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876]"
            >
              Book your shoot
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
