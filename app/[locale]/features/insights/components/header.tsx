import { Lightbulb } from "@/components/ui/icons";

export default function Header() {
  return (
    <header>
      <div className="flex items-center gap-4 mb-8">
        <Lightbulb className="w-10 h-10 fill-primary" />
        <h1 className="text-4xl font-bold text-primary">
          Personalized Insights
        </h1>
      </div>
      <p className="text-xl">
        Gain deep understanding of your mental health patterns through our
        advanced analytics and personalized tracking system.
      </p>
    </header>
  );
}
