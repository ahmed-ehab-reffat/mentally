import ReactMarkdown from "react-markdown";
import Button from "@/components/ui/button";

type Props = {
  result: string;
  onBack: () => void;
};

export default function Results({ result, onBack }: Props) {
  return (
    <main className="mt-6">
      <div>
        <div className="mark-down">
          <ReactMarkdown>{result}</ReactMarkdown>
        </div>
        <p className="text-sm mt-4">
          This test is for informational purposes only and is not a substitute
          for professional diagnosis.
        </p>
        <Button onClick={onBack} className="mt-4">
          Back to Tests
        </Button>
      </div>
    </main>
  );
}
