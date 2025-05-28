import { Link } from "@/i18n/navigation";
import Button from "../ui/button";
import { useTranslations } from "next-intl";

export default function Chatbot() {
  const t = useTranslations("Home.Chatbot");
  return (
    <section id="chatbot" className="bg-foreground py-12">
      <div className="container mx-auto px-4 text-center">
        <div>
          <h2 className="text-primary text-4xl font-bold mb-8 capitalize">
            {t("title")}
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">{t("description")}</p>

          <Link href="/chatbot">
            <Button className="!px-8 !py-3 text-lg !rounded-full">
              {t("button")}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
