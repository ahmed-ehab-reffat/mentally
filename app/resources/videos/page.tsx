export default function VideosPage() {
  return (
    <div className="container mx-auto px-8 py-16">
      <h1 className="text-3xl font-bold mb-6">Mental Health Videos</h1>
      <ul className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {videos.map((video) => (
          <li key={video.url}>
            <div>
              <h3>{video.title}</h3>
              <h4>{video.author}</h4>
            </div>
            <div>
              <div>
                <iframe
                  src={`https://www.youtube.com/embed/${
                    video.url.split("v=")[1]
                  }`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-md"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {video.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const videos: {
  title: string;
  author: string;
  url: string;
  description: string;
}[] = [
  {
    title: "The Power of Vulnerability",
    author: "Brené Brown",
    url: "https://www.youtube.com/watch?v=iCvmsMzlF7o",
    description:
      "Brené Brown studies human connection -- our ability to empathize, belong, love.",
  },
  {
    title: "The Science of Well-Being",
    author: "Yale University",
    url: "https://www.youtube.com/watch?v=93LFNtcR8X0",
    description:
      "A preview of Yale's most popular course, focusing on the science of happiness and well-being.",
  },
  {
    title: "How to Make Stress Your Friend",
    author: "Kelly McGonigal",
    url: "https://www.youtube.com/watch?v=RcGyVTAoX0U",
    description:
      "Psychologist Kelly McGonigal urges us to see stress as a positive.",
  },
  {
    title: "What Is Depression?",
    author: "A Simple Explanation",
    url: "https://youtu.be/z-IR48Mb3W0?si=hYGTBoeXjX6L4mHR",
    description:
      "A straightforward explanation of depression and its symptoms.",
  },
  {
    title: "Mental Health: The Importance of Self-Care",
    author: "Mental Health Foundation",
    url: "https://www.youtube.com/watch?v=1aAoG3E5CmQ",
    description:
      "Learn about the importance of self-care for maintaining good mental health.",
  },
  {
    title: "Anxiety: How to Calm Your Mind",
    author: "Therapy in a Nutshell",
    url: "https://www.youtube.com/watch?v=5N8eF2o9s0Q",
    description: "Practical tips to manage anxiety and calm your mind.",
  },
  {
    title: "Understanding OCD",
    author: "OCD UK",
    url: "https://www.youtube.com/watch?v=Z7p1jK4hLfE",
    description:
      "An in-depth look at Obsessive-Compulsive Disorder and its treatment.",
  },
  {
    title: "PTSD: What You Need to Know",
    author: "Veterans Affairs",
    url: "https://www.youtube.com/watch?v=6qJ5bQwF5Zw",
    description:
      "An overview of Post-Traumatic Stress Disorder and recovery strategies.",
  },
  {
    title: "Bipolar Disorder Explained",
    author: "Healthline",
    url: "https://www.youtube.com/watch?v=9J0V5x6kQvI",
    description: "A clear explanation of bipolar disorder and its symptoms.",
  },
  {
    title: "ADHD in Adults",
    author: "How to ADHD",
    url: "https://www.youtube.com/watch?v=yvOaZ8aY6G0",
    description: "Insights into living with ADHD as an adult.",
  },
  {
    title: "Eating Disorders: Recovery Stories",
    author: "NEDA",
    url: "https://www.youtube.com/watch?v=L8YEE2O5I7w",
    description:
      "Personal stories and tips for recovering from eating disorders.",
  },
  {
    title: "Autism Spectrum Disorder Basics",
    author: "Autism Speaks",
    url: "https://www.youtube.com/watch?v=2W85PluCMAc",
    description:
      "An introduction to Autism Spectrum Disorder and support options.",
  },
  {
    title: "Panic Attacks: What to Do",
    author: "Dr. Gabor Maté",
    url: "https://www.youtube.com/watch?v=4T8t-YX3PqM",
    description: "Practical advice for managing and overcoming panic attacks.",
  },
  {
    title: "Social Anxiety: Overcoming Fear",
    author: "Psych2Go",
    url: "https://www.youtube.com/watch?v=2k6oB3vI0I0",
    description: "Strategies to overcome social anxiety and build confidence.",
  },
  {
    title: "Phobias: Facing Your Fears",
    author: "BBC Ideas",
    url: "https://www.youtube.com/watch?v=5J7O8o7a0fk",
    description: "Understanding phobias and techniques to face them.",
  },
  {
    title: "Seasonal Affective Disorder Tips",
    author: "Verywell Mind",
    url: "https://www.youtube.com/watch?v=3kC7xL7jYc4",
    description:
      "Tips to manage Seasonal Affective Disorder during winter months.",
  },
  {
    title: "Substance Use Recovery",
    author: "SAMHSA",
    url: "https://www.youtube.com/watch?v=9f5aE9x1j6Y",
    description: "Guidance on recovery from substance use disorders.",
  },
  {
    title: "Insomnia Solutions",
    author: "Sleep Foundation",
    url: "https://www.youtube.com/watch?v=8W7yR8hF1aM",
    description: "Effective strategies to improve sleep and overcome insomnia.",
  },
  {
    title: "Hoarding Disorder Awareness",
    author: "Mayo Clinic",
    url: "https://www.youtube.com/watch?v=7T7qIu2o7mA",
    description:
      "An educational video on hoarding disorder and treatment options.",
  },
  {
    title: "Coping with Adjustment Disorder",
    author: "PsychCentral",
    url: "https://www.youtube.com/watch?v=6o7uR5uK2kI",
    description: "Tips for coping with stress and adjustment disorder.",
  },
];
