import { Lightbulb } from "@/components/ui/icons";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Features.Insights.Header");
  return (
    <header>
      <div className="flex items-center gap-4 mb-8 text-primary">
        <Lightbulb className="w-10 h-10" />
        <h1 className="text-4xl font-bold capitalize">{t("title")}</h1>
      </div>
      <p className="text-xl">{t("description")}</p>
    </header>
  );
}
