import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

// Check if the environment variable exists
const connectionString = process.env.NEXT_PUBLIC_DRIZZLE_DB_URL || '';

if (!connectionString || connectionString === 'your_neondb_connection_string') {
  console.error('⚠️ Invalid database connection string! Check your .env.local file');
  // In development, continue with a clear warning. In production, this would be more serious
  if (process.env.NODE_ENV === 'production') {
    throw new Error('Database connection string is required in production');
  }
}

const sql = neon(connectionString);
export const db = drizzle(sql, { schema });