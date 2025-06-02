import { type Ref } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/ui/button";

type Props = {
  ref: Ref<HTMLTextAreaElement>;
  onStart: () => void;
};
export default function UserText({ ref, onStart }: Props) {
  const t = useTranslations("Features.AIAnalysis.Analysis");

  return (
    <main className="space-y-4">
      <textarea
        ref={ref}
        placeholder={t("placeholder")}
        className="w-full px-3 py-2 border border-primary outline-none rounded-md placeholder:text-primary"
      />
      <Button type="button" onClick={onStart} className="w-full capitalize">
        {t("start analysis")}
      </Button>
    </main>
  );
}
