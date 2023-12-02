# Telegram AI Chat Bot
This project is a Telegram bot that uses the Cloudflare Workers AI model '@cf/meta/llama-2-7b-chat-int8' to generate AI responses to user messages. The bot listens for messages, and when it receives a message, it sends a request to the Cloudflare Workers AI API with the message text as a prompt. The AI model generates a response, which is then sent back to the user.

# Requirements
  - Node.js
  - Telegram Bot API token
  - Cloudflare API token

# Installation
  1. Replace {YOUR_TELEGRAM_TOKEN} and {YOUR_CLOUDFLARE_TOKEN} in the code with your actual Telegram Bot API token and Cloudflare API token, respectively.
  2. Replace {YOUR_ACCOUNT_ID} in the URL with your actual Cloudflare account ID.
     
# Usage
  1. Run the bot:
     ```
     node index.js
     ```
  2. Send a message to the bot on Telegram. The bot will generate an AI response to the message and send it back to you.

# Note

This bot uses the Cloudflare Workers AI model '@cf/meta/llama-2-7b-chat-int8' for generating AI responses. The quality of the responses may vary depending on the complexity of the input and the specific capabilities of the AI model.
  
