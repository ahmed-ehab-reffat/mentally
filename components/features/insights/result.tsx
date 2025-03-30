import Button from "@/components/ui/button";

export type Result = {
  summary: string;
  details: string[];
  recommendations: string[];
};

type Props = {
  result: Result;
  onBack: () => void;
};

export default function Results({ result, onBack }: Props) {
  return (
    <div className="mt-6">
      <div>
        <h2>Your Result</h2>
      </div>
      <main>
        <p>{result.summary}</p>
        <div className="mt-4">
          <h4 className="font-bold">Detailed Analysis:</h4>
          <ul className="list-disc pl-4">
            {result.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-bold">Recommendations:</h4>
          <ul className="list-disc pl-4">
            {result.recommendations.map((recommendation, index) => (
              <li key={index}>{recommendation}</li>
            ))}
          </ul>
        </div>
        <p className="text-sm mt-4">
          This test is for informational purposes only and is not a substitute
          for professional diagnosis.
        </p>
        <Button onClick={onBack} className="mt-4">
          Back to Tests
        </Button>
      </main>
    </div>
  );
}
