"use client";

import { ReactElement, useState, useRef } from "react";

import { fetchAI, type Message } from "@/lib/serverActions";
import HowItWorks from "./components/how-it-works";
import Benefits from "./components/benefits";
import Tests from "./components/tests";
import Header from "./components/header";
import LearnMore from "./components/learn-more";
import Analysis from "./components/analysis";
import Result from "./components/result";
import UserText from "./components/userText";
import Loading from "@/components/loading";
import { useLocale, useTranslations } from "next-intl";

export default function AIAnalysis() {
  const [selectedTest, setSelectedTest] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null!);

  const t = useTranslations("Features.AIAnalysis");
  const locale = useLocale();

  async function startAnalysis() {
    if (!textareaRef.current.value || !selectedTest) return alert(t("alert"));

    setIsAnalyzing(true);

    const systemMessage: Message = {
      role: "system",
      content: `You are an AI mental health analyst. Analyze the user's text for the ${selectedTest} and provide a detailed report including: 
        1. A summary of findings (e.g., detected patterns suggesting a level of concern)
        2. Detailed analysis (e.g., percentages for positive indicators, stress indicators, and other factors)
        3. Emotional distribution (e.g., calm, stress, uncertainty with percentages)
        Respond in ${locale} language only.`,
    };

    const userMessage: Message = {
      role: "user",
      content: textareaRef.current.value,
    };

    try {
      const response = await fetchAI(systemMessage, userMessage);
      setResult(response);
    } catch {
      alert(t("error"));
      setIsAnalyzing(false);
    } finally {
      setIsAnalyzing(false);
    }
  }

  function handleSelectTest(test: string) {
    setSelectedTest(test);
  }
  function handleBack() {
    setResult("");
  }

  let content: ReactElement;
  if (result) {
    content = <Result result={result} onBack={handleBack} />;
  } else if (isAnalyzing) {
    content = <Loading />;
  } else {
    content = <UserText ref={textareaRef} onStart={startAnalysis} />;
  }

  return (
    <div className="container xl:max-w-6xl mx-auto space-y-12 sm:space-y-16 px-6 py-16">
      <Header />
      <Tests selected={selectedTest} onSelect={handleSelectTest} />
      <Analysis title={selectedTest}>{content}</Analysis>
      <HowItWorks />
      <Benefits />
      <LearnMore />
    </div>
  );
}
