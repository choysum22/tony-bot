const { SlashCommandBuilder } = require('@discordjs/builders');

function toss() {
    return Math.floor(Math.random() * 2) === 0? '再' : '不了';
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('onemore')
		.setDescription('go again?'),
	async execute(interaction) {
		await interaction.reply(toss());
	},
};