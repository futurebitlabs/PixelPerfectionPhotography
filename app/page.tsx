import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { InstagramStrip } from "@/components/InstagramStrip";
import { AboutTeaser } from "@/components/home/AboutTeaser";
import { FeaturedWeddings } from "@/components/home/FeaturedWeddings";
import { Hero } from "@/components/home/Hero";
import { TeamPreview } from "@/components/home/TeamPreview";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutTeaser />
        <FeaturedWeddings />
        <TeamPreview />
        <TestimonialsPreview />
        <InstagramStrip />
      </main>
      <Footer />
    </>
  );
}
