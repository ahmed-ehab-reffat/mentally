import { CircleCheck } from "@/components/ui/icons";

export default function Benefits() {
  return (
    <section id="benefits">
      <h2 className="text-primary text-2xl font-bold mb-4">Key Benefits</h2>
      <ul className="bg-foreground p-8 space-y-4 rounded-lg shadow-lg">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3">
            <CircleCheck className="w-5 h-5 fill-primary" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const benefits: string[] = [
  "Real-time emotion analysis during conversations",
  "Personalized support recommendations",
  "Pattern recognition in emotional states",
  "24/7 availability for immediate assistance",
  "Continuous learning from interactions",
];
