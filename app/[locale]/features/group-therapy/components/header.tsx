import { Users } from "@/components/ui/icons";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Features.GroupTherapy.Header");

  return (
    <header>
      <div className="flex items-center gap-4 mb-8 text-primary">
        <Users className="w-10 h-10" />
        <h1 className="text-4xl font-bold capitalize">{t("title")}</h1>
      </div>
      <p className="text-xl mb-12">{t("description")}</p>
    </header>
  );
}
