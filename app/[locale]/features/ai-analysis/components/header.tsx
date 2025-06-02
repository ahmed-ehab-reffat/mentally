import { useTranslations } from "next-intl";
import { Brain } from "@/components/ui/icons";

export default function Header() {
  const t = useTranslations("Features.AIAnalysis.Header");

  return (
    <header>
      <div className="flex items-center gap-4 mb-8 text-primary capitalize">
        <Brain className="w-10 h-10" />
        <h1 className="text-4xl font-bold ">{t("title")}</h1>
      </div>
      <p className="text-xl">{t("description")}</p>
    </header>
  );
}
