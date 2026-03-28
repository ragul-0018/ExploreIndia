const GEMINI_TTS_MODEL = "gemini-2.5-flash-preview-tts";

const getServerApiKey = () =>
  process.env.GEMINI_API_KEY ||
  process.env.API_KEY ||
  process.env.GOOGLE_API_KEY ||
  process.env.GOOGLE_GENERATIVE_AI_API_KEY ||
  process.env.VITE_GEMINI_API_KEY;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = getServerApiKey();

  if (!apiKey) {
    return res.status(500).json({
      error:
        "Missing API key on server. Set GEMINI_API_KEY or GOOGLE_API_KEY in Vercel environment variables.",
    });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_TTS_MODEL}:generateContent?key=${encodeURIComponent(apiKey)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body ?? {}),
      },
    );

    const contentType =
      response.headers.get("content-type") || "application/json";
    const bodyText = await response.text();

    res.setHeader("Content-Type", contentType);
    return res.status(response.status).send(bodyText);
  } catch (error) {
    return res.status(502).json({
      error: "Failed to reach Gemini TTS API",
      detail: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
