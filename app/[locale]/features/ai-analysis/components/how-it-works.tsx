import { useTranslations } from "next-intl";

export default function HowItWorks() {
  const t = useTranslations("Features.AIAnalysis.HowItWorks");
  const howItWorks: {
    title: string;
    description: string;
  }[] = t.raw("data");

  return (
    <section id="how-it-works">
      <h2 className="text-primary text-xl sm:text-2xl font-bold mb-4 capitalize">
        {t("title")}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {howItWorks.map((item, index) => (
          <div key={index} className="bg-foreground p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-primary">
              {item.title}
            </h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
