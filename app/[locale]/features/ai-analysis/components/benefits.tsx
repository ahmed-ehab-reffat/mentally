import { useTranslations } from "next-intl";
import { CircleCheck } from "@/components/ui/icons";

export default function Benefits() {
  const t = useTranslations("Features.AIAnalysis.Benefits");
  const benefits: string[] = t.raw("data");

  return (
    <section id="benefits">
      <h2 className="text-primary text-2xl font-bold mb-4 capitalize">
        {t("title")}
      </h2>
      <ul className="bg-foreground p-8 space-y-4 rounded-lg shadow-lg">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-3">
            <CircleCheck className="w-5 h-5 fill-primary" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
