"use client";

export default function VideosPage() {
  return (
    <div className="container mx-auto px-8 pt-12 pb-16">
      <h1 className="text-3xl font-bold mb-6">Mental Health Videos</h1>
      <ul className="grid gap-x-6 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <li key={video.url}>
            <div>
              <iframe
                src={`https://www.youtube.com/embed/${
                  video.url.split("v=")[1]
                }`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full aspect-5/3 rounded-lg"
              />
              <div className="mt-2">
                <h3 className="text-lg tracking-wider">{video.title}</h3>
                <div className="text-sm">
                  <h5>{video.author}</h5>
                  <div className="relative hover:*:visible">
                    <p className="text-nowrap overflow-hidden text-ellipsis">
                      {video.description}
                    </p>
                    <p className="text-xs invisible absolute bg-gray-300 rounded-lg text-center px-2 py-1 w-max max-w-[110%] bottom-full left-1/2 -translate-x-1/2">
                      {video.description}
                    </p>
                  </div>
                </div>
              </div>
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
    url: "https://www.youtube.com/watch?v=y6YGZfcAegw",
    description:
      "A preview of Yale's most popular course, focusing on the science of happiness and well-being.",
  },
  {
    title: "How to Make Stress Your Friend",
    author: "Kelly McGonigal",
    url: "https://www.youtube.com/watch?v=RcGyVTAoXEU",
    description:
      "Psychologist Kelly McGonigal urges us to see stress as a positive.",
  },
  {
    title: "What Is Depression?",
    author: "A Simple Explanation",
    url: "https://www.youtube.com/watch?v=z-IR48Mb3W0",
    description:
      "A straightforward explanation of depression and its symptoms.",
  },
  {
    title: "Mental Health:The Importance of Self-Care",
    author: "Mental Health Foundation",
    url: "https://www.youtube.com/watch?v=lXZiArilcKA",
    description:
      "Learn about the importance of self-care for maintaining good mental health.",
  },
  {
    title: "Anxiety: How to Calm Your Mind",
    author: "Therapy in a Nutshell",
    url: "https://www.youtube.com/watch?v=WGG7MGgptxE",
    description: "Practical tips to manage anxiety and calm your mind.",
  },
  {
    title: "Understanding OCD",
    author: "OCD UK",
    url: "https://www.youtube.com/watch?v=_YOcjtEzgHs",
    description:
      "An in-depth look at Obsessive-Compulsive Disorder and its treatment.",
  },
  {
    title: "PTSD: What You Need to Know",
    author: "Veterans Affairs",
    url: "https://www.youtube.com/watch?v=1IyHNriHeeg",
    description:
      "An overview of Post-Traumatic Stress Disorder and recovery strategies.",
  },
  {
    title: "Bipolar Disorder Explained",
    author: "Healthline",
    url: "https://www.youtube.com/watch?v=0Kg9AnH4xlU",
    description: "A clear explanation of bipolar disorder and its symptoms.",
  },
  {
    title: "ADHD in Adults",
    author: "How to ADHD",
    url: "https://www.youtube.com/watch?v=DNCDwUv_gkQ",
    description: "Insights into living with ADHD as an adult.",
  },
  {
    title: "Eating Disorders: Recovery Stories",
    author: "NEDA",
    url: "https://www.youtube.com/watch?v=4feao140sW4",
    description:
      "Personal stories and tips for recovering from eating disorders.",
  },
  {
    title: "Autism Spectrum Disorder: 10 things you should know",
    author: "The Kids Research Institute",
    url: "https://www.youtube.com/watch?v=DZXjJVrm1Jw",
    description:
      "Professor Andrew Whitehouse shares his top ten things that everyone should know about autism spectrum disorder. ",
  },
  {
    title: "Panic Attacks: What to Do",
    author: "Therapy in a Nutshell",
    url: "https://www.youtube.com/watch?v=2CQpyA485wc",
    description: "Practical advice for managing and overcoming panic attacks.",
  },
  {
    title: "Social Anxiety: Overcoming Fear",
    author: "Psych2Go",
    url: "https://www.youtube.com/watch?v=X_ZKkvhXNJk",
    description: "Strategies to overcome social anxiety and build confidence.",
  },
  {
    title: "Phobias: Facing Your Fears",
    author: "BBC Ideas",
    url: "https://www.youtube.com/watch?v=zmPzvWoE5Xk",
    description: "Understanding phobias and techniques to face them.",
  },
  {
    title: "Seasonal Affective Disorder Tips",
    author: "Doc Snipes",
    url: "https://www.youtube.com/watch?v=BAY-4NcFQ2c",
    description:
      "Tips to manage Seasonal Affective Disorder and Strategies to Address It",
  },
  {
    title: "Substance Use Recovery",
    author: "Dr SMART team",
    url: "https://www.youtube.com/watch?v=YKDwTSb1yZY",
    description: "Guidance on recovery from substance use disorders.",
  },
  {
    title: "Insomnia Solutions",
    author: "Therapy in a Nutshell",
    url: "https://www.youtube.com/watch?v=WVPtF7gr1jw",
    description: "Effective strategies to improve sleep and overcome insomnia.",
  },
  {
    title: "Hoarding Disorder Awareness",
    author: "Mayo Clinic",
    url: "https://www.youtube.com/watch?v=thIPW5odG6A",
    description:
      "An educational video on hoarding disorder and treatment options.",
  },
  {
    title: "Coping with Adjustment Disorder",
    author: "Medical Centric",
    url: "https://www.youtube.com/watch?v=EOzg7gNuTec",
    description: "Tips for coping with stress and adjustment disorder.",
  },
];
