import { Link } from "@/i18n/navigation";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Book } from "@/components/ui/icons";
import { useTranslations } from "next-intl";

export default function Articles() {
  const t = useTranslations("Resources.Articles");

  const conditions: {
    id: string;
    title: string;
    description: string;
    definition: string;
    symptoms: string[];
    causes: string[];
    treatment: string[];
  }[] = t.raw("conditions");

  return (
    <div className="container mx-auto px-8 pt-12 pb-16">
      <div className="flex items-center gap-4 mb-8 text-primary">
        <Book className="w-10 h-10" />
        <h1 className="text-4xl font-bold capitalize">{t("title")}</h1>
      </div>
      <p className="text-xl mb-12">{t("description")}</p>
      <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {conditions.map((condition) => (
          <Card
            key={condition.id}
            className="h-full text-center flex flex-col justify-between"
          >
            <h3 className="text-2xl text-primary font-bold tracking-tighter mb-4">
              {condition.title}
            </h3>
            <p className="text-lg mb-6">{condition.description}</p>
            <Link
              key={condition.id}
              href={`/resources/articles/${condition.id}`}
            >
              <Button className="w-3/4">{t("Learn more")}</Button>
            </Link>
          </Card>
        ))}
      </ul>
    </div>
  );
}
