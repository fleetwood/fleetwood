import { defineConfig } from 'drizzle-kit';

const dbCredentials = {
  host    : process.env.DB_HOST as string,
  port    : Number(process.env.DB_PORT),
  user    : process.env.DB_USER as string,
  password: process.env.XATA_API_KEY as string,
  database: process.env.DB_NAME as string,
  ssl     : process.env.DB_SSL === 'true',
}

export default defineConfig({
  schema : './drizzle/schema/schema.ts',
  out    : './drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials,
});