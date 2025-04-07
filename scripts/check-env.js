#!/usr/bin/env node

// Load environment variables from .env.local for testing
require('dotenv').config({ path: '.env.local' });

// List of required environment variables
const requiredEnvVars = [
  'NEXT_PUBLIC_GEMINI_API_KEY',
  'NEXT_PUBLIC_DRIZZLE_DB_URL',
];

// Optional environment variables with defaults
const optionalEnvVars = {
  'NEXT_PUBLIC_QUESTION_NOTE': 'Answer the question clearly.',
  'NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT': '5',
  'NEXT_PUBLIC_INFORMATION': 'This is a mock interview simulation.',
};

console.log('\n🔍 Checking environment variables...\n');

// Check required vars
let missingVars = false;
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    console.error(`❌ Missing required environment variable: ${envVar}`);
    missingVars = true;
  } else {
    const value = process.env[envVar];
    const maskedValue = value.length > 8 
      ? `${value.substring(0, 4)}...${value.substring(value.length - 4)}`
      : '********';
    console.log(`✅ ${envVar}: ${maskedValue}`);
  }
}

// Check optional vars
console.log('\n📝 Optional environment variables:');
for (const [envVar, defaultValue] of Object.entries(optionalEnvVars)) {
  if (!process.env[envVar]) {
    console.log(`ℹ️ ${envVar} not set, will use default: "${defaultValue}"`);
  } else {
    console.log(`✅ ${envVar} is set`);
  }
}

if (missingVars) {
  console.error('\n❌ Some required environment variables are missing. Please check your .env.local file.');
  process.exit(1);
} else {
  console.log('\n✅ All required environment variables are set!\n');
}
