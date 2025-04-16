export type Result = {
  summary: string;
  details: string[];
  recommendations: string[];
};

export default function parseAIResponse(response: string): Result {
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
  recommendations.filter((r: string) => r.trim().length > 0);

  return {
    summary,
    details,
    recommendations,
  };
}
