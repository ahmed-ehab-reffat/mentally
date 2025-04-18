import Button from "@/components/ui/button";
import Loading from "@/components/loading";
import type { Test } from "./tests";

export type Answer = "Yes" | "No";

type Props = {
  test: Test;
  Answers: Answer[];
  onAnswer: (answer: Answer, index: number) => void;
  onSubmit: () => void;
  isAnalyzing: boolean;
};

export default function Questions({
  test,
  Answers,
  onAnswer,
  onSubmit,
  isAnalyzing,
}: Props) {
  //back to tests
  return (
    <main id="questions">
      <h3 className="text-primary text-xl font-bold uppercase mb-4">
        {test.title}
      </h3>
      <ul>
        {test.questions.map((q, index) => (
          <li key={index} className="mb-4">
            <p className="mb-2">{q}</p>
            <div className="flex gap-2">
              <Button
                onClick={() => onAnswer("Yes", index)}
                className={Answers[index] === "Yes" ? "!bg-cyan" : ""}
              >
                Yes
              </Button>
              <Button
                onClick={() => onAnswer("No", index)}
                className={Answers[index] === "No" ? "!bg-cyan" : ""}
              >
                No
              </Button>
            </div>
          </li>
        ))}
      </ul>
      {isAnalyzing ? <Loading /> : <Button onClick={onSubmit}>Submit</Button>}
    </main>
  );
}
