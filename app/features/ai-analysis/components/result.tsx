import ReactMarkdown from "react-markdown";
import Button from "@/components/ui/button";

type Props = {
  result: string;
  onBack: () => void;
};

export default function Result({ onBack, result }: Props) {
  return (
    <main>
      <div>
        <div className="mark-down">
          <ReactMarkdown>{result}</ReactMarkdown>
        </div>
        <Button onClick={onBack} className="mt-4">
          Back to Tests
        </Button>
      </div>
    </main>
  );
}
