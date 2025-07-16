import { GoogleGenAI } from '@google/genai';
import { _env } from '../env.ts';

const gemini = new GoogleGenAI({
  apiKey: _env.GOOGLE_GENAI_API_KEY,
});

const model = 'gemini-2.5-flash';

export async function transcribeAudio(audioAsBase64: string, mimeType: string) {
  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: 'Transcribe the following audio in Brazilian Portuguese. Be precise and concise in the transcription. Keep the adequate punctuation and divide it into paragraphs if necessary.',
      },
      {
        inlineData: {
          mimeType,
          data: audioAsBase64,
        },
      },
    ],
  });

  if (!response.text) {
    throw new Error('Failed to transcribe audio');
  }
  return response.text;
}

export async function generateEmbeddings(text: string) {
  const response = await gemini.models.embedContent({
    model: 'text-embedding-004',
    contents: [
      {
        text,
      },
    ],
    config: {
      taskType: 'RETRIEVAL_DOCUMENT',
    },
  });

  if (!response.embeddings?.[0].values) {
    throw new Error('Failed to generate embeddings');
  }
  return response.embeddings[0].values;
}
