import { useTranslations } from "next-intl";
import { Brain } from "@/components/ui/icons";

export default function Header() {
  const t = useTranslations("Features.AIAnalysis.Header");

  return (
    <header>
      <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8 text-primary capitalize">
        <Brain className="min-w-8 min-h-8 w-8 h-8 sm:w-10 sm:h-10" />
        <h1 className="text-2xl sm:text-4xl font-bold ">{t("title")}</h1>
      </div>
      <p className="text-lg sm:text-xl">{t("description")}</p>
    </header>
  );
}
