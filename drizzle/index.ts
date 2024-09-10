import { drizzle } from "drizzle-orm/node-postgres";
import { Client, Pool } from "pg";
import * as schema from "./schema/schema";

// Create a connection pool
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const db = drizzle(pool, { schema });

// You can create a function to handle queries
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
