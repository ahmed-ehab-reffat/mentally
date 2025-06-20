import Button from "@/components/ui/button";
import Loading from "@/components/loading";
import type { Test } from "./tests";
import { useTranslations } from "next-intl";

export type Answer = "Yes" | "No" | "نعم" | "لا";

type Props = {
  test: Test;
  Answers: Answer[];
  onAnswer: (answer: Answer, index: number) => void;
  onSubmit: () => void;
  isAnalyzing: boolean;
};

//back to tests

export default function Questions({
  test,
  Answers,
  onAnswer,
  onSubmit,
  isAnalyzing,
}: Props) {
  const t = useTranslations("Features.Insights.Questions");

  return (
    <main id="questions">
      <h3 className="text-primary text-lg sm:text-xl font-bold uppercase mb-4">
        {test.title}
      </h3>
      <ul>
        {test.questions.map((q, index) => (
          <li key={index} className="mb-4">
            <p className="mb-2">{q}</p>
            <div className="flex gap-2">
              <Button
                onClick={() => onAnswer(t("Yes") as Answer, index)}
                selected={Answers[index] === t("Yes")}
              >
                {t("Yes")}
              </Button>
              <Button
                onClick={() => onAnswer(t("No") as Answer, index)}
                selected={Answers[index] === t("No")}
              >
                {t("No")}
              </Button>
            </div>
          </li>
        ))}
      </ul>
      {isAnalyzing ? (
        <Loading />
      ) : (
        <Button onClick={onSubmit}>{t("Submit")}</Button>
      )}
    </main>
  );
}
