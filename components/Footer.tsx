import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { navLinks, socialLinks, studio } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-[#1a1a1a]/10 bg-[#fbf8f3] px-5 py-10 text-[#1a1a1a] lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center md:gap-8">
        <Link
          href="/"
          className="flex items-center gap-3 font-serif text-2xl tracking-[0.14em] md:text-3xl md:tracking-[0.16em]"
        >
          <LogoMark className="h-8 w-auto shrink-0 md:h-10" />
          {studio.wordmark}
        </Link>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[0.62rem] font-semibold uppercase tracking-[0.18em] md:gap-x-6 md:gap-y-3 md:text-xs md:tracking-[0.22em]"
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
        <div className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid size-9 place-items-center rounded-full border border-[#1a1a1a]/25 text-[0.65rem] font-semibold uppercase transition hover:border-[#c9a876] hover:text-[#c9a876]"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
        <a
          href={studio.mapsLink}
          target="_blank"
          rel="noreferrer"
          className="max-w-md text-xs leading-6 text-[#1a1a1a]/60 transition hover:text-[#c9a876]"
        >
          {studio.address}
        </a>
        <p className="text-xs uppercase tracking-[0.22em] text-[#1a1a1a]/55">
          &copy; {new Date().getFullYear()} {studio.name}. Destination wedding
          photography and films.
        </p>
      </div>
    </footer>
  );
}
