"use client";

import { ReactElement, useState, useRef } from "react";

import { fetchAI, type Message } from "@/lib/utils";
import HowItWorks from "./components/how-it-works";
import Benefits from "./components/benefits";
import Tests from "./components/tests";
import Header from "./components/header";
import LearnMore from "./components/learn-more";
import Analysis from "./components/analysis";
import Result from "./components/result";
import Loading from "./components/loading";
import UserText from "./components/userText";

export default function AIAnalysisPage() {
  const [selectedTest, setSelectedTest] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null!);

  async function startAnalysis() {
    if (!textareaRef.current.value || !selectedTest)
      return alert("Please select a test and enter text");

    setIsAnalyzing(true);

    const systemMessage: Message = {
      role: "system",
      content: `You are an AI mental health analyst. Analyze the user's text for the ${selectedTest} and provide a detailed report including: 
        1. A summary of findings (e.g., detected patterns suggesting a level of concern)
        2. Detailed analysis (e.g., percentages for positive indicators, stress indicators, and other factors)
        3. Emotional distribution (e.g., calm, stress, uncertainty with percentages)
        `,
    };

    const userMessage: Message = {
      role: "user",
      content: textareaRef.current.value,
    };

    try {
      const response = await fetchAI(systemMessage, userMessage);
      setResult(response);
    } catch (err) {
      console.error("Error in analysis:", err);
      alert("An error occurred while analyzing. Please try again.");
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
    <div className="container xl:max-w-6xl mx-auto space-y-16 px-8 py-16">
      <Header />
      <Tests selected={selectedTest} onSelect={handleSelectTest} />
      <Analysis title={selectedTest}>{content}</Analysis>
      <HowItWorks />
      <Benefits />
      <LearnMore />
    </div>
  );
}
