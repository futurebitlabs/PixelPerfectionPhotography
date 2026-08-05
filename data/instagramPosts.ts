import { cld } from "@/lib/cloudinary";

export type InstagramPost = {
  thumbnail: string;
  postUrl: string;
};

export const instagramPosts: InstagramPost[] = [
  { thumbnail: "/images/instagram/post-01.png", postUrl: "https://www.instagram.com/reel/DYrmTQRBqRe/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { thumbnail: "/images/instagram/post-02.png", postUrl: "https://www.instagram.com/reel/DYJWWYvhK0o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { thumbnail: "/images/instagram/post-03.png", postUrl: "https://www.instagram.com/p/C8_3cbfSLvY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { thumbnail: "/images/instagram/post-04.png", postUrl: "https://www.instagram.com/p/DH2wPedSBvA/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
  { thumbnail: "/images/instagram/post-05.png", postUrl: "https://www.instagram.com/p/DH5HXSWS8fh/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" },
].map((post) => ({ ...post, thumbnail: cld(post.thumbnail) }));
