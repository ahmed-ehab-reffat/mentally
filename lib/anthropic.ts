import Anthropic from "@anthropic-ai/sdk";

// Reads ANTHROPIC_API_KEY from the environment.
export const anthropic = new Anthropic();

export const MODEL = "claude-opus-5-5";

// If Claude's safety classifiers decline a request, the API automatically
// retries it on a fallback model within the same call.
export const FALLBACK_OPTIONS: Pick<
  Anthropic.Beta.MessageCreateParams,
  "betas" | "fallbacks"
> = {
  betas: ["server-side-fallback-2026-07-01"],
  fallbacks: "default",
};
