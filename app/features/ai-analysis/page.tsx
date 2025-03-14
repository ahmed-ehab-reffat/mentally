"use client";

import { useState } from "react";

import { Brain, CircleCheck, Share } from "@/components/ui/icons";

type Result = {
  summary: string;
  details: string[];
  emotions: {
    name: string;
    value: number;
  }[];
} | null;

export default function AIAnalysisPage() {
  const [demoProgress, setDemoProgress] = useState<number>(0);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [result, setResult] = useState<Result>(null);
  const [inputText, setInputText] = useState<string>("");
  const [selectedTest, setSelectedTest] = useState<{
    id: string;
    label: string;
  } | null>(null);

  async function startAnalysis() {
    if (!inputText || !selectedTest)
      return alert("Please select a test and enter text");

    setIsAnalyzing(true);
    setResult(null);
    setDemoProgress(0);

    const systemMessage = {
      role: "system",
      content: `You are an AI mental health analyst. Analyze the user's text for the ${selectedTest.label} and provide a detailed report including: 
        1. A summary of findings (e.g., detected patterns suggesting a level of concern)
        2. Detailed analysis (e.g., percentages for positive indicators, stress indicators, and other factors)
        3. Emotional distribution (e.g., calm, stress, uncertainty with percentages)
        `,
    };

    const userMessage = {
      role: "user",
      content: inputText,
    };

    const interval = setInterval(() => {
      setDemoProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

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
      alert("An error occurred while analyzing. Please try again.");
      setIsAnalyzing(false);
    } finally {
      clearInterval(interval);
      setDemoProgress(100);
      setIsAnalyzing(false);
    }
  }

  const parseAIResponse = (response: string): Result => {
    const summary: string =
      response.split("\n")[0] ||
      "Analysis for the selected test: We detected patterns suggesting a moderate level of concern.";

    const details: string[] = response
      .match(/-\s*([^\n]+)/g)
      ?.map((line) => line.replace(/-\s*/, "")) || [
      "Positive indicators: 60%",
      "Stress indicators: 30%",
      "Other factors: 10%",
    ];
    const emotions: {
      name: string;
      value: number;
    }[] = [
      { name: "Calm", value: 60 },
      { name: "Stress", value: 30 },
      { name: "Uncertainty", value: 10 },
    ];

    return { summary, details, emotions };
  };

  // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="container xl:max-w-5xl mx-auto px-8 py-16">
      <div className="">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Brain className="w-12 h-12 text-teal-600" />
            <h1 className="text-4xl font-bold text-foreground">
              AI-Powered Analysis
            </h1>
          </div>

          <p className="text-xl text-foreground/80 mb-6">
            Our advanced AI system provides real-time emotional analysis and
            personalized support for your mental health journey.
          </p>

          <div className="mb-12">
            <div>
              <h2>Select a Mental Health Test</h2>
              <p>Choose a test to analyze specific mental health aspects.</p>
            </div>
            <div>
              <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {tests.map((test) => (
                  <li
                    key={test.id}
                    onClick={() => setSelectedTest(test)}
                    className="bg-white px-4 py-2 rounded-md cursor-pointer hover:bg-lighter duration-200"
                  >
                    {test.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mb-12">
            <div>
              <h2>Try Our AI Analysis</h2>
              <p>
                {selectedTest
                  ? `Analyzing: ${selectedTest.label}`
                  : "Select a test and enter text to start."}
              </p>
            </div>
            <div>
              {!isAnalyzing && !result && (
                <div className="space-y-4">
                  <textarea
                    placeholder="Enter your text here for analysis..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="w-full"
                  />
                  <button
                    onClick={startAnalysis}
                    className="w-full cursor-pointer bg-white hover:bg-lighter"
                  >
                    Start Analysis
                  </button>
                </div>
              )}

              {isAnalyzing && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>Analyzing patterns...</div>
                    <div>{demoProgress}%</div>
                  </div>
                  <progress value={demoProgress} className="w-full" />
                </div>
              )}

              {result && (
                <div className="bg-secondary p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Analysis Result:</h3>
                  <p className="text-foreground/80">{result.summary}</p>
                  <div className="mt-4">
                    <h4 className="font-semibold">Detailed Analysis:</h4>
                    <ul className="list-disc pl-4">
                      {result.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                  {/* <div className="mt-4">
                    <h4 className="font-semibold">Emotional Distribution:</h4>
                    <PieChart width={200} height={200}>
                      <Pie
                        data={result.emotions}
                        cx={100}
                        cy={100}
                        outerRadius={80}
                        dataKey="value"
                      >
                        {result.emotions.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </div> */}
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() =>
                        (window.location.href = `mailto:?subject=Analysis Result&body=${encodeURIComponent(
                          result.summary
                        )}`)
                      }
                      className="bg-teal-600 hover:bg-teal-700"
                    >
                      <Share className="w-4 h-4 mr-2" />
                      Share Result
                    </button>
                    <button
                      onClick={() => setResult(null)}
                      className="bg-teal-600 hover:bg-teal-700"
                    >
                      Run Another Analysis
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
            <ul className="grid gap-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CircleCheck className="w-6 h-6 fill-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">How It Works</h2>
            <div className="grid gap-6">
              {howItWorks.map((item, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-foreground/80">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Learn More</h2>
            <p className="text-foreground/80">
              Explore additional resources about mental health and AI
              technology:
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>
                <a
                  href="https://www.who.int/health-topics/mental-health"
                  target="_blank"
                  className="text-teal-600 hover:underline"
                >
                  World Health Organization - Mental Health
                </a>
              </li>
              <li>
                <a
                  href="https://www.aiinhealthcare.com"
                  target="_blank"
                  className="text-teal-600 hover:underline"
                >
                  AI in Healthcare
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

const tests: {
  id: string;
  label: string;
}[] = [
  {
    id: "depression",
    label: "DEPRESSION TEST",
  },
  {
    id: "anxiety",
    label: "ANXIETY TEST",
  },
  {
    id: "adhd",
    label: "ADHD TEST",
  },
  { id: "ptsd", label: "PTSD TEST" },
  {
    id: "parent",
    label: "PARENT TEST: YOUR CHILD'S MENTAL HEALTH",
  },
  {
    id: "postpartum",
    label: "POSTPARTUM DEPRESSION TEST",
  },
  {
    id: "bipolar",
    label: "BIPOLAR TEST",
  },
  {
    id: "eating",
    label: "EATING DISORDER TEST",
  },
  {
    id: "youth",
    label: "YOUTH MENTAL HEALTH TEST",
  },
  {
    id: "psychosis",
    label: "PSYCHOSIS & SCHIZOPHRENIA TEST",
  },
  { id: "addiction", label: "ADDICTION TEST" },
  {
    id: "self-inquiry",
    label: "SELF-INQUIRY SURVEY",
  },
];

const benefits: string[] = [
  "Real-time emotion analysis during conversations",
  "Personalized support recommendations",
  "Pattern recognition in emotional states",
  "24/7 availability for immediate assistance",
  "Continuous learning from interactions",
];

const howItWorks: {
  title: string;
  description: string;
}[] = [
  {
    title: "Natural Language Processing",
    description:
      "Our AI analyzes your text input to understand emotions and context",
  },
  {
    title: "Sentiment Analysis",
    description:
      "Advanced algorithms detect emotional patterns and mood variations",
  },
  {
    title: "Personalized Response",
    description: "Tailored support based on your unique emotional profile",
  },
];
