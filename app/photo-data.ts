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
    story: [
      "This picture was taken in the winter of 2019 at Zhejiang University’s Zijingang Campus, when I was an undergraduate. That winter was probably the best time I had at ZJU--I looked forward to our digital photography class almost every week. We visited public parks, nearby hills, and even other campuses to take pictures. I still relish those moments: they allowed me to experience the city and absorb its atmosphere without having to worry too much about coursework.",
      "This particular picture took us quite a while to get right. We had to find somewhere dark enough, then work out how to draw the figure so that it would still be recognisable. It took a lot of trial and error, but eventually, we got it!",
    ],
  },
  {
    slug: "a-face-made-in-one-line",
    image: "light-drawing-face.jpg",
    alt: "A glowing abstract face drawn with light against a dark night landscape",
    title: "a face made in one line",
    description:
      "A face briefly suspended in the dark, made from one wandering line of light.",
    // Add each paragraph of the story as a separate quoted line below.
    story: ["Coming soon!"],
  },
  {
    slug: "leaves-in-a-pocket-of-light",
    image: "leaves-in-the-night.jpg",
    alt: "Green leaves, pale seed pods, and fine spiderweb strands lit against a dark background",
    title: "leaves in a pocket of light",
    description:
      "A few leaves, seed pods, and strands of web caught in a narrow pool of warm light.",
    // Add each paragraph of the story as a separate quoted line below.
    story: ["Coming soon! Zhjiang Campus, Zhejiang University, 2020."],
  },
  {
    slug: "three-figures-on-a-wooden-wall",
    image: "three-figures.jpg",
    alt: "Three simple white human figure signs arranged on a wooden wall",
    title: "Man, Woman, and Non-Binary",
    description:
      "A trio of simple white figures on wood—ordinary signage made unexpectedly graphic.",
    // Add each paragraph of the story as a separate quoted line below.
    story: ["Montreal art museum, 2025"],
  },
];

export function getPhotograph(slug: string) {
  return photographs.find((photograph) => photograph.slug === slug);
}
