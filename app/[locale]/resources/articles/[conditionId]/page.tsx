import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@/components/ui/icons";
import Card from "@/components/ui/card";
import Section from "./section";

type Props = {
  params: Promise<{
    conditionId: string;
  }>;
};

export default async function Condition({ params }: Props) {
  const { conditionId } = await params;
  const t = await getTranslations("Resources.Articles");

  const conditions: {
    id: string;
    title: string;
    description: string;
    definition: string;
    symptoms: string[];
    causes: string[];
    treatment: string[];
  }[] = t.raw("conditions");

  const condition = conditions.find((obj) => obj.id === conditionId);

  if (!condition) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 pt-8 pb-16 scroll-pt-36">
      <Link
        href="/resources/articles"
        className="flex items-center gap-2 w-fit capitalize hover:text-primary"
      >
        <ArrowLeft className="w-4 h-4 rtl:mt-1" />
        {t("Condition.all articles")}
      </Link>

      <h1 className="text-2xl sm:text-4xl font-bold text-primary py-8">
        {condition.title}
      </h1>
      <Card className="*:not-first:pt-10 marker:text-primary  scroll-smooth">
        <section id="contents" className="capitalize">
          <h2 className="text-primary text-xl sm:text-3xl font-bold mb-4">
            {t("Condition.table of contents")}
          </h2>
          <ul className="list-disc ltr:ml-5 ltr:sm:ml-10 rtl:mr-5 rtl:sm:mr-10 text-lg sm:text-xl space-y-2 *:w-fit *:hover:text-primary *:hover:underline">
            <li key="definition">
              <a href="#definition">{t("Condition.definition")}</a>
            </li>
            <li key="symptoms">
              <a href="#symptoms">{t("Condition.symptoms")}</a>
            </li>
            <li key="causes">
              <a href="#causes">{t("Condition.causes")}</a>
            </li>
            <li key="treatment">
              <a href="#treatment">{t("Condition.treatment")}</a>
            </li>
          </ul>
        </section>

        <section id="definition">
          <h2 className="text-primary text-xl sm:text-3xl font-bold mb-4">
            {t("Condition.What is", { title: condition.title })}
          </h2>
          <p className="text-lg sm:text-xl ml-1">{condition.definition}</p>
        </section>

        <Section
          id={"symptoms"}
          title={t("Condition.symptoms")}
          iterable={condition.symptoms}
        />
        <Section
          id={"causes"}
          title={t("Condition.causes")}
          iterable={condition.causes}
        />
        <Section
          id={"treatment"}
          title={t("Condition.treatment")}
          iterable={condition.treatment}
        />
      </Card>
    </div>
  );
}
