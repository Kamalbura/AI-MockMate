#!/usr/bin/env node

/**
 * This script checks the integrity of the codebase
 * - Checks for module system consistency
 * - Verifies environment variables
 * - Tests critical functions
 */

console.log('🔍 Checking codebase integrity...');

async function checkModules() {
  console.log('\n📦 Checking module compatibility...');
  
  try {
    // Test CommonJS imports
    console.log('Testing CommonJS imports...');
    const envValidation = require('../utils/env-validation');
    console.log('✅ utils/env-validation.js can be imported with CommonJS');
    
    // Check these modules exist but don't need to use their contents directly
    require('../utils/GeminiAI');
    console.log('✅ utils/GeminiAI.js can be imported with CommonJS');
    
    require('../utils/schema');
    console.log('✅ utils/schema.js can be imported with CommonJS');
    
    // Test runtime function calls
    console.log('\n🧪 Testing exported functions...');
    envValidation.validateEnv();
    console.log('✅ validateEnv() executed successfully');
    
    const value = envValidation.getEnv('TEST_VAR', 'default-value');
    if (value === 'default-value') {
      console.log('✅ getEnv() works with default values');
    }
    
    console.log('\n✅ Module system checks passed!');
  } catch (error) {
    console.error('❌ Module system check failed:', error);
    process.exit(1);
  }
}

async function main() {
  try {
    await checkModules();
    
    console.log('\n🎉 All integrity checks passed!');
  } catch (error) {
    console.error('\n❌ Integrity check failed:', error);
    process.exit(1);
  }
}

main();
