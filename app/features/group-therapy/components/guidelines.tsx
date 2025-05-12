import { CircleCheck } from "@/components/ui/icons";

export default function Guidelines() {
  return (
    <section id="guidelines">
      <h2 className="text-primary text-2xl font-bold mb-4">
        Session Guidelines
      </h2>
      <ul className="bg-foreground p-8 space-y-4 rounded-lg shadow-lg">
        {guidelines.map((guideline, index) => (
          <li key={index} className="flex items-center gap-3">
            <CircleCheck className="w-5 h-5 fill-primary" />
            <span>{guideline}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const guidelines: string[] = [
  "Arrive 5 minutes before the session starts",
  "Maintain confidentiality of all participants",
  "Be respectful and supportive of others",
  "Share only what you're comfortable with",
  "Listen actively when others are speaking",
];
