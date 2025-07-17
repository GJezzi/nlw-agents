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

export async function generateAnswer(
  question: string,
  transcriptions: string[]
) {
  const context = transcriptions.join('\n\n');

  const prompt =
    `Answer the following question based on the context provided. Be concise and precise in your answer. Answer in Brazilian Portuguese. 
    
    CONTEXTO: ${context}
    
    PERGUNTA: ${question}

    INSTRUÇÕES:
    - Use the context to answer the question.
    - Be concise and precise.
    - In case the answer is not found in the context, respond with "Desculpe, não possuo informações suficientes para responder."
    - Keep it educative and profissional.
    - Quote the context in your answer if necessary.
    - Do not include any additional information or explanations.
    `.trim();

  const response = await gemini.models.generateContent({
    model,
    contents: [
      {
        text: prompt,
      },
    ],
  });

  if (!response.text) {
    throw new Error('Failed to generate answer');
  }
  return response.text;
}
