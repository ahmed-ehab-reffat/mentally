import { Book } from "@/components/ui/icons";
import Link from "next/link";

export default function ArticlesPage() {
  return (
    <div className="container mx-auto px-8 pt-12 pb-16">
      <div className="flex items-center gap-4 mb-8">
        <Book className="w-10 h-10 fill-primary" />
        <h1 className="text-4xl font-bold text-primary">
          Mental Health Conditions
        </h1>
      </div>
      <p className="text-xl mb-12">
        Learn more about different mental health conditions, their symptoms,
        causes, and treatments.
      </p>

      <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {conditions.map((condition) => (
          <li
            key={condition.id}
            className="h-full bg-light p-6 text-center rounded-lg shadow-xl flex flex-col justify-between"
          >
            <h3 className="text-2xl text-primary font-bold tracking-tighter mb-4">
              {condition.title}
            </h3>
            <p className="text-lg mb-6">{condition.description}</p>
            <Link
              key={condition.id}
              href={`/resources/articles/${condition.id}`}
              className="bg-white w-3/4 py-2 mx-auto text-center text-secondry rounded-md cursor-pointer hover:bg-lighter duration-200"
            >
              Learn more
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

const conditions: {
  id: string;
  title: string;
  description: string;
}[] = [
  {
    id: "depression",
    title: "Depression",
    description:
      "A mental disorder characterized by persistent sadness and loss of interest in daily activities.",
  },
  {
    id: "anxiety",
    title: "Generalized Anxiety Disorder (GAD)",
    description:
      "A disorder characterized by excessive and persistent worry about everyday situations.",
  },
  {
    id: "ocd",
    title: "Obsessive-Compulsive Disorder (OCD)",
    description:
      "A disorder involving unwanted repetitive thoughts and behaviors.",
  },
  {
    id: "ptsd",
    title: "Post-Traumatic Stress Disorder (PTSD)",
    description: "A disorder that develops after exposure to traumatic events.",
  },
  {
    id: "schizophrenia",
    title: "Schizophrenia",
    description:
      "A severe mental disorder affecting thinking, perception, and behavior.",
  },
  {
    id: "bipolar",
    title: "Bipolar Disorder",
    description:
      "A disorder characterized by extreme mood swings including mania and depression.",
  },
  {
    id: "bpd",
    title: "Borderline Personality Disorder (BPD)",
    description:
      "A disorder involving emotional instability and unstable relationships.",
  },
  {
    id: "adhd",
    title: "Attention Deficit Hyperactivity Disorder (ADHD)",
    description:
      "A neurodevelopmental disorder affecting focus and impulse control.",
  },
  {
    id: "eating-disorders",
    title: "Eating Disorders",
    description:
      "Disorders related to unhealthy eating behaviors and body image.",
  },
  {
    id: "autism",
    title: "Autism Spectrum Disorder (ASD)",
    description:
      "A developmental disorder affecting communication and social interactions.",
  },
  {
    id: "panic-disorder",
    title: "Panic Disorder",
    description: "A disorder involving sudden and repeated panic attacks.",
  },
  {
    id: "social-anxiety",
    title: "Social Anxiety Disorder",
    description:
      "A disorder characterized by intense fear of social situations.",
  },
  {
    id: "phobias",
    title: "Specific Phobias",
    description:
      "A disorder involving intense fear of specific objects or situations.",
  },
  {
    id: "dissociative-disorder",
    title: "Dissociative Identity Disorder (DID)",
    description:
      "A disorder involving a disconnection from reality and multiple identities.",
  },
  {
    id: "seasonal-affective",
    title: "Seasonal Affective Disorder (SAD)",
    description: "A type of depression related to seasonal changes.",
  },
  {
    id: "substance-use",
    title: "Substance Use Disorder",
    description:
      "A disorder involving the harmful use of substances like drugs or alcohol.",
  },
  {
    id: "insomnia",
    title: "Insomnia Disorder",
    description:
      "A disorder characterized by difficulty falling or staying asleep.",
  },
  {
    id: "pmdd",
    title: "Premenstrual Dysphoric Disorder (PMDD)",
    description: "A severe form of PMS affecting mood and physical health.",
  },
  {
    id: "hoarding",
    title: "Hoarding Disorder",
    description: "A disorder involving excessive accumulation of items.",
  },
  {
    id: "adjustment-disorder",
    title: "Adjustment Disorder",
    description:
      "A disorder caused by difficulty coping with a stressful life event.",
  },
];
