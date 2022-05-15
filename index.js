// .env values
require("dotenv").config();

// Require the necessary discord.js classes
const fs = require("node:fs");
const { Client, Collection, Intents } = require("discord.js");
// const { token } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const eventFiles = fs.readdirSync("./events").filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.commands = new Collection();
const commandFiles = fs.readdirSync("./commands").filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  // Set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

// uid for listen messages
const tonyUID = "322975387640528896";

// GIGACHAD word list
const ChadWords = ["chad", "gigachad", "CHAD", "GIGACHAD", "Chad", "Gigachad", "GAYGACHAD", "GAYCHAD", "GAYGIGACHAD", "giga", "GIGA"];

// W H OMEGALUL word list
const WHOMEGALUL = ["who", "WHO", "Who", "wHo", "whO"];

// KappaPride word list
const KappaPrideWords = ["含", "gay", "含撚", "GAY", "TONY", "tony", "fatman", "hugo", "東尼", "屎忽", "屎fuck", "屎眼", "屎eye", "Gay"];

// GIGACHAD message
let gigachad = "https://i.kym-cdn.com/photos/images/original/002/052/349/20d.gif";

client.on("messageCreate", (message) => {
  if (message.author.bot) return false; // If the message was sent by a bot, return false

  console.log(message.content);

  if (message.author.id == tonyUID) {
    message.reply("<:Teenytinytony:971700871274573854>");
    return false; // If the message was sent by the tony, return false
  }

  // check for GIGACHADWord
  for (let i = 0; i < ChadWords.length; i++) {
    if (message.content.includes(ChadWords[i])) {
      message.channel.send(gigachad);
      break;
    }
  }

  // check for W H OMEGALUL
  for (let i = 0; i < WHOMEGALUL.length; i++) {
    if (message.content.includes(WHOMEGALUL[i])) {
      message.react("🇼"); // "W"
      message.react("🇭"); // "H"
      message.react("<:OMEGALUL:836985396352647178>"); // "OMEGALUL"
      break;
    }
  }

  // check for kappaPrideWord
  for (let i = 0; i < KappaPrideWords.length; i++) {
    if (message.content.includes(KappaPrideWords[i])) {
      message.react("🇬"); // "G"
      message.react("🇦"); // "A"
      message.react("🇾"); // "Y"
      break;
    }
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: "There was an error while executing this command!", ephemeral: true });
  }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
