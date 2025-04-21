"use client";

import { ReactElement, useEffect, useState } from "react";
import { fetchAI } from "@/lib/utils";
import Button from "@/components/ui/button";
import Loading from "@/components/loading";
import Result from "./components/result";

export default function QuestionnairePage() {
  const [answers, setAnswers] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [result, setResult] = useState<string>("");

  useEffect(() => {
    if (answers.length === questions.length) {
      handleSubmit();
    }
  }, [answers]);

  async function handleSubmit() {
    setIsAnalyzing(true);

    const systemMessage = {
      role: "system",
      content: `You are an AI mental health analyst. Analyze the following answers for a mental health assessment and provide a detailed report including:
          1. A summary of findings (e.g., detected patterns suggesting a level of concern for depression, anxiety, or other conditions)
          2. Detailed analysis (e.g., percentages or descriptions for symptoms like sadness, anxiety, sleep issues, etc.)
          3. Recommendations (e.g., consulting a specialist, relaxation techniques, or monitoring)`,
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
    } catch (err) {
      console.error("Error in analysis:", err);
      alert(
        "An error occurred while analyzing your answers. Please try again."
      );
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
      <div className="space-y-6">
        <header>
          <h1 className="text-2xl font-bold">Mental Health Assessment</h1>
          <p className="text-sm">{`Question ${
            questions.length > answers.length
              ? answers.length + 1
              : questions.length
          } of ${questions.length}`}</p>
        </header>
        <main>
          <h2 className="text-lg font-semibold mb-6">
            {questions[answers.length] || questions[answers.length - 1]}
          </h2>
          <ul role="radiogroup" className="grid grid-cols-2 gap-4">
            {options.map((option) => (
              <Button
                key={`question ${answers.length}: ${option}`}
                onClick={() => setSelectedOption(option)}
                className="*:cursor-pointer"
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
              Previous
            </Button>
            <Button onClick={handleNext} disabled={!selectedOption}>
              {answers.length === questions.length - 1 ? "Submit" : "Next"}
            </Button>
          </footer>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto px-8 py-16 max-w-3xl min-h-[calc(100dvh-4rem)]">
      <div className="bg-light p-8 rounded-xl shadow-lg">{content}</div>
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
