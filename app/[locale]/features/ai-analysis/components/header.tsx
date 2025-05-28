import { Brain } from "@/components/ui/icons";

export default function Header() {
  return (
    <header>
      <div className="flex items-center gap-4 mb-8 text-primary">
        <Brain className="w-10 h-10" />
        <h1 className="text-4xl font-bold ">AI-Powered Analysis</h1>
      </div>
      <p className="text-xl">
        Our advanced AI system provides real-time emotional analysis and
        personalized support for your mental health journey.
      </p>
    </header>
  );
}
