const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai");

// Get API key from environment
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

// Initialize AI client
const genAI = new GoogleGenerativeAI(apiKey || 'dummy-key-for-dev-only');
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Default configuration
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

// Safety settings
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
];

// Create chat session with error handling
const createChatSession = () => {
  try {
    return model.startChat({ generationConfig, safetySettings });
  } catch (error) {
    console.error("Failed to create chat session:", error);
    return {
      sendMessage: async () => ({
        response: { text: () => "API Error: Check your Gemini API key" }
      })
    };
  }
};

// Export functions
const chatSession = createChatSession();
module.exports = { chatSession };
exports.chatSession = chatSession;