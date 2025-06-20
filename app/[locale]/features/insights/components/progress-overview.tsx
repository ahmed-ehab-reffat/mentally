"use client";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import Progress from "@/components/ui/progress";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ProgressOverview() {
  const [selectedPeriod, setSelectedPeriod] = useState<number>(0);

  const t = useTranslations("Features.Insights.ProgressOverview");
  const periods: string[] = t.raw("periods");
  const progresses: string[] = t.raw("progresses");

  return (
    <Card id="progress-overview">
      <header>
        <h2 className="text-primary text-2xl font-bold capitalize">
          {t("title")}
        </h2>
        <p className="text-lg mb-4">{t("description")}</p>
        <ul className="space-x-4 mb-6">
          {periods.map((period, index) => (
            <Button
              key={period}
              onClick={() => setSelectedPeriod(index)}
              selected={selectedPeriod === index}
              className="capitalize"
            >
              {period}
            </Button>
          ))}
        </ul>
      </header>
      <main className="space-y-4">
        {progresses.map((title, index) => (
          <div key={index}>
            <div className="flex justify-between text-lg font-bold mb-2">
              <span>{title}</span>
              <span className="text-primary">
                {mockData[selectedPeriod].progresses[index]}%
              </span>
            </div>
            <Progress
              max="100"
              value={mockData[selectedPeriod].progresses[index]}
            />
          </div>
        ))}
        <div className="w-fit mx-auto sm:m-0">
          <div className="text-lg font-bold capitalize">
            {t("activities completed")}
          </div>
          <div className="text-primary text-2xl font-bold text-center">
            {mockData[selectedPeriod].activitiesCompleted}
          </div>
        </div>
      </main>
    </Card>
  );
}

const mockData = [
  {
    progresses: [75, 82, 45],
    activitiesCompleted: 8,
  },
  {
    progresses: [70, 75, 50],
    activitiesCompleted: 24,
  },
  {
    progresses: [68, 72, 55],
    activitiesCompleted: 156,
  },
];
