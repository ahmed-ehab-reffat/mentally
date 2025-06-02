import ReactMarkdown from "react-markdown";
import Button from "@/components/ui/button";
import { useTranslations } from "next-intl";

type Props = {
  result: string;
  onBack: () => void;
};

export default function Result({ result, onBack }: Props) {
  const t = useTranslations("Features.Insights.Result");

  return (
    <main className="mt-6">
      <div className="mark-down">
        <ReactMarkdown>{result}</ReactMarkdown>
      </div>
      <p className="text-sm mt-4">{t("description")}</p>
      <Button onClick={onBack} className="mt-4 capitalize">
        {t("back")}
      </Button>
    </main>
  );
}
