import { Bullseye, ChartUp, Clock } from "@/components/ui/icons";

export default function KeyFeatures() {
  return (
    <section id="key-features">
      <h2 className="text-primary text-2xl font-bold mb-4">Key Features</h2>
      <ul className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <li key={index} className="bg-foreground p-6 rounded-lg shadow-lg">
            <header className="flex gap-2 text-primary mb-2">
              {feature.icon}
              <h3 className="text-xl font-bold">{feature.title}</h3>
            </header>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const features: {
  icon: React.ReactNode;
  title: string;
  description: string;
}[] = [
  {
    icon: <ChartUp className="w-6 h-6" />,
    title: "Progress Tracking",
    description:
      "Monitor your emotional well-being over time with detailed charts and analytics",
  },
  {
    icon: <Bullseye className="w-6 h-6" />,
    title: "Goal Setting",
    description:
      "Set and track personal mental health goals with actionable steps",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Regular Check-ins",
    description:
      "Scheduled check-ins to help you stay on track with your mental health journey",
  },
];
