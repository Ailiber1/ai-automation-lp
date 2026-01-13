
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function editImageWithGemini(
  base64ImageData: string,
  mimeType: string,
  prompt: string
): Promise<string | null> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64ImageData.split(',')[1] || base64ImageData,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content.parts || []) {
      if (part.inlineData) {
        return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Gemini API Error (Image):", error);
    throw error;
  }
}

export async function getConciergeResponse(userInput: string, packageList: string): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `あなたはAI業務自動化パッケージの案内役です。
以下のパッケージリストから、ユーザーの悩みに最適なものを1〜2つ提案してください。
回答は簡潔に、親しみやすく丁寧なビジネス口調で行ってください。

【パッケージリスト】
${packageList}

【ユーザーの悩み】
${userInput}`,
      config: {
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });

    return response.text || "申し訳ありません。回答を生成できませんでした。";
  } catch (error) {
    console.error("Gemini API Error (Chat):", error);
    return "現在コンシェルジュが混み合っております。パッケージ一覧から詳細をご確認ください。";
  }
}
