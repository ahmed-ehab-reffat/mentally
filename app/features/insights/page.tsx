"use client";

import { ReactNode, useState } from "react";

import KeyFeatures from "@/components/features/insights/key-features.tsx";
import RecentInsights from "@/components/features/insights/recent-insights.tsx";
import ProgressOverview from "@/components/features/insights/progress-overview.tsx";
import Questions, {
  type Answer,
} from "@/components/features/insights/questions";
import Tests, { type Test } from "@/components/features/insights/tests.tsx";
import Results, {
  type Result,
} from "@/components/features/insights/result.tsx";

import { Lightbulb } from "@/components/ui/icons";
import Button from "@/components/ui/button";

export default function InsightsPage() {
  const [selectedTest, setSelectedTest] = useState<Test>();
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [result, setResult] = useState<Result>();
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);

  const handleAnswerChange = (value: "Yes" | "No") => {
    setAnswers((prev) => [...prev, value]);
  };

  const handleSubmit = async () => {
    if (!selectedTest || answers.length < selectedTest.questions.length) {
      return alert("Please answer all questions before submitting.");
    }

    setIsAnalyzing(true);

    const answersText = selectedTest.questions
      .map((q, index) => `${q} - Answer: ${answers[index]}`)
      .join("\n");

    const systemMessage = {
      role: "system",
      content: `You are an AI mental health analyst. Analyze the following answers for the ${selectedTest.title} test and provide a detailed report including:
        1. A summary of findings (e.g., detected patterns suggesting a level of concern)
        2. Detailed analysis (e.g., percentages or descriptions for positive indicators, stress indicators, and other factors)
        3. Recommendations (e.g., consulting a specialist, relaxation techniques)`,
    };

    const userMessage = {
      role: "user",
      content: answersText,
    };

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [systemMessage, userMessage],
            max_tokens: 500,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(JSON.stringify(errorData));
      }

      const data = await response.json();
      const aiResponse: string = data.choices[0].message.content;

      const parsedResult = parseAIResponse(aiResponse);
      setResult(parsedResult);
    } catch (err) {
      console.error("Error in analysis:", err);
      alert(
        "An error occurred while analyzing your answers. Please try again."
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  function parseAIResponse(response: string): Result {
    const summary =
      response.split("\n")[0] ||
      "Analysis for the selected test: We detected patterns suggesting a moderate level of concern.";
    const details = response
      .match(/-\s*([^\n]+)/g)
      ?.map((line) => line.replace(/-\s*/, "")) || [
      "Positive indicators: 60%",
      "Stress indicators: 30%",
      "Other factors: 10%",
    ];
    const recommendations = response
      .match(/Recommendations:.*$/m)?.[0]
      ?.replace("Recommendations:", "")
      .trim()
      .split(";") || [
      "Consult a mental health professional",
      "Try relaxation techniques",
    ];

    return {
      summary,
      details,
      recommendations: recommendations.filter(
        (r: string) => r.trim().length > 0
      ),
    };
  }

  function handleSelect(test: Test) {
    setSelectedTest(test);
    setAnswers([]);
    setResult(undefined);
  }
  function handleBack() {
    setSelectedTest(undefined);
  }

  let content: ReactNode;
  if (!selectedTest) {
    content = <Tests onSelect={handleSelect} />;
  } else if (!result) {
    content = (
      <div>
        <h3 className="text-xl font-semibold mb-4">{selectedTest.title}</h3>
        <Questions
          questions={selectedTest.questions}
          onAnswer={handleAnswerChange}
        />
        <Button onClick={handleSubmit} disabled={isAnalyzing}>
          {isAnalyzing ? "Analyzing..." : "Submit"}
        </Button>
        {isAnalyzing && <progress value={50} className="w-full mt-2" />}
      </div>
    );
  } else {
    content = <Results result={result} onBack={handleBack} />;
  }

  return (
    <div className="container xl:max-w-6xl mx-auto space-y-16 px-8 py-16">
      <header>
        <div className="flex items-center gap-4 mb-8">
          <Lightbulb className="w-10 h-10 fill-primary" />
          <h1 className="text-4xl font-bold text-primary">
            Personalized Insights
          </h1>
        </div>
        <p className="text-xl">
          Gain deep understanding of your mental health patterns through our
          advanced analytics and personalized tracking system.
        </p>
      </header>

      <ProgressOverview />
      <RecentInsights />
      <KeyFeatures />

      <section id="assessments" className="bg-light p-8 rounded-lg shadow-lg">
        <h2 className="text-primary text-2xl font-bold">
          Mental Health Assessments
        </h2>
        <p className="text-lg mb-6">
          Explore our range of mental health tests to gain further insights into
          your well-being.
        </p>
        {content}
      </section>
    </div>
  );
}
