import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { InstagramStrip } from "@/components/InstagramStrip";
import { heroImages } from "@/data/heroImages";

type PageShellProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  imageAlt?: string;
};

export function PageShell({
  eyebrow,
  title,
  children,
  imageAlt = "Destination wedding editorial image",
}: PageShellProps) {
  return (
    <>
      <Header />
      <main className="bg-[#fbf8f3] text-[#1a1a1a]">
        <section className="relative min-h-[48svh] overflow-hidden bg-[#1a1a1a] px-5 pt-28 text-white md:min-h-[62vh] md:pt-36 lg:px-8">
          <HeroCarousel images={heroImages} alt={imageAlt} priority className="opacity-75" />
          <div className="absolute inset-0 bg-[#1a1a1a]/48" />
          <div className="relative z-10 mx-auto flex min-h-[32svh] max-w-7xl flex-col justify-end pb-12 md:min-h-[42vh] md:pb-16">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a876]">
              {eyebrow}
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-none md:text-7xl lg:text-8xl">
              {title}
            </h1>
          </div>
        </section>
        {children}
        <InstagramStrip />
      </main>
      <Footer />
    </>
  );
}
