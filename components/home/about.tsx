import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("Home.About");
  return (
    <section id="about">
      <div className="container mx-auto px-4 pt-10 pb-12">
        <h2 className="text-4xl font-bold text-primary mb-8 text-center">
          {t("title")}
        </h2>
        <div className="text-lg md:text-xl leading-relaxed space-y-6">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <p>{t("p3")}</p>
        </div>
      </div>
    </section>
  );
}
