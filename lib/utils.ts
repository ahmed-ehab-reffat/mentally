"use server";

export type Message = {
  role: string;
  content: string;
};

export async function fetchAI(
  systemMessage: Message,
  userMessage: Message
): Promise<string> {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [systemMessage, userMessage],
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(JSON.stringify(errorData));
  }

  const data = await response.json();
  const aiResponse: string = data.choices[0].message.content;
  return aiResponse;
}
