"use client";

import { useState } from "react";

import { ArrowDown } from "@/components/ui/icons";

export default function FAQ() {
  const [visibleAnswers, setVisibleAnswers] = useState<number[]>([]);

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
    <section id="faq" className="bg-light">
      <div className="container mx-auto px-4 pt-10 pb-12">
        <h2 className="text-4xl font-bold text-primary text-center mb-8 capitalize">
          frequently asked questions
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
                  className={`w-3 h-3 fill-secondry duration-200 ${
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

const faqs: { question: string; answer: string }[] = [
  {
    question: "How does the AI analysis work?",
    answer:
      "Our AI system uses advanced natural language processing to analyze your responses and emotional patterns, providing personalized support and recommendations based on your unique situation.",
  },
  {
    question: "Are the group therapy sessions confidential?",
    answer:
      "Yes, all group therapy sessions are completely confidential and moderated by licensed professionals. We maintain strict privacy standards to ensure a safe space for all participants.",
  },
  {
    question: "How often should I use the platform?",
    answer:
      "We recommend regular check-ins, ideally daily or weekly, to get the most benefit from the platform. However, you can use it as frequently as you need based on your personal circumstances.",
  },
  {
    question: "Can I track my progress over time?",
    answer:
      "Yes, our platform provides detailed progress tracking through personalized insights, charts, and regular assessment reports to help you monitor your mental health journey.",
  },
];
