// build dddb78dd77
// (bot) 611d2d
import { Client, GatewayIntentBits } from 'discord.js';
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.once('ready', () => console.log('ready'));
client.login(process.env.DISCORD_TOKEN);
