import { z } from 'zod';

const envSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string().url().startsWith('postgresql://'),
  GOOGLE_GENAI_API_KEY: z.string(),
});

export const _env = envSchema.parse(process.env);
