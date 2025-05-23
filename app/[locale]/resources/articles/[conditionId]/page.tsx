import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@/components/ui/icons";
import Card from "@/components/ui/card";
import Section from "./section";

type ConditionProps = {
  params: Promise<{
    conditionId: string;
  }>;
};

export default async function ConditionPage({ params }: ConditionProps) {
  const { conditionId } = await params;
  const condition = conditionsData.find((obj) => obj.id === conditionId);

  if (!condition) {
    notFound();
  }

  return (
    <div className="container mx-auto px-8 pt-8 pb-16">
      <Link
        href="/resources/articles"
        className="flex items-center w-fit hover:text-primary hover:*:fill-primary"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        All Articles
      </Link>

      <h1 className="text-5xl font-bold text-primary py-8">
        {condition.title}
      </h1>
      <Card className="space-y-10 marker:text-primary  scroll-smooth">
        <section id="contents">
          <h2 className="text-primary text-3xl font-bold mb-4">
            Table Of Contents
          </h2>
          <ul className="list-disc ml-10 text-xl space-y-2 *:w-fit *:hover:text-primary *:hover:underline">
            <li key="definition">
              <a href="#definition">Definition</a>
            </li>
            <li key="symptoms">
              <a href="#symptoms">Symptoms</a>
            </li>
            <li key="causes">
              <a href="#causes">Causes</a>
            </li>
            <li key="treatment">
              <a href="#treatment">Treatment</a>
            </li>
          </ul>
        </section>

        <section id="definition">
          <h2 className="text-primary text-3xl font-bold mb-4">
            What is {condition.title}?
          </h2>
          <p className="text-xl ml-1">{condition.definition}</p>
        </section>

        <Section title={"symptoms"} iterable={condition.symptoms} />
        <Section title={"causes"} iterable={condition.causes} />
        <Section title={"treatment"} iterable={condition.treatment} />
      </Card>
    </div>
  );
}

