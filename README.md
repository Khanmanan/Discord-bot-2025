# My Advanced Discord Bot

This is an advanced Discord bot framework built with JavaScript. It includes:

- Command handler framework
- Event handler system
- Support for slash commands and buttons
- Integration with MongoDB
- Configurable logging system

## Installation

1. Clone the repository:
```bash
git clone https://github.com/khanmanan/my-discord-bot-2025.git
```

2. Navigate into the project directory:
```bash
cd my-discord-bot-package
```

3. Install dependencies:
```bash
npm install
```

4. Set up your environment variables in `.env` file:
```
TOKEN=your-bot-token-here
MONGODB_URI=your-mongodb-uri-here
```

## Usage

To start the bot, run:
```bash
npm start
```

## Folder Structure

- **src**: Contains all source code.
  - **handlers**: Handles commands and events.
  - **commands**: Stores individual command files.
  - **events**: Stores individual event files.
  - **utils**: Utility modules such as database connection and logger.
- **.env**: Stores environment variables.
- **package.json**: Configuration file with dependencies and scripts.

## License

MIT License