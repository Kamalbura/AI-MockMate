// Central environment configuration
const ENV_VARS = {
  // API Keys
  GEMINI_API_KEY: process.env.NEXT_PUBLIC_GEMINI_API_KEY,
  CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
  
  // Database
  DB_URL: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
  
  // Application Settings
  QUESTION_NOTE: process.env.NEXT_PUBLIC_QUESTION_NOTE || 'Answer the question clearly.',
  INTERVIEW_QUESTION_COUNT: parseInt(process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT || '5', 10),
  INFORMATION: process.env.NEXT_PUBLIC_INFORMATION || 'This is a mock interview simulation.',
  
  // Environment
  NODE_ENV: process.env.NODE_ENV || 'development',
  IS_PRODUCTION: process.env.NODE_ENV === 'production',
  IS_DEVELOPMENT: process.env.NODE_ENV === 'development' || !process.env.NODE_ENV,
  IS_TEST: process.env.NODE_ENV === 'test'
};

// Properly typed getter
function getVar(key) {
  return ENV_VARS[key];
}

// Export both CommonJS and ESM
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ENV_VARS, getVar };
}

export { ENV_VARS, getVar };
