"use client";

import { ReactElement, useState } from "react";

import { fetchAI, type Message } from "@/lib/serverActions";

import Header from "./components/header.tsx";
import ProgressOverview from "./components/progress-overview.tsx";
import RecentInsights from "./components/recent-insights.tsx";
import KeyFeatures from "./components/key-features.tsx";
import Assessments from "./components/assessments.tsx";
import Tests, { type Test } from "./components/tests.tsx";
import Questions, { type Answer } from "./components/questions.tsx";
import Results from "./components/result.tsx";

export default function InsightsPage() {
  const [selectedTest, setSelectedTest] = useState<Test>();
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  async function handleSubmit() {
    if (!selectedTest || answers.length < selectedTest.questions.length) {
      return alert("Please answer all questions before submitting.");
    }
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] !== "Yes" && answers[i] !== "No")
        return alert("Please answer all questions before submitting.");
    }

    setIsAnalyzing(true);

    const systemMessage: Message = {
      role: "system",
      content: `You are an AI mental health analyst. Analyze the following answers for the ${selectedTest.title} test and provide a detailed report including:
        1. A summary of findings (e.g., detected patterns suggesting a level of concern)
        2. Detailed analysis (e.g., percentages or descriptions for positive indicators, stress indicators, and other factors)
        3. Recommendations (e.g., consulting a specialist, relaxation techniques)`,
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
    } catch (err) {
      console.error("Error in analysis:", err);
      alert(
        "An error occurred while analyzing your answers. Please try again."
      );
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
    content = <Results result={result} onBack={handleBack} />;
  }

  return (
    <div className="container xl:max-w-6xl mx-auto space-y-16 px-8 py-16">
      <Header />
      <ProgressOverview />
      <RecentInsights />
      <KeyFeatures />
      <Assessments>{content}</Assessments>
    </div>
  );
}
