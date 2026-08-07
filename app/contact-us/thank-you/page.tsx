import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { studio } from "@/data/site";

export const metadata: Metadata = {
  title: "Thank You | Pixel Perfection Photography",
  description:
    "Thank you for reaching out to Pixel Perfection — we'll be in touch soon.",
};

export default function ThankYouPage() {
  return (
    <PageShell eyebrow="Thank You" title="We'll be in touch">
      <section className="px-5 py-20 md:py-28 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base leading-8 text-[#1a1a1a]/70 md:text-lg md:leading-9">
            Your inquiry has landed safely in our inbox. Our team will review
            your details and get back to you shortly to talk through your
            requirements, availability, and pricing.
          </p>

          <blockquote className="mt-12 font-serif text-3xl italic leading-tight text-[#1a1a1a] md:text-4xl">
            Every love story is worth
            <br />
            <em className="text-[#c9a876]">telling beautifully.</em>
          </blockquote>
          <p className="mt-4 text-sm uppercase tracking-[0.22em] text-[#1a1a1a]/50">
            With love, {studio.wordmark}
          </p>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/photo"
              className="inline-flex h-12 items-center justify-center bg-[#c9a876] px-8 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-white outline-offset-4 transition hover:bg-[#1a1a1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876]"
            >
              View Portfolio
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center border border-[#1a1a1a]/20 px-8 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#1a1a1a] outline-offset-4 transition hover:border-[#c9a876] hover:text-[#c9a876] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
