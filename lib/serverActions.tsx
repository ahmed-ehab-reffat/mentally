"use server";

import { anthropic, FALLBACK_OPTIONS, MODEL } from "@/lib/anthropic";

export type Message = {
  role: string;
  content: string;
};

export async function fetchAI(
  systemMessage: Message,
  userMessage: Message
): Promise<string> {
  const response = await anthropic.beta.messages.create({
    ...FALLBACK_OPTIONS,
    model: MODEL,
    max_tokens: 16000,
    system: systemMessage.content,
    messages: [{ role: "user", content: userMessage.content }],
  });

  if (response.stop_reason === "refusal") {
    throw new Error("The AI declined to answer this request.");
  }

  const aiResponse: string = response.content
    .flatMap((block) => (block.type === "text" ? [block.text] : []))
    .join("");
  return aiResponse;
}
