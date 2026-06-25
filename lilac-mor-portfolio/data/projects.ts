export type Project = {
  slug: string;
  title: string;
  kicker: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  secondaryImage: string;
  boardImage: string;
  color: string;
  textColor: "dark" | "light";
  scope: string[];
  insight: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "melona-israel-launch",
    title: "Melona",
    kicker: "Korean icon, local appetite",
    category: "Packaging Campaign",
    description:
      "A bright launch campaign adapting Melona's unmistakable Korean identity for its first introduction to Israeli consumers.",
    longDescription:
      "The visual system keeps the playful confidence of the original brand while giving a new audience an immediate read on flavor, freshness, and fun. Product-first compositions and tropical cues turn a simple pack shot into a miniature world.",
    image: "/images/melona-campaign.webp",
    secondaryImage: "/images/melona-pops.webp",
    boardImage: "/images/board-5.webp",
    color: "#cfe85c",
    textColor: "dark",
    scope: ["Campaign art direction", "Localization", "Product composition", "Digital advertising"],
    insight:
      "A beloved import should feel exciting and new without losing the visual memory that makes the product recognizable.",
    outcome:
      "A vivid launch language that connects Korean brand charm with a warm, immediately legible local-market story.",
  },
  {
    slug: "yerim-works",
    title: "Yerim Works",
    kicker: "Desert ritual, bottled",
    category: "Packaging & Identity",
    description:
      "A premium black-and-gold packaging system for an Israeli jojoba oil introduced to Korean skincare consumers.",
    longDescription:
      "Ornamental linework, a restrained palette, and bilingual hierarchy frame the oil as both natural and luxurious. The identity bridges the warmth of an Israeli desert source with the precision and trust expected in Korean beauty.",
    image: "/images/yerim-identity.webp",
    secondaryImage: "/images/yerim-packaging.webp",
    boardImage: "/images/board-6.webp",
    color: "#28241f",
    textColor: "light",
    scope: ["Brand identity", "Packaging design", "Bilingual typography", "Print production"],
    insight:
      "Premium skincare packaging needs to communicate origin, efficacy, and trust before the customer reads the fine print.",
    outcome:
      "A flexible identity that feels refined on shelf while keeping the product's natural provenance at its center.",
  },
  {
    slug: "new-media-conference",
    title: "DigitZahal",
    kicker: "A conference in motion",
    category: "Event Branding",
    description:
      "Branding, illustration, and key visuals for the IDF's first New Media Conference.",
    longDescription:
      "The system combines digital gradients with figures in motion to express the speed, curiosity, and connection of online communication. The visual language moves naturally between posters, social assets, and stage-facing materials.",
    image: "/images/new-media-poster.webp",
    secondaryImage: "/images/new-media-illustration.webp",
    boardImage: "/images/board-3.webp",
    color: "#f09aba",
    textColor: "dark",
    scope: ["Logo design", "Event identity", "Illustration", "Poster design"],
    insight:
      "A first-of-its-kind event needed an identity that felt official enough to trust and energetic enough to signal change.",
    outcome:
      "A colorful, modular conference system with a strong hero poster and a recognizable illustration language.",
  },
  {
    slug: "uniform-youtube-series",
    title: "On Uniform",
    kicker: "Instruction with character",
    category: "Illustration System",
    description:
      "An approachable character and visual asset library for an educational YouTube series about presentation and uniform standards.",
    longDescription:
      "The illustrated character turns formal guidance into a friendly, repeatable visual system. Poses, props, environments, and screen graphics create a cohesive toolkit for video episodes and channel materials.",
    image: "/images/soldier-character.webp",
    secondaryImage: "/images/board-4.webp",
    boardImage: "/images/board-4.webp",
    color: "#d8c68b",
    textColor: "dark",
    scope: ["Character design", "Illustration", "YouTube assets", "Visual system"],
    insight:
      "Instructional content works better when viewers can follow a consistent character rather than a series of disconnected diagrams.",
    outcome:
      "A warm, practical illustration library that makes formal information easier to understand and remember.",
  },
  {
    slug: "oobs",
    title: "OOBS",
    kicker: "Out of bounds by design",
    category: "Tech Brand Identity",
    description:
      "A high-energy identity for a Korean technology startup built around speed, innovation, and forward motion.",
    longDescription:
      "A lightning-cut monogram and electric gradient give the brand an immediate sense of momentum. The mark is designed to stay recognizable in both a vivid digital treatment and a compact one-color form.",
    image: "/images/oobs-system.webp",
    secondaryImage: "/images/board-7.webp",
    boardImage: "/images/board-7.webp",
    color: "#090725",
    textColor: "light",
    scope: ["Naming support", "Logo design", "Color system", "Brand direction"],
    insight:
      "A young technology company needs a mark with enough movement to feel ambitious and enough structure to feel credible.",
    outcome:
      "A concise, energetic identity that scales from app icon to presentation deck without losing its edge.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
