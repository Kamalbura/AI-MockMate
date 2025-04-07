#!/usr/bin/env node

// Use dynamic import for ESM compatibility
async function main() {
  try {
    // Try to import ES modules
    const { validateEnv, logOptionalEnvDefaults } = await import('../utils/env-validation.js');
    
    // Run validation
    console.log('🔍 Validating environment setup...');
    const envValid = validateEnv();

    if (!envValid) {
      console.error('❌ Environment validation failed. Please check your .env.local file.');
      process.exit(1);
    }

    // Log defaults
    logOptionalEnvDefaults();

    console.log('✅ Environment validation passed!');
    console.log('🚀 Ready to start the application. Run `npm run dev` to begin.');
  } catch (error) {
    // Fallback to CommonJS require if dynamic import fails
    try {
      const { validateEnv, logOptionalEnvDefaults } = require('../utils/env-validation');
      
      // Run validation
      console.log('🔍 Validating environment setup...');
      const envValid = validateEnv();

      if (!envValid) {
        console.error('❌ Environment validation failed. Please check your .env.local file.');
        process.exit(1);
      }

      // Log defaults
      logOptionalEnvDefaults();

      console.log('✅ Environment validation passed!');
      console.log('🚀 Ready to start the application. Run `npm run dev` to begin.');
    } catch (reqError) {
      console.error('Failed to import validation utilities:', error);
      console.error('Require fallback also failed:', reqError);
      process.exit(1);
    }
  }
}

main();
