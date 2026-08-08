import type { Metadata } from "next";
import { AvatarImage } from "@/components/AvatarImage";
import { PageShell } from "@/components/PageShell";
import { SafeImage as Image } from "@/components/SafeImage";
import { SectionHeading } from "@/components/SectionHeading";
import { teamMembers } from "@/data/team";
import { cld } from "@/lib/cloudinary";

export const metadata: Metadata = {
  title: "Our Story | Pixel Perfection Photography",
  description:
    "Meet the destination wedding photography and videography artists behind Pixel Perfection.",
};

export default function AboutUsPage() {
  const creativeHeads = teamMembers.filter(
    (member) => member.group === "creative-heads",
  );
  const leads = teamMembers.filter((member) => member.group === "leads");

  return (
    <PageShell eyebrow="About Us" title="Our story">
      <section className="px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
            <Image
              src={cld("/images/about/about-main.png")}
              alt="Pixel Perfection founders"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
              style={{ objectPosition: "30% center" }}
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Founders"
              title="A studio built on"
              italic="legacy"
            />
            <p className="mt-6 text-base leading-8 text-[#1a1a1a]/70 md:text-lg md:leading-9">
              We began with a simple belief: wedding imagery should feel as
              considered as an editorial and as honest as a family archive. Our
              team brings together photographers, filmmakers, editors, and
              producers who understand destination celebrations from the inside.
              Every story is shaped with patience, sensitivity, and a deep
              respect for the people who gather around it.
            </p>
            <p className="mt-6 font-serif text-3xl italic text-[#c9a876]">
              With love, PP
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Artists"
            title="Creative heads and"
            italic="our leads"
            align="center"
          />
          <TeamGrid title="Creative heads" members={creativeHeads} />
          <TeamGrid title="Our leads" members={leads} />
        </div>
      </section>
    </PageShell>
  );
}

function TeamGrid({
  title,
  members,
}: {
  title: string;
  members: typeof teamMembers;
}) {
  return (
    <div className="mt-12">
      <h2 className="mb-6 font-serif text-3xl text-[#1a1a1a]">{title}</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {members.map((member) => (
          <article key={member.name}>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#1a1a1a]">
              <AvatarImage
                src={member.photo}
                alt={`${member.name}, ${title}`}
                name={member.name}
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <h3 className="mt-4 font-serif text-2xl capitalize">
              {member.name}
            </h3>
          </article>
        ))}
      </div>
    </div>
  );
}
