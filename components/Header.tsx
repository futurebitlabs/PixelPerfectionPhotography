"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { navLinks, socialLinks, studio } from "@/data/site";

type HeaderProps = {
  solid?: boolean;
  showBookingCta?: boolean;
};

export function Header({ solid = false, showBookingCta = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const isSolid = solid || isScrolled;

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition duration-500 ${
        isSolid
          ? "border-black/10 bg-[#fbf8f3]/94 text-[#1a1a1a] shadow-sm backdrop-blur"
          : "border-white/15 bg-transparent text-white"
      }`}
    >
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-5 md:min-h-20 lg:px-8">
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.12em] outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876] md:text-2xl md:tracking-[0.14em]"
        >
          <span className="md:hidden">Pixel Perfect</span>
          <span className="hidden md:inline">{studio.wordmark}</span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-5 text-[0.68rem] font-semibold uppercase tracking-[0.22em] xl:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="outline-offset-4 transition hover:text-[#c9a876] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {showBookingCta ? (
          <Link
            href="/contact-us"
            className="hidden h-10 items-center justify-center bg-[#c9a876] px-5 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-white outline-offset-4 transition hover:bg-[#1a1a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876] md:inline-flex"
          >
            Book your shoot
          </Link>
        ) : (
          <div className="hidden items-center gap-2 md:flex">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-8 place-items-center rounded-full border border-current/35 text-[0.62rem] font-semibold uppercase outline-offset-4 transition hover:border-[#c9a876] hover:text-[#c9a876] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876]"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        )}

        <details className="group xl:hidden">
          <summary
            aria-label="Open menu"
            className="inline-flex h-10 w-10 cursor-pointer list-none flex-col items-center justify-center gap-1.5 rounded-full border border-current/35 outline-offset-4 transition marker:hidden hover:border-[#c9a876] hover:text-[#c9a876] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876] [&::-webkit-details-marker]:hidden"
          >
            <span className="h-px w-4 bg-current transition group-open:translate-y-[3px] group-open:rotate-45" />
            <span className="h-px w-4 bg-current transition group-open:-translate-y-[3px] group-open:-rotate-45" />
          </summary>

          <div className="fixed left-0 right-0 top-16 hidden border-y border-[#1a1a1a]/10 bg-[#fbf8f3]/97 text-[#1a1a1a] shadow-sm backdrop-blur group-open:block md:top-20">
            <nav
              aria-label="Mobile navigation"
              className="mx-auto grid max-w-7xl gap-1 px-5 py-4 text-xs font-semibold uppercase tracking-[0.22em] lg:px-8"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="py-2 outline-offset-4 transition hover:text-[#c9a876] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876]"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 flex items-center gap-2 border-t border-[#1a1a1a]/10 pt-4">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid size-8 place-items-center rounded-full border border-[#1a1a1a]/25 text-[0.62rem] font-semibold uppercase outline-offset-4 transition hover:border-[#c9a876] hover:text-[#c9a876] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876]"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
