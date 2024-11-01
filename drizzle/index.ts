import { drizzle } from "drizzle-orm/node-postgres";
import { Client, Pool } from "pg";
import * as schema from "./schema/schema";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const db = drizzle(pool, { schema });

async function queryDatabase(query: string, params?: any[]) {
    const client = await pool.connect(); // Get a client from the pool
    try {
        const res = await client.query(query, params);
        return res;
    } finally {
        client.release(); // Always release the client back to the pool
    }
}

export { db, queryDatabase };
