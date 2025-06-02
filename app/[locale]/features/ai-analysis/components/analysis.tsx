import { ReactElement } from "react";
import { useTranslations } from "next-intl";

type Props = {
  children: ReactElement;
  title: string;
};

export default function Analysis({ children, title }: Props) {
  const t = useTranslations("Features.AIAnalysis.Analysis");

  return (
    <section id="analysis" className="bg-foreground p-8 rounded-lg shadow-lg">
      <div>
        <h2 className="text-primary text-2xl font-bold capitalize">
          {t("title")}
        </h2>
        <p className="text-lg mb-6">
          {title
            ? t("description1", { title: title.toUpperCase() })
            : t("description2")}
        </p>
      </div>
      {children}
    </section>
  );
}
