import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Calendar } from "@/components/ui/icons";
import { useTranslations } from "next-intl";

type Props = {
  onRegistir: (name: string) => void;
};

export default function Sessions({ onRegistir }: Props) {
  const t = useTranslations("Features.GroupTherapy.Sessions");
  const upcomingSessions: {
    id: string;
    title: string;
    date: string;
    spots: number;
    description: string;
  }[] = t.raw("data");

  return (
    <section id="sessions">
      <h2 className="text-primary text-xl sm:text-2xl font-bold mb-4 capitalize">
        {t("title")}
      </h2>
      <ul className="grid gap-10">
        {upcomingSessions.map((session) => (
          <Card key={session.id}>
            <div className="flex justify-between gap-2 mb-3">
              <h3 className="text-primary text-lg sm:text-xl font-bold">
                {session.title}
              </h3>
              <span className="text-primary text-sm whitespace-nowrap bg-surface h-fit px-3 py-1 rounded-full">
                {session.spots} {t("spots left")}
              </span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="min-w-4 min-h-4 w-4 h-4 fill-primary" />
              <span>{session.date}</span>
            </div>
            <p className="mb-4">{session.description}</p>
            <Button
              type="button"
              onClick={() => onRegistir(session.title)}
              className="w-full capitalize"
            >
              {t("register")}
            </Button>
          </Card>
        ))}
      </ul>
    </section>
  );
}
