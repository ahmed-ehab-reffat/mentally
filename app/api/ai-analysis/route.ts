"use server";
//req: Request, res: Response
export default async function handler() {
  // if (req.method !== "POST") {
  //   return res.status(405).end();
  // }

  // const { dataToSend } = req.body;

  // const apiKey = process.env.OPENAI_API_KEY;

  // if (!apiKey) {
  //   return res.status(500).json({ error: "API key not configured" });
  // }

  return { message: "Test API route working!" };

  // try {
  //   const externalApiResponse = await fetch(
  //     "https://api.openai.com/v1/chat/completions",
  //     {
  //       method: "POST",
  //       headers: {
  //         Authorization: `Bearer ${apiKey}`,
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(dataToSend),
  //     }
  //   );

  //   if (!externalApiResponse.ok) {
  //     throw new Error(
  //       `External API request failed: ${externalApiResponse.status}`
  //     );
  //   }

  //   const externalApiData = await externalApiResponse.json();

  //   res.status(200).json(externalApiData);
  // } catch (error) {
  //   console.error("Error:", error);
  //   res.status(500).json({ error: "Internal Server Error" });
  // }
}
