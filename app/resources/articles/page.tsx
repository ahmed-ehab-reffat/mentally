"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const conditions = [
  {
    id: "depression",
    title: "Depression",
    description: "A mental disorder characterized by persistent sadness and loss of interest in daily activities.",
  },
  {
    id: "anxiety",
    title: "Generalized Anxiety Disorder (GAD)",
    description: "A disorder characterized by excessive and persistent worry about everyday situations.",
  },
  {
    id: "ocd",
    title: "Obsessive-Compulsive Disorder (OCD)",
    description: "A disorder involving unwanted repetitive thoughts and behaviors.",
  },
  {
    id: "ptsd",
    title: "Post-Traumatic Stress Disorder (PTSD)",
    description: "A disorder that develops after exposure to traumatic events.",
  },
  {
    id: "schizophrenia",
    title: "Schizophrenia",
    description: "A severe mental disorder affecting thinking, perception, and behavior.",
  },
  {
    id: "bipolar",
    title: "Bipolar Disorder",
    description: "A disorder characterized by extreme mood swings including mania and depression.",
  },
  {
    id: "bpd",
    title: "Borderline Personality Disorder (BPD)",
    description: "A disorder involving emotional instability and unstable relationships.",
  },
  {
    id: "adhd",
    title: "Attention Deficit Hyperactivity Disorder (ADHD)",
    description: "A neurodevelopmental disorder affecting focus and impulse control.",
  },
  {
    id: "eating-disorders",
    title: "Eating Disorders",
    description: "Disorders related to unhealthy eating behaviors and body image.",
  },
  {
    id: "autism",
    title: "Autism Spectrum Disorder (ASD)",
    description: "A developmental disorder affecting communication and social interactions.",
  },
  {
    id: "panic-disorder",
    title: "Panic Disorder",
    description: "A disorder involving sudden and repeated panic attacks.",
  },
  {
    id: "social-anxiety",
    title: "Social Anxiety Disorder",
    description: "A disorder characterized by intense fear of social situations.",
  },
  {
    id: "phobias",
    title: "Specific Phobias",
    description: "A disorder involving intense fear of specific objects or situations.",
  },
  {
    id: "dissociative-disorder",
    title: "Dissociative Identity Disorder (DID)",
    description: "A disorder involving a disconnection from reality and multiple identities.",
  },
  {
    id: "seasonal-affective",
    title: "Seasonal Affective Disorder (SAD)",
    description: "A type of depression related to seasonal changes.",
  },
  {
    id: "substance-use",
    title: "Substance Use Disorder",
    description: "A disorder involving the harmful use of substances like drugs or alcohol.",
  },
  {
    id: "insomnia",
    title: "Insomnia Disorder",
    description: "A disorder characterized by difficulty falling or staying asleep.",
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
    description: "A disorder caused by difficulty coping with a stressful life event.",
  },
]

export default function ArticlesPage() {
  return (
    <div className="container py-8">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Mental Health Conditions</h1>
          <p className="text-muted-foreground mt-2">
            Learn more about different mental health conditions, their symptoms, causes, and treatments.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {conditions.map((condition) => (
            <Link key={condition.id} href={`/resources/articles/${condition.id}`}>
              <Card className="h-full transition-colors hover:bg-muted/50">
                <CardHeader>
                  <CardTitle>{condition.title}</CardTitle>
                  <CardDescription>{condition.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm text-primary">
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}