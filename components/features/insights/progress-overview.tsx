"use client";

import Button from "@/components/ui/button";
import { useState } from "react";

type Periods = "week" | "month" | "year";

export default function ProgressOverview() {
  const [selectedPeriod, setSelectedPeriod] = useState<Periods>("week");
  return (
    <section id="progress-overview">
      <header>
        <h1>Your Progress Overview</h1>
        <p>Track your mental health metrics over time</p>
        <div className="mt-4">
          {(["week", "month", "year"] as const).map((period) => (
            <Button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className="capitalize"
            >
              {period}
            </Button>
          ))}
        </div>
      </header>
      <main className="space-y-6">
        <div>
          <div className="flex justify-between mb-2">
            <span>Mood Score</span>
            <span>{mockData[selectedPeriod].moodScore}%</span>
          </div>
          <progress
            value={mockData[selectedPeriod].moodScore}
            className="w-full"
          />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span>Sleep Quality</span>
            <span>{mockData[selectedPeriod].sleepQuality}%</span>
          </div>
          <progress
            value={mockData[selectedPeriod].sleepQuality}
            className="w-full"
          />
        </div>
        <div>
          <div className="flex justify-between mb-2">
            <span>Anxiety Level</span>
            <span>{mockData[selectedPeriod].anxietyLevel}%</span>
          </div>
          <progress
            value={mockData[selectedPeriod].anxietyLevel}
            className="w-full"
          />
        </div>
        <div className="pt-4">
          <div className="text-sm">Activities Completed</div>
          <div className="text-2xl font-bold">
            {mockData[selectedPeriod].activitiesCompleted}
          </div>
        </div>
      </main>
    </section>
  );
}

const mockData = {
  week: {
    moodScore: 75,
    sleepQuality: 82,
    anxietyLevel: 45,
    activitiesCompleted: 8,
  },
  month: {
    moodScore: 70,
    sleepQuality: 75,
    anxietyLevel: 50,
    activitiesCompleted: 24,
  },
  year: {
    moodScore: 68,
    sleepQuality: 72,
    anxietyLevel: 55,
    activitiesCompleted: 156,
  },
};
