const {
  SlashCommandBuilder,
  Guild,
  GuildMemberManager,
} = require("discord.js");
const { request } = require("undici");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("idea")
    .setDescription("Generates project Idea")
    .addStringOption((option) =>
      option
        .setName("level")
        .setDescription("Choose your level")
        .setRequired(true)
        .addChoices(
          { name: "Junior", value: "junior" },
          { name: "Mid", value: "mid" },
          { name: "Senior", value: "senior" }
        )
    )
    .addStringOption((option) =>
      option
        .setName("specialization")
        .setDescription("Choose your type")
        .setRequired(true)
        .addChoices(
          { name: "Frontend", value: "frontend" },
          { name: "Backend", value: "backend" },
          { name: "Fullstack", value: "fullstack" },
          { name: "DevOps", value: "devops" },
          { name: "Mobile", value: "mobile" },
          { name: "Game", value: "game" },
          { name: "ML", value: "ml" },
          { name: "AI", value: "ai" },
          { name: "Cloud", value: "cloud" },
          { name: "Data Science", value: "datascience" }
        )
    ),
  async execute(interaction) {
    const level = interaction.options.getString("level");
    const specialization = interaction.options.getString("specialization");
    const ideaResult = await fetch(
      `https://idea-creator-api.herokuapp.com/idea?level=${level}&specialization=${specialization}`
    ).then((response) => response.json());
    await interaction.reply(level, specialization);
  },
};
