// src/bot.js
import TelegramBot from 'node-telegram-bot-api';

// Replace with your Telegram Bot Token
const token = '7908620487:AAF4g43C8WDQ_MPr2Eo9Dg2XYusyQbvMS6U';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Listen for any kind of message. There are different kinds of messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Echo the received message
  bot.sendMessage(chatId, `You said: ${text}`);
});
