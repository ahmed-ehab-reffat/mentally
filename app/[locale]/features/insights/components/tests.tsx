import Button from "@/components/ui/button";
import { Plus } from "@/components/ui/icons";
import { useTranslations } from "next-intl";

export type Test = {
  title: string;
  questions: string[];
};

type Props = {
  onSelect: (test: Test) => void;
};

export default function Tests({ onSelect }: Props) {
  const t = useTranslations("Features.Insights.Tests");
  const tests: Test[] = t.raw("data");

  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {tests.map((test) => (
        <Button
          key={test.title}
          onClick={() => onSelect(test)}
          className="flex justify-between items-center uppercase"
        >
          {test.title}
          <Plus className="w-4 h-4" />
        </Button>
      ))}
    </ul>
  );
}
