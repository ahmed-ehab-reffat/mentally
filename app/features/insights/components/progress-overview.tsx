"use client";

import Button from "@/components/ui/button";
import Progress from "@/components/ui/progress";
import { useState } from "react";

type Periods = "week" | "month" | "year";

export default function ProgressOverview() {
  const [selectedPeriod, setSelectedPeriod] = useState<Periods>("week");

  return (
    <section
      id="progress-overview"
      className="bg-foreground p-8 rounded-lg shadow-lg"
    >
      <header>
        <h2 className="text-primary text-2xl font-bold">
          Your Progress Overview
        </h2>
        <p className="text-lg mb-4">
          Track your mental health metrics over time
        </p>
        <ul className="space-x-4 mb-6">
          {(["week", "month", "year"] as const).map((period) => (
            <Button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              selected={selectedPeriod === period}
              className="capitalize"
            >
              {period}
            </Button>
          ))}
        </ul>
      </header>
      <main className="space-y-4">
        {mockData.title.map((title, index) => (
          <div key={index}>
            <div className="flex justify-between text-lg font-bold mb-2">
              <span>{title}</span>
              <span className="text-primary">
                {mockData[selectedPeriod].progress[index]}%
              </span>
            </div>
            <Progress
              max="100"
              value={mockData[selectedPeriod].progress[index]}
            />
          </div>
        ))}

        <div>
          <div className="text-lg font-bold">Activities Completed</div>
          <div className="text-primary text-2xl font-bold">
            {mockData[selectedPeriod].activitiesCompleted}
          </div>
        </div>
      </main>
    </section>
  );
}

const mockData = {
  title: ["Mood Score", "Sleep Quality", "Anxiety Level"],
  week: {
    progress: [75, 82, 45],
    activitiesCompleted: 8,
  },
  month: {
    progress: [70, 75, 50],
    activitiesCompleted: 24,
  },
  year: {
    progress: [68, 72, 55],
    activitiesCompleted: 156,
  },
};
