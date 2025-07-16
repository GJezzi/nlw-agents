import { defineConfig } from 'drizzle-kit';
import { _env } from './src/env.ts';

export default defineConfig({
  dialect: 'postgresql',
  casing: 'snake_case',
  schema: './src/db/schema/**.ts',
  out: './src/db/migrations',
  dbCredentials: {
    url: _env.DATABASE_URL,
  },
});
