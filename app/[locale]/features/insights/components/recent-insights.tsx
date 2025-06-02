import { ChartUp } from "@/components/ui/icons";
import { useTranslations } from "next-intl";

export default function RecentInsights() {
  const t = useTranslations("Features.Insights.RecentInsights");

  const insights: {
    title: string;
    description: string;
    improvement: string;
  }[] = t.raw("insights");

  return (
    <section id="recent-insights">
      <h2 className="text-primary text-2xl font-bold mb-4 capitalize">
        {t("title")}
      </h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {insights.map((insight, index) => (
          <li key={index} className="bg-foreground p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold">{insight.title}</h2>
            <main>
              <p className="mb-2">{insight.description}</p>
              <div className="flex items-center text-primary gap-1">
                <ChartUp className="w-4" />
                {insight.improvement}
              </div>
            </main>
          </li>
        ))}
      </ul>
    </section>
  );
}
