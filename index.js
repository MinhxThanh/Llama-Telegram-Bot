const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const telegramToken = '{YOUR_TELEGRAM_TOKEN}';
const cloudflareToken = '{YOUR_CLOUDFLARE_TOKEN}';

const bot = new TelegramBot(telegramToken, {polling: true});

console.log('Loaded success..')

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const userMessage = msg.text;

  axios.post('https://api.cloudflare.com/client/v4/accounts/{YOUR_ACCOUNT_ID}/ai/run/@cf/meta/llama-2-7b-chat-int8', {
    prompt: userMessage
  }, {
    headers: {
      'Authorization': `Bearer ${cloudflareToken}`
    }
  }).then(response => {
    const aiResponse = response.data.result.response;
    bot.sendMessage(chatId, aiResponse);
  }).catch(error => {
    console.error(error);
  });
});
