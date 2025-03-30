"use client";

import { JSX, useState } from "react";

import { Brain, CircleCheck, Plus, Share } from "@/components/ui/icons";
import { tests, benefits, howItWorks } from "./data";
import Button from "@/components/ui/button";

type Result = {
  summary: string;
  details: string[];
  emotions: {
    name: string;
    value: number;
  }[];
};

type Message = {
  role: string;
  content: string;
};

export default function AIAnalysisPage() {
  const [demoProgress, setDemoProgress] = useState<number>(0);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [result, setResult] = useState<Result>();
  const [inputText, setInputText] = useState<string>("");
  const [selectedTest, setSelectedTest] = useState<(typeof tests)[0]>();

  async function startAnalysis() {
    if (!inputText || !selectedTest)
      return alert("Please select a test and enter text");

    setIsAnalyzing(true);
    setResult(undefined);
    setDemoProgress(0);

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

      console.log(response);
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

  function parseAIResponse(response: string): Result {
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
  }

  // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  let content: JSX.Element = <></>;

  if (!isAnalyzing && !result) {
    content = (
      <div className="space-y-4">
        <textarea
          placeholder="Enter your text here for analysis..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="w-full"
        />
        <Button type="button" onClick={startAnalysis} className="w-full">
          Start Analysis
        </Button>
      </div>
    );
  } else if (isAnalyzing) {
    content = (
      <div className="space-y-4">
        <div className="flex items-center justify-between mb-2">
          <div>Analyzing patterns...</div>
          <div>{demoProgress}%</div>
        </div>
        <progress value={demoProgress} className="w-full" />
      </div>
    );
  } else if (result) {
    content = (
      <div className="bg-secondary p-4 rounded-lg">
        <h3 className="font-semibold mb-2">Analysis Result:</h3>
        <p className="">{result.summary}</p>
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
            onClick={() => setResult(undefined)}
            className="bg-teal-600 hover:bg-teal-700"
          >
            Run Another Analysis
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container xl:max-w-6xl mx-auto space-y-16 px-8 py-16">
      <header>
        <div className="flex items-center gap-4 mb-8">
          <Brain className="w-10 h-10 fill-primary" />
          <h1 className="text-4xl font-bold text-primary">
            AI-Powered Analysis
          </h1>
        </div>

        <p className="text-xl">
          Our advanced AI system provides real-time emotional analysis and
          personalized support for your mental health journey.
        </p>
      </header>

      <section id="tests" className="bg-light p-8 rounded-lg shadow-lg">
        <h2 className="text-primary text-2xl font-bold">
          Select a Mental Health Test
        </h2>
        <p className="text-lg mb-6">
          Choose a test to analyze specific mental health aspects.
        </p>
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tests.map((test) => (
              <li
                key={test}
                onClick={() => setSelectedTest(test)}
                className="bg-white flex justify-between items-center px-4 py-2 rounded-md cursor-pointer hover:bg-lighter duration-200 uppercase"
              >
                {test}
                <Plus className="w-3 h-3 fill-secondry" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="analysis" className="bg-light p-8 rounded-lg shadow-lg">
        <div>
          <h2 className="text-primary text-2xl font-bold">
            Try Our AI Analysis
          </h2>
          <p className="text-lg mb-6">
            {selectedTest
              ? `Analyzing: ${selectedTest.toUpperCase()}`
              : "Select a test and enter text to start."}
          </p>
        </div>
        <div>{content}</div>
      </section>

      <section id="how-it-works">
        <h2 className="text-primary text-2xl font-bold mb-4">How It Works</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {howItWorks.map((item, index) => (
            <div key={index} className="bg-light p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="benefits">
        <h2 className="text-primary text-2xl font-bold mb-4">Key Benefits</h2>
        <ul className="bg-light p-8 space-y-4 rounded-lg shadow-lg">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-3">
              <CircleCheck className="w-5 h-5 fill-secondry" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="learn-more">
        <h2 className="text-primary text-2xl font-bold">Learn More</h2>
        <p className="text-lg mb-4">
          Explore additional resources about mental health and AI technology:
        </p>
        <ul className="pl-8 list-disc text-secondry text-lg">
          <li>
            <a
              href="https://www.who.int/health-topics/mental-health"
              className="hover:underline"
            >
              World Health Organization - Mental Health
            </a>
          </li>
          <li>
            <a
              href="https://www.aiinhealthcare.com"
              className="hover:underline"
            >
              AI in Healthcare
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
