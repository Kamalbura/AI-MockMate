/**
 * Environment variable validation utility
 */

// Core required environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_GEMINI_API_KEY',
  'NEXT_PUBLIC_DRIZZLE_DB_URL',
];

// Simple validation function
function validateEnv() {
  const missing = requiredEnvVars.filter(envVar => !process.env[envVar]);
  
  if (missing.length > 0) {
    console.error(`Missing environment variables: ${missing.join(', ')}`);
    return false;
  }
  
  return true;
}

// Simple getter with fallback
function getEnv(name, fallback = '') {
  return process.env[name] || fallback;
}

// Export functions
module.exports = { validateEnv, getEnv };
exports.validateEnv = validateEnv;
exports.getEnv = getEnv;
