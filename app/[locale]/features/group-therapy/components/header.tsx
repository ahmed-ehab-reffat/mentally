import { Users } from "@/components/ui/icons";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Features.GroupTherapy.Header");

  return (
    <header>
      <div className="flex items-center gap-2 sm:gap-4 mb-4 sm:mb-8 text-primary">
        <Users className="min-w-8 min-h-8 w-8 h-8 sm:w-10 sm:h-10" />
        <h1 className="text-2xl sm:text-4xl font-bold capitalize">
          {t("title")}
        </h1>
      </div>
      <p className="text-xl mb-12">{t("description")}</p>
    </header>
  );
}
