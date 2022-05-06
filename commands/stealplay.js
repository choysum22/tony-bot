const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stealplay')
		.setDescription('Steal play tony steal play again.'),
	async execute(interaction) {
		await interaction.reply('又 <@322975387640528896>');
	},
};