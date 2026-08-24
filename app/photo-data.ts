export type Photograph = {
  slug: string;
  image: string;
  alt: string;
  title: string;
  description: string;
};

export const photographs: Photograph[] = [
  {
    slug: "haji-lane-after-rain",
    image: "haji-lane.jpg",
    alt: "A lively narrow street in Haji Lane, Singapore",
    title: "haji lane, after rain",
    description:
      "A street scene I wanted to keep: colour, quiet, and the softened light after rain.",
  },
  {
    slug: "a-blank-page-finally",
    image: "journal.jpg",
    alt: "A notebook and coffee on a quiet desk",
    title: "a blank page, finally",
    description:
      "A small pause with a notebook, a drink, and enough quiet to begin again.",
  },
  {
    slug: "drawing-with-light-after-dark",
    image: "light-drawing-figure.jpg",
    alt: "A glowing continuous-line figure drawn with light against a dark night landscape",
    title: "drawing with light, after dark",
    description:
      "A figure drawn into the night with one moving light and a long exposure.",
  },
  {
    slug: "a-face-made-in-one-line",
    image: "light-drawing-face.jpg",
    alt: "A glowing abstract face drawn with light against a dark night landscape",
    title: "a face made in one line",
    description:
      "A face briefly suspended in the dark, made from one wandering line of light.",
  },
];

export function getPhotograph(slug: string) {
  return photographs.find((photograph) => photograph.slug === slug);
}
