import Button from "@/components/ui/button";
import { Headphones } from "@/components/ui/icons";

export default function PodcastsPage() {
  return (
    <div className="container mx-auto px-8 pt-12 pb-16">
      <div className="flex items-center gap-4 mb-8">
        <Headphones className="w-10 h-10 fill-primary" />
        <h1 className="text-4xl font-bold text-primary">
          Mental Health Podcasts
        </h1>
      </div>
      <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {podcasts.map((podcast) => (
          <li
            key={podcast.url}
            className="h-full bg-light p-6 text-center rounded-lg shadow-xl flex flex-col justify-between"
          >
            <h3 className="text-2xl text-primary font-bold tracking-tighter mb-4">
              {podcast.title}
            </h3>
            <p className="text-lg mb-6">{podcast.description}</p>

            <a href={podcast.url}>
              <Button type="button" className="w-3/4">
                Listen
              </Button>
            </a>
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
    url: "https://podcasts.apple.com/gb/podcast/mindful-muslim-mental-health/id1387835969",
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
    url: "https://www.mentalhealth.org.uk/explore-mental-health/podcasts",
    description:
      "A series of podcasts from the Mental Health Foundation exploring mental health issues.",
  },
];
