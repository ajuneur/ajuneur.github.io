export type Post = {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
  description: string;
  tag: string;
  note: string;
  body: Array<string | null>;
};

export const posts: Post[] = [
  {
    slug: "the-chapel-and-the-cliff",
    date: "24 Aug 2026",
    title: "The chapel and the cliff",
    excerpt:
      "Two boys walk toward a chapel in the mild Barcelona spring. By noon, love has curdled into fear.",
    description:
      "Two boys walk toward a chapel in a spring-lit city, where tenderness is transformed by shame into something fatal.",
    tag: "dream",
    note: "one interesting dream, probably arising from my recent plans for Barcelona.",
    body: [
      "Far away from the chapel sat two young boys, grinning at the sunrise that bathed the city in mild, warm spring light—light that would turn into an oppressive presence, thickening the air at noon. They were not grown-ups, just boys of about sixteen, brimming with curiosity about the world. I would call them Alex and Pablo, though in my dream no explicit names were called, as far as I could remember.",
      "Alex yawned all of a sudden because of the insomnia that had plagued him since the semester began. This was his first semester at the school, where he had met Pablo—the scrawny boy sitting right next to him on the bench, sipping the condensed bitterness that would later revive them both.",
      "“Let’s go to the church after you finish your espresso,” said Pablo. “It’s going to be a long walk from here.”",
      "“Alright, I’m done.” Alex set his cup back on the saucer. “Don’t worry. It’s a good chance to enjoy the spring when we walk uphill to the church. Let’s go.”",
      "The temperature was comfortable at around nine or ten in the morning, resonating with the revival of flowers, grasslands, birds, and all the living creatures in the city. The road meandered towards the chapel, detached from the crowd and noise in the city—and in people’s hearts.",
      "They relished befriending each other, even a little bit romantically attached—at least that was my impression. They interacted naturally and stayed very close, the warm sunlight brightening skin so young that no wrinkles appeared when either of them laughed. They held hands and walked freely across the forest, the farms, and the barns that smelt a bit unpleasant.",
      null,
      "The chapel appeared near noon, pale and quiet at the top of the hill. Inside, the air was colder, smelling of old stone, candle wax, and something sweet burning near the altar. They sat in the last pew. Pablo rested his hand beside Alex’s, close enough for their little fingers to touch.",
      "A painted saint watched from above. Under that unmoving gaze, Alex suddenly remembered every warning he had ever heard about boys like them—words about shame, punishment, and love that was not supposed to bear its own name. The morning in the forest had felt innocent. Here, inside the chapel, he began to call it sin.",
      "Pablo leaned closer. “What’s wrong?”",
      "“Nothing,” Alex said, pulling his hand away.",
      "But the thought had already rooted itself inside him: if Pablo were gone, perhaps the forbidden part of Alex would disappear with him. It was a frightened, senseless thought, yet the chapel seemed to make it holy. Pablo rose and walked towards the altar, trusting Alex to follow. Alex did.",
      null,
      "The chapel floor suddenly collapsed into a cliff of formidable depth, beyond the eye’s measure. As Pablo stepped to the brink of that cliff, Alex pushed him into the chasm without hesitation. When he hit the ground, Pablo stared up at Alex in deep helplessness. He had wanted to protest and raised his hand high, but lost every bit of his energy. His eyes closed. His breath stopped.",
      "Alex left and knelt to the sky. The clouds were gone.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
