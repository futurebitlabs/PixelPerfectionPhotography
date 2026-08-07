import Link from "next/link";
import type { Metadata } from "next";
import { AutoImage } from "@/components/AutoImage";
import { PageShell } from "@/components/PageShell";
import { SectionHeading } from "@/components/SectionHeading";
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
        className={`flex items-center bg-[#1a1a1a] ${
          reversed ? "md:order-2" : ""
        }`}
      >
        <AutoImage
          src={service.image}
          alt={`${service.title} by Pixel Perfection Photography`}
          sizes="(min-width: 768px) 50vw, 100vw"
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
      <svg
        aria-hidden="true"
        className={className}
        fill="none"
        viewBox="0 0 32 32"
      >
        <circle cx="12" cy="18" r="7" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="20" cy="18" r="7" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 9.5 16 5l4 4.5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  if (icon === "briefcase") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="none"
        viewBox="0 0 32 32"
      >
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
      <svg
        aria-hidden="true"
        className={className}
        fill="none"
        viewBox="0 0 32 32"
      >
        <path
          d="m5 13 11-6 11 6-11 6-11-6Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
        <path
          d="M10 16v6c3.6 2.2 8.4 2.2 12 0v-6"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  if (icon === "cake") {
    return (
      <svg
        aria-hidden="true"
        className={className}
        fill="none"
        viewBox="0 0 32 32"
      >
        <path
          d="M8 16h16v10H8V16Zm3-5h10v5H11v-5Z"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
        <path
          d="M16 7v4M11 21h2m4 0h2m4 0h1"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 32 32"
    >
      <path
        d="M7 12h5l2-3h4l2 3h5v13H7V12Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.6"
      />
      <circle
        cx="16"
        cy="18.5"
        r="4.2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
