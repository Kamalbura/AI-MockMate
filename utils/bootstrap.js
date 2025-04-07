import { validateEnv } from './env-validation';

/**
 * Initialize the application
 */
export function initializeApp() {
  // Validate environment variables
  const envValid = validateEnv();
  if (!envValid) {
    console.warn('Application may not function correctly due to missing environment variables');
  }
  return envValid;
}

/**
 * Simple API error handler
 */
export function apiErrorHandler(err, res) {
  console.error('API Error:', err);
  return res.status(500).json({
    error: process.env.NODE_ENV === 'production' ? 'Server error' : err.message,
    success: false,
  });
}
