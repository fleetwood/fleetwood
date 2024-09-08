import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { db } from '.';

await migrate(db, { migrationsFolder: './drizzle/migrations' });


