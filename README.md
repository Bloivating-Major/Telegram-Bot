# Telegram Bot

A simple Telegram bot built with Node.js and Telegraf framework.

## Features

- `/start` - Welcome message
- `/oldschool` - Responds with "Hello"
- `/binary` - Responds with "This is Binary"

## Prerequisites

- Node.js (v12 or higher)
- Telegram Bot Token (from [@BotFather](https://t.me/BotFather))

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd telegram-bot
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your bot token:
```
BOT_TOKEN=your_telegram_bot_token_here
```

## Usage

To run in development mode with auto-reload:
```bash
npm run dev
```

To run in production:
```bash
node server.js
```

## Project Structure

```
telegram-bot/
├── server.js        # Main bot logic
├── .env             # Environment variables (not tracked in git)
├── .gitignore       # Git ignore rules
└── package.json     # Project dependencies and scripts
```

## Dependencies

- [telegraf](https://www.npmjs.com/package/telegraf) - Modern Telegram Bot Framework
- [dotenv](https://www.npmjs.com/package/dotenv) - Environment variables loader

## License

ISC