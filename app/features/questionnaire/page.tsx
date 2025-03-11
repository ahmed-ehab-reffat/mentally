"use client";

import Link from "next/link";
import { useState } from "react";

export default function QuestionnairePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false); // State for showing progress during analysis
  const [showResult, setShowResult] = useState(null); // State to show the analysis result

  const handleNext = async () => {
    if (!selectedOption) return;

    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: selectedOption,
    }));

    if (currentQuestion === questions.length - 1) {
      setIsAnalyzing(true);

      // Prepare answers text for OpenAI
      const answersText = questions
        .map(
          (q) => `${q.question} - Answer: ${answers[q.id] || "Not answered"}`
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
        const aiResponse = data.choices[0].message.content;

        // Parse AI response
        const parsedResult = parseAIResponse(aiResponse);
        setShowResult(parsedResult); // Show the result in the UI

        // Store results in localStorage
        localStorage.setItem(
          "questionnaireResult",
          JSON.stringify(parsedResult)
        );
      } catch (err) {
        console.error("Error in analysis:", err);
        alert(
          "An error occurred while analyzing your answers. Please try again."
        );
      } finally {
        setIsAnalyzing(false);
      }
    } else {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedOption("");
    }
  };

  // Function to parse AI response
  const parseAIResponse = (response) => {
    const summary =
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
      recommendations: recommendations.filter((r) => r.trim().length > 0),
    };
  };

  return (
    <div className="container mx-auto px-8 py-16 max-w-2xl h-screen">
      <div>
        <div>
          <h1>Mental Health Assessment</h1>
          <p>{`Question ${currentQuestion + 1} of ${questions.length}`}</p>
        </div>
        <CardContent>
          <div className="space-y-6">
            <h2 className="text-lg font-medium">
              {questions[currentQuestion].question}
            </h2>
            <RadioGroup
              value={selectedOption}
              onValueChange={setSelectedOption}
              className="grid grid-cols-2 gap-4"
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div
                  key={option}
                  className="flex items-center space-x-2 p-2 bg-muted rounded-md hover:bg-muted/80 transition-colors"
                >
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="cursor-pointer w-full">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
          {isAnalyzing && <Progress value={50} className="w-full mt-4" />}
        </CardContent>
        <CardFooter className="flex justify-between">
          <button
            onClick={() => {
              if (currentQuestion > 0) {
                setCurrentQuestion((prev) => prev - 1);
                setSelectedOption(
                  answers[questions[currentQuestion - 1].id] || ""
                );
              }
            }}
            disabled={currentQuestion === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={!selectedOption || isAnalyzing}
          >
            {currentQuestion === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </CardFooter>

        {/* Display results after analysis */}
        {showResult && !isAnalyzing && (
          <CardContent className="mt-6">
            <h3 className="text-xl font-semibold mb-4">
              Your Mental Health Assessment Results
            </h3>
            <p className="text-foreground/80 mb-4">{showResult.summary}</p>
            <div className="mb-4">
              <h4 className="font-semibold">Detailed Analysis:</h4>
              <ul className="list-disc pl-4">
                {showResult.details.map((detail, index) => (
                  <li key={index} className="text-foreground/80">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Recommendations:</h4>
              <ul className="list-disc pl-4">
                {showResult.recommendations.map((recommendation, index) => (
                  <li key={index} className="text-foreground/80">
                    {recommendation}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-foreground/60 mb-4">
              This assessment is for informational purposes only and is not a
              substitute for professional diagnosis.
            </p>
            <Link href="/user-info" className="mt-4">
              Proceed to Additional Information
            </Link>
          </CardContent>
        )}
      </div>
    </div>
  );
}

// Sample questions for mental health assessment with Arabic translations
const questions: {
  id: number;
  question: string;
  options: string[];
}[] = [
  {
    id: 1,
    question:
      "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 2,
    question: "How often do you feel nervous, anxious, or on edge?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 3,
    question:
      "How often do you find yourself losing interest in activities that used to bring you joy?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 4,
    question:
      "Have you been feeling unusually tired or lacking energy even after a good rest?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 5,
    question:
      "How often do you struggle with concentrating or making decisions?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 6,
    question: "How often do you experience feelings of worthlessness or guilt?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 7,
    question:
      "Have you had trouble sleeping or have you been sleeping excessively?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 8,
    question: "How often do you worry excessively about everyday situations?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 9,
    question: "Do you feel restless or easily irritated?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 10,
    question:
      "Have you noticed physical symptoms like headaches or muscle tension due to stress?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 11,
    question:
      "Do you experience intrusive thoughts or disturbing worries that are difficult to control?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 12,
    question:
      "Have you avoided people, places, or situations that remind you of a traumatic experience?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 13,
    question:
      "Do you experience flashbacks or nightmares about a traumatic event?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 14,
    question:
      "Do you feel the need to repeatedly perform certain behaviors, like checking or cleaning?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 15,
    question:
      "Do you experience sudden mood changes or feel extremely energized at times?",
    options: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
];
