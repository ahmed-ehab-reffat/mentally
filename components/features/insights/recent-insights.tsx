import { ChartUp } from "@/components/ui/icons";

export default function RecentInsights() {
  return (
    <section id="recent-insights">
      <h2 className="text-2xl font-bold mb-6">Recent Insights</h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {insights.map((insight, index) => (
          <li key={index}>
            <header>
              <h2 className="text-lg">{insight.title}</h2>
            </header>
            <main>
              <p className="mb-2">{insight.description}</p>
              <div className="flex items-center text-green-500">
                <ChartUp className="w-4 h-4 mr-1 fill-green-500" />
                {insight.improvement}
              </div>
            </main>
          </li>
        ))}
      </ul>
    </section>
  );
}

const insights: {
  title: string;
  description: string;
  improvement: string;
}[] = [
  {
    title: "Mood Patterns",
    description: "Your mood tends to be most positive in the mornings",
    improvement: "+12% from last week",
  },
  {
    title: "Sleep Quality",
    description: "Your sleep quality has improved this week",
    improvement: "+8% from last week",
  },
  {
    title: "Anxiety Levels",
    description: "Lower anxiety levels during weekend activities",
    improvement: "-15% from last week",
  },
  {
    title: "Activity Impact",
    description: "Exercise shows positive impact on your mood",
    improvement: "+20% when active",
  },
];
