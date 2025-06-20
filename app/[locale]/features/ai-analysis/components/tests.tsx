import { useTranslations } from "next-intl";
import Button from "@/components/ui/button";
import { Plus } from "@/components/ui/icons";

type Props = {
  selected: string;
  onSelect: (test: string) => void;
};

export default function Tests({ selected, onSelect }: Props) {
  const t = useTranslations("Features.AIAnalysis.Tests");
  const tests: string[] = t.raw("data");

  return (
    <section id="tests" className="bg-foreground p-8 rounded-lg shadow-lg">
      <h2 className="text-primary text-xl sm:text-2xl font-bold capitalize">
        {t("title")}
      </h2>
      <p className="text-lg mb-6">{t("description")}</p>
      <div>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tests.map((test) => (
            <Button
              key={test}
              onClick={() => onSelect(test)}
              selected={test === selected}
              className="flex justify-between items-center uppercase"
            >
              {test}
              <Plus className="w-4 h-4" />
            </Button>
          ))}
        </ul>
      </div>
    </section>
  );
}
