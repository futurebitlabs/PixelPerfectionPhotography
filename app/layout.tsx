import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { cldUrl } from "@/lib/cloudinary";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pixelperfection.example"),
  title: "Pixel Perfection Photography",
  description:
    "Luxury destination wedding photography and films for romantic, editorial celebrations around the world.",
  openGraph: {
    title: "Pixel Perfection Photography",
    description:
      "Cinematic destination wedding photography and videography with a luxury bridal editorial sensibility.",
    images: [cldUrl("/images/hero/home-hero-01.jpeg")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-[#fbf8f3] font-sans text-[#1a1a1a]">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
