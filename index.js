require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const commandHandler = require('./handlers/commandHandler');
const eventHandler = require('./handlers/eventHandler');
const dbConnect = require('./utils/db');
const logger = require('./utils/logger');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Load Handlers
commandHandler(client);
eventHandler(client);

// Connect to Database
dbConnect().then(() => logger.info('Database connected!'));

// Log in to Discord
client.login(process.env.TOKEN).then(() => logger.info('Bot logged in successfully!')).catch(logger.error);