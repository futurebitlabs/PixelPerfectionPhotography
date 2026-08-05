import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { studio } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us | Pixel Perfection Photography",
  description:
    "Get in touch with Pixel Perfection for destination wedding photography and films.",
};

export default function ContactPage() {
  return (
    <PageShell eyebrow="Contact" title="Contact us">
      <section className="px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">
              Interested in working with us?{" "}
              <em className="text-[#c9a876]">Get in touch.</em>
            </h2>
            <div className="mt-8 space-y-4 leading-8 text-[#1a1a1a]/70">
              <p>Pixel Perfection Studio, New Delhi, India</p>
              <p>
                <a href={`tel:${studio.phone}`} className="hover:text-[#c9a876]">
                  {studio.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${studio.email}`}
                  className="hover:text-[#c9a876]"
                >
                  {studio.email}
                </a>
              </p>
            </div>
          </div>
          <form className="grid gap-4 bg-white p-5 md:p-8">
            {["Name", "Email", "Wedding date"].map((label) => (
              <label key={label} className="grid gap-2 text-sm">
                {label}
                <input
                  className="border border-[#1a1a1a]/15 bg-[#fbf8f3] px-4 py-3 outline-[#c9a876]"
                  type={label === "Email" ? "email" : label === "Wedding date" ? "date" : "text"}
                />
              </label>
            ))}
            <label className="grid gap-2 text-sm">
              Message
              <textarea className="min-h-32 border border-[#1a1a1a]/15 bg-[#fbf8f3] px-4 py-3 outline-[#c9a876]" />
            </label>
            <button
              type="button"
              className="mt-2 h-12 bg-[#1a1a1a] text-xs font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#c9a876]"
            >
              Inquire now
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
