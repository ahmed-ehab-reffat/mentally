import Link from "next/link";

import {
  Brain,
  Users,
  Lightbulb,
  ClipboardQuestion,
  ArrowRight,
} from "@/components/ui/icons";
import Card from "@/components/ui/card";

export default function Features() {
  return (
    <section id="features">
      <div className="container mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link href={feature.href} key={index}>
              <Card className="flex flex-col justify-between h-full">
                <div>
                  <div className="bg-white p-3 -ml-2 rounded-full w-16 h-16 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold my-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
                <div className="mt-4 text-secondry flex items-center text-sm font-semibold">
                  Learn more
                  <ArrowRight className="w-3 h-3 fill-secondry ml-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const features: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}[] = [
  {
    icon: <Brain className="w-8 h-8 fill-primary" />,
    title: "AI-Powered Analysis",
    description:
      "Advanced algorithms analyze your emotional state and provide personalized support.",
    href: "/features/ai-analysis",
  },
  {
    icon: <Users className="w-8 h-8 fill-primary" />,
    title: "Group Therapy",
    description:
      "Connect with others in moderated group sessions for experience and support.",
    href: "/features/group-therapy",
  },
  {
    icon: <Lightbulb className="w-8 h-8 fill-primary" />,
    title: "Personalized Insights",
    description:
      "Begin your journey to better mental health with personalized insights and tracking.",
    href: "/features/insights",
  },
  {
    icon: <ClipboardQuestion className="w-8 h-8 fill-primary" />,
    title: "questionnaire",
    description:
      "Gain valuable insights into your mental health patterns and progress over time.",
    href: "/features/questionnaire",
  },
];
