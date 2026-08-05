import Image from "next/image";
import { instagramPosts } from "@/data/instagramPosts";
import { studio } from "@/data/site";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        width="15"
        height="15"
        x="4.5"
        y="4.5"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
    </svg>
  );
}

function CarouselIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-7 drop-shadow-[0_1px_2px_rgba(0,0,0,0.35)]"
      fill="none"
      viewBox="0 0 24 24"
    >
      <rect
        width="12"
        height="12"
        x="7"
        y="5"
        rx="1.6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5 8.5v8A2.5 2.5 0 0 0 7.5 19h8"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg
      aria-hidden="true"
      className="size-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8 5.4v13.2c0 .8.9 1.3 1.6.8l9.5-6.6a1 1 0 0 0 0-1.6L9.6 4.6C8.9 4.1 8 4.6 8 5.4Z" />
    </svg>
  );
}

export function InstagramStrip() {
  return (
    <section className="bg-[#fbf8f3] px-4 py-12 md:px-7 md:py-16 lg:px-10">
      <div className="mx-auto max-w-[1900px]">
        <div className="mb-8 flex justify-center">
          <a
            href="https://instagram.com/pixelperfectionphotographyncr"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-center text-sm font-medium leading-none text-[#1a1a1a] outline-offset-4 transition hover:text-[#c9a876] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876] md:text-base"
            aria-label={`Follow us on Instagram ${studio.instagramHandle}`}
          >
            <InstagramIcon />
            <span>
              Follow Us on Instagram{" "}
              <strong className="font-semibold">{studio.instagramHandle}</strong>
            </span>
          </a>
        </div>
        <div className="grid grid-cols-2 gap-1 sm:grid-cols-3 md:grid-cols-5">
          {instagramPosts.map((post, index) => (
            <a
              key={`${post.postUrl}-${index}`}
              href={post.postUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative aspect-[9/13] overflow-hidden bg-[#efeae3] outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a876]"
              aria-label={`Open Instagram post ${index + 1}`}
            >
              <Image
                src={post.thumbnail}
                alt={`Instagram wedding photography thumbnail ${index + 1}`}
                fill
                sizes="(min-width: 768px) 20vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-[#1a1a1a]/0 transition group-hover:bg-[#1a1a1a]/15" />
              <span className="absolute right-3 top-3 text-white">
                <CarouselIcon />
              </span>
              {post.postUrl.includes("/reel/") ? (
                <span className="absolute inset-0 grid place-items-center text-white">
                  <PlayIcon />
                </span>
              ) : null}
                 </a>
          ))}
        </div>
      </div>
    </section>
  );
}
