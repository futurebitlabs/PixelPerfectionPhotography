import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
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
              <p>
                <a
                  href={studio.mapsLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#c9a876]"
                >
                  {studio.address}
                </a>
              </p>
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
          <InquiryForm />
        </div>
      </section>
    </PageShell>
  );
}
