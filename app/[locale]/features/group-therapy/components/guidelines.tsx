import Card from "@/components/ui/card";
import { CircleCheck } from "@/components/ui/icons";
import { useTranslations } from "next-intl";

export default function Guidelines() {
  const t = useTranslations("Features.GroupTherapy.Guidelines");
  const guidelines: string[] = t.raw("data");
  return (
    <section id="guidelines">
      <h2 className="text-primary text-xl sm:text-2xl font-bold mb-4 capitalize">
        {t("title")}
      </h2>
      <Card className="space-y-4">
        {guidelines.map((guideline, index) => (
          <li key={index} className="flex items-center gap-3">
            <CircleCheck className="w-5 h-5 fill-primary" />
            <span>{guideline}</span>
          </li>
        ))}
      </Card>
    </section>
  );
}
