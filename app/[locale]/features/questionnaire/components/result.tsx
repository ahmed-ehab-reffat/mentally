import { Link } from "@/i18n/navigation";

import Button from "@/components/ui/button";
import ReactMarkdown from "react-markdown";

type Props = { result: string };

export default function Result({ result }: Props) {
  return (
    <main>
      <div className="mark-down">
        <ReactMarkdown>{result}</ReactMarkdown>
      </div>
      <p className="text-sm mb-4">
        This assessment is for informational purposes only and is not a
        substitute for professional diagnosis.
      </p>
      <Link href="/#resources" className="mt-4">
        <Button>Proceed to Resources</Button>
      </Link>
    </main>
  );
}
