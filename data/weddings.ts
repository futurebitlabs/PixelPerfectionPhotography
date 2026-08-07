import { cld } from "@/lib/cloudinary";

function galleryPaths(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) =>
    cld(`/images/weddings/${slug}/gallery-${String(i + 1).padStart(2, "0")}.jpg`),
  );
}

// For folders where the gallery numbering has gaps (some numbers skipped).
function galleryNumbers(slug: string, numbers: number[]): string[] {
  return numbers.map((n) =>
    cld(`/images/weddings/${slug}/gallery-${String(n).padStart(2, "0")}.jpg`),
  );
}

// Pre-wedding shoots live under /images/pre-wed/<slug>/ and are numbered
// plainly (1.jpg, 2.jpg, ...) rather than the gallery-NN.jpg convention.
function preWedPaths(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) =>
    cld(`/images/pre-wed/${slug}/${i + 1}.jpg`),
  );
}

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
    gallery: galleryNumbers("amit-sanya", [
      1, 2, 3, 4, 7, 8, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
      24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
    ]),
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
    gallery: galleryNumbers("jhanvi-ashish", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15]),
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
    gallery: galleryNumbers("durgesh-novika", [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 17, 18, 19, 20, 21, 22,
      23, 24, 25, 30, 31, 32, 33, 34, 35,
    ]),
  },
  {
    slug: "prakshit-garima",
    coupleNames: "Prakshit & Garima",
    type: "Classic Wedding",
    location: "Location TBD",
    coverImage: cld("/images/weddings/prakshit-garima/gallery-01.jpg"),
    coverPosition: "50% center",
    shortDescription: "A celebration full of warmth, color, and family joy.",
    fullStory: "Full story to be written.",
    gallery: [
      "/images/weddings/prakshit-garima/gallery-01.jpg",
      "/images/weddings/prakshit-garima/gallery-02.jpg",
      "/images/weddings/prakshit-garima/gallery-03.jpg",
      "/images/weddings/prakshit-garima/gallery-04.jpg",
      "/images/weddings/prakshit-garima/gallery-05.jpg",
      "/images/weddings/prakshit-garima/gallery-06.jpg",
    ].map(cld),
  },
  {
    slug: "ankur",
    coupleNames: "Ankur",
    type: "Classic Wedding",
    location: "Location TBD",
    coverImage: cld("/images/weddings/ankur/cover.jpg"),
    coverPosition: "50% center",
    shortDescription: "A celebration full of warmth, color, and family joy.",
    fullStory: "Full story to be written.",
    gallery: galleryPaths("ankur", 30),
  },
  {
    slug: "ashish",
    coupleNames: "Ashish",
    type: "Classic Wedding",
    location: "Location TBD",
    coverImage: cld("/images/weddings/ashish/cover.jpg"),
    coverPosition: "50% center",
    shortDescription: "A celebration full of warmth, color, and family joy.",
    fullStory: "Full story to be written.",
    gallery: galleryPaths("ashish", 14),
  },
  {
    slug: "gagan-simran",
    coupleNames: "Gagan & Simran",
    type: "Classic Wedding",
    location: "Location TBD",
    coverImage: cld("/images/weddings/gagan-simran/cover.jpg"),
    coverPosition: "50% center",
    shortDescription: "A celebration full of warmth, color, and family joy.",
    fullStory: "Full story to be written.",
    gallery: galleryPaths("gagan-simran", 27),
  },
  {
    slug: "vashi",
    coupleNames: "Vashi",
    type: "Classic Wedding",
    location: "Location TBD",
    coverImage: cld("/images/weddings/vashi/cover.jpg"),
    coverPosition: "50% center",
    shortDescription: "A celebration full of warmth, color, and family joy.",
    fullStory: "Full story to be written.",
    gallery: galleryPaths("vashi", 14),
  },
  {
    slug: "vashi-pre-wedding",
    coupleNames: "Vashi",
    type: "PreWedding",
    location: "Location TBD",
    coverImage: cld("/images/pre-wed/vashi/cover.jpg"),
    coverPosition: "50% center",
    shortDescription:
      "A relaxed pre-wedding story full of easy laughter and golden light.",
    fullStory: "Full story to be written.",
    gallery: preWedPaths("vashi", 25),
  },
];
