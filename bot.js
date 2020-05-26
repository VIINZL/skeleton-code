require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client();
const prefix = '!';

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === 'stats') {
		return message.channel.send(`Server count: ${client.guilds.cache.size}`);
	}
});

client.login(process.env.TOKEN);
