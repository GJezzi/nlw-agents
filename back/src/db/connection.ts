import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { _env } from '../env.ts';
import { schema } from './schema/index.ts';

export const sql = postgres(_env.DATABASE_URL);
export const db = drizzle(sql, {
  schema,
  casing: 'snake_case',
});
