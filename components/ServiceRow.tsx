"use client";

import Link from "next/link";
import { useState } from "react";
import { AutoImage } from "@/components/AutoImage";

export type ServiceIconName = "rings" | "camera" | "briefcase" | "school" | "cake";

export type Service = {
  title: string;
  description: string;
  image: string;
  icon: ServiceIconName;
  bullets: string[];
};

export function ServiceRow({
  service,
  reversed,
}: {
  service: Service;
  reversed: boolean;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="grid border-b border-[#1a1a1a]/12 last:border-b-0 md:grid-cols-2">
      <div
        className={`flex min-h-[300px] items-center justify-center bg-[#1a1a1a] md:min-h-[360px] ${
          reversed ? "md:order-2" : ""
        }`}
      >
        {imageFailed ? (
          <div className="flex flex-col items-center gap-3 text-[#c9a876]/80">
            <ServiceSvg icon={service.icon} className="size-14" />
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/40">
              Gallery coming soon
            </span>
          </div>
        ) : (
          <AutoImage
            src={service.image}
            alt={`${service.title} by Pixel Perfection Photography`}
            sizes="(min-width: 768px) 50vw, 100vw"
            onFail={() => setImageFailed(true)}
          />
        )}
      </div>
      <div className="flex items-center px-6 py-10 md:px-12 lg:px-16">
        <div className="grid gap-6 sm:grid-cols-[72px_1fr] sm:items-start">
          <div className="grid size-16 place-items-center rounded-full bg-[#eadcc8] text-[#1a1a1a] md:size-20">
            <ServiceSvg icon={service.icon} className="size-8" />
          </div>
          <div>
            <h3 className="font-serif text-3xl leading-tight">{service.title}</h3>
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

export function ServiceSvg({
  icon,
  className = "size-8",
}: {
  icon: ServiceIconName;
  className?: string;
}) {
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
      <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 32 32">
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
