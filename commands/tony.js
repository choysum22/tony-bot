const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder().setName("tony").setDescription("Check for Tony's JJ length."),
  async execute(interaction) {
    await interaction.reply(getJJLengthMessage());
  },
};

function getJJLengthMessage() {
  var length = getRandomArbitrary(0, 6);
  var jj = "8";

  for (var i = 1; i < length; i++) {
    jj += "=";
  }

  jj += "D";

  if (length > 5) {
    return "WOW! <@322975387640528896> 條J有" + length + "cm <:GIGACHAD:960271909117902888> " + jj;
  }

  return "<@322975387640528896> 條J有" + length + "cm <:Teenytinytony:971700871274573854> " + jj;
}

function getRandomArbitrary(min, max) {
  return Math.round((Math.random() * (max - min) + min) * 100) / 100;
}
