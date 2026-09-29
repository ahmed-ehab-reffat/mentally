import Anthropic from "@anthropic-ai/sdk";
import { isTextUIPart, type UIMessage } from "ai";

import { anthropic, FALLBACK_OPTIONS, MODEL } from "@/lib/anthropic";

export async function POST(req: Request) {
  try {
    if (!req.body) {
      return new Response("Request body is required", { status: 400 });
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return new Response("Anthropic API key not configured", { status: 500 });
    }

    const { messages } = (await req.json()) as { messages?: UIMessage[] };

    if (!messages || !Array.isArray(messages)) {
      return new Response("Messages must be an array", { status: 400 });
    }

    const history: Anthropic.Beta.BetaMessageParam[] = messages
      .filter((m) => m.role === "user" || m.role === "assistant")
      .map((m) => ({
        role: m.role as "user" | "assistant",
        content: m.parts
          .filter(isTextUIPart)
          .map((p) => p.text)
          .join(""),
      }))
      .filter((m) => m.content);

    // The conversation must start with a user turn, so drop the greeting.
    while (history[0]?.role === "assistant") history.shift();

    const stream = anthropic.beta.messages.stream({
      ...FALLBACK_OPTIONS,
      model: MODEL,
      max_tokens: 16000,
      output_config: { effort: "low" },
      system:
        "You are a helpful mental health assistant. Provide supportive and empathetic responses, but always encourage users to seek professional help for serious concerns.",
      messages: history,
    });

    // Wait for the API to accept the request so errors (bad key, no credits,
    // rate limits) are returned as a normal error response, not a broken stream.
    await stream.withResponse();

    const encoder = new TextEncoder();
    const body = new ReadableStream<Uint8Array>({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }
          controller.close();
        } catch (error) {
          controller.error(error);
        }
      },
      cancel() {
        stream.abort();
      },
    });

    return new Response(body, {
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    });
  } catch (error) {
    console.error("Chat request failed:", error);
    return new Response(
      `Error processing chat request: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        status: error instanceof Anthropic.APIError ? error.status ?? 500 : 500,
      }
    );
  }
}
