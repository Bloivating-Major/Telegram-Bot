const { Telegraf } = require('telegraf')
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN)

try {
    bot.start((ctx) => ctx.reply("Welcome to Sambhav\'s Test Object Bot"));

    bot.command('oldschool', (ctx) => ctx.reply('Hello'))
    bot.command('binary', (ctx) => ctx.reply('This is Binary'))
    
    bot.launch();
} catch (error) {
    console.log("error");
}

