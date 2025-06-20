"use client";

import { ReactElement, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { fetchAI, type Message } from "@/lib/serverActions";

import Header from "./components/header.tsx";
import ProgressOverview from "./components/progress-overview.tsx";
import RecentInsights from "./components/recent-insights.tsx";
import KeyFeatures from "./components/key-features.tsx";
import Assessments from "./components/assessments.tsx";
import Tests, { type Test } from "./components/tests.tsx";
import Questions, { type Answer } from "./components/questions.tsx";
import Result from "./components/result.tsx";

export default function Insights() {
  const [selectedTest, setSelectedTest] = useState<Test>();
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  const t = useTranslations("Features.Insights");
  const locale = useLocale();

  async function handleSubmit() {
    if (!selectedTest || answers.length < selectedTest.questions.length) {
      return alert(t("alert"));
    }
    for (let i = 0; i < answers.length; i++) {
      if (
        answers[i] !== "Yes" &&
        answers[i] !== "No" &&
        answers[i] !== "نعم" &&
        answers[i] !== "لا"
      )
        return alert(t("alert"));
    }

    setIsAnalyzing(true);

    const systemMessage: Message = {
      role: "system",
      content: `You are an AI mental health analyst. Analyze the following answers for the ${selectedTest.title} test and provide a detailed report including:
        1. A summary of findings (e.g., detected patterns suggesting a level of concern)
        2. Detailed analysis (e.g., percentages or descriptions for positive indicators, stress indicators, and other factors)
        3. Recommendations (e.g., consulting a specialist, relaxation techniques)
        Respond in ${locale} language only.`,
    };

    const answersText = selectedTest.questions
      .map((q, index) => `${q} - Answer: ${answers[index]}`)
      .join("\n");

    const userMessage: Message = {
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

  function handleAnswerChange(value: Answer, index: number) {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[index] = value;
      return newAnswers;
    });
  }

  function handleSelectTest(test: Test) {
    setSelectedTest(test);
    setAnswers([]);
    setResult("");
  }
  function handleBack() {
    setSelectedTest(undefined);
    setAnswers([]);
    setResult("");
  }

  let content: ReactElement;
  if (!selectedTest) {
    content = <Tests onSelect={handleSelectTest} />;
  } else if (!result) {
    content = (
      <Questions
        test={selectedTest}
        Answers={answers}
        onAnswer={handleAnswerChange}
        onSubmit={handleSubmit}
        isAnalyzing={isAnalyzing}
      />
    );
  } else {
    content = <Result result={result} onBack={handleBack} />;
  }

  return (
    <div className="container xl:max-w-6xl mx-auto space-y-12 sm:space-y-16 px-6 py-16">
      <Header />
      <ProgressOverview />
      <RecentInsights />
      <KeyFeatures />
      <Assessments>{content}</Assessments>
    </div>
  );
}
