import Card from "@/components/ui/card";
import { useTranslations } from "next-intl";

export default function Benefits() {
  const t = useTranslations("Features.GroupTherapy.Benefits");
  const benefits: {
    title: string;
    description: string;
  }[] = t.raw("data");

  return (
    <section id="benefits">
      <h2 className="text-primary text-xl sm:text-2xl font-bold mb-4 capitalize">
        {t("title")}
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-foreground rounded-lg shadow-lg">
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary">
              {benefit.title}
            </h3>
            <p>{benefit.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
