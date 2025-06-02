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
      <h2 className="text-primary text-2xl font-bold mb-4 capitalize">
        {t("title")}
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
                  {session.spots} {t("spots left")}
                </span>
              </div>
            </div>
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
