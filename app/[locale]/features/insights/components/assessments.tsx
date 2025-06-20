import Card from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Assessments({ children }: Props) {
  const t = useTranslations("Features.Insights.Assessments");

  return (
    <Card id="assessments">
      <h2 className="text-primary text-xl sm:text-2xl font-bold capitalize">
        {t("title")}
      </h2>
      <p className="sm:text-lg mb-6">{t("description")}</p>
      {children}
    </Card>
  );
}
