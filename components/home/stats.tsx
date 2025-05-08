import StatItem from "./stateItem";

export default function Stats() {
  return (
    <section id="stats" className="bg-light mx-auto py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-8">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            number={stat.number}
            afterNumber={stat.afterNumber}
            label={stat.label}
          />
        ))}
      </div>
    </section>
  );
}

const stats: { number: number; afterNumber: string; label: string }[] = [
  { number: 50, afterNumber: "K+", label: "Active Users" },
  { number: 1000, afterNumber: "+", label: "Group Sessions" },
  { number: 92, afterNumber: "%", label: "User Satisfaction" },
  { number: 24, afterNumber: "/7", label: "Support Available" },
];
