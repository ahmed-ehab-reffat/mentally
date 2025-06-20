import { useTranslations } from "next-intl";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { ArrowRight, Hospital } from "@/components/ui/icons";

export default function Centers() {
  const t = useTranslations("Resources.Centers");

  const centers: {
    name: string;
    type: "Puplic" | "Private";
    address: string;
    phone: string;
    mapsUrl: string;
  }[] = t.raw("centers");

  return (
    <div className="container mx-auto px-6 pt-12 pb-16">
      <div className="flex items-center gap-2 sm:gap-4 mb-8 text-primary">
        <Hospital className="min-w-8 min-h-8 w-8 h-8 sm:w-10 sm:h-10" />
        <h1 className="text-2xl sm:text-4xl font-bold capitalize">
          {t("title")}
        </h1>
      </div>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {centers.map((center) => (
          <Card
            key={center.name}
            className="h-full flex flex-col justify-between"
          >
            <h3 className="text-xl sm:text-2xl text-center text-primary font-bold tracking-tighter mb-4">
              {center.name}
            </h3>
            <div className="mb-4 space-y-1">
              <p>{center.type}</p>
              <p>{center.address}</p>
              <p>
                {t("Phone")}: {center.phone}
              </p>
            </div>
            <a href={center.mapsUrl}>
              <Button className="flex items-center justify-center gap-2  w-3/4 mx-auto">
                {t("View on Map")}
                <ArrowRight className="w-3 h-3 rtl:mt-1" />
              </Button>
            </a>
          </Card>
        ))}
      </ul>
    </div>
  );
}
