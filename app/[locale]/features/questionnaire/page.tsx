"use client";

import { ReactElement, useEffect, useState } from "react";
import { fetchAI } from "@/lib/serverActions";
import Button from "@/components/ui/button";
import Loading from "@/components/loading";
import Result from "./components/result";
import { useLocale, useTranslations } from "next-intl";
import Card from "@/components/ui/card";

export default function Questionnaire() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    if (answers.length === questions.length) {
      handleSubmit();
    }
  }, [answers]);

  const t = useTranslations("Features.Questionnaire");
  const locale = useLocale();

  const questions: string[] = t.raw("questions");
  const options: string[] = t.raw("options");

  async function handleSubmit() {
    setIsAnalyzing(true);

    const systemMessage = {
      role: "system",
      content: `You are an AI mental health analyst. Analyze the following answers for a mental health assessment and provide a detailed report including:
          1. A summary of findings (e.g., detected patterns suggesting a level of concern for depression, anxiety, or other conditions)
          2. Detailed analysis (e.g., percentages or descriptions for symptoms like sadness, anxiety, sleep issues, etc.)
          3. Recommendations (e.g., consulting a specialist, relaxation techniques, or monitoring)
          Respond in ${locale} language only.`,
    };

    const answersText = questions
      .map(
        (question, index) =>
          `${question} - Answer: ${answers[index] || "Not answered"}`
      )
      .join("\n");

    const userMessage = {
      role: "user",
      content: answersText,
    };

    try {
      const response = await fetchAI(systemMessage, userMessage);
      setResult(response);
    } catch {
      alert(t("error"));
    } finally {
      setIsAnalyzing(false);
    }
  }

  function handleNext() {
    if (!selectedOption) return;

    setAnswers((prev) => [...prev, selectedOption]);
    setSelectedOption("");
  }

  function handlePrevious() {
    if (answers.length > 0) {
      setSelectedOption(answers[answers.length - 1] || "");
      answers.length = answers.length - 1;
    }
  }

  let content: ReactElement;
  if (result) {
    content = <Result result={result} />;
  } else {
    content = (
      <div className="space-y-4 sm:space-y-6">
        <header>
          <h1 className="text-xl sm:text-2xl text-primary font-bold capitalize">
            {t("title")}
          </h1>
          <p className="text-sm">{`${t("Question")} ${
            questions.length > answers.length
              ? answers.length + 1
              : questions.length
          } ${t("of")} ${questions.length}`}</p>
        </header>
        <main>
          <h2 className="sm:text-lg font-semibold mb-6">
            {questions[answers.length] || questions[answers.length - 1]}
          </h2>
          <ul role="radiogroup" className="grid grid-cols-2 gap-4">
            {options.map((option) => (
              <Button
                key={`question ${answers.length}: ${option}`}
                onClick={() => setSelectedOption(option)}
                className="*:cursor-pointer text-sm sm:text-base"
                selected={option === selectedOption}
                disabled={isAnalyzing}
              >
                <input
                  type="radio"
                  name={answers.length.toString()}
                  id={option}
                  defaultChecked={option === selectedOption}
                  className="hidden"
                />
                <label htmlFor={option}>{option}</label>
              </Button>
            ))}
          </ul>
        </main>
        {isAnalyzing ? (
          <Loading />
        ) : (
          <footer className="flex justify-between">
            <Button onClick={handlePrevious} disabled={answers.length === 0}>
              {t("Previous")}
            </Button>
            <Button onClick={handleNext} disabled={!selectedOption}>
              {answers.length === questions.length - 1
                ? t("Submit")
                : t("Next")}
            </Button>
          </footer>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto flex justify-center items-center px-6 py-16 max-w-3xl min-h-[calc(100dvh-3.25rem)] sm:min-h-[calc(100dvh-4rem)]">
      <Card className="">{content}</Card>
    </div>
  );
}
