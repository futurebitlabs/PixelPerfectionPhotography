import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import {FaLocationDot} from "react-icons/fa6";
import { IconType } from "react-icons";

export const navLinks = [
  { label: "Welcome", href: "/" },
  // { label: "Our Story", href: "/about-us" },
  { label: "Portfolio", href: "/photo" },
  { label: "Wedding films", href: "/videos" },
  // { label: "Client's praise", href: "/testimonials" },
  { label: "Wedding stories", href: "/blogs" },
  { label: "Services", href: "/services" },
  { label: "Get in touch", href: "/contact-us" },
] as const;


// Helper so the message stays readable and properly URL-encoded
const buildWhatsAppLink = (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


export const studio = {
  name: "Pixel Perfection Photography",
  wordmark: "Pixel Perfection Photography",
  instagramHandle: "@pixelperfectionphotographyncr",
  email: "hello@pixelperfection.example",
  phone: "+919012838977",
  whatsappNumber: "919012838977",
  mapsLink: "https://share.google/lGkdSk1tQs0gL7ZJt",
};

export type SocialLink ={
  label: string;
  href: string;
  icon: IconType;
};


export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/pixelperfectionphotographyncr", icon: FaInstagram },
  { label: "Facebook", href: "https://www.facebook.com/share/1ETFnGScG7/?mibextid=wwXIfr", icon: FaFacebookF },
  { label: "YouTube", href: "https://www.youtube.com/@tvmproduction2467", icon: FaYoutube },
  {
    label: "WhatsApp",
    href: buildWhatsAppLink(
      studio.whatsappNumber,
      "Hi! I'd love to know more about your wedding photography packages."
    ),
    icon: FaWhatsapp,
  },
  { label: "Find us", href: studio.mapsLink, icon: FaLocationDot },
  //{ label: "Vimeo", href: "https://vimeo.com", short: "Vm" },
] as const;