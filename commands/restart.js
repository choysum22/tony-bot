const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('restart')
		.setDescription('restart the bot'),
	async execute() {
		await process.exit();
	},
};
