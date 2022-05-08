const { SlashCommandBuilder } = require('@discordjs/builders');

// require firebase app
const {App} = require('../firebase/init')
const { getDatabase, child, ref, set, update, get } = require("firebase/database");

var stealPlayCount = 0;

function getStealPlayCount()  {
	const db = getDatabase();
	const dbRef = ref(db);

	get(child(dbRef, 'stealplay/count')).then((snapshot) => {
		if (snapshot.exists()) {
			stealPlayCount = snapshot.val() + 1;
			console.log(`Tony's steal play count is ${stealPlayCount}`);
			set(child(dbRef, 'stealplay/count'), stealPlayCount);
			return stealPlayCount;
		} else {
			stealPlayCount = 0;
			console.log(`No data found.`);
		}
	}).catch((error) => {
		console.log(`Error getting data: ${error}`);
	});



	return stealPlayCount+1;
}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stealplay')
		.setDescription('Steal play tony steal play again.'),
	async execute(interaction) {
		await interaction.reply('<@322975387640528896> 偷玩左' + getStealPlayCount() + '次');
	},
};