import { useTranslations } from "next-intl";

export default function Benefits() {
  const t = useTranslations("Features.GroupTherapy.Benefits");
  const benefits: {
    title: string;
    description: string;
  }[] = t.raw("data");

  return (
    <section id="benefits">
      <h2 className="text-primary text-2xl font-bold mb-4 capitalize">
        {t("title")}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-foreground p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
