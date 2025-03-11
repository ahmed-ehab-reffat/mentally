import Link from "next/link";

import { Brain, Users, Lightbulb, ClipboardQuestion } from "../ui/icons";

export default function Features() {
  return (
    <section id="features" className="">
      <div className="container mx-auto px-8 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index}>
              <Link href={feature.href}>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                  <div className="mt-4 text-teal-400 flex items-center text-sm font-medium">
                    Learn more
                  </div>
                </div>
              </Link>
            </div>
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
    icon: <Brain className="w-8 h-8 align-[-0.125em] fill-primary" />,
    title: "AI-Powered Analysis",
    description:
      "Advanced algorithms analyze your emotional state and provide personalized support.",
    href: "/features/ai-analysis",
  },
  {
    icon: <Users className="w-8 h-8 align-[-0.125em] fill-primary" />,
    title: "Group Therapy",
    description:
      "Connect with others in moderated group sessions for shared experiences and support.",
    href: "/features/group-therapy",
  },
  {
    icon: <Lightbulb className="w-8 h-8 align-[-0.125em] fill-primary" />,
    title: "Personalized Insights",
    description:
      "Begin your journey to better mental health with personalized insights and tracking.",
    href: "/features/insights",
  },
  {
    icon: (
      <ClipboardQuestion className="w-8 h-8 align-[-0.125em] fill-primary" />
    ),
    title: "questionnaire",
    description:
      "Gain valuable insights into your mental health patterns and progress over time.",
    href: "/features/questionnaire",
  },
];
