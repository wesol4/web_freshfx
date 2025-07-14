# Chatbot Setup Instructions

## Getting Started

1. **Get a Gemini API Key**:
   - Go to [Google AI Studio](https://aistudio.google.com/)
   - Create an account if you don't have one
   - Generate an API key

2. **Configure the API Key** (choose one method):

   ### Method 1: Environment Variable (Recommended for production)
   - Create a `.env` file in the project root (if not already created)
   - Add your API key: `API_KEY=your_gemini_api_key_here`
   - Restart your development server

   ### Method 2: Direct in Code (For quick testing only)
   - Open `components/Chatbot.tsx`
   - Replace `YOUR_API_KEY_HERE` with your actual Gemini API key

## Important Security Notes

- Never commit API keys to public repositories
- For production, consider implementing a backend proxy service instead of using the API key directly in frontend code
- The `.env` file should be added to your `.gitignore` to prevent accidental commits

## Troubleshooting

If the chatbot isn't working:

1. Check browser console for errors
2. Verify your API key is correctly set
3. Ensure you have internet connection (required for API calls)
4. Confirm you're using a supported Gemini model (currently using 'gemini-2.5-flash')

## Customization

You can customize the chatbot's behavior by modifying the system instructions in the `Chatbot.tsx` file. The current setup makes the bot knowledgeable about your portfolio information from the constants file.
