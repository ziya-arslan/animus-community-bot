const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("surprise")
    .setDescription("Surprise!"),
  async execute(interaction) {
    // response with video
    await interaction.reply("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  },
};
