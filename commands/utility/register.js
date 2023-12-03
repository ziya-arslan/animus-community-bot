const {
  SlashCommandBuilder,
  Guild,
  GuildMemberManager,
} = require("discord.js");
const { request } = require("undici");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("register")
    .setDescription("Register your account to the database")
    .addStringOption((option) =>
      option.setName("input").setDescription("Test")
    ),
  async execute(interaction) {
    const input = interaction.options.getString("input");
    await interaction.reply(input);
  },
};
