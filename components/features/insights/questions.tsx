export type Answer = "Yes" | "No";

type Props = {
  questions: string[];
  onAnswer: (answer: Answer) => void;
};

export default function Questions({ questions, onAnswer }: Props) {
  return (
    <>
      {questions.map((q, index) => (
        <div key={index} className="mb-4">
          <p className="mb-2">{q}</p>
          <div className="flex gap-2">
            <button onClick={() => onAnswer("Yes")}>Yes</button>
            <button onClick={() => onAnswer("No")}>No</button>
          </div>
        </div>
      ))}
    </>
  );
}
