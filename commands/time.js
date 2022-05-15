const { SlashCommandBuilder } = require("@discordjs/builders");
var moment = require("moment-timezone");

function getTime() {
  // get current time and add 30 minutes
  const now = new Date();
  const later = new Date(now.getTime() + 30 * 60000);
  const tonytime = moment.tz(later, "Asia/Hong_Kong").format("HH:mm");
  // return time in format: 'hh:mm'
  return tonytime;
}

module.exports = {
  data: new SlashCommandBuilder().setName("time").setDescription("get current time in Tony timezone (GMT+8.5)"),
  async execute(interaction) {
    await interaction.reply("It is now " + getTime() + " (GMT+8.5) in Tony timezone");
  },
};
