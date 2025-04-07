import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import * as schema from './schema';

// Create database connection
function createDbConnection() {
  try {
    const dbUrl = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL;
    const sql = neon(dbUrl);
    return drizzle(sql, { schema });
  } catch (error) {
    console.error('Database connection error:', error);
    return null;
  }
}

// Export database client
export const db = createDbConnection();