const conditionsData = [
  {
    id: "depression",
    title: "Depression",
    definition:
      "A mental disorder characterized by persistent sadness, loss of interest in daily activities, and low energy.",
    symptoms: [
      "Persistent sadness or emptiness",
      "Loss of interest in daily activities",
      "Changes in appetite and sleep patterns",
      "Difficulty concentrating and making decisions",
      "Feelings of worthlessness or guilt",
      "Suicidal thoughts in severe cases",
    ],
    causes: [
      "Genetic factors",
      "Chemical imbalances in the brain (e.g., serotonin deficiency)",
      "Traumatic experiences",
      "Hormonal imbalances",
    ],
    treatment: [
      "Medication (antidepressants)",
      "Cognitive Behavioral Therapy (CBT)",
      "Exercise and relaxation techniques",
    ],
  },
  {
    id: "anxiety",
    title: "Generalized Anxiety Disorder (GAD)",
    definition:
      "A mental disorder characterized by excessive and persistent worry about everyday situations without a clear reason.",
    symptoms: [
      "Excessive worry and tension",
      "Restlessness and irritability",
      "Difficulty sleeping",
      "Headaches and muscle tension",
      "Increased heart rate",
    ],
    causes: [
      "Genetic predisposition",
      "Brain chemistry imbalances",
      "Stressful life events",
      "Childhood trauma",
    ],
    treatment: [
      "Medication (anti-anxiety drugs)",
      "Psychotherapy (CBT)",
      "Relaxation techniques such as meditation and yoga",
    ],
  },
  {
    id: "ocd",
    title: "Obsessive-Compulsive Disorder (OCD)",
    definition:
      "A disorder characterized by unwanted repetitive thoughts (obsessions) and repetitive behaviors (compulsions).",
    symptoms: [
      "Excessive handwashing or cleaning",
      "The need for extreme order and organization",
      "Disturbing intrusive thoughts",
      "Repetitive counting or checking",
    ],
    causes: [
      "Genetic factors",
      "Neurotransmitter imbalances",
      "Environmental influences",
    ],
    treatment: [
      "Cognitive Behavioral Therapy (Exposure and Response Prevention - ERP)",
      "Antidepressants (e.g., SSRIs)",
    ],
  },
  {
    id: "ptsd",
    title: "Post-Traumatic Stress Disorder (PTSD)",
    definition:
      "A disorder that develops after exposure to a traumatic event such as war, assault, or accidents.",
    symptoms: [
      "Nightmares and flashbacks",
      "Avoidance of trauma-related places or people",
      "Anxiety and depression",
      "Hypervigilance and strong reactions to triggers",
    ],
    causes: [
      "Exposure to traumatic events",
      "Lack of social support",
      "Genetic vulnerability",
    ],
    treatment: [
      "Cognitive Behavioral Therapy (CBT)",
      "Exposure therapy",
      "Antidepressants",
    ],
  },
  {
    id: "schizophrenia",
    title: "Schizophrenia",
    definition:
      "A severe mental disorder that affects thinking, perception, and behavior.",
    symptoms: [
      "Auditory or visual hallucinations",
      "Delusions (e.g., paranoia)",
      "Disorganized thinking",
      "Social withdrawal",
    ],
    causes: [
      "Genetic predisposition",
      "Brain chemistry imbalances",
      "Severe life stressors",
    ],
    treatment: ["Antipsychotic medication", "Behavioral and social therapy"],
  },
  {
    id: "bipolar",
    title: "Bipolar Disorder",
    definition:
      "A mental disorder characterized by extreme mood swings, including episodes of mania and depression.",
    symptoms: [
      "Manic episodes (high energy, reduced sleep, excessive confidence)",
      "Depressive episodes (sadness, fatigue, suicidal thoughts)",
    ],
    causes: [
      "Genetic predisposition",
      "Chemical imbalances in the brain",
      "Psychological stress",
    ],
    treatment: [
      "Mood stabilizers (e.g., lithium)",
      "Antidepressants",
      "Psychotherapy",
    ],
  },
  {
    id: "bpd",
    title: "Borderline Personality Disorder (BPD)",
    definition:
      "A personality disorder characterized by emotional instability, unstable relationships, and impulsive behavior.",
    symptoms: [
      "Rapid mood swings",
      "Unstable relationships",
      "Fear of abandonment",
      "Impulsive behaviors (e.g., reckless spending, self-harm)",
    ],
    causes: ["Childhood trauma", "Genetic factors", "Brain abnormalities"],
    treatment: ["Dialectical Behavior Therapy (DBT)", "Psychotherapy"],
  },
  {
    id: "adhd",
    title: "Attention Deficit Hyperactivity Disorder (ADHD)",
    definition:
      "A neurodevelopmental disorder affecting focus, impulse control, and hyperactivity.",
    symptoms: [
      "Easily distracted",
      "Difficulty sitting still",
      "Excessive talking or movement",
      "Trouble finishing tasks",
    ],
    causes: ["Genetic factors", "Neurotransmitter imbalances"],
    treatment: ["Medication (Ritalin, Adderall)", "Behavioral therapy"],
  },
  {
    id: "eating-disorders",
    title: "Eating Disorders",
    definition:
      "Disorders related to unhealthy eating behaviors, such as anorexia nervosa and bulimia nervosa.",
    symptoms: [
      "Severe weight loss (anorexia)",
      "Binge eating followed by purging (bulimia)",
      "Loss of control over eating habits",
    ],
    causes: [
      "Societal pressure and body image expectations",
      "Anxiety and depression",
    ],
    treatment: ["Psychotherapy", "Medication when needed"],
  },
  {
    id: "autism",
    title: "Autism Spectrum Disorder (ASD)",
    definition:
      "A developmental disorder affecting communication and social interactions.",
    symptoms: [
      "Difficulty with eye contact and social communication",
      "Repetitive behaviors and restricted interests",
      "Sensory sensitivities",
    ],
    causes: ["Genetic predisposition", "Brain development abnormalities"],
    treatment: ["Behavioral and educational therapy", "Family support"],
  },
  {
    id: "panic-disorder",
    title: "Panic Disorder",
    definition: "A disorder involving sudden and repeated panic attacks.",
    symptoms: [
      "Sudden intense fear",
      "Chest pain and shortness of breath",
      "Dizziness or faintness",
      "Fear of losing control",
    ],
    causes: [
      "Genetic factors",
      "Stressful events",
      "Brain chemistry imbalances",
    ],
    treatment: ["CBT", "Anti-anxiety medication", "Breathing exercises"],
  },
  {
    id: "social-anxiety",
    title: "Social Anxiety Disorder",
    definition:
      "A disorder characterized by intense fear of social situations.",
    symptoms: [
      "Fear of judgment or embarrassment",
      "Avoidance of social interaction",
      "Physical symptoms like sweating or blushing",
    ],
    causes: [
      "Genetic predisposition",
      "Past social trauma",
      "Overactive amygdala",
    ],
    treatment: ["CBT", "Exposure therapy", "SSRIs"],
  },
  {
    id: "phobias",
    title: "Specific Phobias",
    definition:
      "A disorder involving intense fear of specific objects or situations.",
    symptoms: [
      "Immediate fear response",
      "Avoidance of feared object/situation",
      "Physical symptoms like trembling",
    ],
    causes: ["Traumatic experiences", "Learned behavior", "Genetic factors"],
    treatment: ["Exposure therapy", "CBT", "Relaxation techniques"],
  },
  {
    id: "dissociative-disorder",
    title: "Dissociative Identity Disorder (DID)",
    definition:
      "A disorder involving a disconnection from reality and multiple identities.",
    symptoms: [
      "Presence of multiple identities",
      "Memory gaps",
      "Detachment from self",
    ],
    causes: ["Severe childhood trauma", "Brain coping mechanism"],
    treatment: ["Psychotherapy", "Trauma-focused therapy"],
  },
  {
    id: "seasonal-affective",
    title: "Seasonal Affective Disorder (SAD)",
    definition: "A type of depression related to seasonal changes.",
    symptoms: [
      "Low energy in winter months",
      "Oversleeping",
      "Cravings for carbohydrates",
    ],
    causes: ["Reduced sunlight exposure", "Serotonin imbalance"],
    treatment: ["Light therapy", "Antidepressants", "CBT"],
  },
  {
    id: "substance-use",
    title: "Substance Use Disorder",
    definition:
      "A disorder involving the harmful use of substances like drugs or alcohol.",
    symptoms: [
      "Loss of control over substance use",
      "Tolerance and withdrawal",
      "Neglect of responsibilities",
    ],
    causes: ["Genetic factors", "Peer pressure", "Mental health issues"],
    treatment: ["Detox programs", "Counseling", "Support groups"],
  },
  {
    id: "insomnia",
    title: "Insomnia Disorder",
    definition:
      "A disorder characterized by difficulty falling or staying asleep.",
    symptoms: [
      "Difficulty falling asleep",
      "Waking up frequently",
      "Daytime fatigue",
    ],
    causes: ["Stress", "Medical conditions", "Poor sleep habits"],
    treatment: [
      "Cognitive Behavioral Therapy for Insomnia (CBT-I)",
      "Sleep hygiene",
      "Medication",
    ],
  },
  {
    id: "pmdd",
    title: "Premenstrual Dysphoric Disorder (PMDD)",
    definition: "A severe form of PMS affecting mood and physical health.",
    symptoms: [
      "Severe irritability",
      "Depression before menstruation",
      "Physical symptoms like bloating",
    ],
    causes: ["Hormonal fluctuations", "Serotonin sensitivity"],
    treatment: [
      "Antidepressants (SSRIs)",
      "Hormonal therapy",
      "Lifestyle changes",
    ],
  },
  {
    id: "hoarding",
    title: "Hoarding Disorder",
    definition: "A disorder involving excessive accumulation of items.",
    symptoms: [
      "Inability to discard items",
      "Cluttered living spaces",
      "Distress at the thought of throwing things away",
    ],
    causes: ["Trauma", "Genetic predisposition", "OCD link"],
    treatment: ["CBT", "Organization therapy", "Support groups"],
  },
  {
    id: "adjustment-disorder",
    title: "Adjustment Disorder",
    definition:
      "A disorder caused by difficulty coping with a stressful life event.",
    symptoms: [
      "Emotional distress",
      "Difficulty functioning",
      "Physical complaints",
    ],
    causes: ["Major life changes (e.g., divorce, job loss)", "Ongoing stress"],
    treatment: ["Psychotherapy", "Stress management", "Short-term medication"],
  },
];
