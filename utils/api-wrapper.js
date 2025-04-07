/**
 * API request wrapper with error handling
 */

/**
 * Wraps an API handler with error handling
 */
function withErrorHandling(handler) {
  return async (req, res) => {
    try {
      return await handler(req, res);
    } catch (error) {
      console.error('API Error:', error);
      return res.status(500).json({
        error: process.env.NODE_ENV === 'production' ? 'Server error' : error.message,
        success: false
      });
    }
  };
}

/**
 * Simple retry function
 */
async function withRetry(fn, maxRetries = 3) {
  let lastError;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      console.error(`Attempt ${attempt + 1}/${maxRetries} failed:`, error.message);
      
      if (attempt < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, 300 * Math.pow(2, attempt)));
      }
    }
  }
  
  throw lastError;
}

// Export functions
module.exports = { withErrorHandling, withRetry };
exports.withErrorHandling = withErrorHandling;
exports.withRetry = withRetry;
