import { cldVideo, cldVideoPoster } from "@/lib/cloudinary";

export type WeddingFilm = {
  slug: string;
  coupleNames: string;
  location: string;
  videoUrl: string;
  posterUrl: string;
};

function film(slug: string, coupleNames: string): WeddingFilm {
  const path = `/videos/${slug}/${slug}.mp4`;
  return {
    slug,
    coupleNames,
    location: "Location TBD",
    videoUrl: cldVideo(path),
    posterUrl: cldVideoPoster(path),
  };
}

// TODO: locations are placeholder — replace with real copy from the studio.
export const weddingFilms: WeddingFilm[] = [
  film("durgesh-novika", "Durgesh & Novika"),
  film("pardeep-pragnya", "Pardeep & Pragnya"),
  film("divya-shivangi", "Divya & Shivangi"),
  film("kunal-akshita", "Kunal & Akshita"),
  film("mohit-kavita", "Mohit & Kavita"),
  film("mohit-manisha", "Mohit & Manisha"),
  film("paramveer-vaishali", "Paramveer & Vaishali"),
  film("salil-krittika", "Salil & Krittika"),
];
