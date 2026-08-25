export type Photograph = {
  slug: string;
  image: string;
  alt: string;
  title: string;
  description: string;
  story: string[];
};

export const photographs: Photograph[] = [
  {
    slug: "drawing-with-light-after-dark",
    image: "light-drawing-figure.jpg",
    alt: "A glowing continuous-line figure drawn with light against a dark night landscape",
    title: "A woman's figure drawn with light after dark",
    description:
      "A figure drawn into the night with one moving light and a long exposure.",
    // Add each paragraph of the story as a separate quoted line below.
    story: [],
  },
  {
    slug: "a-face-made-in-one-line",
    image: "light-drawing-face.jpg",
    alt: "A glowing abstract face drawn with light against a dark night landscape",
    title: "a face made in one line",
    description:
      "A face briefly suspended in the dark, made from one wandering line of light.",
    // Add each paragraph of the story as a separate quoted line below.
    story: [],
  },
  {
    slug: "leaves-in-a-pocket-of-light",
    image: "leaves-in-the-night.jpg",
    alt: "Green leaves, pale seed pods, and fine spiderweb strands lit against a dark background",
    title: "leaves in a pocket of light",
    description:
      "A few leaves, seed pods, and strands of web caught in a narrow pool of warm light.",
    // Add each paragraph of the story as a separate quoted line below.
    story: [],
  },
  {
    slug: "three-figures-on-a-wooden-wall",
    image: "three-figures.jpg",
    alt: "Three simple white human figure signs arranged on a wooden wall",
    title: "three figures on a wooden wall",
    description:
      "A trio of simple white figures on wood—ordinary signage made unexpectedly graphic.",
    // Add each paragraph of the story as a separate quoted line below.
    story: [],
  },
];

export function getPhotograph(slug: string) {
  return photographs.find((photograph) => photograph.slug === slug);
}
