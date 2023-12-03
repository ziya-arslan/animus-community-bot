const {
  SlashCommandBuilder,
  Guild,
  GuildMemberManager,
} = require("discord.js");
const { request } = require("undici");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("cat")
    .setDescription("Generate a random cat image"),
  async execute(interaction) {
    // dm mentioned user if not mentioned user is the user who ran the command

    const catResult = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME"
    ).then((response) => response.json());
    // random number between 0 and 9
    const random = Math.floor(Math.random() * 10);
    // replay with image from catResult[random].url
    await interaction.reply(catResult[random].url);
  },
};
