import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InstagramStrip } from "@/components/InstagramStrip";
import { PhotoGallery } from "@/components/PhotoGallery";
import { weddings } from "@/data/weddings";

type WeddingPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return weddings.map((wedding) => ({ slug: wedding.slug }));
}

export async function generateMetadata({
  params,
}: WeddingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const wedding = weddings.find((item) => item.slug === slug);

  if (!wedding) {
    return {};
  }

  return {
    title: `${wedding.coupleNames} | Pixel Perfection Photography`,
    description: wedding.shortDescription,
  };
}

export default async function WeddingStoryPage({ params }: WeddingPageProps) {
  const { slug } = await params;
  const wedding = weddings.find((item) => item.slug === slug);

  if (!wedding) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="bg-[#fbf8f3] text-[#1a1a1a]">
        <section className="relative min-h-[62svh] overflow-hidden bg-[#1a1a1a] px-5 pt-28 text-white md:min-h-screen lg:px-8">
          <Image
            src={wedding.coverImage}
            alt={`${wedding.coupleNames} wedding story`}
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-75"
            style={{ objectPosition: wedding.coverPosition }}
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/48" />
          <div className="relative z-10 mx-auto flex min-h-[48svh] max-w-7xl flex-col justify-end pb-12 md:min-h-[78vh]">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#c9a876]">
              {wedding.type} | {wedding.location}
            </p>
            <h1 className="font-serif text-5xl leading-none md:text-8xl">
              {wedding.coupleNames}
            </h1>
          </div>
        </section>

        <section className="px-5 py-16 md:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <p className="font-serif text-3xl leading-10 md:text-xl md:leading-[1.25]">
              {wedding.fullStory}
            </p>
          </div>
          <div className="mx-auto mt-14 max-w-5xl">
            <PhotoGallery
              layout="stack"
              className="gap-6 md:gap-8"
              photos={wedding.gallery.map((image, index) => ({
                src: image,
                alt: `${wedding.coupleNames} gallery image ${index + 1}`,
              }))}
            />
          </div>
        </section>
        <InstagramStrip />
      </main>
      <Footer />
    </>
  );
}
