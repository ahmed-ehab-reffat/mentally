import { Bullseye, ChartUp, Clock } from "@/components/ui/icons";
import { useTranslations } from "next-intl";

export default function KeyFeatures() {
  const t = useTranslations("Features.Insights.KeyFeatures");

  return (
    <section id="key-features">
      <h2 className="text-primary text-2xl font-bold mb-4 capitalize">
        {t("title")}
      </h2>
      <ul className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <li key={index} className="bg-foreground p-6 rounded-lg shadow-lg">
            <header className="flex gap-2 text-primary mb-2">
              {feature.icon}
              <h3 className="text-xl font-bold capitalize">
                {t(`${feature.title}.title`)}
              </h3>
            </header>
            <p>{t(`${feature.title}.description`)}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

const features: {
  icon: React.ReactNode;
  title: string;
}[] = [
  {
    icon: <ChartUp className="w-6 h-6" />,
    title: "progress tracking",
  },
  {
    icon: <Bullseye className="w-6 h-6" />,
    title: "goal setting",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "regular check-ins",
  },
];
