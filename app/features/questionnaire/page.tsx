"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Result = {
  summary: string;
  details: string[];
  recommendations: string[];
};

export default function QuestionnairePage() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [result, setResult] = useState<Result>();

  useEffect(() => {
    if (answers.length === questions.length) {
      handleSubmit();
    }
  }, [answers]);

  function handleNext() {
    if (!selectedOption) return;

    setAnswers((prev) => [...prev, selectedOption]);
    setSelectedOption("");
  }

  async function handleSubmit() {
    setIsAnalyzing(true);

    const answersText = questions
      .map(
        (question, index) =>
          `${question} - Answer: ${answers[index] || "Not answered"}`
      )
      .join("\n");

    const systemMessage = {
      role: "system",
      content: `You are an AI mental health analyst. Analyze the following answers for a mental health assessment and provide a detailed report including:
          1. A summary of findings (e.g., detected patterns suggesting a level of concern for depression, anxiety, or other conditions)
          2. Detailed analysis (e.g., percentages or descriptions for symptoms like sadness, anxiety, sleep issues, etc.)
          3. Recommendations (e.g., consulting a specialist, relaxation techniques, or monitoring)`,
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
  }

  function parseAIResponse(response: string): Result {
    console.log(response);
    const summary: string =
      response.split("\n")[0] ||
      "Analysis of your mental health assessment: We detected patterns suggesting a moderate level of concern.";

    const details = response
      .match(/-\s*([^\n]+)/g)
      ?.map((line) => line.replace(/-\s*/, "")) || [
      "Depression indicators: 50%",
      "Anxiety indicators: 40%",
      "Sleep issues: 30%",
    ];

    const recommendations = response
      .match(/Recommendations:.*$/m)?.[0]
      ?.replace("Recommendations:", "")
      .trim()
      .split(";") || [
      "Consult a mental health professional",
      "Try relaxation techniques",
      "Monitor your symptoms",
    ];

    return {
      summary,
      details,
      recommendations: recommendations.filter(
        (r: string) => r.trim().length > 0
      ),
    };
  }

  return (
    <div className="container mx-auto px-8 py-16 max-w-2xl min-h-[calc(100dvh-4rem)]">
      <div className="bg-light p-8 rounded-xl shadow-lg">
        {!result && (
          <div>
            <header className="mb-6">
              <h1 className="text-2xl font-bold">Mental Health Assessment</h1>
              <p className="text-sm">{`Question ${
                questions.length > answers.length
                  ? answers.length + 1
                  : questions.length
              } of ${questions.length}`}</p>
            </header>
            <div className="mb-6">
              <div>
                <h2 className="text-lg font-semibold mb-6">
                  {questions[answers.length] || questions[answers.length - 1]}
                </h2>
                <div role="radiogroup" className="grid grid-cols-2 gap-4">
                  {options.map((option) => (
                    <p
                      key={`question ${answers.length}: ${option}`}
                      onClick={() => setSelectedOption(option)}
                      className="flex items-center p-2 *:cursor-pointer cursor-pointer bg-white rounded-lg hover:bg-lighter transition-200"
                    >
                      <input
                        type="radio"
                        name={`question ${answers.length} option`}
                        value={option}
                        id={option}
                        defaultChecked={option === selectedOption}
                      />
                      <label htmlFor={option} className="ml-2 w-full">
                        {option}
                      </label>
                    </p>
                  ))}
                </div>
              </div>
              {isAnalyzing && <progress value={50} className="w-full mt-4" />}
            </div>
            <footer className="flex justify-between">
              <button
                onClick={() => {
                  if (answers.length > 0) {
                    setSelectedOption(answers[answers.length - 1] || "");
                    answers.length = answers.length - 1;
                  }
                }}
                disabled={answers.length === 0}
                className="bg-white px-4 py-2 rounded-md cursor-pointer hover:bg-lighter duration-200"
              >
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!selectedOption || isAnalyzing}
                className="bg-white px-4 py-2 rounded-md cursor-pointer hover:bg-lighter duration-200"
              >
                {answers.length === questions.length - 1 ? "Submit" : "Next"}
              </button>
            </footer>
          </div>
        )}

        {result && !isAnalyzing && (
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">
              Your Mental Health Assessment Results
            </h3>
            <p className=" mb-4">{result.summary}</p>
            <div className="mb-4">
              <h4 className="font-semibold">Detailed Analysis:</h4>
              <ul className="list-disc pl-4">
                {result.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-bold">Recommendations:</h4>
              <ul className="list-disc pl-4">
                {result.recommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </div>
            <p className="text-sm mb-4">
              This assessment is for informational purposes only and is not a
              substitute for professional diagnosis.
            </p>
            <Link href="/user-info" className="mt-4">
              Proceed to Additional Information
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

const questions: string[] = [
  "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",

  "How often do you feel nervous, anxious, or on edge?",
  "How often do you find yourself losing interest in activities that used to bring you joy?",
  "Have you been feeling unusually tired or lacking energy even after a good rest?",
  "How often do you struggle with concentrating or making decisions?",
  "How often do you experience feelings of worthlessness or guilt?",
  "Have you had trouble sleeping or have you been sleeping excessively?",
  "How often do you worry excessively about everyday situations?",
  "Do you feel restless or easily irritated?",
  "Have you noticed physical symptoms like headaches or muscle tension due to stress?",
  "Do you experience intrusive thoughts or disturbing worries that are difficult to control?",
  "Have you avoided people, places, or situations that remind you of a traumatic experience?",
  "Do you experience flashbacks or nightmares about a traumatic event?",
  "Do you feel the need to repeatedly perform certain behaviors, like checking or cleaning?",
  "Do you experience sudden mood changes or feel extremely energized at times?",
];
const options: string[] = [
  "Not at all",
  "Several days",
  "More than half the days",
  "Nearly every day",
];
