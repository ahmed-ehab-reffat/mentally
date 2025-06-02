import { useTranslations } from "next-intl";
import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Assessments({ children }: Props) {
  const t = useTranslations("Features.Insights.Assessments");

  return (
    <section
      id="assessments"
      className="bg-foreground p-8 rounded-lg shadow-lg"
    >
      <h2 className="text-primary text-2xl font-bold capitalize">
        {t("title")}
      </h2>
      <p className="text-lg mb-6">{t("description")}</p>
      {children}
    </section>
  );
}
