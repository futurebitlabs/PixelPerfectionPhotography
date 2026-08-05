import { cld } from "@/lib/cloudinary";

export type WeddingType =
  | "Casual Wedding"
  | "Classic Wedding"
  | "Nature Wedding"
  | "PreWedding";

export type Wedding = {
  slug: string;
  coupleNames: string;
  type: WeddingType;
  location: string;
  coverImage: string;
  coverPosition: string;
  shortDescription: string;
  fullStory: string;
  gallery: string[];
};

export const weddings: Wedding[] = [
  {
    slug: "amit-sanya",
    coupleNames: "Amit & Sanya",
    type: "Classic Wedding",
    location: "",
    coverImage: cld("/images/weddings/amit-sanya/cover.jpg"),
    coverPosition: "18% center",
    shortDescription:
      "A sun-warmed island celebration shaped by candlelight, silk, and sea air.",
    fullStory:
      "Their wedding unfolded like a destination editorial: soft mornings by the coast, intimate vows, and a reception lit with hundreds of small flames. We followed the rhythm quietly, looking for gestures that felt deeply personal.",
    gallery: [
      "/images/weddings/amit-sanya/gallery-01.jpg",
      "/images/weddings/amit-sanya/gallery-02.jpg",
      "/images/weddings/amit-sanya/gallery-03.jpg",
      "/images/weddings/amit-sanya/gallery-04.jpg",
      "/images/weddings/amit-sanya/gallery-05.jpg",
      "/images/weddings/amit-sanya/gallery-06.jpg",
      "/images/weddings/amit-sanya/gallery-07.jpg",
      "/images/weddings/amit-sanya/gallery-08.jpg",
      "/images/weddings/amit-sanya/gallery-11.jpg",
      "/images/weddings/amit-sanya/gallery-13.jpg",
      "/images/weddings/amit-sanya/gallery-14.jpg",
      "/images/weddings/amit-sanya/gallery-15.jpg",
      "/images/weddings/amit-sanya/gallery-16.jpg",
      "/images/weddings/amit-sanya/gallery-17.jpg",
      "/images/weddings/amit-sanya/gallery-18.jpg",
      "/images/weddings/amit-sanya/gallery-19.jpg",
      "/images/weddings/amit-sanya/gallery-20.jpg",
      "/images/weddings/amit-sanya/gallery-21.jpg",
      "/images/weddings/amit-sanya/gallery-22.jpg",
      "/images/weddings/amit-sanya/gallery-23.jpg",
      "/images/weddings/amit-sanya/gallery-24.jpg",
    ].map(cld),
  },
  {
    slug: "jhanvi-ashish",
    coupleNames: "Jhanvi & Ashish",
    type: "Nature Wedding",
    location: "India",
    coverImage: cld("/images/weddings/jhanvi-ashish/cover.jpg"),
    coverPosition: "35% center",
    shortDescription:
      "An intimate lakeside wedding with old-world architecture and modern ease.",
    fullStory:
      "Across two days, the celebration moved from quiet portraits to a glowing courtyard dinner. The visual language was royal, restrained, and full of tender in-between moments.",
    gallery: [
      "/images/weddings/jhanvi-ashish/gallery-01.jpg",
      "/images/weddings/jhanvi-ashish/gallery-02.jpg",
      "/images/weddings/jhanvi-ashish/gallery-03.jpg",
      "/images/weddings/jhanvi-ashish/gallery-04.jpg",
    ].map(cld),
  },
  {
    slug: "durgesh-novika",
    coupleNames: "Durgesh & Novika",
    type: "Classic Wedding",
    location: "Location TBD",
    coverImage: cld("/images/weddings/durgesh-novika/cover.jpg"),
    coverPosition: "50% center",
    shortDescription: "A celebration full of warmth, color, and family joy.",
    fullStory: "Full story to be written.",
    gallery: ["/images/weddings/durgesh-novika/gallery-01.jpg"].map(cld),
  },
];
