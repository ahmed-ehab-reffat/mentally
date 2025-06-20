import { useTranslations } from "next-intl";

export default function LearnMore() {
  const t = useTranslations("Features.AIAnalysis.LearnMore");

  return (
    <section id="learn-more">
      <h2 className="text-primary text-xl sm:text-2xl font-bold capitalize">
        {t("title")}
      </h2>
      <p className="text-lg mb-4">{t("description")}</p>
      <ul className="pl-8 list-disc text-primary text-lg">
        <li>
          <a
            href="https://www.who.int/health-topics/mental-health"
            className="hover:underline"
          >
            {t("World Health Organization")}
          </a>
        </li>
        <li>
          <a href="https://www.aiinhealthcare.com" className="hover:underline">
            {t("AI in Healthcare")}
          </a>
        </li>
      </ul>
    </section>
  );
}
