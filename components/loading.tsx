import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import Progress from "@/components/ui/progress";

export default function Loading() {
  const [demoProgress, setDemoProgress] = useState(0);

  const t = useTranslations("Features.AIAnalysis.Analysis");

  useEffect(() => {
    const interval = setInterval(() => {
      setDemoProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <div className="flex items-center justify-between mb-4">
        <div>{t("Analyzing patterns")}...</div>
        <div>{demoProgress}%</div>
      </div>
      <Progress value={demoProgress} max={100} />
    </main>
  );
}
