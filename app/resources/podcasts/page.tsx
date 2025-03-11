export default function PodcastsPage() {
  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-6">Mental Health Podcasts</h1>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {podcasts.map((podcast) => (
          <li key={podcast.url}>
            <h3>{podcast.title}</h3>
            <p className="mb-4">{podcast.description}</p>
            <button type="button">
              <a href={podcast.url} className="inline-flex items-center">
                Listen
              </a>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const podcasts: {
  title: string;
  url: string;
  description: string;
}[] = [
  {
    title: "The Mental Illness Happy Hour",
    url: "https://www.mentalpod.com/",
    description:
      "A weekly online podcast where comedians, artists, and regular folks share their experiences with mental illness.",
  },
  {
    title: "Therapy Chat Podcast",
    url: "https://www.therapychatpodcast.com/",
    description:
      "Conversations about trauma, attachment, and mindfulness with Laura Reagan, LCSW-C.",
  },
  {
    title: "The Happiness Lab with Dr. Laurie Santos",
    url: "https://www.happinesslab.fm/",
    description:
      "You might think you know what it takes to lead a happier life… more money, a better job, or Instagram-worthy vacations. You're dead wrong.",
  },
  {
    title: "Mindful Muslim Podcast",
    url: "https://www.mindful-muslim.com/podcast",
    description:
      "A podcast that aims to explore and discuss mental health and well-being from an Islamic perspective.",
  },
  {
    title: "Feel Better, Live More with Dr. Rangan Chatterjee",
    url: "https://drchatterjee.com/podcast/",
    description:
      "A podcast that aims to inspire, empower and transform the way we feel.",
  },
  {
    title: "The Anxiety Coaches Podcast",
    url: "https://theanxietycoachespodcast.com/",
    description:
      "A podcast for anyone struggling with anxiety, panic attacks, stress, and depression.",
  },
  {
    title: "The Trauma Therapist Podcast",
    url: "https://thetraumatherapistproject.com/podcast/",
    description:
      "A podcast about the human spirit. Hosted by Guy Macpherson, PhD.",
  },
  {
    title: "The Mental Health Foundation Podcast",
    url: "https://www.mentalhealth.org.uk/podcasts",
    description:
      "A series of podcasts from the Mental Health Foundation exploring mental health issues.",
  },
];
