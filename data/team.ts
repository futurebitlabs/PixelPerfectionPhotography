import { cld } from "@/lib/cloudinary";

export type TeamMember = {
  name: string;
  photo: string;
  group: "creative-heads" | "leads";
};

export const teamMembers: TeamMember[] = [
  { name: "Amara", photo: "/images/team/amara.jpg", group: "creative-heads" },
  { name: "Dev", photo: "/images/team/dev.jpg", group: "creative-heads" },
  { name: "Leela", photo: "/images/team/leela.jpg", group: "creative-heads" },
  { name: "Rian", photo: "/images/team/rian.jpg", group: "creative-heads" },
  { name: "Naina", photo: "/images/team/naina.jpg", group: "creative-heads" },
  { name: "Kabir", photo: "/images/team/kabir.jpg", group: "leads" },
  { name: "Maya", photo: "/images/team/maya.jpg", group: "leads" },
  { name: "Ira", photo: "/images/team/ira.jpg", group: "leads" },
  { name: "Zain", photo: "/images/team/zain.jpg", group: "leads" },
].map((member) => ({ ...member, photo: cld(member.photo) }));

export const pressLogos = [
  "WedMeGood",
  "WeddingWire",
  "Bridal Asia",
  "Junebug",
  "The Wed Post",
];
