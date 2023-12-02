const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const telegramToken = '6610438736:AAFNPlGGY_SfuINu3dXThuyMFSOkoy1BpAg';
const cloudflareToken = 'NB-sxyNA3JSyhezy2fUnTnXc3Pf7i8X17BJfBwLx';

const bot = new TelegramBot(telegramToken, {polling: true});

console.log('Loaded success..')

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const userMessage = msg.text;

  axios.post('https://api.cloudflare.com/client/v4/accounts/d888e02cee618e93b19cd9e7717da715/ai/run/@cf/meta/llama-2-7b-chat-int8', {
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