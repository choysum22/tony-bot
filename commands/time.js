const { SlashCommandBuilder } = require('@discordjs/builders');

function getTime() {
    // get current time and add 30 minutes
    const now = new Date();
    const later = new Date(now.getTime() + 30 * 60000);
    // return time in format: 'hh:mm'
    return later.toLocaleTimeString('en-US', { hour12: false, hour: 'numeric', minute: 'numeric' });

}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('time')
		.setDescription('get current time in Tony timezone (GMT+8.5)'),
	async execute(interaction) {
		await interaction.reply(getTime() + ' (GMT+8.5)');
	},
};