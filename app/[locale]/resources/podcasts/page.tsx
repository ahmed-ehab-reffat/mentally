import { useTranslations } from "next-intl";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Headphones } from "@/components/ui/icons";

export default function Podcasts() {
  const t = useTranslations("Resources.Podcasts");
  const podcasts: {
    title: string;
    url: string;
    description: string;
  }[] = t.raw("podcasts");

  return (
    <div className="container mx-auto px-6 pt-12 pb-16">
      <div className="flex items-center gap-2 sm:gap-4 mb-8 text-primary">
        <Headphones className="min-w-8 min-h-8 w-8 h-8 sm:w-10 sm:h-10" />
        <h1 className="text-2xl sm:text-4xl font-bold capitalize">
          {t("title")}
        </h1>
      </div>
      <ul className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {podcasts.map((podcast) => (
          <Card
            key={podcast.url}
            className="h-full text-center flex flex-col justify-between"
          >
            <h3 className="text-xl sm:text-2xl text-primary font-bold tracking-tighter mb-4">
              {podcast.title}
            </h3>
            <p className="text-lg mb-6">{podcast.description}</p>
            <a href={podcast.url}>
              <Button type="button" className="w-3/4">
                {t("Listen")}
              </Button>
            </a>
          </Card>
        ))}
      </ul>
    </div>
  );
}
