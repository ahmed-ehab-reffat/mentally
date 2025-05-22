import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Envelope } from "@/components/ui/icons";
import Input from "@/components/ui/input";
import { useTranslations } from "next-intl";

export default function Newsletter() {
  const t = useTranslations("Home.Newsletter");

  return (
    <section className="px-4 pt-10 pb-16">
      <Card className="max-w-2xl mx-auto text-center border border-primary">
        <div className="inline-block p-5 rounded-full bg-surface">
          <Envelope className="w-7 h-7 align-[-0.125em] fill-primary" />
        </div>
        <h2 className="text-primary text-3xl font-bold mb-4 capitalize">
          {t("title")}
        </h2>
        <p className="mb-8">{t("description")}</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder={t("Enter your email")}
            className="flex-1"
          />
          <Button type="button" className="capitalize">
            {t("subscribe")}
          </Button>
        </form>
      </Card>
    </section>
  );
}
