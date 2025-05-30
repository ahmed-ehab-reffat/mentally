import { useTranslations } from "next-intl";
import StatItem from "./stateItem";

export default function Stats() {
  const t = useTranslations("Home.Stats");
  return (
    <section id="stats" className="bg-foreground mx-auto py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-8">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            number={stat.number}
            afterNumber={stat.afterNumber}
            label={t(stat.label)}
          />
        ))}
      </div>
    </section>
  );
}

const stats: { number: number; afterNumber: string; label: string }[] = [
  { number: 50, afterNumber: "K+", label: "active users" },
  { number: 1000, afterNumber: "+", label: "group sessions" },
  { number: 92, afterNumber: "%", label: "user satisfaction" },
  { number: 24, afterNumber: "/7", label: "support available" },
];
