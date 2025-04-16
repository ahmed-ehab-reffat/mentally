import { useEffect, useState } from "react";

import Progress from "@/components/ui/progress";

export default function Loading() {
  const [demoProgress, setDemoProgress] = useState(0);
  console.log(demoProgress);

  useEffect(() => {
    const interval = setInterval(() => {
      setDemoProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="space-y-4">
      <div className="flex items-center justify-between mb-2">
        <div>Analyzing patterns...</div>
        <div>{demoProgress}%</div>
      </div>
      <Progress value={demoProgress} max={100} />
    </main>
  );
}
