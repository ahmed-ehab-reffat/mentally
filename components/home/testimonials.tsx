import { useTranslations } from "next-intl";
import Card from "@/components/ui/card";

export default function Testimonials() {
  const t = useTranslations("Home.Testimonials");
  const testimonials: {
    quote: string;
    author: string;
    role: string;
  }[] = t.raw("data");

  return (
    <section id="testimonials">
      <div className="container mx-auto px-6 pt-10 pb-12">
        <h2 className="text-primary text-3xl sm:text-4xl font-bold text-center mb-8 capitalize">
          {t("title")}
        </h2>
        <ul className="grid lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-primary">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-primary font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-primary -mb-1 text-lg font-bold">
                    {testimonial.author}
                  </h3>
                  <span className="text-primary">{testimonial.role}</span>
                </div>
              </div>
              <p className="mt-5 text-lg">
                <q>{testimonial.quote}</q>
              </p>
            </Card>
          ))}
        </ul>
      </div>
    </section>
  );
}
