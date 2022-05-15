const { SlashCommandBuilder } = require("@discordjs/builders");

// require firebase app
const { App } = require("../firebase/init");
const { getDatabase, child, ref, set, update, get } = require("firebase/database");

var stealPlayCount = 0;
var stealPlayMessage = "屌你老母又偷玩";

function getStealPlayCount() {
  const db = getDatabase();
  const dbRef = ref(db);

  get(child(dbRef, "stealplay/count"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        stealPlayCount = snapshot.val() + 1;
        console.log(`Tony's steal play count is ${stealPlayCount}`);
        set(child(dbRef, "stealplay/count"), stealPlayCount);
        stealPlayMessage = `<@322975387640528896> 偷玩左 ${stealPlayCount + 1} 次`;
      } else {
        stealPlayMessage = "?????";
        console.log(`No data found.`);
      }
    })
    .catch((error) => {
      console.log(`Error getting data: ${error}`);
    });

  return stealPlayMessage;
}

module.exports = {
  data: new SlashCommandBuilder().setName("stealplay").setDescription("Steal play tony steal play again."),
  async execute(interaction) {
    await interaction.reply(getStealPlayCount() + "");
  },
};
