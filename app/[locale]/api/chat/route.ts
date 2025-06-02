"use server";

import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export async function POST(req: Request) {
  try {
    if (!req.body) {
      return new Response("Request body is required", { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return new Response("OpenAI API key not configured", { status: 500 });
    }

    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return new Response("Messages must be an array", { status: 400 });
    }

    const result = streamText({
      model: openai("gpt-4o-mini"),
      system:
        "You are a helpful mental health assistant. Provide supportive and empathetic responses, but always encourage users to seek professional help for serious concerns.",
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error) {
    return new Response(
      `Error processing chat request: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        status: 500,
      }
    );
  }
}
