import { Link } from "@/i18n/navigation";

import Button from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { useTranslations } from "next-intl";

type Props = { result: string };

export default function Result({ result }: Props) {
  const t = useTranslations("Features.Questionnaire.Result");

  return (
    <main>
      <div className="mark-down">
        <ReactMarkdown>{result}</ReactMarkdown>
      </div>
      <p className="text-sm mb-4">{t("description")}</p>
      <Link href="/#resources" className="mt-4">
        <Button className="capitalize">{t("proceed")}</Button>
      </Link>
    </main>
  );
}
