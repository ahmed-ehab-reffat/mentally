import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Calendar } from "@/components/ui/icons";

type Props = {
  onRegistir: (name: string) => void;
};

export default function Sessions({ onRegistir }: Props) {
  return (
    <section id="sessions">
      <h2 className="text-primary text-2xl font-bold mb-4">
        Upcoming Sessions
      </h2>
      <ul className="grid gap-10">
        {upcomingSessions.map((session) => (
          <Card key={session.id}>
            <div className="flex justify-between">
              <div>
                <h3 className="text-primary text-xl font-bold mb-2">
                  {session.title}
                </h3>
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 fill-primary" />
                  <span>{session.date}</span>
                </div>
                <p className="mb-4">{session.description}</p>
              </div>
              <div className="bg-surface h-fit px-3 py-1 rounded-full">
                <span className="text-primary text-sm whitespace-nowrap">
                  {session.spots} spots left
                </span>
              </div>
            </div>
            <Button
              type="button"
              onClick={() => onRegistir(session.title)}
              className="w-full"
            >
              Register for Session
            </Button>
          </Card>
        ))}
      </ul>
    </section>
  );
}

const upcomingSessions: {
  id: string;
  title: string;
  date: string;
  spots: number;
  description: string;
}[] = [
  {
    id: "1",
    title: "Anxiety Support Group",
    date: "Every Monday at 7:00 PM - 8:30 PM",
    spots: 5,
    description:
      "A supportive environment to discuss and learn coping strategies for anxiety.",
  },
  {
    id: "2",
    title: "Depression Management",
    date: "Every Wednesday at 6:00 PM - 7:30 PM",
    spots: 3,
    description:
      "Share experiences and learn techniques for managing depression.",
  },
  {
    id: "3",
    title: "Stress Relief Workshop",
    date: "Every Friday at 5:00 PM - 6:30 PM",
    spots: 8,
    description:
      "Learn practical techniques for managing daily stress and building resilience.",
  },
];
