import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { cld } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Services | Pixel Perfection Photography",
  description:
    "Premium photography services for weddings, pre-weddings, corporate events, school functions, birthdays, parties, and private celebrations.",
};

type ServiceIcon = "rings" | "camera" | "briefcase" | "school" | "cake";

const services: {
  title: string;
  description: string;
  image: string;
  icon: ServiceIcon;
  bullets: string[];
}[] = [
  {
    title: "Wedding Photography",
    description:
      "Capturing the most precious moments of your big day with timeless elegance and emotion.",
    image: cld("/images/weddings/jhanvi-ashish/cover.jpg"),
    icon: "rings",
    bullets: ["Full day coverage", "Candid moments", "Traditional and cinematic"],
  },
  {
    title: "Pre-Wedding Shoots",
    description:
      "Beautiful locations, creative concepts, and cinematic storytelling for your love story.",
    image: cld("/images/weddings/amit-sanya/cover.jpg"),
    icon: "camera",
    bullets: ["Concept planning", "Outdoor and destination", "Outfit and pose guidance"],
  },
  {
    title: "Corporate Shoots",
    description:
      "Professional photography for events, conferences, brand requirements, and team identity.",
    image: cld("/images/corporate/corporate-main.jpg"),
    icon: "briefcase",
    bullets: ["Corporate events", "Conferences and seminars", "Team and headshots"],
  },
  {
    title: "School Photography",
    description:
      "Preserving school memories and institutional milestones with creativity and perfection.",
    image: cld("/images/school/school-main.jpg"),
    icon: "school",
    bullets: ["Annual functions", "Graduation and convocation", "Sports and cultural events"],
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
    <>
      <Header solid showBookingCta />
      <main className="bg-[#fbf8f3] pt-16 text-[#1a1a1a] md:pt-20">
        <section className="relative overflow-hidden border-b border-[#1a1a1a]/10 bg-[#ede5d8]">
          <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.92fr_1.28fr]">
            <div className="relative z-10 flex min-h-[420px] flex-col justify-center px-6 py-16 md:px-14 lg:px-24">
              <p className="mb-5 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#6f5a40]">
                What we do
              </p>
              <h1 className="max-w-lg font-serif text-5xl leading-[0.98] md:text-7xl">
                Photography Services
              </h1>
              <div className="mt-6 h-px w-12 bg-[#c9a876]" />
              <p className="mt-6 max-w-md text-base leading-8 text-[#1a1a1a]/72">
                From intimate moments to grand celebrations, we capture your
                story with creativity, passion, and perfection.
              </p>
            </div>
            <div className="relative min-h-[360px] lg:min-h-[520px]">
              <Image
                src={cld("/images/weddings/jhanvi-ashish/cover.jpg")}
                alt="Bride portrait for Pixel Perfection photography services"
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 34%" }}
              />
              <div className="absolute inset-y-0 left-0 hidden w-2/5 bg-gradient-to-r from-[#ede5d8] to-transparent lg:block" />
            </div>
          </div>
        </section>

        <section className="px-5 py-10 md:py-14 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-8 text-center">
              <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#6f5a40]">
                Our services
              </p>
              <h2 className="font-serif text-3xl leading-tight md:text-5xl">
                Moments We Specialize In
              </h2>
              <div className="mx-auto mt-4 flex w-36 items-center justify-center gap-3">
                <span className="h-px flex-1 bg-[#c9a876]" />
                <span className="flex gap-1" aria-hidden="true">
                  <span className="size-1 rounded-full bg-[#c9a876]" />
                  <span className="size-1 rounded-full bg-[#c9a876]" />
                </span>
                <span className="h-px flex-1 bg-[#c9a876]" />
              </div>
            </div>

            <div className="border border-[#1a1a1a]/12 bg-[#fbf8f3]">
              {services.map((service, index) => (
                <ServiceRow
                  key={service.title}
                  service={service}
                  reversed={index % 2 === 1}
                />
              ))}
            </div>

            <div className="bg-[#efe7dc] px-6 py-10 text-center md:px-10 md:py-12">
              <div className="mx-auto mb-3 grid size-8 place-items-center text-[#1a1a1a]">
                <ServiceSvg icon="camera" small />
              </div>
              <h2 className="font-serif text-3xl md:text-4xl">
                Let&apos;s Capture Your Story
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#1a1a1a]/68">
                Every moment is unique. Let us help you make it timeless.
              </p>
              <Link
                href="/contact-us"
                className="mt-6 inline-flex h-11 items-center justify-center bg-[#c9a876] px-8 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-[#1a1a1a]"
              >
                Book your shoot
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ServiceRow({
  service,
  reversed,
}: {
  service: (typeof services)[number];
  reversed: boolean;
}) {
  return (
    <article className="grid border-b border-[#1a1a1a]/12 last:border-b-0 md:grid-cols-2">
      <div
        className={`relative min-h-[260px] md:min-h-[300px] ${
          reversed ? "md:order-2" : ""
        }`}
      >
        <Image
          src={service.image}
          alt={`${service.title} by Pixel Perfection Photography`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex items-center px-6 py-10 md:px-12 lg:px-16">
        <div className="grid gap-6 sm:grid-cols-[72px_1fr] sm:items-start">
          <div className="grid size-16 place-items-center rounded-full bg-[#eadcc8] text-[#1a1a1a] md:size-20">
            <ServiceSvg icon={service.icon} />
          </div>
          <div>
            <h3 className="font-serif text-3xl leading-tight">
              {service.title}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-[#1a1a1a]/70">
              {service.description}
            </p>
            <ul className="mt-5 grid gap-2 text-sm text-[#1a1a1a]/78">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1.5 size-2 rounded-full border border-[#a98652]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/photo"
              className="mt-7 inline-flex items-center gap-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] transition hover:text-[#c9a876]"
            >
              View gallery <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}

function ServiceSvg({
  icon,
  small = false,
}: {
  icon: ServiceIcon;
  small?: boolean;
}) {
  const className = small ? "size-6" : "size-8";

  if (icon === "rings") {
    return (
      <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 32 32">
        <circle cx="12" cy="18" r="7" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="20" cy="18" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 9.5 16 5l4 4.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (icon === "briefcase") {
    return (
      <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 32 32">
        <path
          d="M7 12h18v13H7V12Zm6 0V8h6v4M7 17h18"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  if (icon === "school") {
    return (
      <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 32 32">
        <path d="m5 13 11-6 11 6-11 6-11-6Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="M10 16v6c3.6 2.2 8.4 2.2 12 0v-6" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (icon === "cake") {
    return (
      <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 32 32">
        <path d="M8 16h16v10H8V16Zm3-5h10v5H11v-5Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.6" />
        <path d="M16 7v4M11 21h2m4 0h2m4 0h1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 32 32">
      <path
        d="M7 12h5l2-3h4l2 3h5v13H7V12Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <circle cx="16" cy="18.5" r="4.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
