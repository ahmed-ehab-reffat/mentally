"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowDown } from "@/components/ui/icons";

export default function FAQ() {
  const [visibleAnswers, setVisibleAnswers] = useState<number[]>([]);
  const t = useTranslations("Home.FAQ");
  const faqs: { question: string; answer: string }[] = t.raw("data");

  function handleTrigger(index: number) {
    setVisibleAnswers((prev) => {
      if (!prev.includes(index)) {
        return [...prev, index];
      } else {
        return prev.filter((element) => element != index);
      }
    });
  }

  return (
    <section id="faq" className="bg-foreground">
      <div className="container mx-auto px-4 pt-10 pb-12">
        <h2 className="text-4xl font-bold text-primary text-center mb-8 capitalize">
          {t("title")}
        </h2>
        <ul className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="border border-primary rounded-lg overflow-hidden"
            >
              <div
                onClick={() => handleTrigger(index)}
                className="px-6 py-4 font-bold cursor-pointer hover:underline flex justify-between items-center"
              >
                {faq.question}
                <ArrowDown
                  className={`w-3 h-3 fill-primary duration-200 ${
                    visibleAnswers.includes(index) ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                id="answer"
                className={`px-6 duration-400 transition-all ${
                  visibleAnswers.includes(index)
                    ? "max-h-48 pb-4 md:max-h-28"
                    : "max-h-0 pb-0"
                }`}
              >
                {faq.answer}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
