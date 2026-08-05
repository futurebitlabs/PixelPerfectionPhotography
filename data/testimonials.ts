import { cld } from "@/lib/cloudinary";

export type Testimonial = {
  image?: string;
  quote?: string;
  name?: string;
};

export const testimonials: Testimonial[] = [
  {
    image: cld("/images/testimonials/testimonial-main.jpeg"),
    quote:
      "Every frame felt intentional, cinematic, and completely true to who we are.",
    name: "Shama & Sourya",
  },
  {
    image: cld("/images/weddings/jhanvi-ashish/gallery-01.jpg"),
    quote:
      "They made a huge destination wedding feel calm. The photos still make our families emotional.",
    name: "Jhanvi & Ashish",
  },
  {
    image: cld("/images/weddings/amit-sanya/gallery-01.jpg"),
    quote:
      "Our film looked like a memory, not a performance. Elegant, warm, and alive.",
    name: "Amit & Sanya",
  },
];
