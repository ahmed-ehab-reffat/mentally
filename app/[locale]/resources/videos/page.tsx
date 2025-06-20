"use client";

import { useTranslations } from "next-intl";
import { Video } from "@/components/ui/icons";

export default function Videos() {
  const t = useTranslations("Resources.Videos");

  return (
    <div className="container mx-auto px-6 pt-12 pb-16">
      <div className="flex items-center gap-2 sm:gap-4 mb-8 text-primary">
        <Video className="min-w-8 min-h-8 w-8 h-8 sm:w-10 sm:h-10" />
        <h1 className="text-2xl sm:text-4xl font-bold">{t("title")}</h1>
      </div>
      <ul className="grid gap-x-6 gap-y-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {videos.map((video) => (
          <li key={video.url}>
            <iframe
              src={`https://www.youtube.com/embed/${video.url.split("v=")[1]}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full aspect-5/3 rounded-lg"
            />
            <div className="mt-2">
              <h3 className="text-lg tracking-wider">{video.title}</h3>
              <div className="relative text-sm">
                <h5>{video.author}</h5>
                <p
                  dir="auto"
                  className="peer text-nowrap overflow-hidden text-ellipsis"
                >
                  {video.description}
                </p>
                <p className="invisible peer-hover:visible text-xs absolute bg-gray-300 rounded-sm text-center px-2 py-1 w-max max-w-full bottom-1/2 left-1/2 -translate-x-1/2">
                  {video.description}
                </p>
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
