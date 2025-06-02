import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Card from "@/components/ui/card";
import { ArrowDown } from "@/components/ui/icons";

export type Content = {
  icon: React.ReactNode;
  title: string;
  href: string;
}[];

type Props = {
  title: string;
  content: Content;
};

export default function CardsSection({ title, content }: Props) {
  const t = useTranslations("Home.CardsSection");

  return (
    <section id={title}>
      <div className="container mx-auto px-4 pt-10 pb-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-primary capitalize">
          {t(title)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {content.map((obj, index) => (
            <Link href={obj.href} key={index}>
              <Card className="flex flex-col justify-between h-full">
                <div className="bg-surface text-primary *:w-8 *:h-8 p-3 -ml-2 rounded-full w-16 h-16 flex items-center justify-center">
                  {obj.icon}
                </div>
                <h3 className="text-xl font-bold my-2 capitalize">
                  {t(`${obj.title}.title`)}
                </h3>
                <p>{t(`${obj.title}.description`)}</p>
                <div className="mt-4 text-primary flex items-center text-sm font-semibold">
                  {t("Learn more")}
                  <ArrowDown className="w-3 h-3 ltr:ml-1 ltr:rotate-270 rtl:mr-1 rtl:rotate-90 rtl:mt-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
