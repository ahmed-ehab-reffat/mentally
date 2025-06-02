import { useTranslations } from "next-intl";
import ReactMarkdown from "react-markdown";
import Button from "@/components/ui/button";

type Props = {
  result: string;
  onBack: () => void;
};

export default function Result({ onBack, result }: Props) {
  const t = useTranslations("Features.AIAnalysis.Analysis");

  return (
    <main>
      <div className="mark-down">
        <ReactMarkdown>{result}</ReactMarkdown>
      </div>
      <Button onClick={onBack} className="mt-4 capitalize">
        {t("back to tests")}
      </Button>
    </main>
  );
}
