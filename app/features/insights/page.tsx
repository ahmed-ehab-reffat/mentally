"use client";

import { ReactNode, useState } from "react";

import { Lightbulb, ChartUp } from "@/components/ui/icons";
import {
  type Test,
  type Result,
  type Answer,
  tests,
  mockData,
  features,
  insights,
} from "./data.tsx";

export default function InsightsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "week" | "month" | "year"
  >("week");
  const [selectedTest, setSelectedTest] = useState<Test>();
  const [answers, setAnswers] = useState<Answer>([]);
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

  let content: ReactNode;
  if (!selectedTest) {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tests.map((test) => (
          <button
            key={test.id}
            onClick={() => {
              setSelectedTest(test);
              setAnswers([]);
              setResult(undefined);
            }}
            className="w-full uppercase rounded-lg shadow-md"
          >
            {test.title}
          </button>
        ))}
      </div>
    );
  } else if (!result) {
    content = (
      <div>
        <h3 className="text-xl font-semibold mb-4">{selectedTest.title}</h3>
        {selectedTest.questions.map((q, index) => (
          <div key={index} className="mb-4">
            <p className="mb-2">{q}</p>
            <div className="flex gap-2">
              <button onClick={() => handleAnswerChange("Yes")}>Yes</button>
              <button onClick={() => handleAnswerChange("No")}>No</button>
            </div>
          </div>
        ))}
        <button onClick={handleSubmit} className="mt-4" disabled={isAnalyzing}>
          {isAnalyzing ? "Analyzing..." : "Submit"}
        </button>
        {isAnalyzing && <progress value={50} className="w-full mt-2" />}
      </div>
    );
  } else {
    content = (
      <div className="mt-6">
        <div>
          <h2>Your Result</h2>
        </div>
        <main>
          <p>{result.summary}</p>
          <div className="mt-4">
            <h4 className="font-bold">Detailed Analysis:</h4>
            <ul className="list-disc pl-4">
              {result.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h4 className="font-bold">Recommendations:</h4>
            <ul className="list-disc pl-4">
              {result.recommendations.map((recommendation, index) => (
                <li key={index}>{recommendation}</li>
              ))}
            </ul>
          </div>
          <p className="text-sm mt-4">
            This test is for informational purposes only and is not a substitute
            for professional diagnosis.
          </p>
          <button onClick={() => setSelectedTest(undefined)} className="mt-4">
            Back to Tests
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="container xl:max-w-5xl mx-auto px-8 py-16">
      <div className="flex items-center gap-4 mb-8">
        <Lightbulb className="w-12 h-12 fill-primary" />
        <h1 className="text-4xl font-bold">Personalized Insights</h1>
      </div>
      <p className="text-xl mb-12">
        Gain deep understanding of your mental health patterns through our
        advanced analytics and personalized tracking system.
      </p>
      <section id="progress-overview" className="mb-12">
        <header>
          <h1>Your Progress Overview</h1>
          <p>Track your mental health metrics over time</p>
          <div className="mt-4">
            {(["week", "month", "year"] as const).map((period) => (
              <button key={period} onClick={() => setSelectedPeriod(period)}>
                {period.charAt(0).toUpperCase() + period.slice(1)}
              </button>
            ))}
          </div>
        </header>
        <main>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span>Mood Score</span>
                <span>{mockData[selectedPeriod].moodScore}%</span>
              </div>
              <progress
                value={mockData[selectedPeriod].moodScore}
                className="w-full"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Sleep Quality</span>
                <span>{mockData[selectedPeriod].sleepQuality}%</span>
              </div>
              <progress
                value={mockData[selectedPeriod].sleepQuality}
                className="w-full"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span>Anxiety Level</span>
                <span>{mockData[selectedPeriod].anxietyLevel}%</span>
              </div>
              <progress
                value={mockData[selectedPeriod].anxietyLevel}
                className="w-full"
              />
            </div>
            <div className="pt-4">
              <div className="text-sm">Activities Completed</div>
              <div className="text-2xl font-bold">
                {mockData[selectedPeriod].activitiesCompleted}
              </div>
            </div>
          </div>
        </main>
      </section>

      <div className="grid gap-12">
        <section id="recent-insights">
          <h2 className="text-2xl font-bold mb-6">Recent Insights</h2>
          <ul className="grid gap-4 md:grid-cols-2">
            {insights.map((insight, index) => (
              <li key={index}>
                <header>
                  <h2 className="text-lg">{insight.title}</h2>
                </header>
                <main>
                  <p className="mb-2">{insight.description}</p>
                  <div className="flex items-center text-green-500">
                    <ChartUp className="w-4 h-4 mr-1 fill-green-500" />
                    {insight.improvement}
                  </div>
                </main>
              </li>
            ))}
          </ul>
        </section>
        <section id="key-features">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section id="assessments">
          <h2 className="text-2xl font-bold mb-6">Mental Health Assessments</h2>
          <p className="mb-6">
            Explore our range of mental health tests to gain further insights
            into your well-being.
          </p>
          {content}
        </section>
      </div>
    </div>
  );
}
